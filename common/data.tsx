export type Navigation = {
  name: string;
  link: string;
  subMenu: string[] | TrainingType[];
};
export type TrainingType = {
  title: string;
  courses: { name: string }[];
};

export const Trainings: TrainingType[] = [
  {
    title: "Business & Management Courses",
    courses: [
      { name: "Executive Development" },
      { name: "Management & Leadership" },
      { name: "Creativity & Innovation" },
      { name: "Personal Effectiveness" },
      { name: "Strategy & Strategic Planning" },
      { name: "Governance, Compliance, & Risk" },
      { name: "Sustainability & CSR" },
      { name: "Business Process Management" },
      { name: "Office Administration" },
      { name: "Corporate Communication" },
      { name: "Public Relations" },
      { name: "Customer Service" },
      { name: "Sales & Marketing" },
      { name: "HR Management" },
      { name: "Learning & Development" },
    ],
  },
  {
    title: "Operations & Logistics Courses",
    courses: [
      { name: "Project Management" },
      { name: "Contracts Management" },
      { name: "Quality & Audit" },
      { name: "Purchasing, Logistics & Supply Chain" },
      { name: "Civil & Construction Management" },
      { name: "Public Private Partnership" },
    ],
  },
];

const locations = [
  "Asia",
  "Al Khobar - Saudi Arabia",
  "Bali - Indonesia",
  "Doha - Qatar",
  "Dubai - UAE",
  "Jeddah - Saudi Arabia",
  "Kuala Lumpur - Malaysia",
  "Manama - Bahrain",
  "Muscat - Oman",
  "Riyadh - Saudi Arabia",
  "Seoul - South Korea",
  "Singapore City - Singapore",
];

const certifications = [
  "ILM Recognised Training Courses",
  "CPD Certified Training Courses",
  "PMI Registered Training Courses",
  "HRCI Pre-Approved Training Courses",
  "ISO Training Courses",
  "IAM Endorsed Training Courses",
  "IIBA Endorsed Training Courses",
  "Six Sigma Certification Training Courses",
  "KHDA Approved Training Courses",
  "NASBA Approved Training Courses",
  "CertNexus Certification Training Courses",
  "Mini MBA Series",
];

const TraningTypes = [
  "Classroom Courses",
  "Online Courses",
  "In-House Courses",
  "Mini MBA Series",
  "Masterclasses",
  "New Training Courses",
  "Interactive Workshops",
  "5-Day Training Courses",
  "10-Day Training Courses",
];

export const NavLinks: Navigation[] = [
  {
    name: "venues",
    link: "/",
    subMenu: locations,
  },
  {
    name: "certification",
    link: "#",
    subMenu: certifications,
  },
  {
    name: "training type",
    link: "/",
    subMenu: TraningTypes,
  },
];
