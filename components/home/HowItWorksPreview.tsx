"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { steps } from "@/data/steps";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function HowItWorksPreview() {
  const preview = steps.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-bg-elevated/30" />
      <Container className="relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            index="04"
            eyebrow="How It Works"
            title="From sign-up to your first payout."
            className="max-w-xl"
          />
          <Button href="/how-it-works" variant="outline" showArrow className="shrink-0">
            View Full Process
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {preview.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-[28px] border border-line bg-bg-card p-7 transition-colors duration-300 hover:border-line-strong md:p-8 ${
                i === 1 ? "md:mt-8" : i === 2 ? "md:mt-16" : ""
              }`}
            >
              <span className="font-serif text-4xl leading-none text-mint/40 md:text-5xl">
                {step.number}
              </span>
              <h3 className="mt-6 text-base font-semibold text-ink md:text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
