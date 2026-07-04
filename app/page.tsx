import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhatIsFunngro from "@/components/home/WhatIsFunngro";
import WhyJoin from "@/components/home/WhyJoin";
import IncomePreview from "@/components/home/IncomePreview";
import HowItWorksPreview from "@/components/home/HowItWorksPreview";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "Funngro — Earn While You Learn",
  description:
    "Funngro helps students turn their time, skills and network into real income — from your first ₹1,000 to a serious side career, without leaving college.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsFunngro />
      <WhyJoin />
      <IncomePreview />
      <HowItWorksPreview />
      <Testimonials />
      <CTA
        title="Your first task is a few taps away."
        description="Join students on 400+ campuses already earning with Funngro."
        primaryLabel="Download App"
        secondaryLabel="Explore Opportunities"
        secondaryHref="/how-it-works"
      />
    </>
  );
}
