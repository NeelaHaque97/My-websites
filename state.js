/**
 * THE PICK: KAGOJ — STATE MANAGEMENT
 * Safely persists user preferences and journey progress in localStorage.
 * Every access is wrapped in try/catch to gracefully handle private/restricted browsing.
 */

(function () {
  const STORAGE_KEY = "kagoj_citizen_state_v1";

  const defaultState = {
    lang: "en", // 'en' or 'bn'
    theme: "light", // 'light' or 'dark'
    lowBandwidth: false,
    savedJourneys: [
      // Seed an initial saved journey for instant richness
      {
        serviceId: "e-passport",
        savedAt: new Date().toISOString(),
        checkedDocs: ["doc-nid-brc", "doc-app-summary"],
        completedSteps: [1]
      }
    ],
    feedbackList: []
  };

  function loadState() {
    try {
      const serialized = localStorage.getItem(STORAGE_KEY);
      let parsed = serialized ? JSON.parse(serialized) : {};
      const state = { ...defaultState, ...parsed };

      // Allow URL parameters to override state (handy for deep links, testing & previews)
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("lang")) {
        const l = urlParams.get("lang");
        if (l === "bn" || l === "en") state.lang = l;
      }
      if (urlParams.has("theme")) {
        const th = urlParams.get("theme");
        if (th === "dark" || th === "light") state.theme = th;
      }
      if (urlParams.has("low")) {
        state.lowBandwidth = urlParams.get("low") === "1" || urlParams.get("low") === "true";
      }

      return state;
    } catch (e) {
      console.warn("[Kagoj] Unable to read localStorage:", e);
      return { ...defaultState };
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("[Kagoj] Unable to save to localStorage:", e);
    }
  }

  let currentState = loadState();
  const listeners = [];

  window.KagojState = {
    get: function () {
      return currentState;
    },

    subscribe: function (listener) {
      listeners.push(listener);
      return function unsubscribe() {
        const idx = listeners.indexOf(listener);
        if (idx !== -1) listeners.splice(idx, 1);
      };
    },

    notify: function () {
      saveState(currentState);
      listeners.forEach((fn) => {
        try {
          fn(currentState);
        } catch (err) {
          console.error("[Kagoj] Error in subscriber:", err);
        }
      });
    },

    setLang: function (lang) {
      if (lang !== "en" && lang !== "bn") return;
      currentState.lang = lang;
      this.notify();
    },

    setTheme: function (theme) {
      currentState.theme = theme;
      this.notify();
    },

    setLowBandwidth: function (enabled) {
      currentState.lowBandwidth = !!enabled;
      this.notify();
    },

    // Journey Tracking
    isSaved: function (serviceId) {
      return currentState.savedJourneys.some((j) => j.serviceId === serviceId);
    },

    saveJourney: function (serviceId) {
      if (this.isSaved(serviceId)) return;
      currentState.savedJourneys.push({
        serviceId: serviceId,
        savedAt: new Date().toISOString(),
        checkedDocs: [],
        completedSteps: []
      });
      this.notify();
    },

    removeJourney: function (serviceId) {
      currentState.savedJourneys = currentState.savedJourneys.filter(
        (j) => j.serviceId !== serviceId
      );
      this.notify();
    },

    // Checklist Tracking
    isDocChecked: function (serviceId, docId) {
      const journey = currentState.savedJourneys.find((j) => j.serviceId === serviceId);
      if (!journey || !journey.checkedDocs) return false;
      return journey.checkedDocs.includes(docId);
    },

    toggleDoc: function (serviceId, docId) {
      let journey = currentState.savedJourneys.find((j) => j.serviceId === serviceId);
      if (!journey) {
        journey = {
          serviceId: serviceId,
          savedAt: new Date().toISOString(),
          checkedDocs: [],
          completedSteps: []
        };
        currentState.savedJourneys.push(journey);
      }
      if (!journey.checkedDocs) journey.checkedDocs = [];

      const idx = journey.checkedDocs.indexOf(docId);
      if (idx === -1) {
        journey.checkedDocs.push(docId);
      } else {
        journey.checkedDocs.splice(idx, 1);
      }
      this.notify();
      return this.isDocChecked(serviceId, docId);
    },

    // Step Tracking
    isStepCompleted: function (serviceId, stepNum) {
      const journey = currentState.savedJourneys.find((j) => j.serviceId === serviceId);
      if (!journey || !journey.completedSteps) return false;
      return journey.completedSteps.includes(stepNum);
    },

    toggleStep: function (serviceId, stepNum) {
      let journey = currentState.savedJourneys.find((j) => j.serviceId === serviceId);
      if (!journey) {
        journey = {
          serviceId: serviceId,
          savedAt: new Date().toISOString(),
          checkedDocs: [],
          completedSteps: []
        };
        currentState.savedJourneys.push(journey);
      }
      if (!journey.completedSteps) journey.completedSteps = [];

      const idx = journey.completedSteps.indexOf(stepNum);
      if (idx === -1) {
        journey.completedSteps.push(stepNum);
      } else {
        journey.completedSteps.splice(idx, 1);
      }
      this.notify();
      return this.isStepCompleted(serviceId, stepNum);
    },

    getReadinessScore: function (serviceId) {
      const service = (window.KAGOJ_SERVICES || []).find((s) => s.id === serviceId);
      if (!service) return { checked: 0, total: 0, percent: 0 };
      const total = service.requiredDocuments ? service.requiredDocuments.length : 0;
      if (total === 0) return { checked: 0, total: 0, percent: 100 };

      const journey = currentState.savedJourneys.find((j) => j.serviceId === serviceId);
      const checked = journey && journey.checkedDocs ? journey.checkedDocs.length : 0;
      const percent = Math.min(100, Math.round((checked / total) * 100));
      return { checked, total, percent };
    },

    saveFeedback: function (report) {
      if (!currentState.feedbackList) currentState.feedbackList = [];
      currentState.feedbackList.push({
        ...report,
        submittedAt: new Date().toISOString()
      });
      this.notify();
    }
  };
})();
