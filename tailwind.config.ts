import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#3C0079",
        corporate: {
          dark: "#220048",
          deepest: "#12002A",
        },
        ink: "hsl(270 42% 11%)",
        canvas: "hsl(268 48% 97%)",
        tint: "hsl(268 42% 94%)",
        mist: "hsl(268 22% 78%)",
        chip: "hsl(270 85% 85%)",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
