/**
 * THE PICK: KAGOJ — MAIN APPLICATION CONTROLLER
 * Orchestrates i18n, themes, routes, toasts, and UI listeners.
 */

(function () {
  // Toast notifications helper
  window.showToast = function (message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${message}</span>
      <button style="margin-left:auto; background:none; border:none; color:inherit; cursor:pointer;" aria-label="Dismiss">✕</button>
    `;

    toast.querySelector("button").addEventListener("click", () => toast.remove());
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // Confetti burst for 100% readiness
  window.triggerConfetti = function () {
    const state = window.KagojState.get();
    if (state.lowBandwidth) return; // Skip in low bandwidth mode

    const container = document.createElement("div");
    container.className = "confetti-container";
    document.body.appendChild(container);

    const colors = ["#0B3D2E", "#FF6B4A", "#F5B83D", "#28B07D", "#E8F5F0"];
    for (let i = 0; i < 48; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = Math.random() * 0.8 + "s";
      piece.style.width = Math.random() * 8 + 6 + "px";
      piece.style.height = Math.random() * 8 + 6 + "px";
      container.appendChild(piece);
    }

    setTimeout(() => container.remove(), 3600);
  };

  // Sync UI with current user state (theme, language, low-bandwidth)
  function applyState(state) {
    // Theme
    document.documentElement.setAttribute("data-theme", state.theme);
    const sunIcon = document.getElementById("theme-icon-sun");
    const moonIcon = document.getElementById("theme-icon-moon");
    if (sunIcon && moonIcon) {
      if (state.theme === "dark") {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
      } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
      }
    }

    // Low Bandwidth
    document.documentElement.setAttribute("data-low-bandwidth", String(state.lowBandwidth));
    const lowBtn = document.getElementById("toggle-low-bandwidth");
    if (lowBtn) {
      lowBtn.classList.toggle("active", !!state.lowBandwidth);
    }

    // Language & Fonts
    document.documentElement.setAttribute("lang", state.lang);
    if (state.lang === "bn") {
      document.body.classList.add("lang-bn");
    } else {
      document.body.classList.remove("lang-bn");
    }

    // Language button label
    const langLabel = document.getElementById("lang-label");
    if (langLabel) {
      langLabel.textContent = state.lang === "bn" ? "English" : "বাংলা";
    }

    // Update static data-i18n elements in header/footer
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = window.KagojI18n.t(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // Re-render current route to reflect language change
    window.KagojRouter.refresh();
  }

  // Setup Global Controls (Theme, Lang, Low-Bandwidth)
  function setupControls() {
    // Theme Toggle
    const themeBtn = document.getElementById("toggle-theme");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const current = window.KagojState.get().theme;
        const next = current === "dark" ? "light" : "dark";
        window.KagojState.setTheme(next);
      });
    }

    // Language Toggle
    const langBtn = document.getElementById("toggle-lang");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        const current = window.KagojState.get().lang;
        const next = current === "bn" ? "en" : "bn";
        window.KagojState.setLang(next);
      });
    }

    // Low-Bandwidth Toggle
    const lowBtn = document.getElementById("toggle-low-bandwidth");
    if (lowBtn) {
      lowBtn.addEventListener("click", () => {
        const current = window.KagojState.get().lowBandwidth;
        window.KagojState.setLowBandwidth(!current);
        const msg = !current
          ? (window.KagojState.get().lang === "bn" ? "কম ডেটা মোড চালু হয়েছে (অ্যানিমেশন বন্ধ)" : "Low bandwidth mode activated (animations disabled)")
          : (window.KagojState.get().lang === "bn" ? "স্বাভাবিক মোড সক্রিয়" : "Normal mode restored");
        window.showToast(msg, "info");
      });
    }
  }

  // Setup Routes
  function setupRoutes() {
    // 1. Home
    window.KagojRouter.register("/", function (container) {
      if (window.renderHomeView) {
        window.renderHomeView(container);
      }
    });

    // 2. Explore Services
    window.KagojRouter.register("/explore", function (container, params, query) {
      if (window.renderExploreView) {
        window.renderExploreView(container, params, query);
      } else {
        renderPlaceholder(container, "Explore Services", "All categorized Bangladesh government processes.");
      }
    });

    // 3. Service Detail
    window.KagojRouter.register("/service/:id", function (container, params) {
      if (window.renderServiceDetailView) {
        window.renderServiceDetailView(container, params);
      } else {
        renderPlaceholder(container, `Service Detail: ${params.id}`, "Service details, document checklist, and roadmap.");
      }
    });

    // 4. Journey Planner
    window.KagojRouter.register("/planner", function (container) {
      if (window.renderPlannerView) {
        window.renderPlannerView(container);
      } else {
        renderPlaceholder(container, "Journey Planner", "Personalized step-by-step roadmap wizard.");
      }
    });

    // 5. Dashboard
    window.KagojRouter.register("/dashboard", function (container) {
      if (window.renderDashboardView) {
        window.renderDashboardView(container);
      } else {
        renderPlaceholder(container, "My Journeys Dashboard", "Track your saved applications and readiness.");
      }
    });

    // 6. Scam Shield
    window.KagojRouter.register("/scam-shield", function (container) {
      if (window.renderScamShieldView) {
        window.renderScamShieldView(container);
      } else {
        renderPlaceholder(container, "Scam Shield", "Dalal red flags, fake fee warnings, and safety guide.");
      }
    });

    // 7. Glossary
    window.KagojRouter.register("/glossary", function (container) {
      if (window.renderGlossaryView) {
        window.renderGlossaryView(container);
      } else {
        renderPlaceholder(container, "Government Glossary", "Plain-language Bangladesh bureaucratic terms.");
      }
    });

    // 8. About
    window.KagojRouter.register("/about", function (container) {
      if (window.renderAboutView) {
        window.renderAboutView(container);
      } else {
        renderPlaceholder(container, "About Kagoj", "Our mission, ethics, and civic technology transparency.");
      }
    });

    // 9. Feedback
    window.KagojRouter.register("/feedback", function (container) {
      if (window.renderFeedbackView) {
        window.renderFeedbackView(container);
      } else {
        renderPlaceholder(container, "Report an Outdated Step", "Help us keep government steps accurate.");
      }
    });
  }

  function renderPlaceholder(container, title, desc) {
    const t = window.KagojI18n.t;
    container.innerHTML = `
      <div class="container" style="padding: 64px 20px; text-align: center;">
        <span class="badge badge-primary" style="margin-bottom:12px;">Step in progress</span>
        <h2 style="margin-bottom:10px;">${title}</h2>
        <p style="max-width:540px; margin: 0 auto 24px;">${desc}</p>
        <a href="#/" class="btn btn-primary btn-sm">← Back to Home</a>
      </div>
    `;
  }

  // App initialization
  document.addEventListener("DOMContentLoaded", function () {
    setupControls();
    setupRoutes();

    // Subscribe to state updates
    window.KagojState.subscribe(applyState);

    // Initial state apply
    applyState(window.KagojState.get());

    // Initialize Router
    window.KagojRouter.init();
  });
})();

