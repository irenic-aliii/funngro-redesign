"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface SectionTitleProps {
  eyebrow?: string;
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  size = "md",
  className = "",
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleSize =
    size === "lg"
      ? "text-4xl md:text-5xl lg:text-[3.4rem]"
      : "text-3xl md:text-4xl lg:text-[2.75rem]";

  return (
    <div className={`flex flex-col gap-5 ${alignment} ${className}`}>
      {(eyebrow || index) && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          {index && (
            <span className="ledger text-xs text-ink-faint">{index}</span>
          )}
          {eyebrow && (
            <span className="ledger flex items-center gap-2 text-xs uppercase text-mint">
              <span className="h-1 w-1 rounded-full bg-mint" aria-hidden />
              {eyebrow}
            </span>
          )}
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={`text-balance ${titleSize} font-semibold leading-[1.08] tracking-tight text-ink`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={`text-ink-muted text-base md:text-lg leading-relaxed ${
            align === "center" ? "max-w-prose" : "max-w-xl"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
