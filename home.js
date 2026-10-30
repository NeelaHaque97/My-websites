/**
 * THE PICK: KAGOJ — HOME VIEW
 * Hero, live search, popular journeys, how it works, broker comparison, stats, FAQ.
 */

(function () {
  window.renderHomeView = function (container) {
    const t = window.KagojI18n.t;
    const formatCurrency = window.KagojI18n.formatCurrency;
    const lang = window.KagojState ? window.KagojState.get().lang : "en";
    const services = window.KAGOJ_SERVICES || [];

    // Filter top 6 popular journeys
    const popularServices = [...services].sort((a, b) => b.popularity - a.popularity).slice(0, 6);

    const popularCardsHtml = popularServices
      .map((s, idx) => {
        const title = s.title[lang] || s.title.en;
        const tagline = s.tagline[lang] || s.tagline.en;
        const cat = s.categoryLabel ? s.categoryLabel[lang] : s.category;
        const minFee = s.speedTiers && s.speedTiers[0] ? s.speedTiers[0].feeBDT : 0;
        const feeStr = formatCurrency(minFee);
        const timelineStr = s.speedTiers && s.speedTiers[0]
          ? (lang === "bn" ? s.speedTiers[0].timelineDaysBn : s.speedTiers[0].timelineDays)
          : "";

        return `
        <div class="card card-interactive animate-fade-in stagger-${(idx % 4) + 1}" onclick="location.hash='#/service/${s.id}'" style="display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; gap:8px; flex-wrap:wrap;">
              <span class="badge badge-primary">${cat}</span>
              <span class="badge badge-success" style="font-size:0.7rem;">✓ ${t("noDalalNeeded")}</span>
            </div>
            <h3 style="margin-bottom:8px; font-size:1.25rem;">${title}</h3>
            <p style="font-size:0.9rem; margin-bottom:18px; color:var(--text-secondary); line-height:1.5;">${tagline}</p>
          </div>

          <div>
            <div style="background:var(--bg-surface-subtle); border-radius:var(--radius-md); padding:12px 14px; margin-bottom:16px; display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div>
                <div style="font-size:0.725rem; text-transform:uppercase; color:var(--text-muted); font-weight:700;">${t("officialFee")}</div>
                <div style="font-weight:800; font-size:1.05rem; color:var(--color-primary);">${feeStr}</div>
              </div>
              <div>
                <div style="font-size:0.725rem; text-transform:uppercase; color:var(--text-muted); font-weight:700;">${t("timeline")}</div>
                <div style="font-weight:700; font-size:0.9rem; color:var(--text-primary);">${timelineStr}</div>
              </div>
            </div>

            <div style="display:flex; align-items:center; justify-content:space-between;">
              <span class="badge badge-outline" style="font-size:0.72rem;">${t("verifiedBadge")}</span>
              <a href="#/service/${s.id}" class="btn btn-secondary btn-sm" onclick="event.stopPropagation();">
                ${t("viewRoadmap")} →
              </a>
            </div>
          </div>
        </div>
      `;
      })
      .join("");

    container.innerHTML = `
      <!-- HERO SECTION -->
      <section style="position:relative; overflow:hidden; padding: 56px 0 48px; background: linear-gradient(180deg, var(--bg-surface-subtle) 0%, var(--bg-app) 100%); border-bottom: 1px solid var(--border-subtle);">
        <div class="ambient-blob" style="top: -60px; right: 10%; width: 340px; height: 340px; background: rgba(245, 184, 61, 0.12);"></div>
        <div class="ambient-blob" style="bottom: -80px; left: 5%; width: 380px; height: 380px; background: rgba(11, 61, 46, 0.1);"></div>

        <div class="container" style="position:relative; z-index:1; text-align:center;">
          <div style="display:inline-flex; align-items:center; gap:8px; padding:6px 14px; border-radius:var(--radius-pill); background:var(--bg-surface); border:1px solid var(--border-default); box-shadow:var(--shadow-sm); margin-bottom:20px;">
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--color-accent-coral);"></span>
            <span style="font-size:0.8rem; font-weight:700; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.04em;">${t("verifiedBadge")}</span>
          </div>

          <h1 style="max-width:880px; margin: 0 auto 18px; font-weight:800; font-size:clamp(1.15rem, 5.2vw, 3.25rem); line-height:1.25;">
            ${t("tagline")}
          </h1>

          <p style="max-width:720px; margin: 0 auto 36px; font-size:1.15rem; color:var(--text-secondary); line-height:1.6;">
            ${t("heroSubtitle")}
          </p>

          <!-- LIVE SEARCH BAR -->
          <div class="search-wrapper" style="margin-bottom: 24px;">
            <div class="search-input-box" role="search">
              <svg class="search-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                id="hero-search-input" 
                class="search-input" 
                placeholder="${t("searchPlaceholder")}" 
                autocomplete="off" 
                aria-label="Search government services"
              />
              <button id="hero-search-clear" class="search-clear-btn" aria-label="Clear search input">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div id="hero-search-dropdown" class="search-dropdown"></div>

            <div class="search-shortcuts">
              <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">${t("searchQuickTags")}</span>
              <a href="#/service/e-passport" class="shortcut-tag">🛂 ${lang === "bn" ? "ই-পাসপোর্ট" : "e-Passport"}</a>
              <a href="#/service/nid-correction" class="shortcut-tag">🪪 ${lang === "bn" ? "এনআইডি সংশোধন" : "NID Correction"}</a>
              <a href="#/service/land-mutation" class="shortcut-tag">📜 ${lang === "bn" ? "ই-নামজারি" : "Land Mutation"}</a>
              <a href="#/service/trade-license" class="shortcut-tag">💼 ${lang === "bn" ? "ট্রেড লাইসেন্স" : "Trade License"}</a>
              <a href="#/service/driving-license" class="shortcut-tag">🚗 ${lang === "bn" ? "ড্রাইভিং লাইসেন্স" : "Driving License"}</a>
            </div>
          </div>

          <!-- ACTION BUTTONS -->
          <div style="display:flex; align-items:center; justify-content:center; gap:14px; flex-wrap:wrap; margin-top:28px;">
            <a href="#/explore" class="btn btn-primary btn-lg">
              ${t("startJourneyBtn")}
            </a>
            <a href="#/planner" class="btn btn-outline btn-lg" style="background:var(--bg-surface);">
              🗺️ ${t("openPlannerBtn")}
            </a>
          </div>
        </div>
      </section>

      <!-- STATS BANNER -->
      <section style="background:var(--color-primary); color:#FFFFFF; padding: 36px 0;">
        <div class="container">
          <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 24px; text-align:center;">
            <div style="border-right: 1px solid rgba(255,255,255,0.12);">
              <div style="font-size:clamp(1.8rem, 4vw, 2.75rem); font-weight:800; color:var(--color-accent-saffron); font-family:var(--font-heading); line-height:1.1;">
                ${t("statFeesSaved")}
              </div>
              <div style="font-size:0.9rem; color:rgba(255,255,255,0.85); margin-top:4px;">
                ${t("statFeesSavedLabel")}
              </div>
            </div>
            <div style="border-right: 1px solid rgba(255,255,255,0.12);">
              <div style="font-size:clamp(1.8rem, 4vw, 2.75rem); font-weight:800; color:#FFFFFF; font-family:var(--font-heading); line-height:1.1;">
                ${t("statServicesMapped")}
              </div>
              <div style="font-size:0.9rem; color:rgba(255,255,255,0.85); margin-top:4px;">
                ${t("statServicesMappedLabel")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- POPULAR JOURNEYS -->
      <section style="padding: 72px 0 64px;">
        <div class="container">
          <div style="display:flex; flex-direction:column; align-items:center; text-align:center; margin-bottom:44px;">
            <span class="badge badge-primary" style="margin-bottom:10px;">⚡ High Impact Workflows</span>
            <h2>${t("popularHeading")}</h2>
            <p style="max-width:640px; margin-top:8px;">${t("popularSubheading")}</p>
          </div>

          <div class="bento-grid-3">
            ${popularCardsHtml}
          </div>

          <div style="text-align:center; margin-top:40px;">
            <a href="#/explore" class="btn btn-outline btn-lg">
              ${t("cat_all")} (${services.length}+ Mapped) →
            </a>
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS (3 STEPS) -->
      <section style="background:var(--bg-surface); padding: 72px 0; border-top:1px solid var(--border-subtle); border-bottom:1px solid var(--border-subtle);">
        <div class="container">
          <div style="text-align:center; max-width:680px; margin: 0 auto 52px;">
            <span class="badge badge-saffron" style="margin-bottom:10px;">💡 Citizen Empowered</span>
            <h2>${t("howItWorksHeading")}</h2>
            <p style="margin-top:8px;">${t("howItWorksSubheading")}</p>
          </div>

          <div class="bento-grid-3">
            <div class="card" style="position:relative; overflow:hidden;">
              <div style="font-size:2.5rem; margin-bottom:16px;">🎯</div>
              <h3 style="font-size:1.2rem; margin-bottom:10px;">${t("step1Title")}</h3>
              <p style="font-size:0.925rem;">${t("step1Desc")}</p>
            </div>

            <div class="card" style="position:relative; overflow:hidden;">
              <div style="font-size:2.5rem; margin-bottom:16px;">📋</div>
              <h3 style="font-size:1.2rem; margin-bottom:10px;">${t("step2Title")}</h3>
              <p style="font-size:0.925rem;">${t("step2Desc")}</p>
            </div>

            <div class="card" style="position:relative; overflow:hidden;">
              <div style="font-size:2.5rem; margin-bottom:16px;">🛡️</div>
              <h3 style="font-size:1.2rem; margin-bottom:10px;">${t("step3Title")}</h3>
              <p style="font-size:0.925rem;">${t("step3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- WHY BROKERS LOSE (দালাল বনাম সচেতন নাগরিক) -->
      <section style="padding: 72px 0;">
        <div class="container">
          <div style="text-align:center; max-width:720px; margin: 0 auto 48px;">
            <span class="badge badge-coral" style="margin-bottom:10px;">⚖️ Truth Over Fear</span>
            <h2>${t("whyBrokersLoseHeading")}</h2>
            <p style="margin-top:8px;">${t("whyBrokersLoseSubheading")}</p>
          </div>

          <div class="bento-grid-2">
            <!-- Broker Column -->
            <div class="card" style="border-left: 5px solid var(--color-accent-coral); background: var(--bg-surface);">
              <div style="display:flex; align-items:center; gap:10px; margin-bottom:18px;">
                <span style="font-size:1.8rem;">🚨</span>
                <h3 style="color:var(--color-accent-coral); font-size:1.25rem;">${t("theBrokerWay")}</h3>
              </div>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:14px;">
                <li style="display:flex; gap:10px; font-size:0.95rem;">
                  <span style="color:var(--color-accent-coral); font-weight:bold; font-size:1.1rem;">✕</span>
                  <span>${t("trap1")}</span>
                </li>
                <li style="display:flex; gap:10px; font-size:0.95rem;">
                  <span style="color:var(--color-accent-coral); font-weight:bold; font-size:1.1rem;">✕</span>
                  <span>${t("trap2")}</span>
                </li>
                <li style="display:flex; gap:10px; font-size:0.95rem;">
                  <span style="color:var(--color-accent-coral); font-weight:bold; font-size:1.1rem;">✕</span>
                  <span>${t("trap3")}</span>
                </li>
              </ul>
            </div>

            <!-- Kagoj Column -->
            <div class="card" style="border-left: 5px solid var(--color-primary); background: var(--bg-surface);">
              <div style="display:flex; align-items:center; gap:10px; margin-bottom:18px;">
                <span style="font-size:1.8rem;">🏛️</span>
                <h3 style="color:var(--color-primary); font-size:1.25rem;">${t("theKagojWay")}</h3>
              </div>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:14px;">
                <li style="display:flex; gap:10px; font-size:0.95rem;">
                  <span style="color:var(--color-success); font-weight:bold; font-size:1.1rem;">✓</span>
                  <span>${t("direct1")}</span>
                </li>
                <li style="display:flex; gap:10px; font-size:0.95rem;">
                  <span style="color:var(--color-success); font-weight:bold; font-size:1.1rem;">✓</span>
                  <span>${t("direct2")}</span>
                </li>
                <li style="display:flex; gap:10px; font-size:0.95rem;">
                  <span style="color:var(--color-success); font-weight:bold; font-size:1.1rem;">✓</span>
                  <span>${t("direct3")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SCAM SPOTLIGHT BANNER -->
      <section style="padding: 0 0 64px;">
        <div class="container">
          <div class="dalal-alert" style="box-shadow:var(--shadow-sm); padding:24px;">
            <svg class="dalal-alert-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <div class="dalal-alert-content">
              <div class="dalal-alert-title" style="font-size:1.1rem;">${t("scamBannerHeading")}</div>
              <div class="dalal-alert-text" style="font-size:0.95rem; margin-bottom:12px;">${t("scamBannerText")}</div>
              <a href="#/scam-shield" class="btn btn-coral btn-sm">
                ${t("readScamGuide")} →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ ACCORDION -->
      <section style="background:var(--bg-surface); padding: 72px 0; border-top:1px solid var(--border-subtle);">
        <div class="container">
          <div style="text-align:center; max-width:680px; margin: 0 auto 48px;">
            <span class="badge badge-primary" style="margin-bottom:10px;">❓ Common Inquiries</span>
            <h2>${t("faqHeading")}</h2>
          </div>

          <div class="faq-list">
            <div class="faq-item">
              <button class="faq-question" type="button" aria-expanded="false">
                <span>${t("faq1Q")}</span>
                <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div class="faq-answer">
                <p>${t("faq1A")}</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" type="button" aria-expanded="false">
                <span>${t("faq2Q")}</span>
                <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div class="faq-answer">
                <p>${t("faq2A")}</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" type="button" aria-expanded="false">
                <span>${t("faq3Q")}</span>
                <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div class="faq-answer">
                <p>${t("faq3A")}</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" type="button" aria-expanded="false">
                <span>${t("faq4Q")}</span>
                <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div class="faq-answer">
                <p>${t("faq4A")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    // Initialize search on the hero search bar
    const searchInput = document.getElementById("hero-search-input");
    const searchDropdown = document.getElementById("hero-search-dropdown");
    const searchClear = document.getElementById("hero-search-clear");
    if (searchInput && searchDropdown) {
      window.KagojSearch.setup(searchInput, searchDropdown, searchClear);

      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("q")) {
        searchInput.value = urlParams.get("q");
        searchInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }

    // Initialize FAQ toggles
    container.querySelectorAll(".faq-question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const isOpen = item.classList.contains("open");
        // Close others
        container.querySelectorAll(".faq-item").forEach((it) => it.classList.remove("open"));
        if (!isOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        } else {
          btn.setAttribute("aria-expanded", "false");
        }
      });
    });
  };
})();
