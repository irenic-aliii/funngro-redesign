"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { steps } from "@/data/steps";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="journey" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          index="01"
          eyebrow="The Journey"
          title="Five steps. No surprises."
          description="Every step tells you exactly what's needed before you start it."
        />

        <div ref={ref} className="relative mt-16 pl-10 md:pl-16">
          <div className="absolute left-[7px] md:left-[15px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-[7px] md:left-[15px] top-2 bottom-2 w-px origin-top bg-mint shadow-[0_0_12px_rgba(62,207,142,0.6)]"
          />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="relative"
              >
                <span className="absolute -left-10 md:-left-16 top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-mint bg-bg shadow-glow" />
                <span className="ledger text-xs text-mint">{step.number}</span>
                <h3 className="mt-3 font-serif text-2xl font-medium leading-tight text-ink md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-ink-muted">
                  {step.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {step.requirements.map((req) => (
                    <span
                      key={req}
                      className="rounded-full border border-line bg-bg-card px-3 py-1 text-xs text-ink-faint transition-colors duration-300 hover:border-line-strong hover:text-ink-muted"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
