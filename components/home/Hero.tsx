"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const tickerItems = [
  "₹340 earned by Priya, BITS Pilani · just now",
  "₹1,200 withdrawn by Karan, NIT Trichy · 2m ago",
  "₹85 earned by Meher, Christ University · 4m ago",
  "₹2,600 withdrawn by Aditya, VIT Vellore · 9m ago",
  "₹500 earned by Diya, Delhi University · 12m ago",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-0 md:pt-28">
      {/* Layered atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow-radial" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow-drift animate-drift" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grain" />

      <Container className="relative flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-elevated/60 px-4 py-1.5 ledger text-[11px] uppercase text-mint"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
          Live on 400+ campuses
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance max-w-5xl text-[2.75rem] leading-[1.02] tracking-tightest font-semibold text-ink sm:text-6xl md:text-7xl lg:text-[5.75rem]"
        >
          Earn real money,
          <br />
          <span className="font-serif-italic font-normal text-mint-gradient">
            without leaving college.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg"
        >
          Funngro turns your time, skills and campus network into verified
          income — from your first ₹1,000 task to a serious side career.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="/#final-cta" size="lg" showArrow>
            Start Earning
          </Button>
          <Button href="/how-it-works" variant="outline" size="lg">
            See How It Works
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-col items-center gap-2 text-ink-faint"
        >
          <span className="ledger text-[10px] text-ink-faint/80">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </Container>

      {/* Full-bleed ledger tape — the live-payout signature moment */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative mt-20 w-full border-y border-line bg-bg-elevated/50 py-4"
        role="marquee"
        aria-label="Recent student earnings"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent md:w-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent md:w-40"
        />
        <div className="flex w-max animate-marquee gap-12 ledger text-xs text-ink-muted">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-2 whitespace-nowrap normal-case">
              <span className="h-1 w-1 rounded-full bg-mint/60" aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
