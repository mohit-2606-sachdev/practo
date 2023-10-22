const MedicineData = [
  {
    name: "PainAway",
    category: "Family Care",
    subcategory: "Cream",
    ml_gm: "50 gm",
    price: 299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "RelaxoLife",
    category: "Fitness & Wellness",
    subcategory: "Tonic",
    ml_gm: "100 ml",
    price: 499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "GlowMagic",
    category: "Skin Care",
    subcategory: "Mask",
    ml_gm: "10 packets",
    price: 349,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "SilkStrand",
    category: "Hair Care",
    subcategory: "Serum",
    ml_gm: "75 gm",
    price: 389,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "LipLux",
    category: "Lip Care",
    subcategory: "Balm",
    ml_gm: "15 ml",
    price: 199,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "PassionMax",
    category: "Sexual Wellness",
    subcategory: "Capsules",
    ml_gm: "30 capsules",
    price: 699,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "WonderWoman",
    category: "Women's Care",
    subcategory: "Cream",
    ml_gm: "50 gm",
    price: 349,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "BabyBliss",
    category: "Baby Care",
    subcategory: "Lotion",
    ml_gm: "120 ml",
    price: 259,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "MuscleRelief",
    category: "Family Care",
    subcategory: "Ointment",
    ml_gm: "60 gm",
    price: 329,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "VitalBoost",
    category: "Fitness & Wellness",
    subcategory: "Syrup",
    ml_gm: "80 ml",
    price: 449,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "RadiantSkin",
    category: "Skin Care",
    subcategory: "Facial Oil",
    ml_gm: "30 ml",
    price: 389,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "HairRevive",
    category: "Hair Care",
    subcategory: "Shampoo",
    ml_gm: "300 ml",
    price: 279,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "SoftLips",
    category: "Lip Care",
    subcategory: "Lip Scrub",
    ml_gm: "10 gm",
    price: 169,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "SensualDelight",
    category: "Sexual Wellness",
    subcategory: "Intimate Oil",
    ml_gm: "50 ml",
    price: 599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "FeminineCare",
    category: "Women's Care",
    subcategory: "Cream",
    ml_gm: "45 gm",
    price: 299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "BabyCherish",
    category: "Baby Care",
    subcategory: "Baby Powder",
    ml_gm: "150 gm",
    price: 219,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "PainReliefPro",
    category: "Family Care",
    subcategory: "Pain Relief Spray",
    ml_gm: "100 ml",
    price: 429,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "VitalityPlus",
    category: "Fitness & Wellness",
    subcategory: "Vitamin Tablets",
    ml_gm: "60 tablets",
    price: 349,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "YouthfulGlow",
    category: "Skin Care",
    subcategory: "Anti-Aging Serum",
    ml_gm: "30 ml",
    price: 459,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "SilkyStrands",
    category: "Hair Care",
    subcategory: "Hair Mask",
    ml_gm: "100 gm",
    price: 369,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "SmoothLips",
    category: "Lip Care",
    subcategory: "Lip Gloss",
    ml_gm: "8 ml",
    price: 179,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "PassionFire",
    category: "Sexual Wellness",
    subcategory: "Stimulant Spray",
    ml_gm: "50 ml",
    price: 699,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "FeminineElegance",
    category: "Women's Care",
    subcategory: "Feminine Wash",
    ml_gm: "150 ml",
    price: 299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "BabyCherish",
    category: "Baby Care",
    subcategory: "Baby Powder",
    ml_gm: "150 gm",
    price: 219,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "PainAway Plus",
    category: "Family Care",
    subcategory: "Pain Relief Cream",
    ml_gm: "50 gm",
    price: 319,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "EnergyBoost",
    category: "Fitness & Wellness",
    subcategory: "Energy Drink",
    ml_gm: "250 ml",
    price: 159,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "HydratingMask",
    category: "Skin Care",
    subcategory: "Hydrating Face Mask",
    ml_gm: "5 packets",
    price: 299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "FrizzControl",
    category: "Hair Care",
    subcategory: "Frizz Control Serum",
    ml_gm: "50 ml",
    price: 239,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "MoistureBalm",
    category: "Lip Care",
    subcategory: "Moisturizing Balm",
    ml_gm: "10 ml",
    price: 129,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "StaminaMax",
    category: "Sexual Wellness",
    subcategory: "Stamina Enhancer",
    ml_gm: "30 capsules",
    price: 599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "IntenseHydration",
    category: "Skin Care",
    subcategory: "Hydrating Serum",
    ml_gm: "30 ml",
    price: 349,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "DandruffControl",
    category: "Hair Care",
    subcategory: "Anti-Dandruff Shampoo",
    ml_gm: "250 ml",
    price: 279,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "SoothingBalm",
    category: "Lip Care",
    subcategory: "Soothing Lip Balm",
    ml_gm: "12 ml",
    price: 179,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "LibidoBoost",
    category: "Sexual Wellness",
    subcategory: "Libido Enhancer",
    ml_gm: "60 capsules",
    price: 699,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "RadiantGlow",
    category: "Skin Care",
    subcategory: "Radiance-Boosting Serum",
    ml_gm: "20 ml",
    price: 389,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "SplitEndRescue",
    category: "Hair Care",
    subcategory: "Split End Repair Serum",
    ml_gm: "50 ml",
    price: 329,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "MoistureLock",
    category: "Lip Care",
    subcategory: "Moisture-Locking Lip Balm",
    ml_gm: "8 ml",
    price: 169,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "StressRelief",
    category: "Fitness & Wellness",
    subcategory: "Stress Relief Tablets",
    ml_gm: "60 tablets",
    price: 399,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "AcneClear",
    category: "Skin Care",
    subcategory: "Acne Clearing Serum",
    ml_gm: "15 ml",
    price: 259,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "StrongStrands",
    category: "Hair Care",
    subcategory: "Strength & Shine Shampoo",
    ml_gm: "300 ml",
    price: 299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "TintedLipBalm",
    category: "Lip Care",
    subcategory: "Tinted Lip Balm",
    ml_gm: "10 ml",
    price: 199,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "SensualElixir",
    category: "Sexual Wellness",
    subcategory: "Sensual Elixir Oil",
    ml_gm: "45 ml",
    price: 549,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "FeminineBalance",
    category: "Women's Care",
    subcategory: "Feminine Balance Cream",
    ml_gm: "40 gm",
    price: 299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "BabyCalm",
    category: "Baby Care",
    subcategory: "Calming Lotion",
    ml_gm: "120 ml",
    price: 249,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "ImmunityBooster",
    category: "Fitness & Wellness",
    subcategory: "Immunity Booster Syrup",
    ml_gm: "90 ml",
    price: 499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "BrighteningSerum",
    category: "Skin Care",
    subcategory: "Brightening Facial Serum",
    ml_gm: "25 ml",
    price: 379,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "VolumeBoost",
    category: "Hair Care",
    subcategory: "Volume Boost Shampoo",
    ml_gm: "250 ml",
    price: 269,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "MoistureRenew",
    category: "Lip Care",
    subcategory: "Moisture Renewal Lip Balm",
    ml_gm: "10 ml",
    price: 149,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
  {
    name: "RomanticNight",
    category: "Sexual Wellness",
    subcategory: "Romantic Night Oil",
    ml_gm: "60 ml",
    price: 599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
  },
  {
    name: "GentleCleanser",
    category: "Women's Care",
    subcategory: "Gentle Cleansing Wash",
    ml_gm: "150 ml",
    price: 349,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
  },
  {
    name: "BabyGentle",
    category: "Baby Care",
    subcategory: "Gentle Baby Shampoo",
    ml_gm: "200 ml",
    price: 199,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
  },
];

export default MedicineData;
