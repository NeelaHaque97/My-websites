/**
 * THE PICK: KAGOJ — GLOSSARY DATA
 * Plain-language Bangladesh bureaucratic terms (English & Bengali)
 */

window.KAGOJ_GLOSSARY = [
  {
    id: "namjari",
    term: {
      en: "Mutation (Namjari / Kharij)",
      bn: "নামজারি (খারিজ / জমাভাগ)"
    },
    shortDef: {
      en: "Recording the new owner's legal name in the government land ledger after purchase or inheritance.",
      bn: "জমি ক্রয় বা উত্তরাধিকার সূত্রে পাওয়ার পর সরকারি খতিয়ানে পূর্বের মালিকের নামের পরিবর্তে নতুন মালিকের নাম নথিভুক্ত করা।"
    },
    fullDef: {
      en: "Mutation (নামজারি) is the formal legal procedure through which the ownership record of a land parcel in the Assistant Commissioner (Land) ledger is updated to the buyer or heir's name. Without namjari, you cannot pay land tax (Khajna) or legally resell the plot.",
      bn: "নামজারি হলো ভূমি রাজস্ব রেকর্ডে নতুন মালিকের নাম প্রতিস্থাপন প্রক্রিয়া। জমি কেনার পর নামজারি না করলে সরকার আপনাকে সরকারি রেকর্ডে জমির বৈধ মালিক হিসেবে স্বীকৃতি দেয় না এবং আপনি খাজনা দিতে বা জমি বিক্রি করতে পারবেন না।"
    },
    context: {
      en: "Handled online via mutation.land.gov.bd and AC Land office.",
      bn: "অনলাইনে mutation.land.gov.bd ও সহকারী কমিশনার (ভূমি) অফিসে সম্পন্ন হয়।"
    }
  },
  {
    id: "khatian",
    term: {
      en: "Khatian (Record of Rights / RoR)",
      bn: "খতিয়ান (স্বত্বলিপি / RoR)"
    },
    shortDef: {
      en: "Official government land record document showing who owns which plot and shares.",
      bn: "জমির মালিকানা, দাগ নম্বর, সীমানা ও হিস্যার সরকারি রেকর্ড বা দলিল।"
    },
    fullDef: {
      en: "A Khatian is an official document prepared during government land surveys (CS, SA, RS, BS, City Survey) detailing plot numbers, owners' names, parentage, shares, and land category (agricultural, residential, etc.).",
      bn: "সরকারি ভূমি জরিপের (সিএস, এসএ, আরএস, বিএস ইত্যাদি) সময় প্রস্তুতকৃত দলিল যেখানে জমির দাগ নম্বর, হিস্যা, দখল ও মালিকের বিস্তারিত লিপিবদ্ধ থাকে।"
    },
    context: {
      en: "Required for land mutation, selling, and bank mortgages.",
      bn: "জমি খারিজ, বিক্রয় ও ব্যাংক লোনের জন্য অপরিহার্য।"
    }
  },
  {
    id: "porcha",
    term: {
      en: "Porcha (Survey Record Copy)",
      bn: "পর্চা (খতিয়ানের খসড়া বা অনুলিপি)"
    },
    shortDef: {
      en: "A certified or preliminary draft copy of a government Khatian record.",
      bn: "খতিয়ানের খসড়া বা সরকারিভাবে প্রত্যয়িত অনুলিপি যা মালিকের হাতে থাকে।"
    },
    fullDef: {
      en: "While a Khatian is the official master ledger preserved in the District Collectorate / Tehsil, a Porcha is the working draft copy distributed to landowners during or after a land survey.",
      bn: "জরিপ চলার সময় বা শেষ হওয়ার পর জমির মালিককে যে খতিয়ানের খসড়া বা সহি-মোহর অনুলিপি দেওয়া হয় তাকে পর্চা বলা হয়।"
    },
    context: {
      en: "Obtained from District DC Office Record Room or e-Porcha portal (eporcha.gov.bd).",
      bn: "জেলা প্রশাসকের রেকর্ড রুম বা eporcha.gov.bd পোর্টাল থেকে সংগ্রহ করা যায়।"
    }
  },
  {
    id: "mouza",
    term: {
      en: "Mouza (Revenue Village Boundary)",
      bn: "মৌজা (ভূমি রাজস্ব গ্রাম)"
    },
    shortDef: {
      en: "The specific geographic cadastral boundary used in Bangladesh land records.",
      bn: "ভূমি রাজস্ব আদায় ও জরিপের সুবিধার জন্য নির্ধারিত নির্দিষ্ট ভৌগোলিক এলাকা বা ইউনিট।"
    },
    fullDef: {
      en: "A Mouza is the fundamental survey parcel boundary in Bangladesh. Every mouza has a unique Jurisdiction List (JL) number, its own surveyor map (Naksha), and distinct land revenue categorization.",
      bn: "বাংলাদেশে ভূমি জরিপের সবচেয়ে প্রাথমিক ভৌগোলিক ইউনিট হলো মৌজা। প্রতিটি মৌজার একটি স্বতন্ত্র জেএল (JL) নম্বর এবং নিজস্ব রাজস্ব মানচিত্র থাকে।"
    },
    context: {
      en: "You must know your Mouza and JL number for any land deed or mutation.",
      bn: "যেকোনো জমি দলিল বা নামজারির জন্য মৌজা ও জেএল নম্বর জানা বাধ্যতামূলক।"
    }
  },
  {
    id: "dag-number",
    term: {
      en: "Dag Number (Plot Number)",
      bn: "দাগ নম্বর (প্লট নম্বর)"
    },
    shortDef: {
      en: "The distinct numerical ID given to an individual piece of land on a survey map.",
      bn: "ভূমি জরিপের নকশায় চিহ্নিত প্রতিটি নির্দিষ্ট ভূমিখণ্ডের আলাদা পরিচিতি নম্বর।"
    },
    fullDef: {
      en: "During land surveys, each demarcated boundary of land on the Mouza map is assigned a distinct Dag number. Multiple persons can share ownership within the same Dag.",
      bn: "মৌজা নকশায় চিহ্নিত প্রতিটি পৃথক জমিকে একটি নির্দিষ্ট নম্বর দ্বারা চিহ্নিত করা হয়, যাকে দাগ নম্বর বলে। একই দাগে একাধিক অংশীদারের মালিকানা থাকতে পারে।"
    },
    context: {
      en: "Appears on Khatian, Deel, and Namjari receipts.",
      bn: "খতিয়ান, দলিল এবং নামজারি খতিয়ানে মুদ্রিত থাকে।"
    }
  },
  {
    id: "dalal",
    term: {
      en: "Dalal (Broker / Middleman)",
      bn: "দালাল (মধ্যস্বত্বভোগী / দালাল)"
    },
    shortDef: {
      en: "An unauthorized intermediary who charges exorbitant fees by exploiting public ignorance.",
      bn: "অননুমোদিত ব্যক্তি যে সরকারি কাজের ভয় ও জটিলতা দেখিয়ে নাগরিকদের কাছ থেকে অতিরিক্ত টাকা হাতিয়ে নেয়।"
    },
    fullDef: {
      en: "Dalals hover outside passport offices, BRTA, and sub-registry offices. They exploit citizens' confusion, claiming government processes take months without bribes. In reality, modern Bangladesh government processes are increasingly digital, transparent, and direct.",
      bn: "দালালরা সরকারি অফিসের সামনে ঘোরাফেরা করে নাগরিকদের বিভ্রান্ত করে দ্বিগুণ-তিনগুণ টাকা আদায় করে। অথচ আজকের দিনে বেশিরভাগ সরকারি সেবাই অনলাইনে নির্দিষ্ট ফি-তে সম্পন্ন করা সম্ভব।"
    },
    context: {
      en: "Using a broker carries risks of fake stamps, stolen papers, and zero legal recourse.",
      bn: "দালালের মাধ্যমে কাজ করলে জাল কাগজপত্র বা অর্থ হারানোর ঝুঁকি থাকে এবং আইনের কোনো সুরক্ষা থাকে না।"
    }
  },
  {
    id: "attestation",
    term: {
      en: "Attestation (Sottyayon)",
      bn: "সত্যায়ন (গেজেটেড কর্মকর্তার স্বাক্ষর)"
    },
    shortDef: {
      en: "Verification of document photocopies by an authorized Gazetted Officer or Professor.",
      bn: "ফটোকপি মূল দলিলের অবিকল নকল তা প্রথম শ্রেণীর কর্মকর্তা কর্তৃক সীল ও স্বাক্ষর দিয়ে নিশ্চিতকরণ।"
    },
    fullDef: {
      en: "Attestation requires a 1st Class Gazetted Officer (cadre service), university professor, or authorized official to compare the photocopy with the original, sign it, and stamp it with their official seal containing name, rank, and workplace.",
      bn: "প্রথম শ্রেণীর গেজেটেড কর্মকর্তা (বিসিএস ক্যাডার), সরকারি কলেজের অধ্যাপক বা সমমানের কর্মকর্তা কর্তৃক ফটোকপিতে নাম, পদবি ও কর্মস্থল সম্বলিত সীলমোহর ও স্বাক্ষর প্রদান।"
    },
    context: {
      en: "Never pay for attestation; it is a free official duty for government officers.",
      bn: "সত্যায়নের জন্য কোনো টাকা দিতে হয় না; এটি সরকারি কর্মকর্তাদের বিনামূল্যের দায়িত্ব।"
    }
  },
  {
    id: "challan",
    term: {
      en: "Automated Challan (A-Challan / ই-চালান)",
      bn: "এ-চালান (স্বয়ংক্রিয় ট্রেজারি চালান)"
    },
    shortDef: {
      en: "Digital system to deposit government fees directly to Bangladesh Bank treasury.",
      bn: "সরকারি বিভিন্ন ফি ও রাজস্ব সরাসরি বাংলাদেশ ব্যাংক বা সোনালী ব্যাংকে জমার ডিজিটাল মাধ্যম।"
    },
    fullDef: {
      en: "The Automated Challan System (a-challan / echallan.gov.bd) allows citizens to pay passport, driving license, and court fees via bKash, Nagad, debit/credit cards, or bank counters, generating a verifiable government receipt.",
      bn: "এ-চালান হলো বাংলাদেশ সরকারের কেন্দ্রীয় অনলাইন পেমেন্ট গেটওয়ে। বিকাশ, নগদ, রকেট বা যেকোনো ব্যাংক কার্ডের মাধ্যমে সরকারি ফি জমা দিয়ে সরাসরি চালান রশিদ সংগ্রহ করা যায়।"
    },
    context: {
      en: "Every official fee can be deposited via A-Challan; brokers cannot charge more than this receipt.",
      bn: "সরকারি চালান রশিদের চেয়ে ১ টাকাও বেশি কাউকে দেওয়ার বিধান নেই।"
    }
  },
  {
    id: "affidavit",
    term: {
      en: "Affidavit (Holofnama)",
      bn: "হলফনামা (শপথপত্র)"
    },
    shortDef: {
      en: "A sworn legal written declaration notarized by a First Class Magistrate or Notary Public.",
      bn: "বিজ্ঞ নির্বাহী ম্যাজিস্ট্রেট বা নোটারি পাবলিকের সামনে শপথ নিয়ে স্বাক্ষরিত লিখিত আইনি ঘোষণা।"
    },
    fullDef: {
      en: "An affidavit is printed on government non-judicial stamp paper (usually ৳200-৳300 value) where an applicant solemnly swears to personal facts (e.g. name discrepancy, age declaration, or loss of papers).",
      bn: "নন-জুডিশিয়াল স্ট্যাম্পে লিপিবদ্ধ শপথপত্র যেখানে আবেদনকারী তার নাম সংশোধন, জন্মতারিখ বা কোনো তথ্য সত্য বলে প্রথম শ্রেণীর ম্যাজিস্ট্রেট বা নোটারি পাবলিকের নিকট সাক্ষ্য দেন।"
    },
    context: {
      en: "Required for complex NID corrections, passport name changes, and lost certificates.",
      bn: "জটিল এনআইডি সংশোধন, পাসপোর্টে নাম পরিবর্তন বা হারানো দলিলের ক্ষেত্রে আবশ্যক।"
    }
  },
  {
    id: "police-clearance",
    term: {
      en: "Police Verification / Clearance Certificate",
      bn: "পুলিশ ভেরিফিকেশন ও ক্লিয়ারেন্স সনদ"
    },
    shortDef: {
      en: "Special Branch inquiry confirming your residential address and clean criminal record.",
      bn: "স্পেশাল ব্রাঞ্চ (ডিএসবি/এসবি) কর্তৃক নাগরিকের স্থায়ী ও বর্তমান ঠিকানা এবং অপরাধমুক্ত ইতিহাস যাচাই।"
    },
    fullDef: {
      en: "Conducted for new passport applications and foreign visa clearance. The Special Branch (SB) assigns an officer to verify your address, national identity, and citizenship. Official verification has zero fee.",
      bn: "পাসপোর্ট ও বিদেশ যাত্রার জন্য এসবি পুলিশ আবেদনকারীর ঠিকানা ও নাগরিকত্ব যাচাই করে প্রতিবেদন দেয়। সরকারিভাবে পুলিশ ভেরিফিকেশনের জন্য কোনো ফি নেই।"
    },
    context: {
      en: "Apply directly online via pcc.police.gov.bd without any third-party intermediary.",
      bn: "pcc.police.gov.bd থেকে সম্পূর্ণ অনলাইনে সরাসরি আবেদন করা যায়।"
    }
  }
];

