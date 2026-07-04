import type { Metadata } from "next";
import HiwHero from "@/components/hiw/HiwHero";
import Timeline from "@/components/hiw/Timeline";
import IncomeLadder from "@/components/hiw/IncomeLadder";
import Principles from "@/components/hiw/Principles";
import Progression from "@/components/hiw/Progression";
import FAQ from "@/components/hiw/FAQ";
import CTA from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The exact five-step process, income ladder, growth principles and full progression for earning with Funngro as a student.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HiwHero />
      <Timeline />
      <IncomeLadder />
      <Principles />
      <Progression />
      <FAQ />
      <CTA
        title="Ready to take your first step?"
        description="Sign up, pick a task, and see your first payout this week."
        primaryLabel="Download App"
        secondaryLabel="Start Earning"
        secondaryHref="/#final-cta"
      />
    </>
  );
}
