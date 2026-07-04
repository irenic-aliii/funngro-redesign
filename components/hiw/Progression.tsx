"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { progression } from "@/data/progression";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function Progression() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section className="py-24 md:py-32 bg-bg-elevated/30">
      <Container>
        <SectionTitle
          index="04"
          eyebrow="Full Progression"
          title="The complete path, step by step."
          description="Tap any step to see exactly what it involves."
        />

        <div ref={ref} className="relative mt-14 pl-8 md:pl-12">
          <div className="absolute left-[3px] md:left-[7px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-[3px] md:left-[7px] top-2 bottom-2 w-px origin-top bg-mint"
          />

          <div className="flex flex-col gap-3">
            {progression.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  custom={i * 0.4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="relative"
                >
                  <span className="absolute -left-8 md:-left-12 top-5 h-2.5 w-2.5 rounded-full bg-mint" />
                  <motion.button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`progression-panel-${item.number}`}
                    whileTap={{ scale: 0.99 }}
                    className={`flex w-full items-center justify-between gap-4 rounded-2xl border bg-bg-card px-6 py-5 text-left transition-all duration-300 hover:border-line-strong ${
                      isOpen ? "border-line-strong shadow-glow" : "border-line"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-mint">{item.number}</span>
                      <div>
                        <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                        <p className="mt-0.5 text-sm text-ink-muted">{item.summary}</p>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-mint"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`progression-panel-${item.number}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 py-4 text-sm leading-relaxed text-ink-muted">
                          {item.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
