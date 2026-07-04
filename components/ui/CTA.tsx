"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface CTAProps {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export default function CTA({
  title,
  description,
  primaryLabel,
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <section id="final-cta" className="py-24 md:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[32px] border border-line-strong bg-bg-card2 px-8 py-16 text-center md:px-16 md:py-24"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow-radial" />
          <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
          <div aria-hidden className="pointer-events-none absolute inset-0 grain" />
          <span
            aria-hidden
            className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full border border-line md:h-32 md:w-32"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-line md:h-40 md:w-40"
          />

          <div className="relative flex flex-col items-center">
            <h2 className="text-balance max-w-2xl text-3xl font-semibold leading-[1.1] text-ink md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <Button href="#" size="lg" showArrow>
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="outline" size="lg">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
