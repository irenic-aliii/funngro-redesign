import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#07100C",
          deep: "#040806",
          elevated: "#0F1913",
          card: "#101B15",
          card2: "#0C1611",
        },
        mint: {
          DEFAULT: "#3ECF8E",
          dim: "#2A9D6F",
          bright: "#5EE8A8",
          soft: "rgba(62, 207, 142, 0.12)",
          glow: "rgba(62, 207, 142, 0.35)",
        },
        ink: {
          DEFAULT: "#F4F7F5",
          muted: "#8FA098",
          faint: "#5C6B63",
        },
        line: "rgba(62, 207, 142, 0.14)",
        "line-strong": "rgba(62, 207, 142, 0.32)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1240px",
        prose: "680px",
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      backgroundImage: {
        "glow-radial":
          "radial-gradient(60% 50% at 50% 0%, rgba(62,207,142,0.16) 0%, rgba(62,207,142,0) 70%)",
        "glow-radial-soft":
          "radial-gradient(48% 40% at 50% 0%, rgba(62,207,142,0.10) 0%, rgba(62,207,142,0) 72%)",
        "glow-corner":
          "radial-gradient(38% 55% at 100% 0%, rgba(62,207,142,0.14) 0%, rgba(62,207,142,0) 70%)",
        "glow-drift":
          "radial-gradient(45% 45% at 20% 30%, rgba(62,207,142,0.10) 0%, rgba(62,207,142,0) 70%), radial-gradient(35% 40% at 85% 70%, rgba(62,207,142,0.08) 0%, rgba(62,207,142,0) 70%)",
        "card-sheen":
          "linear-gradient(155deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 40%)",
        "fade-down": "linear-gradient(180deg, transparent 0%, #07100C 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(62,207,142,0.4), 0 8px 30px -8px rgba(62,207,142,0.45)",
        "glow-lg": "0 0 0 1px rgba(62,207,142,0.35), 0 20px 60px -12px rgba(62,207,142,0.35)",
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 20px 40px -24px rgba(0,0,0,0.6)",
        "card-hover": "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 28px 60px -20px rgba(62,207,142,0.22)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-line": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(20px, -14px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "pulse-line": "pulse-line 2.4s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
