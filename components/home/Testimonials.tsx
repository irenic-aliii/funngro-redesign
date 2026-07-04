"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          index="05"
          eyebrow="From Students"
          title="Real students. Real payouts."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-5"
        >
          {featured && (
            <motion.div
              variants={fadeUp}
              custom={0}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-line-strong bg-bg-card2 p-9 shadow-glow-lg lg:col-span-3 lg:p-12"
            >
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow-radial-soft" />
              <Quote className="relative text-mint/50" size={36} />
              <p className="relative mt-6 font-serif-italic text-2xl leading-snug text-ink md:text-3xl">
                &ldquo;{featured.quote}&rdquo;
              </p>
              <div className="relative mt-10 flex items-center justify-between border-t border-line pt-5">
                <div>
                  <p className="text-sm font-medium text-ink">{featured.name}</p>
                  <p className="text-xs text-ink-faint">{featured.college}</p>
                </div>
                <span className="ledger text-xs text-mint">{featured.earning}</span>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col gap-5 lg:col-span-2">
            {rest.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex flex-1 flex-col justify-between rounded-[28px] border border-line bg-bg-card p-7 transition-colors duration-300 hover:border-line-strong"
              >
                <Quote className="text-mint/40" size={24} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <div>
                    <p className="text-sm font-medium text-ink">{t.name}</p>
                    <p className="text-xs text-ink-faint">{t.college}</p>
                  </div>
                  <span className="ledger text-xs text-mint">{t.earning}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
