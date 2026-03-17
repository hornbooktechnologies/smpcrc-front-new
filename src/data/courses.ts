export interface CourseDetail {
  overview: string[];
  eligibility: {
    academic: string;
    marks: string;
    age: string;
    entrance: string;
  };
  curriculum: {
    phase: string;
    duration: string;
    subjects: string;
  }[];
  admissionProcess: {
    step: string;
    title: string;
    description: string;
  }[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  image: string;
  type: string;
  level: "Undergraduate" | "Postgraduate" | "Diploma" | "Clinical";
  recognition?: string;
  internship?: string;
  details?: CourseDetail;
}

export const courses: Course[] = [
  {
    id: "mbbs",
    title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    description: "Comprehensive medical education focusing on clinical skills, human anatomy, and hospital residency training.",
    category: "Undergraduate",
    duration: "5.5 Years",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ_TGfRJK8y2fhZ7MV06o9NpfkONtCL2CbdBkNo4CKIZ5uZdCqVY_ZN_bR0aRz-fE02_rtZpa7TCnOWKZ_SVkyLg7viK0OT8Zf0M5OeA_zOD9sWej6pihtdkPmxXhpPYvnO2j7X5qJU1R3xC7x7Eo2D-ZPNm3uK1KZlWMvm_dwIzsa71OFfaClTt8WCB7z_sAsEcP0K4yLTEGq_XW98i6KdHRPV0pHrUPFLhWFowmqwad_ruudFeHf9e-dHMQle0oOLWn0aBUr5ZA",
    type: "Full-Time",
    level: "Undergraduate",
    recognition: "NMC & WHO Recognized",
    internship: "1 Year Mandatory Internship",
    details: {
      overview: [
        "The MBBS program at MedAcademy is a premier medical qualification designed to develop the next generation of healthcare leaders. Our curriculum integrates foundational biomedical sciences with early clinical exposure, ensuring a holistic understanding of human health and disease.",
        "Students benefit from our state-of-the-art 1,000-bed teaching hospital, simulation centers, and research laboratories. The program emphasizes evidence-based practice, ethical medical conduct, and community-oriented primary care."
      ],
      eligibility: {
        academic: "10+2 or equivalent with Physics, Chemistry, Biology & English.",
        marks: "At least 50% aggregate in PCB (40% for reserved categories).",
        age: "Minimum 17 years by Dec 31st of the admission year.",
        entrance: "Must qualify in the National Eligibility cum Entrance Test (NEET)."
      },
      curriculum: [
        {
          phase: "Phase I: Pre-Clinical (1 Year)",
          duration: "Year 1",
          subjects: "Anatomy, Physiology, Biochemistry, and Community Medicine."
        },
        {
          phase: "Phase II: Para-Clinical (1.5 Years)",
          duration: "Year 2 - 2.5",
          subjects: "Pathology, Microbiology, Pharmacology, Forensic Medicine."
        },
        {
          phase: "Phase III: Clinical (2 Years)",
          duration: "Year 3 - 4.5",
          subjects: "Medicine, Surgery, Pediatrics, ENT, Ophthalmology, OBG."
        }
      ],
      admissionProcess: [
        {
          step: "Step 1",
          title: "Application",
          description: "Register online and submit the application form with NEET scores."
        },
        {
          step: "Step 2",
          title: "Counseling",
          description: "Participate in the centralized counseling process based on merit list."
        },
        {
          step: "Step 3",
          title: "Document Verification",
          description: "Physical verification of academic and category documents at the college."
        },
        {
          step: "Step 4",
          title: "Fee Payment & Enrollment",
          description: "Confirm admission by paying the first-year tuition fee."
        }
      ]
    }
  },
  {
    id: "bsc-nursing",
    title: "B.Sc. Nursing",
    description: "Professional training in nursing care, community health, and patient management within specialized clinical environments.",
    category: "Undergraduate",
    duration: "4 Years",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDgoQHUcmLz9GLbncs5XqnnWulI-7aJ7Hlvww8wpiSEACK4w4f8JeVyoKl21O_nMeAZswxfGTcxANifFRWgJu5j2w91UCpRvaMGqfNMyyucOD4SL3FYEW9GUJBqNCkXGgtGnY1pWPE8oZqi45ObTffXE16mosKtBZKxTlJdgdjdxRnLFGAq3rejNvTGHUuApbOpvYZJf0xt0JUVbXbaaiqg41-6_coVET8TV8ggQqMU-LQJ6dHNI_beVfwpsarS3JvHmlkhs7oegg",
    type: "Full-Time",
    level: "Undergraduate",
    recognition: "INC Recognized",
    internship: "Clinical Postings Included",
    details: {
      overview: [
        "The B.Sc. Nursing program is designed to prepare students to be competent professional nurses who can work in various healthcare settings.",
        "The course focuses on providing a strong foundation in basic sciences and clinical nursing skills."
      ],
      eligibility: {
        academic: "10+2 with Physics, Chemistry, Biology & English.",
        marks: "Minimum 45% aggregate in PCB.",
        age: "Minimum 17 years.",
        entrance: "As per University norms."
      },
      curriculum: [
        {
          phase: "Year 1",
          duration: "1 Year",
          subjects: "Anatomy, Physiology, Nutrition, Nursing Foundation."
        },
        {
          phase: "Year 2",
          duration: "1 Year",
          subjects: "Sociology, Pharmacology, Pathology, Medical Surgical Nursing."
        }
      ],
      admissionProcess: [
        {
          step: "Step 1",
          title: "Registration",
          description: "Apply through the official portal."
        }
      ]
    }
  },
  {
    id: "b-pharm",
    title: "B.Pharm",
    description: "In-depth study of pharmaceutical sciences, drug composition, manufacturing processes, and pharmacology.",
    category: "Undergraduate",
    duration: "4 Years",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg7khJmYOAQvu6X24P0n915d-f6aAPKmuElJCuvPy_PeZ7VaK04SnDGhPXpiuBX5gwr66d2waSAqRhF5y0vc9hR_ZVeOV1W1lSxSsN6hpKJqqwLRsnG0PF6WN05MK4eBSnz3JX1-5oLTzWA9DxmyC4nZT2P565tE1GHPgsG4pcYnJKvYGBoBGLwCaYk8_Bp3LntJXAqvP4rBoCJ9ydS2fgPKReZchE-MVt8KoT4tmnk-5v0O8Q7N-hmo5XvrCaAfEJ8S_RMiaPg3w",
    type: "Full-Time",
    level: "Undergraduate"
  },
  {
    id: "md-radiology",
    title: "MD Radiology",
    description: "Specialized post-graduate training in diagnostic imaging including MRI, CT scans, and nuclear medicine.",
    category: "Postgraduate",
    duration: "3 Years",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPOyfApG7LsRQtNmSEnQxAC1MFsdnk4vlgvVxb4s4hkiGa8OBDOd_yY7_r5mGK8YKMd68wQqiLxJ415aa4DA88yKp2iFkoIX4pe7CsMIoozZz-VDBENQEHdrxSRpEs8j_vnz9sVrxtRykQ3lYx4nA861PCXW76uFtTncenVj0t0wi_O0cm_5qvfH9QDt7vj5gEFCYoe-d0J6jXbS52KTiWqS-MqaN5lbPL2F-ythMpTM4Ed8NHLDPhaPs7-wwCM1Fb-s6jLHSHkCQ",
    type: "Specialized",
    level: "Postgraduate"
  },
  {
    id: "allied-health",
    title: "Allied Health Sciences",
    description: "Interdisciplinary training for medical technologists, therapists, and laboratory professionals.",
    category: "Clinical",
    duration: "3.5 Years",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAP_fS61bh3mP0fYww98Vt6BZ9IvJCLqobgNBhKGMLqmNK57Hibnso0-p2frkiQgwJk-fbsmF8HK9CenKjY7KIvaA1AsvoHmdlDGGOVa2QY7y55x3hOwFc4O3F7zD5UGPe2L1He0c0aqBB1OvyBqyUlKV5oyRExvlN87Yf9lJrE3TdvdUPL2AcZco04S9vmzmob1obYEOE0FmNg-wv_EYSXWikFDa_2BNRyaPhXoAqXDkjteAepPZh5tgz-OOZW1TLO3iGG5wadKU",
    type: "Vocational",
    level: "Clinical"
  },
  {
    id: "ms-surgery",
    title: "MS Surgery",
    description: "Advanced surgical practice training focusing on operative techniques, patient recovery, and surgical research.",
    category: "Postgraduate",
    duration: "3 Years",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDocGLOTP86A3Goz_8j0kJzYPNQHlJcHGeZlLYaBOkc4BiZHh8Mwc4sKymSvhkl88rbUmRLrZsATIUO8MSR4LystRGTxHlVNN3L43882KBMhmgfBrf89aUsqC6tt-6VA8PPSTbxYYEy6vqD4tk-bPgnHhGGZtjdYFL0EfZgXfKpJFZIhIqysGNpzsPkMBkjxgtwVkv3i2zNXF4ZosRFeuRg74EMZOq6uA5ss0orJQRZg3j5pPic2UEWokHqoODe1T43MxCWuEhtlQk",
    type: "Full-Time",
    level: "Postgraduate"
  }
];
