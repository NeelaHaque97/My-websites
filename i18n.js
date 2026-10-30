/**
 * THE PICK: KAGOJ — i18n & TRANSLATION SYSTEM
 * High-precision bilingual dictionary (English / বাংলা)
 */

(function () {
  const BANGLA_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  window.toBanglaNumber = function (val) {
    if (val === null || val === undefined) return "";
    return String(val).replace(/[0-9]/g, (w) => BANGLA_DIGITS[+w]);
  };

  const DICTIONARY = {
    // Brand & Meta
    brandName: { en: "The Pick: Kagoj", bn: "কাগজ" },
    tagline: {
      en: "Every government process, mapped. No brokers. No guessing.",
      bn: "প্রতিটি সরকারি প্রক্রিয়া, স্পষ্ট ধাপে। দালালমুক্ত। অনিশ্চয়তাহীন।"
    },
    heroSubtitle: {
      en: "Stop making repeat visits and paying inflated fees. Kagoj turns convoluted Bangladesh government workflows into step-by-step checklists with verified fees, realistic timelines, and anti-dalal alerts.",
      bn: "বারবার অফিসে ঘোরাঘুরি ও অতিরিক্ত ফি দেওয়া বন্ধ করুন। সরকারি প্রক্রিয়ার সঠিক ধাপ, নির্ভুল ফি, বাস্তব সময়রেখা এবং দালাল সতর্কতা জানুন বিনামূল্যে।"
    },

    // Navigation
    navHome: { en: "Home", bn: "নীড়পাতা" },
    navExplore: { en: "Explore Services", bn: "সকল সেবা" },
    navPlanner: { en: "Journey Planner", bn: "রোডম্যাপ প্ল্যানার" },
    navDashboard: { en: "My Journeys", bn: "আমার ড্যাশবোর্ড" },
    navScamShield: { en: "Scam Shield", bn: "দালাল প্রতিরোধ" },
    navGlossary: { en: "Glossary", bn: "শব্দকোষ" },
    navAbout: { en: "About", bn: "আমাদের লক্ষ্য" },
    navFeedback: { en: "Report Outdated Step", bn: "তথ্য আপডেট জানান" },

    // Mobile Navigation (Shorter Labels)
    mNavHome: { en: "Home", bn: "নীড়" },
    mNavExplore: { en: "Explore", bn: "সেবা" },
    mNavPlanner: { en: "Planner", bn: "প্ল্যানার" },
    mNavDashboard: { en: "Saved", bn: "সংরক্ষিত" },
    mNavShield: { en: "Shield", bn: "দালালরোধ" },

    // Controls
    langToggle: { en: "বাংলা", bn: "English" },
    themeLight: { en: "Light Mode", bn: "লাইট মোড" },
    themeDark: { en: "Dark Mode", bn: "ডার্ক মোড" },
    lowBandwidth: { en: "Low Data", bn: "কম ডেটা মোড" },

    // Search
    searchPlaceholder: {
      en: "Search any service (e.g., passport, NID correction, mutation, license)...",
      bn: "যেকোনো সেবা খুঁজুন (যেমন: পাসপোর্ট, এনআইডি সংশোধন, নামজারি, লাইসেন্স)..."
    },
    searchSuggestionsTitle: { en: "Matching Services", bn: "সম্পর্কিত সেবাসমূহ" },
    noResultsFound: { en: "No services found matching your query.", bn: "কোনো সেবা খুঁজে পাওয়া যায়নি।" },
    searchQuickTags: { en: "Popular Searches:", bn: "জনপ্রিয় অনুসন্ধান:" },

    // Hero Section
    startJourneyBtn: { en: "Explore All 8+ Mapped Services", bn: "সকল ৮+ সেবা ও রোডম্যাপ দেখুন" },
    openPlannerBtn: { en: "Start Custom Planner", bn: "কাস্টম প্ল্যানার শুরু করুন" },

    // Popular Journeys
    popularHeading: { en: "Popular Government Journeys", bn: "সবচেয়ে প্রয়োজনীয় সরকারি সেবা" },
    popularSubheading: {
      en: "High-traffic workflows mapped directly from official citizen charters.",
      bn: "নাগরিক সনদ ও সরকারি বিধি মোতাবেক ধাপে ধাপে সাজানো সেবা রোডম্যাপ।"
    },
    viewRoadmap: { en: "View Roadmap", bn: "রোডম্যাপ দেখুন" },
    officialFee: { en: "Official Fee", bn: "সরকারি ফি" },
    timeline: { en: "Est. Timeline", bn: "সময় লাগবে" },
    noDalalNeeded: { en: "100% Broker-Free", bn: "১০০% দালালমুক্ত" },
    verifiedBadge: { en: "Verified Oct 2026", bn: "যাচাইকৃত অক্টোবর ২০২৬" },

    // How It Works
    howItWorksHeading: { en: "How Kagoj Works", bn: "কাগজ যেভাবে কাজ করে" },
    howItWorksSubheading: {
      en: "Three simple steps to tackle any Bangladesh government process like a seasoned insider.",
      bn: "সহজ ৩ ধাপে যেকোনো সরকারি কাজে নিশ্চিত সফলতা ও নিশ্চিন্ত অভিজ্ঞতা।"
    },
    step1Title: { en: "1. Select Service & Answer 3 Quick Questions", bn: "১. সেবা বেছে নিন ও কয়েকটি সহজ উত্তর দিন" },
    step1Desc: {
      en: "Our Journey Planner personalizes your requirements based on age, marital status, and urgency.",
      bn: "আপনার বয়স, বর্তমান অবস্থা ও জরুরি প্রয়োজন অনুযায়ী ব্যক্তিগত চেকলিস্ট তৈরি হয়।"
    },
    step2Title: { en: "2. Gather Exact Docs & Verify Statutory Fees", bn: "২. নির্দিষ্ট কাগজপত্র সাজান ও সঠিক সরকারি ফি জানুন" },
    step2Desc: {
      en: "Know every required photocopy and challan code beforehand. Track your readiness score in real time.",
      bn: "কোন কোন সত্যায়িত কপি লাগবে তা আগে থেকেই জানুন এবং প্রস্তুতি স্কোর ট্র্যাক করুন।"
    },
    step3Title: { en: "3. Walk into the Office, Pay ৳0 Broker Charges", bn: "৩. অফিসে গিয়ে সরাসরি সেবা নিন, দালালকে ০ টাকা দিন" },
    step3Desc: {
      en: "Skip the hovering middleman. Know the right counter, the best arrival time, and your legal rights.",
      bn: "অফিসের সঠিক কাউন্টার ও ভিড়হীন সময় জেনে সরাসরি যান, নিজের টাকা ও সময় বাঁচান।"
    },

    // Why Brokers Lose (দালাল বনাম কাগজ)
    whyBrokersLoseHeading: { en: "Why Brokers Lose to Informed Citizens", bn: "দালাল বনাম সচেতন নাগরিক: কাগজ কেন সেরা?" },
    whyBrokersLoseSubheading: {
      en: "A broker's only real power is your lack of information. Once you know the steps, they have nothing to sell.",
      bn: "দালালের একমাত্র ক্ষমতা হলো তথ্যের অজ্ঞতা। প্রক্রিয়াটি জেনে গেলে দালালের কোনো ভূমিকা থাকে না।"
    },
    theBrokerWay: { en: "The Dalal / Broker Trap", bn: "দালালের ফাঁদ ও হয়রানি" },
    theKagojWay: { en: "The Kagoj Direct Way", bn: "কাগজের সাথে নাগরিকের অধিকার" },
    trap1: {
      en: "Demands ৳5,000–৳25,000 with false promises of skipping official verification.",
      bn: "ভুয়া আশ্বাস দিয়ে সরকারি ফির তিন-চারগুণ টাকা দাবি করে।"
    },
    trap2: {
      en: "Keeps your original deeds and NID hostage until full blackmail sum is paid.",
      bn: "আপনার মূল দলিল ও কাগজপত্র আটকে রেখে জিম্মি করার চেষ্টা করে।"
    },
    trap3: {
      en: "Zero legal accountability; risk of fake revenue stamps and permanent file rejection.",
      bn: "কোনো আইনগত দায়বদ্ধতা নেই; জাল সীল ও স্ট্যাম্প দিয়ে কাজ নষ্টের ঝুঁকি থাকে।"
    },
    direct1: {
      en: "Pay strictly the official government fee (৳0–৳4,025) via digital A-Challan.",
      bn: "শুধুমাত্র নির্দিষ্ট সরকারি ফি (০ থেকে ৪,০২৫ টাকা) এ-চালান বা ব্যাংকে দিন।"
    },
    direct2: {
      en: "You maintain 100% custody of your original records at all times.",
      bn: "আপনার মূল নথিপত্র সবসময় সম্পূর্ণ নিজের হেফাজতে সুরক্ষিত থাকে।"
    },
    direct3: {
      en: "Track your file live on official government ministerial servers with SMS updates.",
      bn: "সরকারি পোর্টালে এসএমএস ট্র্যাকিং ও কিউআর কোডসহ শতভাগ বৈধ সনদ নিশ্চিত।"
    },

    // National Stats
    statFeesSaved: { en: "৳0", bn: "৳০" },
    statFeesSavedLabel: { en: "Unofficial dalal fees required", bn: "দালালকে অতিরিক্ত ফি প্রদানের প্রয়োজন" },
    statServicesMapped: { en: "8+", bn: "৮+" },
    statServicesMappedLabel: { en: "Official workflows mapped end-to-end", bn: "ধাপে ধাপে সম্পূর্ণ ম্যাপিংকৃত সরকারি সেবা" },
    statFreeAccess: { en: "100%", bn: "১০০%" },
    statFreeAccessLabel: { en: "Free public access forever", bn: "নাগরিকদের জন্য সম্পূর্ণ উন্মুক্ত ও ফ্রি" },
    statReadinessRings: { en: "24/7", bn: "২৪/৭" },
    statReadinessRingsLabel: { en: "Offline-ready checklist tracker", bn: "স্মার্ট চেকলিস্ট ও প্রস্তুতি ট্র্যাকার" },

    // Scam Shield Banner
    scamBannerHeading: { en: "Dalal Red Flag of the Week", bn: "সাপ্তাহিক দালাল সতর্কতা ও রেড ফ্ল্যাগ" },
    scamBannerText: {
      en: "Warning: Anyone offering 'Police clearance without physical visit' or 'Passport in 48 hours without super-express challan' is running a scam. Police verification is handled electronically by Special Branch (SB).",
      bn: "সতর্কতা: 'পুলিশ ভেরিফিকেশন ছাড়া পাসপোর্ট' বা '৪৮ ঘণ্টায় সরকারি ফি ছাড়া কাজ' এমন দাবি করলেই বুঝবেন সে প্রতারক। স্পেশাল ব্রাঞ্চের তদন্ত সরাসরি হয় এবং এর কোনো ফি নেই।"
    },
    readScamGuide: { en: "Open Scam Shield Guide", bn: "দালাল প্রতিরোধ গাইড পড়ুন" },

    // FAQ
    faqHeading: { en: "Frequently Asked Questions", bn: "সাধারণ জিজ্ঞাসাসমূহ" },
    faq1Q: {
      en: "Is Kagoj affiliated with the Bangladesh government?",
      bn: "কাগজ কি বাংলাদেশ সরকারের কোনো অফিসিয়াল সেবা?"
    },
    faq1A: {
      en: "No. Kagoj is an independent civic-tech initiative. We aggregate official citizen charters, gazettes, and ministry portals into transparent, citizen-friendly roadmaps. All official applications are submitted directly on government portals.",
      bn: "না। কাগজ একটি উন্মুক্ত নাগরিক উদ্যোগ। সরকারি বিভিন্ন পোর্টাল, সিটিজেন চার্টার ও নীতিমালার আলোকে আমরা নাগরিকদের সুবিধার্থে স্পষ্ট রোডম্যাপ প্রদান করি। মূল আবেদন সর্বদা সরকারের অফিসিয়াল পোর্টাল বা অফিসে জমা দিতে হয়।"
    },
    faq2Q: {
      en: "Are the fee amounts listed here 100% accurate?",
      bn: "এখানে উল্লেখিত ফি কি সম্পূর্ণ নির্ভুল?"
    },
    faq2A: {
      en: "The seed data contains sample verified statutory rates (as of late 2026). Government fees and VAT schedules may change periodically. Always verify the latest challan amount at the official ministry portal or office notice board before paying.",
      bn: "এখানে প্রকাশিত তথ্যসমূহ সাধারণ নাগরিক চার্টার অনুযায়ী নমুনা হিসেবে সংগৃহীত। সরকার যেকোনো সময় ফি পরিবর্তন করতে পারে। তাই ফি জমার পূর্বে অবশ্যই সংশ্লিষ্ট সরকারি অফিসের নোটিশ বোর্ড বা অফিসিয়াল পোর্টালে সর্বশেষ ফি যাচাই করে নিন।"
    },
    faq3Q: {
      en: "Can a broker actually expedite my passport or land mutation?",
      bn: "দালাল কি আসলেই পাসপোর্ট বা নামজারি দ্রুত করিয়ে দিতে পারে?"
    },
    faq3A: {
      en: "No. Modern Bangladesh government systems (e-Passport, e-Namjari, BDRIS, BSP) are fully centralized and automated. Dalals simply submit the same paperwork you can do yourself, while charging you 3x to 5x the money. Biometrics and court hearings still require your physical presence.",
      bn: "না। আধুনিক সরকারি ব্যবস্থা ডিজিটাল হওয়ায় দালালের কিছু করার ক্ষমতা নেই। তারা কেবল আপনার টাকা নষ্ট করে। বায়োমেট্রিক ও শুনানিতে আপনাকে নিজে উপস্থিত হতেই হয়।"
    },
    faq4Q: {
      en: "Is my personal data saved when I check off documents?",
      bn: "আমি চেকলিস্ট পূরণ করলে আমার ব্যক্তিগত তথ্য কি কোথাও জমা হয়?"
    },
    faq4A: {
      en: "All your checklist progress and saved journeys are stored entirely inside your own browser's localStorage. No personal tracking, no cookies, and no data is transmitted to any third-party server.",
      bn: "আপনার চেকলিস্ট ও সংরক্ষিত সেবা সম্পূর্ণ আপনার নিজস্ব ব্রাউজারের মেমোরিতে (localStorage) সংরক্ষিত থাকে। কোনো ব্যক্তিগত তথ্য সার্ভারে পাঠানো হয় না।"
    },

    // Footer
    footerAboutText: {
      en: "Kagoj is a free public civic platform mapping Bangladesh government procedures step-by-step to eliminate dalal exploitation and empower every citizen.",
      bn: "কাগজ একটি উন্মুক্ত নাগরিক প্ল্যাটফর্ম, যা দালাল হয়রানি বন্ধে এবং সরকারি সেবায় স্বচ্ছতা নিশ্চিত করতে প্রতিটি প্রক্রিয়া ধাপে ধাপে উপস্থাপন করে।"
    },
    footerDisclaimerTitle: { en: "DEMO & SAMPLE DATA NOTICE", bn: "নমুনা তথ্য ও দায়িত্ব অস্বীকার বিজ্ঞপ্তি" },
    footerDisclaimerText: {
      en: "All fees, timelines, and statutory criteria displayed on Kagoj are SAMPLE DEMO DATA for reference and must be verified against current official government sources before public legal submission. Kagoj is not an official government portal.",
      bn: "কাগজে প্রদর্শিত সমস্ত ফি, সময়সীমা ও তথ্যাদি নমুনা ডেমো ডেটা হিসেবে ব্যবহৃত। সরকারি কাজে যেকোনো পদক্ষেপ গ্রহণের পূর্বে সংশ্লিষ্ট সরকারি অধিদপ্তর বা পোর্টাল থেকে তা যাচাই করে নেওয়া বাধ্যতামূলক।"
    },
    quickLinks: { en: "Quick Services", bn: "জরুরি সেবা" },
    resources: { en: "Citizen Resources", bn: "নাগরিক গাইড" },
    rightsReserved: {
      en: "All rights reserved. Built for the citizens of Bangladesh.",
      bn: "সর্বস্বত্ব সংরক্ষিত। বাংলাদেশের সকল সচেতন নাগরিকদের জন্য উৎসর্গীকৃত।"
    },

    // Service Detail & Checklist
    checklistTitle: { en: "Required Document Checklist", bn: "প্রয়োজনীয় দলিলের স্মার্ট চেকলিস্ট" },
    readinessScore: { en: "Readiness Score", bn: "প্রস্তুতি স্কোর" },
    readyDocs: { en: "ready", bn: "প্রস্তুত" },
    mandatory: { en: "Mandatory", bn: "বাধ্যতামূলক" },
    optional: { en: "Conditional / If Applicable", bn: "প্রযোজ্য ক্ষেত্রে" },
    speedTiersHeading: { en: "Fee Truth Meter (Official Rates)", bn: "ফি ট্রুথ মিটার (সরকারি রেট)" },
    redFlagAlert: {
      en: "If someone asks for more than this official fee, that's an immediate red flag!",
      bn: "যদি কোনো ব্যক্তি এই সরকারি ফির চেয়ে বেশি অর্থ দাবি করে, তবে তা নিশ্চিতভাবে অবৈধ!"
    },
    commonMistakesHeading: { en: "Common Mistakes That Cause Rejection", bn: "যেসব সাধারণ ভুলের কারণে আবেদন বাতিল হয়" },
    officeFinderHeading: { en: "Office & Visiting Details", bn: "অফিসের তথ্য ও উপস্থিতির সঠিক সময়" },
    printPacketBtn: { en: "Print Application Packet", bn: "প্রিন্টযোগ্য আবেদন সামারি" },
    copySummaryBtn: { en: "Copy Summary", bn: "তথ্য কপি করুন" },
    copiedToast: { en: "Summary copied to clipboard!", bn: "সামারি ক্লিপবোর্ডে কপি করা হয়েছে!" },
    saveToDashboardBtn: { en: "Track in My Journeys", bn: "আমার ড্যাশবোর্ডে সংরক্ষণ" },
    savedSuccessToast: { en: "Added to your saved journeys!", bn: "আপনার ড্যাশবোর্ডে যোগ করা হয়েছে!" },
    removedSuccessToast: { en: "Journey removed from dashboard.", bn: "ড্যাশবোর্ড থেকে মুছে ফেলা হয়েছে।" },

    // Categories
    cat_all: { en: "All Categories", bn: "সকল ক্যাটাগরি" },
    cat_travel: { en: "Travel & Passports", bn: "ভ্রমণ ও পাসপোর্ট" },
    cat_identity: { en: "National Identity", bn: "জাতীয় পরিচয়পত্র" },
    cat_civil: { en: "Civil Records", bn: "নাগরিক নিবন্ধন" },
    cat_business: { en: "Business & Trade", bn: "ব্যবসা ও বাণিজ্য" },
    cat_land: { en: "Land & Property", bn: "ভূমি ও সম্পত্তি" },
    cat_transport: { en: "Transport & Driving", bn: "যানবাহন ও লাইসেন্স" }
  };

  window.KagojI18n = {
    t: function (key, params) {
      const lang = window.KagojState ? window.KagojState.get().lang : "en";
      const entry = DICTIONARY[key];
      if (!entry) return key;

      let text = entry[lang] || entry["en"] || key;
      if (params && typeof params === "object") {
        Object.keys(params).forEach((paramKey) => {
          let val = params[paramKey];
          if (lang === "bn" && typeof val === "number") {
            val = window.toBanglaNumber(val);
          }
          text = text.replace(new RegExp(`{${paramKey}}`, "g"), val);
        });
      }
      return text;
    },

    formatCurrency: function (num) {
      const lang = window.KagojState ? window.KagojState.get().lang : "en";
      if (num === 0) {
        return lang === "bn" ? "বিনামূল্যে (৳০)" : "Free (৳0)";
      }
      if (lang === "bn") {
        return "৳" + window.toBanglaNumber(num.toLocaleString("en-IN"));
      }
      return "৳" + num.toLocaleString("en-IN");
    },

    getDictionary: function () {
      return DICTIONARY;
    }
  };
})();
