"use client";

import { motion } from "framer-motion";
import { GraduationCap, Clock3, Landmark, Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const benefits = [
  {
    icon: Clock3,
    title: "Fits around your timetable",
    description: "Every task lists its time commitment. Work 2 hours a week or 15 — your call.",
  },
  {
    icon: GraduationCap,
    title: "No experience required",
    description: "Your first tasks are designed to be simple. You learn the platform as you earn.",
  },
  {
    icon: Landmark,
    title: "Direct, trackable payouts",
    description: "Money moves to your bank or UPI with a full history inside the app — nothing informal.",
  },
  {
    icon: Sparkles,
    title: "A resume, not just income",
    description: "Campaign work and campus leadership roles are genuine, referenceable experience.",
  },
];

export default function WhyJoin() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-bg-elevated/30" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow-corner" />

      <Container className="relative">
        <SectionTitle
          index="02"
          eyebrow="Why Students Join"
          title="Because it respects that college comes first."
          align="left"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-x-8 sm:grid-cols-2"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`group relative flex flex-col gap-5 border-t border-line py-8 ${
                i % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
              } ${i % 2 !== 0 ? "sm:mt-12" : ""}`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-3 right-0 font-serif text-6xl text-white/[0.03] transition-colors duration-500 group-hover:text-mint/[0.07] md:text-7xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-mint-soft text-mint">
                <benefit.icon size={18} strokeWidth={2} />
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
