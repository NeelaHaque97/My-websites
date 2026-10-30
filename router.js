/**
 * THE PICK: KAGOJ — HASH ROUTER
 * Lightweight, static-compatible client router.
 */

(function () {
  const routes = {};
  let currentRoute = null;

  function parseHash() {
    let hash = window.location.hash.slice(1);
    if (!hash || hash === "") hash = "/";

    // Split path and query parameters
    const [pathPart, queryPart] = hash.split("?");
    const query = {};
    if (queryPart) {
      const pairs = queryPart.split("&");
      pairs.forEach((p) => {
        const [k, v] = p.split("=");
        if (k) query[decodeURIComponent(k)] = decodeURIComponent(v || "");
      });
    }

    // Check dynamic routes e.g. /service/:id
    const parts = pathPart.split("/").filter(Boolean);
    if (parts.length === 2 && parts[0] === "service") {
      return { route: "/service/:id", params: { id: parts[1] }, query };
    }

    return { route: pathPart, params: {}, query };
  }

  function handleRoute() {
    const { route, params, query } = parseHash();
    currentRoute = route;

    // Update active state in desktop & mobile navs
    updateActiveNavLinks(route);

    // Call matching handler or fallback to home
    const handler = routes[route] || routes["/"] || function () {};
    const container = document.getElementById("app-main");
    if (container) {
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      handler(container, params, query);
    }
  }

  function updateActiveNavLinks(route) {
    document.querySelectorAll("[data-nav-route]").forEach((el) => {
      const target = el.getAttribute("data-nav-route");
      if (target === route || (route.startsWith("/service") && target === "/explore")) {
        el.classList.add("active");
        el.setAttribute("aria-current", "page");
      } else {
        el.classList.remove("active");
        el.removeAttribute("aria-current");
      }
    });
  }

  window.KagojRouter = {
    register: function (path, handler) {
      routes[path] = handler;
    },

    navigate: function (path) {
      window.location.hash = path;
    },

    getCurrentRoute: function () {
      return currentRoute;
    },

    refresh: function () {
      handleRoute();
    },

    init: function () {
      window.addEventListener("hashchange", handleRoute);
      handleRoute();
    }
  };
})();

