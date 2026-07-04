"use client";

import { motion } from "framer-motion";
import { ListChecks, ShieldCheck, Wallet } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const features = [
  {
    icon: ListChecks,
    title: "Verified tasks, not vague gigs",
    description:
      "Every task shows the exact payout, deadline and brief upfront — from social promotions to brand campaigns.",
  },
  {
    icon: ShieldCheck,
    title: "Built for trust",
    description:
      "Brands only pay for approved, verified work — which means your payouts are protected on every task.",
  },
  {
    icon: Wallet,
    title: "Real payouts, no thresholds",
    description:
      "Most tasks have no minimum withdrawal amount. Earnings move to your bank account or UPI directly.",
  },
];

export default function WhatIsFunngro() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Editorial intro column — sticky on large screens */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionTitle
                index="01"
                eyebrow="What is Funngro"
                title="A task board built entirely for students."
                description="Funngro connects college students with brands that need real work done — content, referrals, campus activations — and pays for it, verified and on time."
              />
            </div>
          </div>

          {/* Numbered feature list — deliberately not a 3-card grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col lg:col-span-7"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative flex gap-6 border-t border-line py-8 first:border-t-0 lg:first:border-t"
              >
                <span className="ledger pt-1 text-xs text-ink-faint">
                  0{i + 1}
                </span>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-mint-soft text-mint transition-all duration-300 group-hover:border-line-strong group-hover:shadow-glow">
                  <feature.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
