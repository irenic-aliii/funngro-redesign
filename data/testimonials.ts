export interface Testimonial {
  name: string;
  college: string;
  quote: string;
  earning: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ananya R.",
    college: "3rd year, Delhi University",
    quote:
      "I started with one referral task to see if it was legit. Three months later it's paying for my entire semester's expenses.",
    earning: "₹6,200 / month",
  },
  {
    name: "Rohit M.",
    college: "2nd year, VIT Vellore",
    quote:
      "The payout being shown before I accept a task is what made me trust it. No back-and-forth, no surprises.",
    earning: "₹3,800 / month",
  },
  {
    name: "Sneha K.",
    college: "Final year, Pune University",
    quote:
      "I run our campus's brand activations now. What began as a side task turned into something I put on my resume.",
    earning: "₹14,500 / month",
  },
];
