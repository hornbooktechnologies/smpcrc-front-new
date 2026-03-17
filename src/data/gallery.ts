export interface GalleryImage {
  id: string;
  category: string;
  title: string;
  url: string;
}

export interface Highlight {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "lab-1",
    category: "Modern Labs",
    title: "Biotechnology Research Lab",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmxf-PgDOQvRlJ-4bMitcDgaEOvgswI6eovRVPiCQNBoK7PIx_3Y1Y8pzgPQougbqasjirIFe0KDjkL2ErWOz1_bX6U9ichshcG0YYiPG4ssYamRPan8iVCu6zGXKi1ZI1w93dyjRz-wpX6NZyxHY8Q-TCFhlDgUO5c3jzKW1wRWHEWDdEN0t6kAXUOgs5ooxlwr-8ipdHkNbVldtDDyye74l4zkWRqe7396p1Uz2k20O-bdfSd9XQI8C1q55JOHzhI3VFp5qIjwI",
  },
  {
    id: "hosp-1",
    category: "Medical Hospital",
    title: "Advanced Patient Care Unit",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU_mHFe30fhZg46AX7rfbhy71RjaonvsBocHsBix38cV0jqiIBeCUxke4AjrfSQMcZ2B4BWRWdbPwvYeixEcr5KFYTlMBeN69aJfkxuoSGVc8oWvRSExOoGL1oKfsL1ploNv8dCPXNuhIETB0ddNBq6C2Aq_dMQIeLIRBEYLNIo2ggmXStDXlzqy1imkIN85fvlY_n-jZyTT9mje-scaqp83lYyeSrGbY69Qv_LszMXNWpkchDFNWxVTh2xrLHpqqH5uXzhMSesnY",
  },
  {
    id: "lib-1",
    category: "Student Life",
    title: "Central Academic Library",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCrRbR_hDnEBEvszo382s_tHAnQslZDpU9CUlsChFNH1pW4hjcR3_7gPuzuzPLrc8eySoEt-oVVOQK5x-ddDyRlSR2JYizS-rKNppA0zc5CXdzVKNWG_HrUjXva1DOLDAWvpR_HWzslo6LWqNvOb7hEAJ5_8nRg5aDydJ29chzjiIfQQL_cOC7Vk2orGwj2N8g6la92EIiDd6VdbRG498S03rsX3iz9oIZjo6c1YsepFvs66fT-zZaGvXLBVRD2HZyXJ8289-WI24",
  },
  {
    id: "ot-1",
    category: "Medical Hospital",
    title: "Digital Operation Theater",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtIObGTvBgPSJaaSlOYy1Ju-FjbLOBhtLfimYYpkdFYK336sYDVs31GNEB25wZ6pj0Fqdpx3Wae2vvxWVnR1bsNjbw62dVTom6kaUbjV71ugE7yF7cQo59mrEVDiFY4zerC5uEaHL9u09Y80qYDVWQgTL9nTD0I0KZXC1msypao7nNDkGLSaWu5pWKyhS5B1FLILT3DOrz11w-ObAMDOF5A0a-sbdFEucPOx05RK4DYicT9lPcbs7D8ofCwqaKo_qzahIEqh0Esvw",
  },
  {
    id: "hall-1",
    category: "Academic Events",
    title: "Main Convention Hall",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx3XPoryw3Z9n-4bCo-tlDN_vD6w7B0G3wPVR9M7Jam0JzOzPbTWoYb9Mgdztqyg2KbCuK4m4_OhamhuHvlDMIzI-uo2tF5YCL2OfRaz1MnD97L03GqKIerMymp-WJT_EX6fJPcXUle3Mq2zrRqSLHQ5ABXj77Zy3NS9L3ml2rB-0NfdzYofC-N_IMLe6PnJXaKvLIYSOFP3goWQPTEE45lQOd0NquXqDAXEo-p1X8sjw79Fd8h8bxlRaG-dy720x3PrP8nY_IZCc",
  },
  {
    id: "faculty-1",
    category: "Campus",
    title: "Faculty Lounge",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeQBngvAV7A5Pn-mBnFYVRZ1de8_m5SV-CdTa5KWtytHZgoZR0W0WbWzR6T4zNe33FlUl6H5dWYXflb0OjRnmTHznqs90arwt_a4tKH_sgwdxezjd-e3Jepk-VWmZ82DF3Q67_ChCVExOs5nlgHe_dZrot3XiPBjPGIzju-4MKPw9g8xPLG41PFKFq9fbNCkqfP7dEUJiL_4N_zcNTDHG5_o7SBVxTA8RAubnARM0v2HfYTp45Or032SRnIG72C8WNIUVoyQ-CWwM",
  },
  {
    id: "diag-1",
    category: "Modern Labs",
    title: "Diagnostic Imaging Center",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN_VLExAtHuVdsJxHIXa-zyfCD7cuAuZwoxEOWAZ75Dg7a90pnIyjoyEdLDcKPciHUWFNCtq2uV1SXIG41YSjNWqBt87TYr9fYHzF4c0lMlvhqJZR8Tjj7FK_AU0CgQxvTa-27qW_2GIXSarHatzPKhq_pYTzhBbOje0PPDmtzhWr-fwqG2c-8Zw6ubSurfchGbOn4nLOtY3ckWtWFqv0b3AOsfRsRilED-kcYuJU4UuxKi9fQuXTmhsnJwaDmooulE1RIJjEt9CQ",
  },
  {
    id: "wing-1",
    category: "Campus",
    title: "Research Wing Entrance",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGdsmjSO5c7v8aZUexVrwuNcSPPoqhCdvmEYjFG44PRTkkpFPHZBAogIWthrvqwgwIWyBrjUbLIPlK24lcFf1QhBRdl7B2YlarwnDAwYEVuTbs3R4sCx3m5QYqoz2JxzVMDBkVs6NfhR14SKiWVsQM5fIJd3MpVQNBe_Pqgu6AwuAku4x4SgvAZZziGFvTv2lHeNf92HdTzO4JicOMfMoZiE-mWMS5ej3ueJCP0ymz-znT83fcZc5v0NkRjPvEz7JKKGQ3oFv22c",
  },
];

export const recentHighlights: Highlight[] = [
  {
    id: "event-1",
    date: "October 15, 2023",
    title: "Annual Convocation Ceremony Batch of 2023",
    description: "Celebrating the achievements of our graduates as they step into the world of professional medicine.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC16oXsWMqWWDeiCwbIHaEs-RrvDE_9X_f4DT6IvL5354Fsx3Cww_nIJxEMhyYTGE7wygb4DqyX5Zh1JfetwzbGQo-S9z00V4Ias3o2PEVS5lwJSzgs-l7WibSQtsOYbXp50eWurTmeI27FZSauG8yiw4f9UQaGXOSgriyYZyDXSU7WOF4Fe7-zo8vz7oIO2jr8F-m7kLM5_mdDg7R3HmkxBeHarXdE4QB8HKpyd3dFGB2FMY6TFN71r6ZjHkMLg-T4zEDnZUfaCfI",
    category: "Event",
  },
  {
    id: "conf-1",
    date: "September 28, 2023",
    title: "International Seminar on Cardiology Innovations",
    description: "Leading cardiologists from around the globe gathered to discuss the latest breakthroughs in heart surgery.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_W3ZIa3l33Ibm9gigW1xB5IA3Rsq6y9VYqdx5IibxgNnnWSv93JIiT5gV1H4Oawlbgo6VTWR2Vtv078rL6VhtnuWc7rxmxs6KYZvY-3S-Z28J_ihdfdsnGoUpUdOzLCWOTSgaBp6Cq2EEnsd5QT_j4FJ5fGNBlkopaEPwcm6uonwQMAbJTQEHhrsH56fqoxwatw8dhF-obvIoLbb_BmKrqUWgI9tDu5fyob_RquwR8DWF9nT1ZT6FT2B0A6BG6ct20hT9hX8h__U",
    category: "Conference",
  },
  {
    id: "achieve-1",
    date: "August 12, 2023",
    title: "Inauguration of the New Stem Cell Research Center",
    description: "A milestone in medical research as we open our dedicated facility for advanced stem cell studies.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJoc43FfhkfUH0BObDQmOxCNAK4Vd3r5VoSO8nYy9kA6LGqwRfb5P_q-adXMfRQWQgMcQYiCX0gPIwlGy6FoN5-dYWaH1VWlo3iD2wDRp50QHWiKTBubZcLAQA2vW_G6xUIPpAEd-LyKg8P8X7Le9kDAb9e-p5OX6NXVHwf46KYQWICrDxq_Wa6tfMGiU1frDwlZ-3E2jLw7xvp0haI1ffpJWLkhJ6wKuU8uXu8n3ZE-ErS86eO4AzIL1DLqi8EUTh3w-M9eExPTc",
    category: "Achievement",
  },
];
