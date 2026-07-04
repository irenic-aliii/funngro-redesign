import type { LucideIcon } from "lucide-react";
import { Target, Repeat, Users, TrendingUp, ShieldCheck, Clock } from "lucide-react";

export interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    icon: Target,
    title: "Start small, on purpose",
    description:
      "Your first tasks are designed to be easy wins. Momentum matters more than a big first paycheck.",
  },
  {
    icon: Repeat,
    title: "Consistency compounds",
    description:
      "Students who complete tasks weekly — not just once — are the ones who move up the income ladder fastest.",
  },
  {
    icon: Users,
    title: "Your network is an asset",
    description:
      "Referrals and campus reach are real, monetizable skills on Funngro, not just a side benefit.",
  },
  {
    icon: TrendingUp,
    title: "Quality unlocks scale",
    description:
      "Higher completion rates and better submissions surface you for higher-paying, recurring campaigns.",
  },
  {
    icon: ShieldCheck,
    title: "Every task is verified",
    description:
      "Brands only pay for verified, approved work — which means your payouts are protected too.",
  },
  {
    icon: Clock,
    title: "It fits around college",
    description:
      "Every task is built for a few hours a week, not a full-time commitment. College comes first.",
  },
];
