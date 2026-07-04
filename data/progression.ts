export interface ProgressionStep {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export const progression: ProgressionStep[] = [
  {
    number: "01",
    title: "Sign up",
    summary: "Create your profile and verify your student status.",
    detail:
      "Takes under two minutes. You'll set your skills, interests and availability so the task board is relevant from day one.",
  },
  {
    number: "02",
    title: "Explore the task board",
    summary: "See every open task with its payout shown upfront.",
    detail:
      "No hidden negotiation. Every task lists the exact reward, deadline and requirements before you commit.",
  },
  {
    number: "03",
    title: "Complete your first task",
    summary: "Pick something small and finish it end to end.",
    detail:
      "First tasks are intentionally simple — a referral, a share, a short campaign — to get you comfortable with the flow.",
  },
  {
    number: "04",
    title: "Get verified and paid",
    summary: "Submissions are reviewed, then paid to your wallet.",
    detail:
      "Most reviews complete within 24 hours. Once approved, funds move to your Funngro wallet immediately.",
  },
  {
    number: "05",
    title: "Build your track record",
    summary: "Your completion rate becomes your resume inside the app.",
    detail:
      "A strong, consistent record is what unlocks Stage 2 and Stage 3 tasks — it's the single biggest lever on your income.",
  },
  {
    number: "06",
    title: "Access higher-tier campaigns",
    summary: "Recurring brand work and leadership roles open up.",
    detail:
      "This is where students move from occasional task-takers to a recognisable name on specific campaigns.",
  },
  {
    number: "07",
    title: "Turn it into a real side career",
    summary: "Some students build this into ₹15,000+ a month.",
    detail:
      "At this stage, Funngro work looks less like gig tasks and more like a genuine freelance or campus-leadership career.",
  },
];
