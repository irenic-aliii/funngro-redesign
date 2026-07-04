"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import StatCard from "@/components/ui/StatCard";
import { incomeLadder } from "@/data/incomeLadder";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function IncomeLadder() {
  return (
    <section id="income-ladder" className="py-24 md:py-32 bg-bg-elevated/30">
      <Container>
        <SectionTitle
          index="02"
          eyebrow="Income Ladder"
          title="Where you land depends on consistency."
          description="Most students move through these stages naturally as their completion rate and reliability grow."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 flex flex-col md:flex-row items-stretch gap-4"
        >
          {incomeLadder.map((stage, i) => (
            <div key={stage.stage} className="flex flex-1 items-center gap-4">
              <motion.div
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8 }}
                className="relative flex flex-1 flex-col overflow-hidden rounded-[28px] border border-line bg-bg-card p-7 transition-colors duration-300 hover:border-line-strong"
              >
                <div aria-hidden className="pointer-events-none absolute inset-0 card-sheen-overlay" />
                <span className="ledger relative text-xs uppercase text-ink-faint">
                  {stage.stage}
                </span>
                <span className="relative mt-3 font-serif text-2xl text-mint md:text-3xl">
                  {stage.range}
                </span>
                <h3 className="relative mt-3 text-base font-semibold text-ink">{stage.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">{stage.description}</p>
                <div className="relative mt-6 grid grid-cols-1 gap-3">
                  {stage.stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                  ))}
                </div>
              </motion.div>

              {i < incomeLadder.length - 1 && (
                <ArrowRight
                  className="hidden md:block shrink-0 text-mint/40"
                  size={22}
                  aria-hidden
                />
              )}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
