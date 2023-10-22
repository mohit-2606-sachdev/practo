const LabTestData = [
  // Hematology Category
  {
    testName: "Complete Blood Count (CBC)",
    category: "Hematology",
    price: 1500,
    description: "Measures blood components for overall health assessment.",
  },
  {
    testName: "Coagulation Profile",
    category: "Hematology",
    price: 1800,
    description: "Evaluates blood clotting function.",
  },
  {
    testName: "Hemoglobin Electrophoresis",
    category: "Hematology",
    price: 2200,
    description:
      "Identifies and quantifies different types of hemoglobin in the blood.",
  },

  // Cardiology Category
  {
    testName: "Lipid Profile",
    category: "Cardiology",
    price: 2000,
    description: "Assesses cholesterol levels to gauge heart disease risk.",
  },
  {
    testName: "Electrocardiogram (ECG or EKG)",
    category: "Cardiology",
    price: 1800,
    description: "Records heart's electrical activity for rhythm assessment.",
  },
  {
    testName: "Echocardiogram",
    category: "Cardiology",
    price: 3500,
    description:
      "Uses sound waves to create images of the heart for cardiac evaluation.",
  },

  // Endocrinology Category
  {
    testName: "Blood Glucose Test",
    category: "Endocrinology",
    price: 800,
    description: "Measures blood sugar for diabetes diagnosis/management.",
  },
  {
    testName: "Thyroid Function Panel",
    category: "Endocrinology",
    price: 2500,
    description: "Assesses thyroid health for thyroid disorder diagnosis.",
  },
  {
    testName: "Insulin Level Test",
    category: "Endocrinology",
    price: 1600,
    description: "Measures insulin levels in the blood.",
  },

  // Nephrology Category
  {
    testName: "Urinalysis",
    category: "Nephrology",
    price: 1200,
    description:
      "Examines urine for disease signs, kidney issues, and infections.",
  },
  {
    testName: "Kidney Function Panel",
    category: "Nephrology",
    price: 2000,
    description:
      "Evaluates kidney function by measuring waste products in the blood.",
  },
  {
    testName: "Creatinine Clearance Test",
    category: "Nephrology",
    price: 1500,
    description: "Determines how well the kidneys filter waste from the blood.",
  },

  // Gastroenterology Category
  {
    testName: "Liver Function Panel",
    category: "Gastroenterology",
    price: 1800,
    description:
      "Assesses liver health by measuring enzymes and proteins in the blood.",
  },
  {
    testName: "Colonoscopy",
    category: "Gastroenterology",
    price: 3500,
    description: "Examines the colon for polyps or colorectal cancer.",
  },
  {
    testName: "Stool Occult Blood Test",
    category: "Gastroenterology",
    price: 800,
    description:
      "Detects hidden blood in the stool, often used for colorectal cancer screening.",
  },

  // Allergy & Immunology Category
  {
    testName: "Allergy Panel",
    category: "Allergy & Immunology",
    price: 1600,
    description: "Tests for allergies to specific allergens.",
  },
  {
    testName: "Immunoglobulin E (IgE) Test",
    category: "Allergy & Immunology",
    price: 1200,
    description: "Measures IgE antibodies, often related to allergies.",
  },
  {
    testName: "HIV Test",
    category: "Allergy & Immunology",
    price: 600,
    description: "Detects the presence of the HIV virus.",
  },

  // Radiology Category
  {
    testName: "X-ray (Chest)",
    category: "Radiology",
    price: 1000,
    description:
      "Produces images of the chest to diagnose lung and heart conditions.",
  },
  {
    testName: "Magnetic Resonance Imaging (MRI)",
    category: "Radiology",
    price: 4500,
    description:
      "Produces detailed images of internal structures for diagnosis.",
  },
  {
    testName: "Computed Tomography (CT) Scan",
    category: "Radiology",
    price: 3500,
    description: "Uses X-rays to create cross-sectional images of the body.",
  },

  // Obstetrics & Gynecology Category
  {
    testName: "Pap Smear (Cervical Screening)",
    category: "Obstetrics & Gynecology",
    price: 900,
    description: "Detects cervical cancer or precancerous changes.",
  },
  {
    testName: "Transvaginal Ultrasound",
    category: "Obstetrics & Gynecology",
    price: 1500,
    description: "Ultrasound imaging of the female reproductive organs.",
  },
  {
    testName: "Complete Blood Count (CBC)",
    category: "Hematology",
    price: 1500,
    description: "Measures blood components for overall health assessment.",
  },
  {
    testName: "Coagulation Profile",
    category: "Hematology",
    price: 1800,
    description: "Evaluates blood clotting function.",
  },
  {
    testName: "Hemoglobin Electrophoresis",
    category: "Hematology",
    price: 2200,
    description:
      "Identifies and quantifies different types of hemoglobin in the blood.",
  },
  {
    testName: "Platelet Count",
    category: "Hematology",
    price: 1000,
    description: "Measures the number of platelets in the blood.",
  },
  {
    testName: "Red Blood Cell (RBC) Count",
    category: "Hematology",
    price: 900,
    description: "Measures the number of red blood cells in the blood.",
  },
  {
    testName: "White Blood Cell (WBC) Count",
    category: "Hematology",
    price: 950,
    description: "Measures the number of white blood cells in the blood.",
  },
  {
    testName: "Hematocrit Test",
    category: "Hematology",
    price: 850,
    description: "Measures the percentage of red blood cells in the blood.",
  },

  // Category: Cardiology
  {
    testName: "Lipid Profile",
    category: "Cardiology",
    price: 2000,
    description: "Assesses cholesterol levels to gauge heart disease risk.",
  },
  {
    testName: "Electrocardiogram (ECG or EKG)",
    category: "Cardiology",
    price: 1800,
    description: "Records heart's electrical activity for rhythm assessment.",
  },
  {
    testName: "Echocardiogram",
    category: "Cardiology",
    price: 3500,
    description:
      "Uses sound waves to create images of the heart for cardiac evaluation.",
  },
  {
    testName: "Cardiac Stress Test",
    category: "Cardiology",
    price: 2800,
    description: "Evaluates heart function during physical activity.",
  },
  {
    testName: "Holter Monitor",
    category: "Cardiology",
    price: 1500,
    description:
      "Records continuous ECG data over a period to detect heart abnormalities.",
  },
  {
    testName: "Cardiac Catheterization",
    category: "Cardiology",
    price: 5000,
    description: "Invasive procedure to diagnose and treat heart conditions.",
  },
  {
    testName: "Coronary Angiography",
    category: "Cardiology",
    price: 4500,
    description: "X-ray imaging of the blood vessels in the heart.",
  },

  // Category: Endocrinology
  {
    testName: "Blood Glucose Test",
    category: "Endocrinology",
    price: 800,
    description: "Measures blood sugar for diabetes diagnosis/management.",
  },
  {
    testName: "Thyroid Function Panel",
    category: "Endocrinology",
    price: 2500,
    description: "Assesses thyroid health for thyroid disorder diagnosis.",
  },
  {
    testName: "Insulin Level Test",
    category: "Endocrinology",
    price: 1600,
    description: "Measures insulin levels in the blood.",
  },
  {
    testName: "HbA1c Test",
    category: "Endocrinology",
    price: 1200,
    description:
      "Measures average blood sugar levels over several months for diabetes management.",
  },
  {
    testName: "Adrenal Function Test",
    category: "Endocrinology",
    price: 2200,
    description: "Evaluates adrenal gland function.",
  },
  {
    testName: "Prolactin Test",
    category: "Endocrinology",
    price: 1100,
    description: "Measures prolactin hormone levels in the blood.",
  },
  {
    testName: "Cortisol Level Test",
    category: "Endocrinology",
    price: 1800,
    description: "Measures cortisol hormone levels in the blood.",
  },

  // Category: Nephrology
  {
    testName: "Urinalysis",
    category: "Nephrology",
    price: 1200,
    description:
      "Examines urine for disease signs, kidney issues, and infections.",
  },
  {
    testName: "Kidney Function Panel",
    category: "Nephrology",
    price: 2000,
    description:
      "Evaluates kidney function by measuring waste products in the blood.",
  },
  {
    testName: "Creatinine Clearance Test",
    category: "Nephrology",
    price: 1500,
    description: "Determines how well the kidneys filter waste from the blood.",
  },
  {
    testName: "Blood Urea Nitrogen (BUN) Test",
    category: "Nephrology",
    price: 1000,
    description:
      "Assesses kidney function by measuring urea nitrogen in the blood.",
  },
  {
    testName: "Uric Acid Test",
    category: "Nephrology",
    price: 900,
    description: "Measures uric acid levels in the blood for gout diagnosis.",
  },
  {
    testName: "Renal Ultrasound",
    category: "Nephrology",
    price: 2800,
    description: "Ultrasound imaging of the kidneys.",
  },
  {
    testName: "24-Hour Urine Protein Test",
    category: "Nephrology",
    price: 1600,
    description:
      "Measures protein excretion in urine for kidney disease assessment.",
  },

  // Category: Gastroenterology
  {
    testName: "Liver Function Panel",
    category: "Gastroenterology",
    price: 1800,
    description:
      "Assesses liver health by measuring enzymes and proteins in the blood.",
  },
  {
    testName: "Colonoscopy",
    category: "Gastroenterology",
    price: 3500,
    description: "Examines the colon for polyps or colorectal cancer.",
  },
  {
    testName: "Stool Occult Blood Test",
    category: "Gastroenterology",
    price: 800,
    description:
      "Detects hidden blood in the stool, often used for colorectal cancer screening.",
  },
  {
    testName: "Endoscopy",
    category: "Gastroenterology",
    price: 2800,
    description:
      "Visual examination of the digestive tract with a flexible tube.",
  },
  {
    testName: "Liver Biopsy",
    category: "Gastroenterology",
    price: 2500,
    description: "Removal and examination of liver tissue for diagnosis.",
  },
  {
    testName: "Abdominal Ultrasound",
    category: "Gastroenterology",
    price: 1900,
    description: "Ultrasound imaging of the abdominal organs.",
  },
  {
    testName: "Gastric Emptying Study",
    category: "Gastroenterology",
    price: 1200,
    description:
      "Assesses the rate of stomach emptying for digestive disorders.",
  },
];

export default LabTestData;
