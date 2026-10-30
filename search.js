/**
 * THE PICK: KAGOJ — LIVE SEARCH & AUTOCOMPLETE
 * High-performance instant search across all services and steps.
 */

(function () {
  let debounceTimer = null;
  let activeIndex = -1;

  function filterServices(query) {
    if (!query || query.trim() === "") return [];
    const q = query.trim().toLowerCase();
    const services = window.KAGOJ_SERVICES || [];

    return services.filter((s) => {
      const titleEn = (s.title.en || "").toLowerCase();
      const titleBn = (s.title.bn || "").toLowerCase();
      const taglineEn = (s.tagline.en || "").toLowerCase();
      const taglineBn = (s.tagline.bn || "").toLowerCase();
      const category = (s.category || "").toLowerCase();
      const officeEn = (s.officialOffice.en || "").toLowerCase();
      const officeBn = (s.officialOffice.bn || "").toLowerCase();

      return (
        titleEn.includes(q) ||
        titleBn.includes(q) ||
        taglineEn.includes(q) ||
        taglineBn.includes(q) ||
        category.includes(q) ||
        officeEn.includes(q) ||
        officeBn.includes(q)
      );
    });
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    return text.replace(regex, `<mark class="bg-saffron font-bold text-dark">$1</mark>`);
  }

  window.KagojSearch = {
    setup: function (inputEl, dropdownEl, clearBtnEl) {
      if (!inputEl || !dropdownEl) return;
      const lang = window.KagojState ? window.KagojState.get().lang : "en";
      const t = window.KagojI18n.t;

      function renderResults(results, query) {
        if (results.length === 0) {
          dropdownEl.innerHTML = `
            <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
              <p>${t("noResultsFound")}</p>
              <div style="margin-top: 8px;">
                <a href="#/explore" class="btn btn-secondary btn-sm" style="display:inline-block;">${t("cat_all")}</a>
              </div>
            </div>
          `;
          dropdownEl.classList.add("open");
          return;
        }

        const itemsHtml = results
          .map((s, idx) => {
            const title = s.title[lang] || s.title.en;
            const cat = s.categoryLabel ? s.categoryLabel[lang] : s.category;
            const minFee = s.speedTiers && s.speedTiers[0] ? s.speedTiers[0].feeBDT : 0;
            const feeStr = window.KagojI18n.formatCurrency(minFee);

            return `
            <a href="#/service/${s.id}" class="search-item ${idx === activeIndex ? "highlighted" : ""}" data-index="${idx}">
              <div class="search-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div class="search-item-info">
                <div class="search-item-title">${highlightMatch(title, query)}</div>
                <div class="search-item-meta">
                  <span class="badge badge-primary" style="font-size: 0.7rem; padding: 2px 8px;">${cat}</span>
                  <span>${t("officialFee")}: <strong>${feeStr}</strong></span>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text-muted);">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          `;
          })
          .join("");

        dropdownEl.innerHTML = `
          <div class="search-dropdown-header">${t("searchSuggestionsTitle")} (${results.length})</div>
          ${itemsHtml}
        `;
        dropdownEl.classList.add("open");
      }

      inputEl.addEventListener("input", function (e) {
        const val = e.target.value;
        if (clearBtnEl) {
          clearBtnEl.style.display = val ? "flex" : "none";
        }

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          if (!val || val.trim().length === 0) {
            dropdownEl.classList.remove("open");
            dropdownEl.innerHTML = "";
            activeIndex = -1;
            return;
          }
          const results = filterServices(val);
          activeIndex = -1;
          renderResults(results, val);
        }, 150);
      });

      if (clearBtnEl) {
        clearBtnEl.addEventListener("click", function () {
          inputEl.value = "";
          clearBtnEl.style.display = "none";
          dropdownEl.classList.remove("open");
          dropdownEl.innerHTML = "";
          inputEl.focus();
        });
      }

      // Keyboard navigation
      inputEl.addEventListener("keydown", function (e) {
        const items = dropdownEl.querySelectorAll(".search-item");
        if (!dropdownEl.classList.contains("open") || items.length === 0) return;

        if (e.key === "ArrowDown") {
          e.preventDefault();
          activeIndex = (activeIndex + 1) % items.length;
          items.forEach((item, idx) => {
            item.classList.toggle("highlighted", idx === activeIndex);
          });
          if (items[activeIndex]) items[activeIndex].scrollIntoView({ block: "nearest" });
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          activeIndex = (activeIndex - 1 + items.length) % items.length;
          items.forEach((item, idx) => {
            item.classList.toggle("highlighted", idx === activeIndex);
          });
          if (items[activeIndex]) items[activeIndex].scrollIntoView({ block: "nearest" });
        } else if (e.key === "Enter" && activeIndex >= 0) {
          e.preventDefault();
          if (items[activeIndex]) items[activeIndex].click();
        } else if (e.key === "Escape") {
          dropdownEl.classList.remove("open");
        }
      });

      // Close dropdown on outside click
      document.addEventListener("click", function (e) {
        if (!inputEl.contains(e.target) && !dropdownEl.contains(e.target)) {
          dropdownEl.classList.remove("open");
        }
      });
    }
  };
})();

