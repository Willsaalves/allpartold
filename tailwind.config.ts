import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: "#9341ec",
          dim: "rgba(147,65,236,0.18)",
          border: "rgba(147,65,236,0.35)",
        },
        purple: {
          DEFAULT: "#6d04d7",
          dim: "rgba(109,4,215,0.15)",
        },
        gold: {
          DEFAULT: "#d4af37",
          dim: "rgba(212,175,55,0.12)",
          border: "rgba(212,175,55,0.3)",
        },
        bg: "#080810",
        surface: "#0d0d18",
        card: {
          DEFAULT: "#10101e",
          border: "rgba(147,65,236,0.15)",
        },
        gray: {
          DEFAULT: "#b0b0c8",
        },
        muted: "#60607a",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
