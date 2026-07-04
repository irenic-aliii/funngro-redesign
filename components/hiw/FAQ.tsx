"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { faqs } from "@/data/faq";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          index="05"
          eyebrow="FAQ"
          title="Common questions, answered directly."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 mx-auto max-w-prose flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                custom={i * 0.3}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`overflow-hidden rounded-2xl border bg-bg-card transition-colors duration-300 ${
                  isOpen ? "border-line-strong" : "border-line"
                }`}
              >
                <h3>
                  <motion.button
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    whileTap={{ scale: 0.99 }}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="text-base font-medium text-ink">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-mint"
                    >
                      <Plus size={20} />
                    </motion.span>
                  </motion.button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
