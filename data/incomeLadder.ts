export interface IncomeStage {
  stage: string;
  range: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

export const incomeLadder: IncomeStage[] = [
  {
    stage: "Stage 1",
    range: "₹1,000 – ₹3,000 / month",
    title: "Getting started",
    description:
      "Your first tasks — social promotions, referrals, and simple brand campaigns. Low commitment, fast payouts, built to prove the model works.",
    stats: [
      { label: "Avg. time to first payout", value: "3 days" },
      { label: "Hours per week", value: "2–4 hrs" },
    ],
  },
  {
    stage: "Stage 2",
    range: "₹3,000 – ₹7,000 / month",
    title: "Building momentum",
    description:
      "Recurring campaigns and higher-value tasks open up once you've built a completion record. This is where most active students land.",
    stats: [
      { label: "Avg. time to first payout", value: "Same week" },
      { label: "Hours per week", value: "5–8 hrs" },
    ],
  },
  {
    stage: "Stage 3",
    range: "₹7,000 – ₹15,000+ / month",
    title: "Serious side income",
    description:
      "Long-term brand partnerships, campus leadership roles, and freelance contracts for students who treat Funngro like a real part-time career.",
    stats: [
      { label: "Avg. time to first payout", value: "Ongoing" },
      { label: "Hours per week", value: "10+ hrs" },
    ],
  },
];
