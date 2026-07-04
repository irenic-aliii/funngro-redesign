"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { principles } from "@/data/principles";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Principles() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionTitle
          index="03"
          eyebrow="Growth Principles"
          title="Six things that predict who moves up the ladder."
          align="left"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[28px] border border-line bg-bg-card p-7 transition-colors duration-300 hover:border-line-strong hover:shadow-card-hover"
            >
              <span className="ledger absolute right-6 top-6 text-xs text-ink-faint/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-mint-soft text-mint transition-all duration-300 group-hover:border-line-strong">
                <principle.icon size={20} strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-ink">{principle.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
