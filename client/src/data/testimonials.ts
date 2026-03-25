export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The compounding team at Burke Road has been incredible. My BHRT formulation is perfectly tailored and the pharmacists always take time to explain everything.",
    role: "Patient",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Been coming here for years. The staff are knowledgeable, friendly, and the service is always prompt. Best pharmacy in Camberwell by far.",
    role: "Patient",
  },
  {
    name: "Dr. Rebecca L.",
    rating: 5,
    text: "As a GP, I regularly refer patients to Burke Road for compounding. Their attention to detail and communication with prescribers is excellent.",
    role: "General Practitioner",
  },
  {
    name: "Margaret W.",
    rating: 5,
    text: "The LDN capsules have made a real difference to my fibromyalgia. The pharmacist took the time to explain the dosing schedule and was always available for questions.",
    role: "Patient",
  },
  {
    name: "Dr. Andrew K.",
    rating: 5,
    text: "Burke Road's compounding lab is outstanding. I prescribe their topical pain preparations regularly and the quality and consistency is always excellent.",
    role: "Pain Specialist",
  },
];
