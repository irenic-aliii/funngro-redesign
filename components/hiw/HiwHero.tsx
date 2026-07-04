"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function HiwHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow-radial" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grain" />

      <Container className="relative flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 ledger text-xs uppercase text-mint"
        >
          The Full Process
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance max-w-3xl text-4xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl lg:text-[4.2rem]"
        >
          Exactly how you go from{" "}
          <span className="font-serif-italic font-normal text-mint-gradient">sign-up</span> to your
          first payout.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg"
        >
          No vague promises — the five steps, the income ladder, and the
          principles that decide how far you go on Funngro.
        </motion.p>
      </Container>
    </section>
  );
}
