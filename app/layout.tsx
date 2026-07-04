import type { Metadata } from "next";
import { Space_Grotesk, Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.funngro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Funngro — Earn While You Learn",
    template: "%s · Funngro",
  },
  description:
    "Funngro helps students turn their time, skills and network into real income — from your first ₹1,000 to a serious side career, without leaving college.",
  keywords: [
    "Funngro",
    "student earning app",
    "earn while you learn",
    "student income India",
    "campus ambassador",
    "student freelancing",
  ],
  openGraph: {
    title: "Funngro — Earn While You Learn",
    description:
      "Turn your time, skills and network into real income. Built for students, from your first task to your first real career.",
    url: siteUrl,
    siteName: "Funngro",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funngro — Earn While You Learn",
    description:
      "Turn your time, skills and network into real income. Built for students, from your first task to your first real career.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg text-ink selection:bg-mint/25">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-mint focus:text-bg focus:px-4 focus:py-2 focus:rounded-full focus:font-semibold focus:shadow-glow"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
