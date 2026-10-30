/**
 * THE PICK: KAGOJ — SERVICES SEED DATA
 * All 8 core Bangladesh government processes mapped step-by-step.
 * Prepared for eventual export/sync with Supabase.
 *
 * NOTE: All fees, timelines, and rules are SAMPLE DEMO DATA for
 * educational reference and must be verified at official government portals.
 */

window.KAGOJ_SERVICES = [
  {
    id: "e-passport",
    category: "travel",
    categoryLabel: { en: "Travel & Passports", bn: "ভ্রমণ ও পাসপোর্ট" },
    title: {
      en: "e-Passport / Machine Readable Passport",
      bn: "ই-পাসপোর্ট ও নতুন পাসপোর্ট আবেদন"
    },
    tagline: {
      en: "Complete direct application without brokers, dalal fees, or harassment.",
      bn: "দালালমুক্ত ও নির্ভুলভাবে সরাসরি ই-পাসপোর্ট পাওয়ার সম্পূর্ণ গাইড।"
    },
    whoIsItFor: {
      en: "Any Bangladeshi citizen applying for a new e-Passport or re-issuing an expired passport.",
      bn: "নতুন ই-পাসপোর্ট নিতে ইচ্ছুক অথবা মেয়াদোত্তীর্ণ পাসপোর্ট নবায়নকারী যেকোনো বাংলাদেশি নাগরিক।"
    },
    popularity: 98,
    icon: "passport",
    officialOffice: {
      en: "Department of Immigration & Passports (Regional Passport Office - RPO)",
      bn: "বহিরাগমন ও পাসপোর্ট অধিদপ্তর (আঞ্চলিক পাসপোর্ট অফিস - RPO)"
    },
    workingHours: {
      en: "Sunday to Thursday: 9:00 AM – 3:30 PM (Biometrics cut-off 2:30 PM)",
      bn: "রবিবার থেকে বৃহস্পতিবার: সকাল ৯:০০ – বিকাল ৩:৩০ (বায়োমেট্রিক গ্রহণ দুপুর ২:৩০ পর্যন্ত)"
    },
    bestTimeToVisit: {
      en: "Tuesday or Wednesday at 8:30 AM before morning queues form.",
      bn: "মঙ্গলবার বা বুধবার সকাল ৮:৩০ মিনিটে, মূল লাইন শুরু হওয়ার পূর্বে।"
    },
    lastVerified: "October 2026",
    sampleDataDisclaimer: true,
    officialPortalUrl: "https://www.epassport.gov.bd",
    speedTiers: [
      {
        tierId: "regular",
        title: { en: "Regular Delivery (48 Pages, 5 Years)", bn: "নিয়মিত ডেলিভারি (৪৮ পৃষ্ঠা, ৫ বছর)" },
        feeBDT: 4025,
        timelineDays: "15 to 21 Working Days",
        timelineDaysBn: "১৫ থেকে ২১ কার্যদিবস",
        notes: {
          en: "Standard delivery after automated police verification report.",
          bn: "স্বাভাবিক পুলিশ ক্লিয়ারেন্স রিপোর্টের পর স্ট্যান্ডার্ড ডেলিভারি।"
        }
      },
      {
        tierId: "urgent",
        title: { en: "Express Delivery (48 Pages, 5 Years)", bn: "জরুরি ডেলিভারি (৪৮ পৃষ্ঠা, ৫ বছর)" },
        feeBDT: 6325,
        timelineDays: "7 to 10 Working Days",
        timelineDaysBn: "৭ থেকে ১০ কার্যদিবস",
        notes: {
          en: "Requires fast-track police report clearance.",
          bn: "দ্রুত পুলিশ রিপোর্ট সাপেক্ষে জরুরি ডেলিভারি।"
        }
      },
      {
        tierId: "super_express",
        title: { en: "Super Express Delivery (48 Pages, 10 Years)", bn: "সুপার এক্সপ্রেস (৪৮ পৃষ্ঠা, ১০ বছর)" },
        feeBDT: 8625,
        timelineDays: "2 Working Days",
        timelineDaysBn: "২ কার্যদিবস",
        notes: {
          en: "Requires pre-verified police report or urgent medical/work proof.",
          bn: "পূর্বে পুলিশ ক্লিয়ারেন্স সম্পন্ন থাকলে বা জরুরি চিকিৎসার প্রমাণ সাপেক্ষে।"
        }
      }
    ],
    dalalAlert: {
      en: "Dalals outside RPOs charge ৳10,000–৳15,000 claiming they can 'skip police verification' or 'fix serial lines'. Police verification is entirely digital and automated through the SB network. Never give money to anyone outside the counter!",
      bn: "পাসপোর্ট অফিসের সামনের দালালরা 'পুলিশ ভেরিফিকেশন ম্যানেজ' বা 'লাইনে না দাঁড়িয়ে কাজ' করে দেওয়ার নামে ১০,০০০ থেকে ১৫,০০০ টাকা পর্যন্ত দাবি করে। বাস্তবে পুলিশ তদন্ত সম্পূর্ণ ডিজিটাল ও সরকারি ফি-র মধ্যেই অন্তর্ভুক্ত। কাউকে অতিরিক্ত ১ টাকাও দেবেন না!"
    },
    requiredDocuments: [
      {
        id: "doc-nid-brc",
        title: {
          en: "Original National ID (NID) or 17-digit Online Birth Certificate",
          bn: "মূল জাতীয় পরিচয়পত্র (NID) অথবা ১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ"
        },
        notes: {
          en: "Age 18+ must show Smart NID; under 18 requires verifiable BDRIS birth certificate.",
          bn: "১৮ বা তদূর্ধ্বদের জন্য স্মার্ট এনআইডি আবশ্যক; ১৮ এর নিচে হলে BDRIS অনলাইন জন্ম সনদ।"
        },
        isMandatory: true,
        whereToGet: { en: "Election Commission / BDRIS", bn: "নির্বাচন কমিশন / বিডিআরআইএস" }
      },
      {
        id: "doc-app-summary",
        title: {
          en: "Printed Application Summary & Payment Challan Receipt",
          bn: "অনলাইন আবেদনের প্রিন্ট কপি ও ব্যাংক চালান / এ-চালান পেমেন্ট স্লিপ"
        },
        notes: {
          en: "Print in A4 format with clear barcode; pay fee via A-Challan / bKash / designated banks.",
          bn: "বারকোডযুক্ত আবেদন কপি এবং এ-চালান বা ব্যাংকে সরকারি ফি পরিশোধের রশিদ।"
        },
        isMandatory: true,
        whereToGet: { en: "epassport.gov.bd Portal", bn: "ই-পাসপোর্ট অনলাইন পোর্টাল" }
      },
      {
        id: "doc-utility-bill",
        title: {
          en: "Present Address Verification (Electricity/Gas Bill Copy or Ward Certificate)",
          bn: "বর্তমান ঠিকানার প্রমাণপত্র (বিদ্যুৎ বিলের কপি বা কাউন্সিলর প্রত্যয়নপত্র)"
        },
        notes: {
          en: "Needed if your present residence differs from permanent NID address.",
          bn: "স্থায়ী ও বর্তমান ঠিকানা ভিন্ন হলে বর্তমান ঠিকানার সমর্থনে লাগবে।"
        },
        isMandatory: false,
        whereToGet: { en: "DESCO/DPDC/Local Ward Councilor", bn: "বিদ্যুৎ অফিস / ওয়ার্ড কাউন্সিলর" }
      },
      {
        id: "doc-old-passport",
        title: {
          en: "Original Previous Passport & Photocopy (For Re-issue only)",
          bn: "পূর্ববর্তী পাসপোর্টের মূল কপি ও ফটোকপি (কেবল নবায়নের ক্ষেত্রে)"
        },
        notes: {
          en: "Only required if you already held an MRP or older e-Passport.",
          bn: "পূর্বে পাসপোর্ট থেকে থাকলে নবায়নের সময় প্রদর্শন করতে হবে।"
        },
        isMandatory: false,
        whereToGet: { en: "Applicant's Possession", bn: "আবেদনকারীর নিজস্ব কপি" }
      },
      {
        id: "doc-noc-go",
        title: {
          en: "NOC / Government Order (For Public Servants & Armed Forces)",
          bn: "এনওসি (NOC) বা সরকারি আদেশ (সরকারি চাকরিজীবীদের জন্য)"
        },
        notes: {
          en: "Authorized departmental clearance on official ministry letterhead.",
          bn: "বিভাগীয় অনাপত্তিপত্র যা মন্ত্রণালয়ের ওয়েবসাইটে আপলোডকৃত।"
        },
        isMandatory: false,
        whereToGet: { en: "Employer Department", bn: "কর্মকর্তার নিজস্ব কর্মস্থল" }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Online Registration & Portal Account", bn: "অনলাইন পোর্টাল অ্যাকাউন্ট তৈরি ও ফর্ম পূরণ" },
        description: {
          en: "Visit epassport.gov.bd, create an account using your active mobile number and email, select your district and local police station, and enter your personal details exactly matching your NID/BRC.",
          bn: "epassport.gov.bd পোর্টালে যান, মোবাইল ও ইমেইল দিয়ে অ্যাকাউন্ট খুলুন। নিজের এনআইডি/জন্ম সনদের হুবহু বানান অনুযায়ী তথ্য দিন।"
        },
        where: { en: "Online (epassport.gov.bd)", bn: "অনলাইন (epassport.gov.bd)" },
        estTime: { en: "25–35 minutes", bn: "২৫–৩৫ মিনিট" },
        tips: {
          en: "Double check your father's and mother's names against your educational certificates or NID.",
          bn: "পিতা-মাতার নামের বানান এনআইডি ও সার্টিফিকেটের সাথে মিলিয়ে নিন।"
        }
      },
      {
        stepNumber: 2,
        title: { en: "Pay Official Government Fee via A-Challan", bn: "এ-চালান বা ব্যাংকের মাধ্যমে সরকারি ফি প্রদান" },
        description: {
          en: "Pay the exact passport fee using A-Challan (bKash/Nagad/Cards) or at Sonali, Premier, Bank Asia branches. Print the bank payment slip.",
          bn: "সোনালী ব্যাংক, বিকাশ বা এ-চালানের মাধ্যমে নির্ধারিত ফি পরিশোধ করে রশিদটি প্রিন্ট করে সংরক্ষণ করুন।"
        },
        where: { en: "Online A-Challan / Bank Counter", bn: "অনলাইন এ-চালান বা নির্ধারিত ব্যাংক" },
        estTime: { en: "10 minutes", bn: "১০ মিনিট" },
        tips: {
          en: "Keep the transaction ID and barcode page intact. No extra bank charge beyond VAT.",
          bn: "চালান নম্বর ও বারকোড পরিষ্কারভাবে প্রিন্ট করুন।"
        }
      },
      {
        stepNumber: 3,
        title: { en: "Biometric Enrollment at Passport Office", bn: "আঞ্চলিক পাসপোর্ট অফিসে বায়োমেট্রিক ও ছবি প্রদান" },
        description: {
          en: "Visit your assigned Regional Passport Office on the appointment date. Bring your printed application summary, payment receipt, and original NID. Submit documents, get 10-fingerprint scan, iris scan, and digital photo.",
          bn: "নির্ধারিত তারিখে মূল এনআইডি ও আবেদন কপি নিয়ে অফিসে উপস্থিত হন। ১০ আঙুলের ছাপ, চোখের আইরিশ এবং ডিজিটাল ছবি দিন।"
        },
        where: { en: "Assigned Regional Passport Office (RPO)", bn: "আঞ্চলিক পাসপোর্ট অফিস (RPO)" },
        estTime: { en: "1–2 hours", bn: "১–২ ঘণ্টা" },
        tips: {
          en: "Wear dark-colored collared shirt for a crisp passport photo. Eyeglasses must be removed.",
          bn: "ছবির জন্য গাঢ় রঙের পোশাক পরিধান করুন। চশমা খুলে ছবি তুলতে হবে।"
        }
      },
      {
        stepNumber: 4,
        title: { en: "Police Verification (SB Inquiry)", bn: "স্পেশাল ব্রাঞ্চ (SB) পুলিশ ভেরিফিকেশন" },
        description: {
          en: "The Special Branch officer will contact you by phone to verify your residential address and identity documents. Cooperate directly; this is completely free.",
          bn: "ডিএসবি/এসবি তদন্তকারী কর্মকর্তা ফোন দিয়ে ঠিকানা যাচাই করবেন। প্রয়োজনীয় কাগজপত্র দেখালেই রিপোর্ট অনলাইনে চলে যাবে।"
        },
        where: { en: "Your Residence or Thana SB Office", bn: "আবেদনকারীর ঠিকানা বা থানা এসবি অফিস" },
        estTime: { en: "3–7 days", bn: "৩–৭ দিন" },
        tips: {
          en: "Police verification has zero official fee. Never offer or agree to informal payments.",
          bn: "পুলিশ তদন্তের কোনো সরকারি ফি নেই। কাউকে বকশিশ বা অতিরিক্ত অর্থ দেওয়া বেআইনি।"
        }
      },
      {
        stepNumber: 5,
        title: { en: "Collection with Delivery Slip", bn: "ডেলিভারি স্লিপ দেখিয়ে পাসপোর্ট সংগ্রহ" },
        description: {
          en: "Once you receive the SMS 'Passport is ready for issuance', visit the RPO counter with your enrollment delivery slip and original NID to collect your e-Passport.",
          bn: "মোবাইলে এসএমএস আসার পর মূল ডেলিভারি স্লিপ ও এনআইডি প্রদর্শন করে কাউন্টার থেকে পাসপোর্ট গ্রহণ করুন।"
        },
        where: { en: "Passport Office Delivery Counter", bn: "পাসপোর্ট অফিসের ডেলিভারি কাউন্টার" },
        estTime: { en: "15–30 minutes", bn: "১৫–৩০ মিনিট" },
        tips: {
          en: "Inspect printed details (name, date of birth, photo) before leaving the counter.",
          bn: "কাউন্টার ছাড়ার আগেই পাসপোর্টের নাম ও জন্মতারিখ নির্ভুল আছে কিনা পরীক্ষা করুন।"
        }
      }
    ],
    commonMistakes: [
      {
        mistake: {
          en: "Spelling discrepancies between NID and Educational Certificates.",
          bn: "এনআইডি কার্ড ও শিক্ষাগত সার্টিফিকেটের নামের বানানের অমিল।"
        },
        fix: {
          en: "Passport system strictly checks NID database. If your certificates differ, correct your NID first before applying.",
          bn: "পাসপোর্ট সরাসরি এনআইডি সার্ভার যাচাই করে। অমিল থাকলে আগে নির্বাচন কমিশন থেকে এনআইডি সংশোধন করুন।"
        }
      },
      {
        mistake: {
          en: "Selecting the wrong Passport Office jurisdiction.",
          bn: "আবাসিক এলাকার আওতাধীন সঠিক পাসপোর্ট অফিস নির্বাচন না করা।"
        },
        fix: {
          en: "Select the RPO linked to your present address police station; otherwise your application will be rejected at enrollment.",
          bn: "বর্তমান ঠিকানার থানা অনুযায়ী নির্ধারিত সঠিক আঞ্চলিক অফিস নির্বাচন করুন।"
        }
      },
      {
        mistake: {
          en: "Paying Dalals for 'VIP Line access'.",
          bn: "লাইনে না দাঁড়ানোর জন্য দালালকে টাকা দেওয়া।"
        },
        fix: {
          en: "RPOs operate computerized token queues. Dalals have no control over the biometric booths.",
          bn: "বায়োমেট্রিক সিস্টেম ডিজিটাল টোকেন নিয়ন্ত্রিত, দালালের কোনো হস্তক্ষেপের সুযোগ নেই।"
        }
      }
    ]
  },
  {
    id: "nid-correction",
    category: "identity",
    categoryLabel: { en: "National Identity", bn: "জাতীয় পরিচয়পত্র" },
    title: {
      en: "NID Information Correction",
      bn: "জাতীয় পরিচয়পত্র (NID) তথ্য সংশোধন"
    },
    tagline: {
      en: "Correct name, birth date, parentage, or address through the official Election Commission portal.",
      bn: "নির্বাচন কমিশনের অফিসিয়াল সার্ভিসের মাধ্যমে ঘরে বসেই এনআইডি সংশোধন করুন।"
    },
    whoIsItFor: {
      en: "Citizens whose printed NID card contains spelling errors, wrong birth year, or outdated marital status.",
      bn: "যাদের এনআইডি কার্ডে নামের বানান, জন্মতারিখ, পিতা-মাতার নাম বা বৈবাহিক তথ্যে ভুল রয়েছে।"
    },
    popularity: 94,
    icon: "id-card",
    officialOffice: {
      en: "Bangladesh Election Commission (Upazila / Thana Election Office)",
      bn: "বাংলাদেশ নির্বাচন কমিশন (উপজেলা / থানা নির্বাচন অফিস)"
    },
    workingHours: {
      en: "Sunday to Thursday: 9:00 AM – 4:00 PM (Online portal 24/7)",
      bn: "রবিবার থেকে বৃহস্পতিবার: সকাল ৯:০০ – বিকাল ৪:০০ (অনলাইন পোর্টাল সার্বক্ষণিক)"
    },
    bestTimeToVisit: {
      en: "Sunday morning around 10:00 AM for officer document verification hearings.",
      bn: "রবিবার সকাল ১০:০০ টায় শুনানি বা মূল কাগজপত্র প্রদর্শনের জন্য।"
    },
    lastVerified: "October 2026",
    sampleDataDisclaimer: true,
    officialPortalUrl: "https://services.nidw.gov.bd",
    speedTiers: [
      {
        tierId: "regular",
        title: { en: "Category 'Ka' (Basic Typing / Minor Errors)", bn: "ক্যাটাগরি 'ক' (সাধারণ টাইপিং বা ছোটখাটো ভুল)" },
        feeBDT: 230,
        timelineDays: "7 to 15 Working Days",
        timelineDaysBn: "৭ থেকে ১৫ কার্যদিবস",
        notes: {
          en: "Upazila Election Officer approval; requires SSC or Birth certificate.",
          bn: "উপজেলা নির্বাচন অফিসার অনুমোদন করেন; এসএসসি বা অনলাইন জন্ম সনদ প্রয়োজন।"
        }
      },
      {
        tierId: "urgent",
        title: { en: "Category 'Kha' (Major Name / Birth Date Shift)", bn: "ক্যাটাগরি 'খ' (গুরুতর নাম বা জন্মতারিখ পরিবর্তন)" },
        feeBDT: 345,
        timelineDays: "20 to 30 Working Days",
        timelineDaysBn: "২০ থেকে ৩০ কার্যদিবস",
        notes: {
          en: "District Senior Election Officer committee review with hearing.",
          bn: "জেলা নির্বাচন অফিসারের কমিটি কর্তৃক যাচাই ও সরাসরি শুনানি।"
        }
      },
      {
        tierId: "complex",
        title: { en: "Category 'Ga' (Full Identity / Parentage Re-declaration)", bn: "ক্যাটাগরি 'গ' (সম্পূর্ণ নাম বা পিতা-মাতার নাম বদল)" },
        feeBDT: 575,
        timelineDays: "30 to 45 Working Days",
        timelineDaysBn: "৩০ থেকে ৪৫ কার্যদিবস",
        notes: {
          en: "Regional Election Officer approval; requires Magistrate Court Affidavit.",
          bn: "আঞ্চলিক নির্বাচন কর্মকর্তা অনুমোদন করেন; ম্যাজিস্ট্রেট কোর্টের হলফনামা আবশ্যক।"
        }
      }
    ],
    dalalAlert: {
      en: "Photocopy shops and brokers often claim: 'Give me ৳5,000 and I will change your birth year by 5 years overnight.' This is completely fraudulent! The Election Commission relies on a secure central database; unbacked alterations are caught by audit and can get your NID blocked permanently.",
      bn: "দোকানি বা দালালরা দাবি করে ৫,০০০ টাকা দিলে একদিনে বয়স ৫ বছর কমিয়ে দেওয়া যাবে। এটি চরম প্রতারণা! নির্বাচন কমিশনের ডেটাবেজ কঠোর নিরাপত্তাবেষ্টিত। ভুয়া কাগজ দিলে এনআইডি লক ও আইনি জটিলতা তৈরি হয়।"
    },
    requiredDocuments: [
      {
        id: "doc-ssc-cert",
        title: {
          en: "SSC / Equivalent Board Certificate or Admit Card",
          bn: "এসএসসি / সমমান বোর্ড পরীক্ষার মূল সনদ বা প্রবেশপত্র"
        },
        notes: {
          en: "Highest priority document for correcting own name and date of birth.",
          bn: "নিজের নাম ও জন্মতারিখ সংশোধনের সর্বোচ্চ গ্রহণযোগ্য প্রমাণপত্র।"
        },
        isMandatory: true,
        whereToGet: { en: "Education Board", bn: "শিক্ষা বোর্ড" }
      },
      {
        id: "doc-online-brc",
        title: {
          en: "17-digit Verifiable Online Birth Certificate",
          bn: "১৭ সংখ্যার ডিজিটাল অনলাইন জন্ম নিবন্ধন সনদ"
        },
        notes: {
          en: "Mandatory if the applicant does not hold an educational certificate.",
          bn: "শিক্ষাগত সনদ না থাকলে অনলাইন জন্ম সনদ প্রাথমিক প্রমাণ হিসেবে গৃহীত হয়।"
        },
        isMandatory: true,
        whereToGet: { en: "Union Parishad / City Corporation", bn: "ইউনিয়ন পরিষদ / সিটি কর্পোরেশন" }
      },
      {
        id: "doc-parents-nid",
        title: {
          en: "Parents' National ID Card copies",
          bn: "পিতা ও মাতার জাতীয় পরিচয়পত্রের ফটোকপি"
        },
        notes: {
          en: "Compulsory when correcting father's or mother's name spelling.",
          bn: "পিতা বা মাতার নাম সংশোধনের ক্ষেত্রে তাদের এনআইডি আবশ্যক।"
        },
        isMandatory: false,
        whereToGet: { en: "Family", bn: "পারিবারিক সংগ্রহ" }
      },
      {
        id: "doc-magistrate-affidavit",
        title: {
          en: "1st Class Magistrate Court Sworn Affidavit (If changing entire name)",
          bn: "প্রথম শ্রেণীর ম্যাজিস্ট্রেট আদালতের হলফনামা (নাম আমূল পরিবর্তনের ক্ষেত্রে)"
        },
        notes: {
          en: "On ৳300 non-judicial stamp, signed before a learned magistrate.",
          bn: "৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে স্বাক্ষরিত আদালতের হলফনামা।"
        },
        isMandatory: false,
        whereToGet: { en: "District Judicial Court", bn: "জেলা জজ আদালত" }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Login to NID Wing Citizen Services", bn: "এনআইডি উইং পোর্টালে লগইন ও ফেস ভেরিফিকেশন" },
        description: {
          en: "Go to services.nidw.gov.bd. Enter your NID number and date of birth. Scan the QR code using the official NID Wallet app on your mobile phone to complete biometric face verification.",
          bn: "services.nidw.gov.bd এ যান। এনআইডি নম্বর ও জন্মতারিখ দিয়ে NID Wallet অ্যাপের মাধ্যমে ফেস ভেরিফিকেশন সম্পন্ন করুন।"
        },
        where: { en: "Online (services.nidw.gov.bd & NID Wallet)", bn: "অনলাইন ও মোবাইল NID Wallet অ্যাপ" },
        estTime: { en: "10 minutes", bn: "১০ মিনিট" },
        tips: {
          en: "Ensure good lighting and remove glasses while completing the NID Wallet facial scan.",
          bn: "ফেস স্ক্যানের সময় পর্যাপ্ত আলো রাখুন এবং ক্যামেরার সামনে মুখ স্থির রাখুন।"
        }
      },
      {
        stepNumber: 2,
        title: { en: "Select Correction Fields & Edit Details", bn: "সংশোধনযোগ্য ফিল্ড নির্বাচন ও সঠিক তথ্য প্রদান" },
        description: {
          en: "Click 'Profile Edit'. Check the checkbox next to the specific fields you want to change (e.g., Name, Birth Date, Father's Name) and enter the exact revised details.",
          bn: "'তথ্য পরিবর্তন' অপশনে গিয়ে যে তথ্য ভুল আছে তার টিক বক্সে ক্লিক করে সঠিক তথ্য টাইপ করুন।"
        },
        where: { en: "Citizen Dashboard", bn: "নাগরিক ড্যাশবোর্ড" },
        estTime: { en: "15 minutes", bn: "১৫ মিনিট" },
        tips: {
          en: "Double check Bengali fonts and English spellings carefully before progressing.",
          bn: "বাংলা ও ইংরেজি উভয় বানানের নির্ভুলতা ভালো করে মিলিয়ে নিন।"
        }
      },
      {
        stepNumber: 3,
        title: { en: "Pay Official EC Revision Fee via bKash / Rocket", bn: "বিকাশ বা রকেটের মাধ্যমে নির্ধারিত ফি প্রদান" },
        description: {
          en: "Open bKash/Rocket app, select 'Pay Bill' -> 'NID Service', enter your NID number and pay the fee (৳230–৳345). The system automatically credits your application.",
          bn: "বিকাশ অ্যাপে 'পে বিল' > 'সরকারি ফি' > 'NID Service' সিলেক্ট করে এনআইডি নম্বর দিয়ে ফি জমা দিন।"
        },
        where: { en: "bKash / Nagad / Rocket Mobile App", bn: "বিকাশ / নগদ / রকেট মোবাইল অ্যাপ" },
        estTime: { en: "3 minutes", bn: "৩ মিনিট" },
        tips: {
          en: "No additional challan paperwork is needed when paying via bKash bill pay.",
          bn: "বিকাশে পেমেন্ট করলে তাৎক্ষণিক চালান জেনারেট হয়ে সার্ভারে যুক্ত হয়।"
        }
      },
      {
        stepNumber: 4,
        title: { en: "Upload Color Scanned Supporting Proofs", bn: "প্রয়োজনীয় দলিলের স্পষ্ট স্ক্যান কপি আপলোড" },
        description: {
          en: "Attach clean PDF or JPG scans of your SSC certificate, online birth registration, and parents' NID copies. Submit the application.",
          bn: "এসএসসি সনদ, জন্ম নিবন্ধন সনদ ও পিতা-মাতার এনআইডির রঙিন স্ক্যান কপি আপলোড করে সাবমিট করুন।"
        },
        where: { en: "Online Portal Upload Window", bn: "অনলাইন পোর্টাল আপলোড উইন্ডো" },
        estTime: { en: "10 minutes", bn: "১০ মিনিট" },
        tips: {
          en: "Keep file sizes under 2MB each and ensure all four corners of the document are visible.",
          bn: "ফাইলের সাইজ ২ মেগাবাইটের মধ্যে রাখুন এবং চার কোণা যেন স্পষ্ট দেখা যায়।"
        }
      },
      {
        stepNumber: 5,
        title: { en: "Hearing (If Called) & Download Corrected e-NID", bn: "শুনানি (প্রয়োজনে) ও সংশোধিত ই-এনআইডি ডাউনলোড" },
        description: {
          en: "The Election Officer reviews the request. If approved, you receive an approval SMS. Download the digital corrected National ID directly from the portal.",
          bn: "আবেদন অনুমোদিত হলে মোবাইলে এসএমএস পাবেন। পোর্টাল থেকে বিনামূল্যে সংশোধিত অনলাইন এনআইডি ডাউনলোড করে প্রিন্ট করুন।"
        },
        where: { en: "Online Portal Download Section", bn: "অনলাইন পোর্টাল ডাউনলোড সেকশন" },
        estTime: { en: "Instant upon approval", bn: "অনুমোদনের সাথে সাথে" },
        tips: {
          en: "The downloaded color PDF is 100% legally valid across all banks and government offices.",
          bn: "ডাউনলোডকৃত রঙিন লেমিনেটেড কপি সকল সরকারি ও ব্যাংকিং কাজে সম্পূর্ণ বৈধ।"
        }
      }
    ],
    commonMistakes: [
      {
        mistake: {
          en: "Uploading phone snapshots of blurred, folded documents.",
          bn: "মোবাইলে অস্পষ্ট বা বাঁকা করে তোলা দলিলের ছবি আপলোড করা।"
        },
        fix: {
          en: "Use a flatbed scanner or scanner app (like Adobe Scan) to upload straight, high-resolution PDFs.",
          bn: "স্ক্যানার দিয়ে দলিলের লেখা পরিষ্কার দেখা যায় এমন সোজা রঙিন স্ক্যান কপি আপলোড করুন।"
        }
      },
      {
        mistake: {
          en: "Applying for birth year change without educational board certificate.",
          bn: "বোর্ড সার্টিফিকেট ছাড়া এনআইডিতে নিজের ইচ্ছামতো বয়স পরিবর্তনের চেষ্টা করা।"
        },
        fix: {
          en: "Election Commission guidelines mandate school certificates for educated applicants. Without them, age change applications are almost universally rejected.",
          bn: "শিক্ষিত নাগরিকদের ক্ষেত্রে শিক্ষাগত সনদের বাইরে বয়স পরিবর্তন প্রায় অসম্ভব।"
        }
      }
    ]
  },
  {
    id: "birth-certificate",
    category: "civil",
    categoryLabel: { en: "Civil Records", bn: "নাগরিক নিবন্ধন" },
    title: {
      en: "Online Birth Registration Certificate (BDRIS)",
      bn: "অনলাইন ডিজিটাল জন্ম নিবন্ধন সনদ (BDRIS)"
    },
    tagline: {
      en: "Register newborn or convert manual 13-digit certificate to 17-digit digital format.",
      bn: "নবজাতকের নতুন নিবন্ধন অথবা ম্যানুয়াল জন্ম সনদ ১৭ ডিজিটে ডিজিটাল করার নিয়ম।"
    },
    whoIsItFor: {
      en: "Parents of newborns, or adults upgrading their hand-written birth certificate to modern 17-digit online format.",
      bn: "নবজাতকের পিতা-মাতা অথবা পুরাতন হাতের লেখা জন্ম সনদ ডিজিটাল করতে চাওয়া যেকোনো নাগরিক।"
    },
    popularity: 92,
    icon: "file-text",
    officialOffice: {
      en: "Union Parishad / City Corporation Ward Councilor Office / Cantonment Board",
      bn: "ইউনিয়ন পরিষদ / সিটি কর্পোরেশন ওয়ার্ড কাউন্সিলর কার্যালয় / পৌরসভা"
    },
    workingHours: {
      en: "Sunday to Thursday: 9:00 AM – 3:30 PM",
      bn: "রবিবার থেকে বৃহস্পতিবার: সকাল ৯:০০ – বিকাল ৩:৩০"
    },
    bestTimeToVisit: {
      en: "Monday or Wednesday morning at 10:30 AM.",
      bn: "সোমবার বা বুধবার সকাল ১০:৩০ টায়।"
    },
    lastVerified: "October 2026",
    sampleDataDisclaimer: true,
    officialPortalUrl: "https://bdris.gov.bd",
    speedTiers: [
      {
        tierId: "regular",
        title: { en: "Child (Within 45 Days of Birth)", bn: "শিশু (জন্মের ৪৫ দিনের মধ্যে)" },
        feeBDT: 0,
        timelineDays: "3 to 7 Working Days",
        timelineDaysBn: "৩ থেকে ৭ কার্যদিবস",
        notes: {
          en: "Completely free of charge as per Bangladesh Government law.",
          bn: "সরকারি আইন অনুযায়ী জন্মের ৪৫ দিনের মধ্যে নিবন্ধন সম্পূর্ণ বিনামূল্যে।"
        }
      },
      {
        tierId: "child_upto_5",
        title: { en: "Child (46 Days to 5 Years)", bn: "শিশু (৪৬ দিন থেকে ৫ বছরের মধ্যে)" },
        feeBDT: 25,
        timelineDays: "5 to 10 Working Days",
        timelineDaysBn: "৫ থেকে ১০ কার্যদিবস",
        notes: {
          en: "Nominal fee payable at local council counter.",
          bn: "স্থানীয় পৌরসভা বা ইউনিয়ন পরিষদে নির্ধারিত নামমাত্র ফি।"
        }
      },
      {
        tierId: "adult_correction",
        title: { en: "Adult / 5+ Years Old Registration", bn: "৫ বছরের ঊর্ধ্বে যেকোনো নাগরিকের নিবন্ধন" },
        feeBDT: 50,
        timelineDays: "7 to 15 Working Days",
        timelineDaysBn: "৭ থেকে ১৫ কার্যদিবস",
        notes: {
          en: "Requires EPI immunization card or medical officer age certificate.",
          bn: "ইপিআই টিকা কার্ড বা সরকারি ডাক্তারের প্রত্যয়নপত্র প্রয়োজন।"
        }
      }
    ],
    dalalAlert: {
      en: "Computer shops and brokers often demand ৳500–৳2,000 for birth certificate registration. The official government fee is ONLY ৳0 to ৳50! You can fill the form yourself in 10 minutes on bdris.gov.bd from your own smartphone.",
      bn: "কম্পিউটার দোকানদাররা ডিজিটাল জন্ম সনদের জন্য ৫০০ থেকে ২,০০০ টাকা দাবি করে। অথচ সরকারি ফি সর্বোচ্চ ৫০ টাকা (নবজাতকের ক্ষেত্রে ০ টাকা)! আপনি নিজে স্মার্টফোনেই bdris.gov.bd থেকে সরাসরি আবেদন করতে পারেন।"
    },
    requiredDocuments: [
      {
        id: "doc-epi-card",
        title: {
          en: "EPI Vaccination Card / Hospital Discharge Certificate",
          bn: "ইপিআই (EPI) টিকা কার্ড বা হাসপাতালের ছাড়পত্র"
        },
        notes: {
          en: "Proves date and exact place of birth with doctor's seal.",
          bn: "জন্মের সুনির্দিষ্ট তারিখ ও হাসপাতাল কর্তৃপক্ষের সিলযুক্ত প্রমাণপত্র।"
        },
        isMandatory: true,
        whereToGet: { en: "Hospital / EPI Vaccine Center", bn: "হাসপাতাল বা ইপিআই টিকাদান কেন্দ্র" }
      },
      {
        id: "doc-parents-digital-brc",
        title: {
          en: "Parents' 17-digit Online Birth Registration Certificates",
          bn: "পিতা ও মাতার ১৭ ডিজিটের ডিজিটাল অনলাইন জন্ম নিবন্ধন সনদ"
        },
        notes: {
          en: "Mandatory for registering a child born after 2001.",
          bn: "২০০১ সালের পর জন্ম নেওয়া শিশুদের ক্ষেত্রে পিতা-মাতার অনলাইন সনদ বাধ্যতামূলক।"
        },
        isMandatory: true,
        whereToGet: { en: "BDRIS Database", bn: "বিডিআরআইএস ডেটাবেজ" }
      },
      {
        id: "doc-holding-tax",
        title: {
          en: "Local Municipal Holding Tax Receipt / Land Revenue Khajna Receipt",
          bn: "পৌরসভা বা ইউনিয়ন পরিষদের হোল্ডিং ট্যাক্স রশিদ বা জমির খাজনা রশিদ"
        },
        notes: {
          en: "Confirms permanent residence within the jurisdiction.",
          bn: "উক্ত ইউনিয়নে স্থায়ীভাবে বসবাসের প্রমাণস্বরূপ হালনাগাদ রশিদ।"
        },
        isMandatory: true,
        whereToGet: { en: "Local Parishad / Land Office", bn: "স্থানীয় পরিষদ বা ভূমি অফিস" }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Submit Online Application on BDRIS", bn: "BDRIS পোর্টালে অনলাইন আবেদন দাখিল" },
        description: {
          en: "Navigate to bdris.gov.bd -> Birth Registration Application. Select the office where you wish to apply (Union Parishad, Pourashava, or City Corporation Ward). Fill in the child's and parents' details in both English and Bengali.",
          bn: "bdris.gov.bd এ গিয়ে 'জন্ম নিবন্ধন আবেদন' ফরম পূরণ করুন। স্থানীয় ইউনিয়ন বা ওয়ার্ড অফিস নির্বাচন করুন এবং বাংলা ও ইংরেজিতে তথ্য দিন।"
        },
        where: { en: "Online (bdris.gov.bd)", bn: "অনলাইন (bdris.gov.bd)" },
        estTime: { en: "15 minutes", bn: "১৫ মিনিট" },
        tips: {
          en: "Enter names in English with exact capital letters matching family passports/NIDs.",
          bn: "ইংরেজি নামের বানান পিতা-মাতার এনআইডি/পাসপোর্টের সাথে হুবহু মিলিয়ে লিখুন।"
        }
      },
      {
        stepNumber: 2,
        title: { en: "Print Form & Attach Supporting Documents", bn: "আবেদনপত্র প্রিন্ট ও প্রয়োজনীয় কাগজ সংযুক্তি" },
        description: {
          en: "Print the generated application form containing the application tracking ID. Attach copies of the EPI immunization card, parents' NIDs, and holding tax receipt.",
          bn: "অ্যাপ্লিকেশন আইডিসহ ফর্মটি প্রিন্ট করুন এবং সাথে টিকা কার্ড, পিতা-মাতার এনআইডি ও হোল্ডিং ট্যাক্স রশিদের কপি যুক্ত করুন।"
        },
        where: { en: "Home / Any Printer", bn: "নিজস্ব প্রিন্টার বা কপি সেন্টার" },
        estTime: { en: "5 minutes", bn: "৫ মিনিট" },
        tips: {
          en: "Applications expire on the server after 15 days if not submitted to the council.",
          bn: "১৫ দিনের মধ্যে স্থানীয় অফিসে কাগজ জমা না দিলে অনলাইন আবেদন স্বয়ংক্রিয় বাতিল হয়।"
        }
      },
      {
        stepNumber: 3,
        title: { en: "Submit at Local Parishad / Ward Councilor Counter", bn: "স্থানীয় পরিষদ বা ওয়ার্ড কাউন্সিলর অফিসে জমা প্রদান" },
        description: {
          en: "Hand over the packet to the registration assistant at your local office. Pay the official fee (৳0 to ৳50) and obtain the stamped acknowledgment slip.",
          bn: "ওয়ার্ড কাউন্সিলর বা ইউনিয়ন পরিষদ কার্যালয়ে দায়িত্বপ্রাপ্ত কর্মকর্তার নিকট জমা দিন এবং সরকারি ফি পরিশোধ করে রশিদ নিন।"
        },
        where: { en: "Ward Councilor / Union Parishad Office", bn: "ওয়ার্ড কাউন্সিলর / ইউনিয়ন পরিষদ কার্যালয়" },
        estTime: { en: "15–30 minutes", bn: "১৫–৩০ মিনিট" },
        tips: {
          en: "Always demand the official printed municipal receipt for any fee paid.",
          bn: "যেকোনো ফি প্রদানের বিপরীতে পৌর বা পরিষদ রশিদ অবশ্যই সংগ্রহ করবেন।"
        }
      },
      {
        stepNumber: 4,
        title: { en: "Collect Stamped 17-digit Bilingual Certificate", bn: "সিল ও বারকোডযুক্ত ১৭ সংখ্যার দ্বৈত ভাষার মূল সনদ সংগ্রহ" },
        description: {
          en: "Return on the specified date (usually within 3-7 days) to collect the official printed birth certificate featuring the government watermarked paper and holographic stamp.",
          bn: "নির্দিষ্ট তারিখে গিয়ে সরকারি ওয়াটারমার্ক ও কিউআর কোড সংবলিত মূল ডিজিটাল সনদ সংগ্রহ করুন।"
        },
        where: { en: "Local Office Delivery Desk", bn: "স্থানীয় অফিস ডেলিভারি ডেস্ক" },
        estTime: { en: "10 minutes", bn: "১০ মিনিট" },
        tips: {
          en: "Verify that the 17-digit certificate number verifies live on everify.bdris.gov.bd before leaving.",
          bn: "কাউন্টারেই everify.bdris.gov.bd এ ১৭ ডিজিটের নম্বরটি দিয়ে অনলাইন স্ট্যাটাস যাচাই করে নিন।"
        }
      }
    ],
    commonMistakes: [
      {
        mistake: {
          en: "Parents not possessing digital 17-digit certificates before applying for child.",
          bn: "সন্তানের আবেদনের আগে পিতা-মাতার ১৭ ডিজিটের ডিজিটাল জন্ম সনদ না থাকা।"
        },
        fix: {
          en: "Update both parents' birth registration online first; BDRIS will block the child's entry without parental online numbers.",
          bn: "সন্তানের আগে পিতা ও মাতার পুরাতন জন্ম সনদ ডিজিটাল করে নিতে হবে।"
        }
      }
    ]
  },
  {
    id: "trade-license",
    category: "business",
    categoryLabel: { en: "Business & Commerce", bn: "ব্যবসা ও বাণিজ্য" },
    title: {
      en: "New Trade License for Business",
      bn: "নতুন ব্যবসার ট্রেড লাইসেন্স প্রাপ্তি"
    },
    tagline: {
      en: "Obtain your official local municipal commercial trade license legally and directly.",
      bn: "পৌরসভা বা সিটি কর্পোরেশন থেকে ব্যবসার বৈধ ট্রেড লাইসেন্স নেওয়ার সম্পূর্ণ প্রক্রিয়া।"
    },
    whoIsItFor: {
      en: "Entrepreneurs, shop owners, freelancers, e-commerce sellers, and small business founders.",
      bn: "নতুন দোকানদার, উদ্যোক্তা, ফ্রিল্যান্সার ও ব্যবসায়িক প্রতিষ্ঠান শুরু করতে চাওয়া নাগরিকবৃন্দ।"
    },
    popularity: 88,
    icon: "briefcase",
    officialOffice: {
      en: "City Corporation Zone Office / Pourashava / Union Parishad",
      bn: "সিটি কর্পোরেশন অঞ্চল অফিস / পৌরসভা / ইউনিয়ন পরিষদ"
    },
    workingHours: {
      en: "Sunday to Thursday: 9:30 AM – 3:30 PM",
      bn: "রবিবার থেকে বৃহস্পতিবার: সকাল ৯:৩০ – বিকাল ৩:৩০"
    },
    bestTimeToVisit: {
      en: "Sunday or Tuesday around 11:00 AM.",
      bn: "রবিবার বা মঙ্গলবার বেলা ১১:০০ টায়।"
    },
    lastVerified: "October 2026",
    sampleDataDisclaimer: true,
    officialPortalUrl: "https://etradelicense.gov.bd",
    speedTiers: [
      {
        tierId: "union_parishad",
        title: { en: "Union Parishad General Small Shop", bn: "ইউনিয়ন পরিষদ সাধারণ দোকান / ব্যবসা" },
        feeBDT: 500,
        timelineDays: "1 to 2 Working Days",
        timelineDaysBn: "১ থেকে ২ কার্যদিবস",
        notes: {
          en: "Flat statutory fee for rural business premises.",
          bn: "গ্রামীণ ব্যবসায়িক প্রতিষ্ঠানের জন্য নির্ধারিত সরকারি ফি।"
        }
      },
      {
        tierId: "pourashava",
        title: { en: "Municipality / Pourashava Commercial License", bn: "পৌরসভা বাণিজ্যিক ট্রেড লাইসেন্স" },
        feeBDT: 1500,
        timelineDays: "2 to 4 Working Days",
        timelineDaysBn: "২ থেকে ৪ কার্যদিবস",
        notes: {
          en: "Based on business category and shop physical square footage.",
          bn: "ব্যবসায়ের ধরন ও দোকানের আয়তনের ওপর ভিত্তি করে নির্ধারিত।"
        }
      },
      {
        tierId: "city_corp",
        title: { en: "City Corporation (Dhaka/Chattogram/etc.)", bn: "সিটি কর্পোরেশন (ঢাকা/চট্টগ্রাম ইত্যাদি)" },
        feeBDT: 3000,
        timelineDays: "3 to 7 Working Days",
        timelineDaysBn: "৩ থেকে ৭ কার্যদিবস",
        notes: {
          en: "Plus sign-board tax & 15% VAT. Complete online via e-trade portal.",
          bn: "সাইনবোর্ড কর ও ১৫% ভ্যাটসহ অনলাইন ই-ট্রেড পোর্টালের মাধ্যমে।"
        }
      }
    ],
    dalalAlert: {
      en: "Brokers charge ৳10,000–৳25,000 for Dhaka city trade licenses claiming 'inspection speed-up'. For general retail/services, spot inspections are not needed or done as routine checks. File directly online at etradelicense.gov.bd to save thousands of takas!",
      bn: "সিটি কর্পোরেশনের ট্রেড লাইসেন্স করে দেওয়ার নামে মধ্যস্বত্বভোগীরা ১০,০০০ থেকে ২৫,০০০ টাকা দাবি করে। অথচ সাধারণ ব্যবসার জন্য কোনো বিশেষ অনুমোদনের প্রয়োজন নেই। etradelicense.gov.bd পোর্টালে কয়েক ক্লিকেই আসল ফি দিয়ে লাইসেন্স করা যায়।"
    },
    requiredDocuments: [
      {
        id: "doc-owner-nid",
        title: {
          en: "Proprietor's National ID (NID) & 3 Passport Size Photos",
          bn: "মালিকের জাতীয় পরিচয়পত্র (NID) এবং ৩ কপি পাসপোর্ট সাইজ ছবি"
        },
        notes: {
          en: "For partnership businesses, submit all partners' NID and partnership deed.",
          bn: "অংশীদারি কারবার হলে সকল অংশীদারের এনআইডি ও চুক্তিনামা।"
        },
        isMandatory: true,
        whereToGet: { en: "Applicant", bn: "আবেদনকারীর নিজস্ব" }
      },
      {
        id: "doc-rental-agreement",
        title: {
          en: "Commercial Space Rental Agreement on ৳300 Non-Judicial Stamp",
          bn: "৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে দোকান বা অফিসের ভাড়াচুক্তি"
        },
        notes: {
          en: "If owned property, submit updated land tax (Khajna) and holding tax receipt.",
          bn: "নিজের জায়গা হলে হালনাগাদ হোল্ডিং ট্যাক্স বা খাজনা রশিদ দিতে হবে।"
        },
        isMandatory: true,
        whereToGet: { en: "Landlord / Notary Public", bn: "বাড়িওয়ালা / নোটারি পাবলিক" }
      },
      {
        id: "doc-tin-cert",
        title: {
          en: "e-TIN Certificate of the Proprietor",
          bn: "ব্যবসা পরিচালনাকারীর ১২ ডিজিটের ই-টিআইএন সার্টিফিকেট"
        },
        notes: {
          en: "Mandatory for all city corporation and municipal commercial applications.",
          bn: "সিটি কর্পোরেশন এলাকায় ট্রেড লাইসেন্সের জন্য টিআইএন থাকা বাধ্যতামূলক।"
        },
        isMandatory: true,
        whereToGet: { en: "National Board of Revenue (incometax.gov.bd)", bn: "এনবিআর আয়কর পোর্টাল" }
      },
      {
        id: "doc-fire-license",
        title: {
          en: "Fire Safety License / Environmental Clearance (Only for hazardous/industrial trades)",
          bn: "ফায়ার লাইসেন্স / পরিবেশ ছাড়পত্র (কেবল কারখানা বা ঝুঁকিপূর্ণ ব্যবসার জন্য)"
        },
        notes: {
          en: "Not required for general retail, consultancies, or standard IT offices.",
          bn: "সাধারণ দোকান, খুচরা ব্যবসা বা আইটি অফিসের জন্য প্রযোজ্য নয়।"
        },
        isMandatory: false,
        whereToGet: { en: "Fire Service & Civil Defence", bn: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স" }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Identify Specific Business Nature Code", bn: "সঠিক ব্যবসার ধরন ও ক্যাটাগরি কোড নির্ধারণ" },
        description: {
          en: "Check the government trade schedule to identify your primary business activity (e.g., General Order Supplier, Software & IT, Retail Grocery, Restaurant).",
          bn: "সরকারি বাণিজ্য তালিকার মধ্য থেকে আপনার সঠিক খাত নির্বাচন করুন (যেমন: আইটি সেবা, জেনারেল সাপ্লায়ার, রেস্টুরেন্ট)।"
        },
        where: { en: "Official Trade License Schedule", bn: "অফিসিয়াল বাণিজ্য তালিকা" },
        estTime: { en: "10 minutes", bn: "১০ মিনিট" },
        tips: {
          en: "Selecting the correct category prevents being taxed at higher commercial corporate slabs.",
          bn: "সঠিক ক্যাটাগরি নির্বাচন করলে অতিরিক্ত কর ও অযথা ফি আরোপ এড়ানো যায়।"
        }
      },
      {
        stepNumber: 2,
        title: { en: "Submit Online Application with Rental Lease", bn: "অনলাইনে তথ্য পূরণ ও ভাড়াচুক্তি আপলোড" },
        description: {
          en: "Fill out the online application on etradelicense.gov.bd or your city portal (e.g. dscc.gov.bd / dncc.gov.bd). Attach scanned NID, e-TIN, and rental agreement.",
          bn: "পৌরসভা বা সিটি কর্পোরেশনের পোর্টালে গিয়ে মালিকের তথ্য, এনআইডি, টিআইএন এবং ভাড়াচুক্তির স্ক্যান কপি আপলোড করুন।"
        },
        where: { en: "City Corporation e-Portal / UP Desk", bn: "সিটি কর্পোরেশন ই-পোর্টাল বা ইউনিয়ন অফিস" },
        estTime: { en: "20 minutes", bn: "২০ মিনিট" },
        tips: {
          en: "Ensure the commercial address exactly matches the lease agreement description.",
          bn: "ভাড়াচুক্তির দোকানের হোল্ডিং নম্বর ও রুম নম্বর যেন ঠিক থাকে।"
        }
      },
      {
        stepNumber: 3,
        title: { en: "Deposit Prescribed License Fee & Sign-Board Tax", bn: "নির্ধারিত লাইসেন্স ফি ও সাইনবোর্ড কর পরিশোধ" },
        description: {
          en: "Upon document check, pay the calculated fee directly through online payment (bKash/Cards) or at designated bank booths. Keep the electronic deposit slip.",
          bn: "অনলাইনে পেমেন্ট গেটওয়ের মাধ্যমে অথবা ব্যাংকে চালান জমা দিয়ে নিশ্চিত রশিদ সংগ্রহ করুন।"
        },
        where: { en: "Online Payment Gateway / Bank Counter", bn: "অনলাইন পেমেন্ট বা অনুমোদিত ব্যাংক" },
        estTime: { en: "5 minutes", bn: "৫ মিনিট" },
        tips: {
          en: "Every trade license includes a mandatory sign-board fee (calculated per sq ft).",
          bn: "দোকানের সামনে সাইনবোর্ড থাকলে স্কয়ার ফিট অনুযায়ী সামান্য সাইনবোর্ড কর যুক্ত হয়।"
        }
      },
      {
        stepNumber: 4,
        title: { en: "Receive Digitally Signed e-Trade License", bn: "ডিজিটাল স্বাক্ষরিত ই-ট্রেড লাইসেন্স গ্রহণ" },
        description: {
          en: "Download and print your QR-code-protected official e-Trade License. For manual offices, collect the signed green certificate book from the municipal counter.",
          bn: "কিউআর কোডযুক্ত ডিজিটাল ই-ট্রেড লাইসেন্স ডাউনলোড করে প্রিন্ট করুন এবং দোকানে প্রদর্শন করুন।"
        },
        where: { en: "Citizen Portal / Municipal Revenue Desk", bn: "নাগরিক পোর্টাল বা রাজস্ব শাখা" },
        estTime: { en: "Instant to 3 days", bn: "তাৎক্ষণিক থেকে ৩ দিন" },
        tips: {
          en: "Frame and hang your trade license in your commercial premises as mandated by law.",
          bn: "আইন অনুযায়ী লাইসেন্স প্রিন্ট করে ব্যবসা প্রতিষ্ঠানে ঝুলিয়ে রাখা বাধ্যতামূলক।"
        }
      }
    ],
    commonMistakes: [
      {
        mistake: {
          en: "Using a residential flat address without commercial approval.",
          bn: "আবাসিক ভবনে বাণিজ্যিক ব্যবসার ঠিকানা দিয়ে লাইসেন্স আবেদনের চেষ্টা।"
        },
        fix: {
          en: "Ensure your rented space has commercial clearance or apply under specialized service/IT exemptions.",
          bn: "ভবনটি বাণিজ্যিক কিনা তা বাড়িওয়ালার সাথে নিশ্চিত হয়ে ভাড়াচুক্তি করুন।"
        }
      }
    ]
  },
  {
    id: "land-mutation",
    category: "land",
    categoryLabel: { en: "Land & Property", bn: "ভূমি ও সম্পত্তি" },
    title: {
      en: "Land Mutation (e-Namjari & Kharij)",
      bn: "অনলাইন ই-নামজারি ও জমাভাগ (খারিজ)"
    },
    tagline: {
      en: "Register your bought or inherited land ownership in government revenue records.",
      bn: "ক্রয় বা পৈতৃক সূত্রে পাওয়া জমির সরকারি মালিকানা রেকর্ড বা নামজারি প্রক্রিয়া।"
    },
    whoIsItFor: {
      en: "Property buyers, land inheritors, or gift-deed recipients needing government recognition of title.",
      bn: "জমি ক্রেতা, হেবা সূত্রে গ্রহীতা অথবা ওয়ারিশান সূত্রে জমির অংশীদারগণ।"
    },
    popularity: 95,
    icon: "map",
    officialOffice: {
      en: "Office of the Assistant Commissioner (Land) - AC Land Office",
      bn: "সহকারী কমিশনার (ভূমি) কার্যালয় - এসি ল্যান্ড অফিস"
    },
    workingHours: {
      en: "Sunday to Thursday: 9:00 AM – 4:00 PM (Portal 24/7)",
      bn: "রবিবার থেকে বৃহস্পতিবার: সকাল ৯:০০ – বিকাল ৪:০০"
    },
    bestTimeToVisit: {
      en: "Wednesday morning at 10:00 AM for hearing appointments.",
      bn: "বুধবার সকাল ১০:০০ টায় শুনানির নির্দিষ্ট তারিখে।"
    },
    lastVerified: "October 2026",
    sampleDataDisclaimer: true,
    officialPortalUrl: "https://mutation.land.gov.bd",
    speedTiers: [
      {
        tierId: "regular",
        title: { en: "Standard e-Namjari (Statutory 28-Day Citizen Charter)", bn: "স্ট্যান্ডার্ড ই-নামজারি (নাগরিক সনদে ২৮ কার্যদিবস)" },
        feeBDT: 1170,
        timelineDays: "28 Working Days",
        timelineDaysBn: "২৮ কার্যদিবস",
        notes: {
          en: "Statutory breakdown: Application ৳70 + Notice ৳50 + Record Correction ৳1,000 + DCR ৳50 = ৳1,170 exactly.",
          bn: "সরকারি নির্ধারিত ফি: কোর্ট ফি ৳২০ + নোটিশ ফি ৳৫০ + রেকর্ড সংশোধন ৳১০০০ + ডিসিআর ৳১০০ = মোট ৳১,১৭০।"
        }
      },
      {
        tierId: "expatriate",
        title: { en: "Expatriate Priority Mutation (প্রবাসী কোটা)", bn: "প্রবাসী বাংলাদেশি অগ্রাধিকার নামজারি" },
        feeBDT: 1170,
        timelineDays: "12 to 18 Working Days",
        timelineDaysBn: "১২ থেকে ১৮ কার্যদিবস",
        notes: {
          en: "Fast-tracked with passport / valid foreign visa proof.",
          bn: "বৈধ পাসপোর্ট ও প্রবাসী প্রমাণের মাধ্যমে অগ্রাধিকার ভিত্তিতে দ্রুত নিষ্পত্তি।"
        }
      }
    ],
    dalalAlert: {
      en: "Dalals and informal land brokers demand ৳20,000 to ৳80,000 for namjari! The TOTAL government fee is fixed at exactly ৳1,170 by the Ministry of Land. All payments are made electronically with digital receipts. Never pay cash to anyone outside the bank challan!",
      bn: "ভূমি অফিসের দালালরা নামজারির জন্য ২০,০০০ থেকে ৮০,০০০ টাকা পর্যন্ত দাবি করে থাকে! অথচ ভূমি মন্ত্রণালয় কর্তৃক মোট সরকারি ফি ঠিক ১,১৭০ টাকা নির্ধারিত। সমস্ত ফি অনলাইনে পরিশোধযোগ্য। কাউকে নগদ অর্থ দেবেন না!"
    },
    requiredDocuments: [
      {
        id: "doc-registered-deed",
        title: {
          en: "Registered Sale Deed / Heba Deed / Exchange Deed (দলিলের সহি-মোহর নকল)",
          bn: "রেজিস্ট্রিকৃত মূল দলিল বা দলিলের সার্টিফাইড সহি-মোহর নকল"
        },
        notes: {
          en: "Clear scan showing sub-registry volume, deed number, and registration year.",
          bn: "দলিল নম্বর, সাল ও সাব-রেজিস্ট্রি অফিসের স্পষ্ট সিলযুক্ত কপি।"
        },
        isMandatory: true,
        whereToGet: { en: "Sub-Registry Office", bn: "সাব-রেজিস্ট্রি অফিস" }
      },
      {
        id: "doc-via-deed",
        title: {
          en: "Previous Chain Deeds (Via Deeds / বায়া দলিল)",
          bn: "ধারাবাহিক বায়া দলিল (পূর্ববর্তী ক্রয় দলিলের ধারাবাহিকতা)"
        },
        notes: {
          en: "Proves unbroken chain of ownership from CS/SA/RS to present seller.",
          bn: "আগের বিক্রেতারা যার কাছ থেকে জমি কিনেছেন তাদের ধারাবাহিক দলিল।"
        },
        isMandatory: true,
        whereToGet: { en: "Previous Owners / Sub-Registry", bn: "পূর্বতন মালিক বা রেকর্ড রুম" }
      },
      {
        id: "doc-khatian-porcha",
        title: {
          en: "Updated Khatian / Porcha Copies (CS, SA, RS, BS/City Survey)",
          bn: "সর্বশেষ খতিয়ানের জাবেদা নকল বা পর্চা (সিএস, এসএ, আরএস, বিএস/সিটি জরিপ)"
        },
        notes: {
          en: "Must include the seller's recorded mutation khatian and DCR.",
          bn: "বিক্রেতার নিজস্ব নামজারি খতিয়ান ও ডিসিআর কপি থাকতে হবে।"
        },
        isMandatory: true,
        whereToGet: { en: "District DC Office Record Room or eporcha.gov.bd", bn: "জেলা রেকর্ড রুম বা ই-পর্চা পোর্টাল" }
      },
      {
        id: "doc-khajna-receipt",
        title: {
          en: "Updated Land Development Tax Receipt (হালনাগাদ দাখিলা / খাজনা রশিদ)",
          bn: "ভূমি উন্নয়ন কর পরিশোধের হালনাগাদ অনলাইন দাখিলা (খাজনা রশিদ)"
        },
        notes: {
          en: "Land tax must be fully clear up to the current Bengali fiscal year.",
          bn: "চলতি ১৪৩১-৩২ বাংলা সন পর্যন্ত খাজনা পরিশোধিত থাকতে হবে।"
        },
        isMandatory: true,
        whereToGet: { en: "ldtax.gov.bd Online Land Tax Portal", bn: "ldtax.gov.bd অনলাইন ভূমি উন্নয়ন কর পোর্টাল" }
      },
      {
        id: "doc-warishan-cert",
        title: {
          en: "Warishan Certificate (Only if inherited property / পৈতৃক সম্পত্তি হলে)",
          bn: "স্থানীয় পরিষদ বা ওয়ার্ড কাউন্সিলর কর্তৃক ওয়ারিশান সনদ"
        },
        notes: {
          en: "Lists all legal heirs with exact shares.",
          bn: "উত্তরাধিকার সূত্রে জমি পেলে ওয়ারিশদের নামের সত্যায়িত তালিকা।"
        },
        isMandatory: false,
        whereToGet: { en: "Union Parishad / City Corporation", bn: "ইউনিয়ন পরিষদ / সিটি কর্পোরেশন" }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "File Online e-Namjari Application", bn: "mutation.land.gov.bd পোর্টালে অনলাইন আবেদন দাখিল" },
        description: {
          en: "Visit mutation.land.gov.bd. Enter your Division, District, Upazila, and Mouza. Input Khatian number, Dag number, and quantum of land in decimals. Upload scanned deed and khatian copies.",
          bn: "mutation.land.gov.bd এ গিয়ে বিভাগ, জেলা, উপজেলা ও মৌজা নির্বাচন করুন। খতিয়ান, দাগ ও জমির পরিমাণ উল্লেখ করে দলিল আপলোড করুন।"
        },
        where: { en: "Online (mutation.land.gov.bd)", bn: "অনলাইন (mutation.land.gov.bd)" },
        estTime: { en: "25 minutes", bn: "২৫ মিনিট" },
        tips: {
          en: "Pay the initial application fee of ৳70 online to generate the case tracking number.",
          bn: "অনলাইনে প্রাথমিক আবেদন ফি ৭০ টাকা পরিশোধ করলেই একটি মামলা নম্বর তৈরি হবে।"
        }
      },
      {
        stepNumber: 2,
        title: { en: "Union Land Assistant Officer (ULAO) Field Report", bn: "ইউনিয়ন ভূমি সহকারী কর্মকর্তার (নায়েব) সরেজমিন তদন্ত প্রতিবেদন" },
        description: {
          en: "The system automatically routes your file to the local Tehsil/Union Land Office. The Nayeb verifies government interest, possession on the ground, and submits a digital report.",
          bn: "আবেদনটি স্থানীয় তহশিল অফিসে যাবে। নায়েব সাহেব জমির দখল ও খাস জমি কিনা তা সরেজমিন যাচাই করে অনলাইনে প্রতিবেদন পাঠাবেন।"
        },
        where: { en: "Union Land Office (Tehsil)", bn: "ইউনিয়ন ভূমি অফিস (তহশিল)" },
        estTime: { en: "7–10 days", bn: "৭–১০ দিন" },
        tips: {
          en: "Track the report progress using your Case Number on the portal.",
          bn: "মামলা নম্বর ও মোবাইল দিয়ে পোর্টাল থেকে রিপোর্টের বর্তমান অগ্রগতি দেখতে পারবেন।"
        }
      },
      {
        stepNumber: 3,
        title: { en: "Formal Hearing at AC Land Office", bn: "সহকারী কমিশনার (ভূমি) এর উপস্থিতিতে শুনানি" },
        description: {
          en: "Receive SMS notice for the hearing date. Visit the AC Land office with ALL original deeds, khatian, and tax receipts. The AC Land verifies originals and hears objections (if any).",
          bn: "শুনানির এসএমএস পেলে মূল দলিল, পর্চা ও খাজনা রশিদ নিয়ে সহকারী কমিশনার (ভূমি) অফিসে হাজির হন।"
        },
        where: { en: "AC Land Court Room", bn: "এসি ল্যান্ড আদালত কক্ষ" },
        estTime: { en: "30–60 minutes", bn: "৩০–৬০ মিনিট" },
        tips: {
          en: "Bring physical originals; officers must inspect wet ink seals and registry stamps.",
          bn: "মূল দলিল ও সকল মূল বায়া দলিল অবশ্যই সাথে রাখবেন।"
        }
      },
      {
        stepNumber: 4,
        title: { en: "Pay Final DCR Fee (৳1,100) & Download Khatian", bn: "অনলাইনে বাকি ফি (৳১,১০০) জমা ও নামজারি খতিয়ান ডাউনলোড" },
        description: {
          en: "Upon approval, receive SMS to pay remaining fees (৳1,000 mutation + ৳100 DCR). Pay via bKash/Nagad. Instantly download the official QR-coded Namjari Khatian and DCR.",
          bn: "আবেদন মঞ্জুর হলে মোবাইলে বাকি ১,১০০ টাকা পরিশোধের এসএমএস আসবে। বিকাশে পেমেন্ট করে সরাসরি কিউআর কোডযুক্ত নামজারি খতিয়ান ও ডিসিআর ডাউনলোড করুন।"
        },
        where: { en: "Online Land Portal", bn: "অনলাইন ভূমি পোর্টাল" },
        estTime: { en: "5 minutes", bn: "৫ মিনিট" },
        tips: {
          en: "The digital QR-coded Namjari Khatian does not require any manual signature or stamp.",
          bn: "অনলাইনের কিউআর কোডযুক্ত খতিয়ানে কোনো ম্যানুয়াল স্বাক্ষরের প্রয়োজন নেই, এটি আইনত চূড়ান্ত।"
        }
      }
    ],
    commonMistakes: [
      {
        mistake: {
          en: "Applying with unpaid past land development tax (Khajna).",
          bn: "পূর্বের বকেয়া খাজনা পরিশোধ না করে নামজারি আবেদন করা।"
        },
        fix: {
          en: "Clear all pending land tax on ldtax.gov.bd before filing; unpaid tax results in immediate rejection by the Union Land Officer.",
          bn: "আবেদনের আগেই ldtax.gov.bd থেকে হালনাগাদ খাজনা পরিশোধের রশিদ সংগ্রহ করে নিন।"
        }
      },
      {
        mistake: {
          en: "Missing Via Deeds (বায়া দলিল) chain.",
          bn: "ধারাবাহিক বায়া দলিলের অনুলিপি না থাকা।"
        },
        fix: {
          en: "Collect certified copies of historical deeds from the District Record Room beforehand.",
          bn: "জমি রেজিস্ট্রি করার সময়ই পূর্ববর্তী বিক্রেতার বায়া দলিল সংগ্রহে রাখুন।"
        }
      }
    ]
  },
  {
    id: "driving-license",
    category: "transport",
    categoryLabel: { en: "Transport & Driving", bn: "যানবাহন ও ড্রাইভিং" },
    title: {
      en: "Smart Card Driving License (BRTA)",
      bn: "স্মার্ট কার্ড ড্রাইভিং লাইসেন্স (বিআরটিএ)"
    },
    tagline: {
      en: "From Learner permit to driving competency test and smart card issuance.",
      bn: "লার্নার পারমিট থেকে শুরু করে ড্রাইভিং পরীক্ষা ও স্মার্ট কার্ড সংগ্রহের পূর্ণাঙ্গ প্রক্রিয়া।"
    },
    whoIsItFor: {
      en: "Anyone aged 18+ (non-professional) or 21+ (professional) applying for motorcycle or motor car license.",
      bn: "১৮ বছর বা তদূর্ধ্ব (অপেশাদার) অথবা ২১ বছর বা তদূর্ধ্ব (পেশাদার) লাইসেন্স প্রত্যাশী যেকোনো সুস্থ নাগরিক।"
    },
    popularity: 91,
    icon: "truck",
    officialOffice: {
      en: "Bangladesh Road Transport Authority (BRTA Circle Office)",
      bn: "বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ সার্কেল অফিস)"
    },
    workingHours: {
      en: "Sunday to Thursday: 9:00 AM – 3:30 PM",
      bn: "রবিবার থেকে বৃহস্পতিবার: সকাল ৯:০০ – বিকাল ৩:৩০"
    },
    bestTimeToVisit: {
      en: "Monday at 8:30 AM on assigned driving test date.",
      bn: "সোমবার সকাল ৮:৩০ মিনিটে টেস্টের নির্ধারিত তারিখে।"
    },
    lastVerified: "October 2026",
    sampleDataDisclaimer: true,
    officialPortalUrl: "https://bsp.brta.gov.bd",
    speedTiers: [
      {
        tierId: "learner_permit",
        title: { en: "Stage 1: Digital Learner Permit (Single Category)", bn: "১ম ধাপ: ডিজিটাল লার্নার পারমিট (১টি ক্যাটাগরি)" },
        feeBDT: 518,
        timelineDays: "Instant Online Download",
        timelineDaysBn: "অনলাইনে সাথে সাথে ডাউনলোড",
        notes: {
          en: "Valid for 6 months. For combined bike + car, fee is ৳748.",
          bn: "৬ মাস মেয়াদি। একসাথে বাইক ও প্রাইভেট কার হলে ফি ৳৭৪৮।"
        }
      },
      {
        tierId: "smart_card_non_prof",
        title: { en: "Stage 2: Smart Card (Non-Professional, 10 Years)", bn: "২য় ধাপ: স্মার্ট কার্ড (অপেশাদার, ১০ বছর মেয়াদি)" },
        feeBDT: 4497,
        timelineDays: "30 to 60 Working Days",
        timelineDaysBn: "৩০ থেকে ৬০ কার্যদিবস",
        notes: {
          en: "Includes card printing, biometrics, 15% VAT, and automated driving test.",
          bn: "স্মার্ট কার্ড প্রিন্টিং, বায়োমেট্রিক ও ভ্যাটসহ ১০ বছরের জন্য বৈধ।"
        }
      },
      {
        tierId: "smart_card_prof",
        title: { en: "Stage 2: Smart Card (Professional, 5 Years)", bn: "২য় ধাপ: স্মার্ট কার্ড (পেশাদার, ৫ বছর মেয়াদি)" },
        feeBDT: 2827,
        timelineDays: "30 to 45 Working Days",
        timelineDaysBn: "৩০ থেকে ৪৫ কার্যদিবস",
        notes: {
          en: "Requires additional dope test certificate from government hospital.",
          bn: "সরকারি হাসপাতাল থেকে ডোপ টেস্ট সনদ জমা দেওয়া বাধ্যতামূলক।"
        }
      }
    ],
    dalalAlert: {
      en: "Brokers outside BRTA circle offices ask ৳15,000–৳25,000 guaranteeing 'pass without taking the driving test'. Since BRTA introduced CCTV-monitored driving test tracks and biometric attendance, bypass is impossible. Practice driving properly and save your hard-earned money!",
      bn: "বিআরটিএ অফিসের বাইরে দালালরা 'ড্রাইভিং পরীক্ষা ছাড়া পাশ করিয়ে দেওয়া'র আশ্বাসে ১৫,০০০ থেকে ২৫,০০০ টাকা দাবি করে। অথচ বিআরটিএ-এর ট্র্যাক এখন সিসিটিভি ও ডিজিটাল বায়োমেট্রিক দ্বারা নিয়ন্ত্রিত। নিজে ড্রাইভ শিখে সরাসরি যান।"
    },
    requiredDocuments: [
      {
        id: "doc-medical-cert",
        title: {
          en: "Registered Doctor's Medical Fitness Certificate (Form BRTA-Medical)",
          bn: "রেজিস্টার্ড চিকিৎসকের মেডিকেল ফিটনেস সার্টিফিকেট (বিআরটিএ নির্ধারিত ফর্ম)"
        },
        notes: {
          en: "Must be signed by an MBBS doctor with BMDC registration number.",
          bn: "বিএমডিসি নম্বর সংবলিত এমবিবিএস ডাক্তারের সিল ও স্বাক্ষরযুক্ত হতে হবে।"
        },
        isMandatory: true,
        whereToGet: { en: "Any MBBS Doctor / Government Hospital", bn: "যেকোনো এমবিবিএস ডাক্তার বা সরকারি হাসপাতাল" }
      },
      {
        id: "doc-nid",
        title: {
          en: "National ID (NID) Card Copy",
          bn: "জাতীয় পরিচয়পত্র (NID) এর ফটোকপি"
        },
        notes: {
          en: "Minimum age 18 for non-professional, 21 for professional drivers.",
          bn: "অপেশাদারের জন্য সর্বনিম্ন ১৮ বছর, পেশাদারের জন্য ২১ বছর।"
        },
        isMandatory: true,
        whereToGet: { en: "Election Commission", bn: "নির্বাচন কমিশন" }
      },
      {
        id: "doc-edu-cert",
        title: {
          en: "Educational Qualification Certificate (Minimum Class 8 / JSC / SSC)",
          bn: "শিক্ষাগত যোগ্যতার সনদ (নূন্যতম ৮ম শ্রেণী / জেএসসি / এসএসসি পাস)"
        },
        notes: {
          en: "Required to verify literacy and sign-board reading ability.",
          bn: "ট্রাফিক সাইনবোর্ড পড়ার সক্ষমতা প্রমাণের জন্য।"
        },
        isMandatory: true,
        whereToGet: { en: "School / Education Board", bn: "বিদ্যালয় বা শিক্ষাবোর্ড" }
      },
      {
        id: "doc-dope-test",
        title: {
          en: "Government Hospital Dope Test Report (Only for Professional licenses)",
          bn: "সরকারি হাসপাতাল থেকে ডোপ টেস্ট রিপোর্ট (কেবল পেশাদার লাইসেন্স প্রত্যাশীদের জন্য)"
        },
        notes: {
          en: "Must be from designated government hospital or authorized laboratory.",
          bn: "মাদকাসক্তিমুক্ত সনদ হিসেবে সরকারি ল্যাব থেকে প্রাপ্ত।"
        },
        isMandatory: false,
        whereToGet: { en: "Designated Government Hospital", bn: "মনোনীত সরকারি হাসপাতাল" }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Create Account on BRTA Service Portal (BSP)", bn: "বিআরটিএ সার্ভিস পোর্টাল (BSP)-এ অ্যাকাউন্ট ও লার্নার আবেদন" },
        description: {
          en: "Register on bsp.brta.gov.bd. Upload your doctor's medical fitness certificate, NID scan, and photo. Pay the learner fee (৳518) via bKash/Nagad. Download your instant Learner Driving License.",
          bn: "bsp.brta.gov.bd পোর্টালে নিবন্ধন করুন। ডাক্তারের মেডিকেল সার্টিফিকেট আপলোড করে ফি পরিশোধ করুন এবং সাথে সাথেই লার্নার পারমিট ডাউনলোড করুন।"
        },
        where: { en: "Online (bsp.brta.gov.bd)", bn: "অনলাইন (bsp.brta.gov.bd)" },
        estTime: { en: "15 minutes", bn: "১৫ মিনিট" },
        tips: {
          en: "The learner card contains your assigned competency exam date and track location.",
          bn: "লার্নার কার্ডেই আপনার পরীক্ষার সুনির্দিষ্ট তারিখ ও সার্কেল অফিসের নাম লেখা থাকবে।"
        }
      },
      {
        stepNumber: 2,
        title: { en: "Competency Examination (Written, Oral & Practical Driving)", bn: "দক্ষতা পরীক্ষা: লিখিত, মৌখিক ও প্র্যাকটিক্যাল ড্রাইভ" },
        description: {
          en: "Appear at your assigned BRTA test track on the examination date. Take the 20-mark written test, viva (identifying traffic signs), and practical driving test (zigzag, reverse, ramp, braking).",
          bn: "নির্ধারিত দিনে সার্কেল ট্র্যাকে উপস্থিত হয়ে লিখিত পরীক্ষা, মৌখিক পরীক্ষা এবং মাঠে ব্যবহারিক গাড়ি চালানো প্রদর্শন করুন।"
        },
        where: { en: "BRTA Circle Office Examination Track", bn: "বিআরটিএ সার্কেল পরীক্ষার মাঠ" },
        estTime: { en: "3–4 hours", bn: "৩–৪ ঘণ্টা" },
        tips: {
          en: "Learn mandatory, cautionary, and informatory road signs before appearing for the viva.",
          bn: "মৌখিক পরীক্ষার জন্য লাল গোল, নীল গোল ও ত্রিভুজ ট্রাফিক চিহ্নের অর্থ মুখস্থ করে নিন।"
        }
      },
      {
        stepNumber: 3,
        title: { en: "Pay Smart Card Fee & Biometric Enrollment", bn: "স্মার্ট কার্ড ফি প্রদান ও অফিসে বায়োমেট্রিক প্রদান" },
        description: {
          en: "Once passed, the result updates on BSP. Pay the smart card fee (৳4,497) online. Visit the circle office to provide your biometric fingerprints, digital signature, and photograph.",
          bn: "পরীক্ষায় উত্তীর্ণ হলে পোর্টালে ফলাফল আপডেট হবে। ফি প্রদান করে বিআরটিএ অফিসে ফিঙ্গারপ্রিন্ট ও ছবি দিন।"
        },
        where: { en: "Online Payment & BRTA Biometric Booth", bn: "অনলাইন পেমেন্ট ও বিআরটিএ বায়োমেট্রিক বুথ" },
        estTime: { en: "30–45 minutes", bn: "৩০–৪৫ মিনিট" },
        tips: {
          en: "An electronic provisional driving permit will be issued to drive legally while card prints.",
          bn: "মূল স্মার্ট কার্ড আসার আগ পর্যন্ত ব্যবহারের জন্য সাময়িক ড্রাইভিং অনুমতিপত্র ডাউনলোড করতে পারবেন।"
        }
      },
      {
        stepNumber: 4,
        title: { en: "Collect High-Security Smart Driving Card", bn: "হাই-সিকিউরিটি স্মার্ট কার্ড ড্রাইভিং লাইসেন্স গ্রহণ" },
        description: {
          en: "When the card finishes printing, receive SMS notification. Collect the chip-embedded smart card license from your BRTA circle counter or via designated postal delivery.",
          bn: "কার্ড প্রিন্ট সম্পন্ন হলে এসএমএস পাবেন। অফিস থেকে অথবা পোস্টাল সার্ভিসের মাধ্যমে স্মার্ট কার্ডটি সংগ্রহ করুন।"
        },
        where: { en: "BRTA Circle Delivery Counter / Post Office", bn: "বিআরটিএ ডেলিভারি কাউন্টার বা ডাকঘর" },
        estTime: { en: "15 minutes", bn: "১৫ মিনিট" },
        tips: {
          en: "Store a digital backup in the e-Driving License module on your smartphone.",
          bn: "স্মার্টফোনে বিএসপি পোর্টালে ই-লাইসেন্স কপি সংরক্ষণ করে রাখুন।"
        }
      }
    ],
    commonMistakes: [
      {
        mistake: {
          en: "Practicing only forward driving, ignoring parallel parking and reverse zigzag.",
          bn: "কেবল সোজা ড্রাইভ প্র্যাকটিস করা, রিভার্স জিগজ্যাগ ও র্যাম্প টেস্ট অবহেলা করা।"
        },
        fix: {
          en: "BRTA practical test tracks strictly evaluate reverse parking within narrow boundaries. Practice on standard cones.",
          bn: "ব্যবহারিক পরীক্ষায় সবচেয়ে বেশি ফেল হয় রিভার্স ব্যাক করার সময় সীমানা স্পর্শ করায়।"
        }
      }
    ]
  },
  {
    id: "tin-registration",
    category: "business",
    categoryLabel: { en: "Taxation & Revenue", bn: "আয়কর ও রাজস্ব" },
    title: {
      en: "e-TIN Registration Certificate",
      bn: "অনলাইন ই-টিআইএন (e-TIN) সনদ গ্রহণ"
    },
    tagline: {
      en: "Get your 12-digit Taxpayer Identification Number in 10 minutes completely free.",
      bn: "১০ মিনিটে ঘরে বসেই সম্পূর্ণ বিনামূল্যে ১২ ডিজিটের কর শনাক্তকরণ নম্বর তৈরি করুন।"
    },
    whoIsItFor: {
      en: "Salaried individuals, bank account holders, property buyers, or business entrepreneurs.",
      bn: "চাকরিজীবী, সঞ্চয়পত্র বা ব্যাংক অ্যাকাউন্টধারী, গাড়ি/জমি ক্রেতা এবং নতুন ব্যবসায়ী।"
    },
    popularity: 85,
    icon: "award",
    officialOffice: {
      en: "National Board of Revenue (NBR) - Taxes Zone / e-Tax Portal",
      bn: "জাতীয় রাজস্ব বোর্ড (এনবিআর) - কর অঞ্চল / ই-ট্যাক্স পোর্টাল"
    },
    workingHours: {
      en: "24/7 Automated Web System (Field Tax Offices Sun-Thu 9:00 AM - 4:00 PM)",
      bn: "সার্বক্ষণিক ২৪/৭ স্বয়ংক্রিয় অনলাইন সার্ভিস"
    },
    bestTimeToVisit: {
      en: "Anytime online! Instant automated generation.",
      bn: "যেকোনো সময় অনলাইনে! কোনো অফিসে যাওয়ার প্রয়োজন নেই।"
    },
    lastVerified: "October 2026",
    sampleDataDisclaimer: true,
    officialPortalUrl: "https://incometax.gov.bd",
    speedTiers: [
      {
        tierId: "instant_online",
        title: { en: "Automated Instant e-TIN Generation", bn: "স্বয়ংক্রিয় তাৎক্ষণিক ই-টিআইএন তৈরি" },
        feeBDT: 0,
        timelineDays: "Instant (10 Minutes)",
        timelineDaysBn: "তাৎক্ষণিক (১০ মিনিট)",
        notes: {
          en: "Completely free of charge nationwide through NBR online portal.",
          bn: "এনবিআরের পোর্টালে সম্পূর্ণ বিনামূল্যে কয়েক মিনিটেই সম্পন্ন হয়।"
        }
      }
    ],
    dalalAlert: {
      en: "Computer shops charge ৳300–৳1,000 to 'open a TIN'. Never pay anyone! Once you open a TIN, you are legally required to file an annual income tax return. Opening an unnecessary TIN without understanding filing requirements leads to tax penalties.",
      bn: "কম্পিউটার দোকানিরা টিআইএন খুলে দিতে ৩০০-১০০০ টাকা দাবি করে। মনে রাখবেন, টিআইএন খোলার পর প্রতি বছর বাধ্যতামূলকভাবে আয়কর রিটার্ন দাখিল করতে হয়। অপ্রয়োজনে না বুঝে কারও কথায় টিআইএন খুলবেন না।"
    },
    requiredDocuments: [
      {
        id: "doc-tin-nid",
        title: {
          en: "Smart National Identity Card (NID)",
          bn: "স্মার্ট জাতীয় পরিচয়পত্র (NID)"
        },
        notes: {
          en: "System verifies your name and date of birth live against EC database.",
          bn: "সিস্টেম স্বয়ংক্রিয়ভাবে নির্বাচন কমিশনের সার্ভার থেকে তথ্য মিলিয়ে নেয়।"
        },
        isMandatory: true,
        whereToGet: { en: "Election Commission", bn: "নির্বাচন কমিশন" }
      },
      {
        id: "doc-mobile-num",
        title: {
          en: "Biometrically Registered Active Mobile Number",
          bn: "বায়োমেট্রিক নিবন্ধিত সচল মোবাইল নম্বর"
        },
        notes: {
          en: "Used to receive OTP security codes for authentication.",
          bn: "নিরাপত্তা ওটিপি (OTP) কোড গ্রহণের জন্য আবশ্যক।"
        },
        isMandatory: true,
        whereToGet: { en: "Mobile Operator", bn: "মোবাইল অপারেটর" }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Register on NBR Income Tax Portal", bn: "এনবিআর আয়কর পোর্টালে অ্যাকাউন্ট তৈরি" },
        description: {
          en: "Go to incometax.gov.bd. Click 'Register'. Create a username, password, select security question, and verify using mobile OTP.",
          bn: "incometax.gov.bd পোর্টালে 'Register' বাটনে ক্লিক করে ইউজার আইডি ও পাসওয়ার্ড তৈরি করুন এবং মোবাইলে আসা ওটিপি দিন।"
        },
        where: { en: "Online (incometax.gov.bd)", bn: "অনলাইন (incometax.gov.bd)" },
        estTime: { en: "3 minutes", bn: "৩ মিনিট" },
        tips: {
          en: "Save your login credentials safely; you will need them every year to submit tax returns.",
          bn: "লগইন তথ্য ও পাসওয়ার্ড ডায়েরিতে লিখে রাখুন, প্রতি বছর রিটার্ন দেওয়ার সময় লাগবে।"
        }
      },
      {
        stepNumber: 2,
        title: { en: "Complete Taxpayer Classification & Purpose", bn: "করদাতার ধরণ ও টিআইএন গ্রহণের উদ্দেশ্য নির্বাচন" },
        description: {
          en: "Log in. Select Taxpayer Type ('Individual - Bangladeshi'), Purpose of TIN (e.g. Employment, Trade License, Bank Credit Card), and Income Source Location.",
          bn: "লগইন করে 'Individual' নির্বাচন করুন। টিআইএন গ্রহণের কারণ (চাকরি, ক্রেডিট কার্ড, ট্রেড লাইসেন্স ইত্যাদি) এবং কর্মস্থলের জেলা সিলেক্ট করুন।"
        },
        where: { en: "Citizen Taxpayer Portal", bn: "নাগরিক করদাতা পোর্টাল" },
        estTime: { en: "4 minutes", bn: "৪ মিনিট" },
        tips: {
          en: "Selecting the correct District assigns your file to the nearest convenient Taxes Circle.",
          bn: "সঠিক জেলা নির্বাচন করলে আপনার আওতাধীন কাছের কর সার্কেল স্বয়ংক্রিয়ভাবে নির্ধারিত হবে।"
        }
      },
      {
        stepNumber: 3,
        title: { en: "Live NID Verification & Certificate Issuance", bn: "এনআইডি যাচাই ও তাৎক্ষণিক সার্টিফিকেট প্রাপ্তি" },
        description: {
          en: "Enter your 10 or 17-digit NID and date of birth. The NBR system queries the Election Commission server. Once validated, your 12-digit e-TIN is generated instantly.",
          bn: "এনআইডি নম্বর ও জন্মতারিখ দিতেই সার্ভার স্বয়ংক্রিয়ভাবে ছবি ও নাম নিয়ে ১২ ডিজিটের ই-টিআইএন ইস্যু করবে।"
        },
        where: { en: "NBR Automated System", bn: "এনবিআর স্বয়ংক্রিয় সার্ভার" },
        estTime: { en: "Instant", bn: "তাৎক্ষণিক" },
        tips: {
          en: "Click 'View Certificate' and print the official certificate with government emblem.",
          bn: "'View Certificate' এ ক্লিক করে মূল সরকারি সনদটি পিডিএফ আকারে ডাউনলোড করুন।"
        }
      }
    ],
    commonMistakes: [
      {
        mistake: {
          en: "Opening multiple e-TINs under different mobile numbers.",
          bn: "ভুলবশত একাধিক মোবাইল দিয়ে দুটি আলাদা টিআইএন খোলার চেষ্টা।"
        },
        fix: {
          en: "One citizen can only have one legal TIN linked to their NID. Duplicate attempts are blocked and punishable by tax law.",
          bn: "একজন নাগরিকের একটি মাত্র টিআইএন থাকতে পারে। আগের টিআইএন ভুলে গেলে রিকভার অপশন ব্যবহার করুন।"
        }
      }
    ]
  },
  {
    id: "death-certificate",
    category: "civil",
    categoryLabel: { en: "Civil Records", bn: "নাগরিক নিবন্ধন" },
    title: {
      en: "Death Registration Certificate",
      bn: "মৃত্যু নিবন্ধন সনদ প্রাপ্তি"
    },
    tagline: {
      en: "Essential legal document for family inheritance, bank settlements, and pensions.",
      bn: "উত্তরাধিকার সম্পত্তি বণ্টন, ব্যাংক হিসেব নিষ্পত্তি ও পেনশনের জন্য প্রয়োজনীয় সনদ।"
    },
    whoIsItFor: {
      en: "Heirs, family members, or legal guardians of a deceased Bangladeshi citizen.",
      bn: "প্রয়াত বাংলাদেশি নাগরিকের বৈধ ওয়ারিশ, সন্তান বা পারিবারিক অভিভাবকবৃন্দ।"
    },
    popularity: 81,
    icon: "file-minus",
    officialOffice: {
      en: "Union Parishad / City Corporation Ward Councilor Office / Pourashava",
      bn: "ইউনিয়ন পরিষদ / সিটি কর্পোরেশন ওয়ার্ড কাউন্সিলর কার্যালয় / পৌরসভা"
    },
    workingHours: {
      en: "Sunday to Thursday: 9:00 AM – 3:30 PM",
      bn: "রবিবার থেকে বৃহস্পতিবার: সকাল ৯:০০ – বিকাল ৩:৩০"
    },
    bestTimeToVisit: {
      en: "Sunday or Tuesday morning at 10:00 AM.",
      bn: "রবিবার বা মঙ্গলবার সকাল ১০:০০ টায়।"
    },
    lastVerified: "October 2026",
    sampleDataDisclaimer: true,
    officialPortalUrl: "https://bdris.gov.bd",
    speedTiers: [
      {
        tierId: "regular_45_days",
        title: { en: "Within 45 Days of Demise", bn: "মৃত্যুর ৪৫ দিনের মধ্যে আবেদন" },
        feeBDT: 0,
        timelineDays: "2 to 5 Working Days",
        timelineDaysBn: "২ থেকে ৫ কার্যদিবস",
        notes: {
          en: "Completely free of charge as per Bangladesh BDRIS regulations.",
          bn: "সরকারি আইনানুযায়ী ৪৫ দিনের মধ্যে সম্পূর্ণ বিনামূল্যে।"
        }
      },
      {
        tierId: "after_45_days",
        title: { en: "After 45 Days to 5 Years", bn: "মৃত্যুর ৪৫ দিন পর থেকে ৫ বছরের মধ্যে" },
        feeBDT: 25,
        timelineDays: "3 to 7 Working Days",
        timelineDaysBn: "৩ থেকে ৭ কার্যদিবস",
        notes: {
          en: "Nominal municipal processing fee.",
          bn: "স্থানীয় পৌরসভা বা ইউনিয়ন পরিষদের নির্ধারিত নামমাত্র ফি।"
        }
      },
      {
        tierId: "delayed_over_5",
        title: { en: "Delayed Registration (Over 5 Years)", bn: "বিলম্বিত নিবন্ধন (৫ বছরের বেশি সময় পর)" },
        feeBDT: 50,
        timelineDays: "7 to 15 Working Days",
        timelineDaysBn: "৭ থেকে ১৫ কার্যদিবস",
        notes: {
          en: "Requires inquiry confirmation from local Union Parishad / Ward Councilor.",
          bn: "স্থানীয় ওয়ার্ড কাউন্সিলর বা চেয়ারম্যানের তদন্ত ও প্রত্যয়ন সাপেক্ষে।"
        }
      }
    ],
    dalalAlert: {
      en: "Brokers prey on grieving families claiming death registration takes months of paperwork and demand ৳2,000–৳5,000. It is a simple 2-step process costing ৳0 to ৳50. Apply directly online on bdris.gov.bd.",
      bn: "পরিবারের শোকাবহ পরিস্থিতির সুযোগ নিয়ে মধ্যস্বত্বভোগীরা সনদের জন্য ২,০০০ থেকে ৫,০০০ টাকা দাবি করে। অথচ এই কাজটি অনলাইনে সম্পূর্ণ বিনামূল্যে বা সর্বোচ্চ ৫০ টাকায় সরাসরি করা যায়।"
    },
    requiredDocuments: [
      {
        id: "doc-medical-death-cert",
        title: {
          en: "Hospital Medical Death Certificate / Cemetery Burial Certificate",
          bn: "হাসপাতালের মৃত্যুর প্রমাণপত্র অথবা কবরস্থান / শ্মশান ঘাট কর্তৃপক্ষের দাখিলা"
        },
        notes: {
          en: "States exact time, date, and cause of death with authorized stamp.",
          bn: "মৃত্যুর তারিখ, সময় ও কারণ সংবলিত ডাক্তারের প্রত্যয়নপত্র বা দাফন সনদ।"
        },
        isMandatory: true,
        whereToGet: { en: "Hospital / Cemetery Authorities", bn: "হাসপাতাল বা কবরস্থান কর্তৃপক্ষ" }
      },
      {
        id: "doc-deceased-nid",
        title: {
          en: "Deceased Person's Original National ID (NID) or Birth Certificate",
          bn: "মৃত ব্যক্তির জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন সনদ"
        },
        notes: {
          en: "Surrendered / verified during final registration.",
          bn: "নিবন্ধনের সময় নম্বর মেলানোর জন্য প্রয়োজন।"
        },
        isMandatory: true,
        whereToGet: { en: "Family", bn: "পারিবারিক সংগ্রহ" }
      },
      {
        id: "doc-applicant-nid",
        title: {
          en: "Applicant Heir's National ID (NID) & Relationship Proof",
          bn: "আবেদনকারী ওয়ারিশের জাতীয় পরিচয়পত্র ও সম্পর্কের প্রমাণ"
        },
        notes: {
          en: "Son, daughter, spouse, or sibling.",
          bn: "মৃত ব্যক্তির সাথে আবেদনকারীর সরাসরি সম্পর্কের প্রমাণপত্র।"
        },
        isMandatory: true,
        whereToGet: { en: "Applicant", bn: "আবেদনকারীর নিজস্ব" }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Online Death Registration Form on BDRIS", bn: "BDRIS পোর্টালে অনলাইন মৃত্যু নিবন্ধন আবেদন" },
        description: {
          en: "Access bdris.gov.bd. Select 'Death Registration Application'. Enter the deceased person's BDRIS or NID number, date of death, place of death, and cause of death.",
          bn: "bdris.gov.bd পোর্টালে গিয়ে 'মৃত্যু নিবন্ধন আবেদন' ফরম পূরণ করুন। মৃত্যুর তারিখ, স্থান ও কারণ সঠিকভাবে উল্লেখ করুন।"
        },
        where: { en: "Online (bdris.gov.bd)", bn: "অনলাইন (bdris.gov.bd)" },
        estTime: { en: "15 minutes", bn: "১৫ মিনিট" },
        tips: {
          en: "Ensure the spelling of the deceased person's name exactly matches their property deeds or bank accounts.",
          bn: "নামের বানান যেন ব্যাংক অ্যাকাউন্ট ও জমির দলিলের সাথে সম্পূর্ণ মিলে।"
        }
      },
      {
        stepNumber: 2,
        title: { en: "Submit Form at Ward / Union Parishad Office", bn: "ওয়ার্ড কাউন্সিলর বা ইউনিয়ন পরিষদ কার্যালয়ে ফরম জমা" },
        description: {
          en: "Print the application form. Attach hospital death memo or graveyard receipt, along with copies of applicant's NID. Submit at the local registration desk.",
          bn: "আবেদন কপি প্রিন্ট করে হাসপাতালের ডেথ সার্টিফিকেট ও কবরস্থানের রশিদের অনুলিপিসহ স্থানীয় পৌরসভা বা ইউনিয়ন অফিসে জমা দিন।"
        },
        where: { en: "Local Union Parishad / Ward Councilor Desk", bn: "স্থানীয় ইউনিয়ন পরিষদ বা কাউন্সিলর অফিস" },
        estTime: { en: "15–25 minutes", bn: "১৫–২৫ মিনিট" },
        tips: {
          en: "No unofficial fees are permitted. Ask for the official receipt.",
          bn: "কোনো ধরনের বকশিশ প্রদান করবেন না, সরকার নির্ধারিত নামমাত্র ফি দিন।"
        }
      },
      {
        stepNumber: 3,
        title: { en: "Receive Certified Bilingual Death Certificate", bn: "সরকারি ডিজিটাল মৃত্যু নিবন্ধন সনদ সংগ্রহ" },
        description: {
          en: "Collect the official watermarked death certificate with QR verification code from the municipal office.",
          bn: "স্থানীয় কার্যালয় থেকে সরকারি ওয়াটারমার্ক ও কিউআর কোডযুক্ত মূল দ্বৈত ভাষার সনদটি সংগ্রহ করুন।"
        },
        where: { en: "Municipal Delivery Desk", bn: "পৌরসভা বা ইউনিয়ন পরিষদ ডেলিভারি কাউন্টার" },
        estTime: { en: "10 minutes", bn: "১০ মিনিট" },
        tips: {
          en: "Laminate and make 5-10 photocopies; death certificates are needed for banks, insurance, and land transfer.",
          bn: "সনদের বেশ কয়েকটি কপি সত্যায়িত করে রাখুন, কারণ জমি হস্তান্তর ও ব্যাংকে মূল কপি প্রয়োজন হয়।"
        }
      }
    ],
    commonMistakes: [
      {
        mistake: {
          en: "Delaying registration past the 45-day statutory window.",
          bn: "মৃত্যুর ৪৫ দিনের মধ্যে আবেদন না করে বছরের পর বছর ফেলে রাখা।"
        },
        fix: {
          en: "Late applications require additional affidavits and magistrate approvals. Register as early as possible after demise.",
          bn: "দেরি হলে স্থানীয় তদন্ত ও বিচারিক প্রক্রিয়ার মুখোমুখি হতে হয়, তাই যথাসম্ভব দ্রুত নিবন্ধন সম্পন্ন করুন।"
        }
      }
    ]
  }
];

