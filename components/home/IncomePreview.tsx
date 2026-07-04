"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import StatCard from "@/components/ui/StatCard";
import { incomeLadder } from "@/data/incomeLadder";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function IncomePreview() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionTitle
          index="03"
          eyebrow="Income Preview"
          title="Three stages. One clear path upward."
          description="Every student starts at Stage 1. Where you land after that depends on consistency, not luck."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 items-start gap-5 md:grid-cols-3"
        >
          {incomeLadder.map((stage, i) => {
            const featured = i === 1;
            return (
              <motion.div
                key={stage.stage}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col rounded-[28px] border p-7 transition-colors duration-300 md:p-8 ${
                  featured
                    ? "border-line-strong bg-bg-card2 shadow-glow-lg md:-translate-y-4 md:py-10"
                    : "border-line bg-bg-card hover:border-line-strong"
                }`}
              >
                {featured && (
                  <span className="ledger absolute -top-3 left-7 rounded-full bg-mint px-3 py-1 text-[10px] uppercase text-bg">
                    Most Common
                  </span>
                )}
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[28px] card-sheen-overlay" />
                <div className="relative">
                  <span className="ledger text-xs uppercase text-ink-faint">
                    {stage.stage}
                  </span>
                  <span
                    className={`mt-4 block font-serif text-3xl leading-tight text-mint md:text-4xl ${
                      featured ? "text-mint-gradient" : ""
                    }`}
                  >
                    {stage.range}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {stage.description}
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {stage.stats.map((stat) => (
                      <StatCard key={stat.label} {...stat} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
