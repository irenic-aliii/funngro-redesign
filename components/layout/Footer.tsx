"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Container from "./Container";
import { footerColumns, socialLinks } from "@/data/footer";

const socialIcons = {
  Instagram,
  LinkedIn: Linkedin,
  Twitter,
  YouTube: Youtube,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-elevated/40">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow-corner opacity-70" />
      <Container className="relative py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 flex flex-col gap-4">
            <span className="font-display text-xl font-semibold text-ink">
              fun<span className="text-mint">ngro</span>
            </span>
            <p className="text-sm text-ink-muted max-w-xs leading-relaxed">
              Helping students turn time, skills and network into real income —
              one verified task at a time.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-all duration-300 hover:text-mint hover:border-line-strong hover:shadow-glow"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-ink">{column.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-mint"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Funngro Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint">Made with care in India 🇮🇳</p>
        </div>
      </Container>
    </footer>
  );
}
