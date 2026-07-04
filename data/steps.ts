export interface Step {
  number: string;
  title: string;
  description: string;
  requirements: string[];
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Create your Funngro profile",
    description:
      "Sign up in under two minutes and tell us what you're good at — content, design, sales, tutoring, or just your college network. We match you with tasks that fit.",
    requirements: ["Valid college ID or email", "Phone number for verification", "5 minutes"],
  },
  {
    number: "02",
    title: "Pick your first task",
    description:
      "Browse a live board of brand campaigns, referral drives and micro-projects. Every task shows the exact payout and deadline before you accept it — no guesswork.",
    requirements: ["No prior experience needed", "Choose tasks that fit your schedule"],
  },
  {
    number: "03",
    title: "Complete and submit proof",
    description:
      "Do the task — post content, close a referral, deliver a project — and submit proof through the app. Our team reviews most submissions within 24 hours.",
    requirements: ["Submission through the Funngro app", "Follow the task brief exactly"],
  },
  {
    number: "04",
    title: "Get paid directly to your account",
    description:
      "Once approved, earnings land in your Funngro wallet and can be withdrawn straight to your bank account. No minimum payout threshold on most tasks.",
    requirements: ["Linked bank account or UPI ID", "PAN details for payouts above ₹10,000/year"],
  },
  {
    number: "05",
    title: "Unlock bigger opportunities",
    description:
      "Consistent, quality work moves you up the income ladder — from one-off tasks to recurring brand partnerships and long-term freelance contracts.",
    requirements: ["Maintain a strong completion rate", "Build a track record inside the app"],
  },
];
