import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        display: ["var(--font-display)", ...fontFamily.sans],
      },
      colors: {
        // palette from spidermanTW.js
        crimson: "#8B0000", // palette-1
        void: "#121212", // palette-2
        steel: "#333333", // palette-3
        chrome: "#C0C0C0", // palette-4
        blood: "#7F0000", // palette-5
        // derived: #8B0000 sits at ~1.9:1 on #121212, unusable as type.
        // this is the same hue lifted to ~3.9:1 for headings and accents.
        accent: "#CF3A3A",
        background: "#121212",
        foreground: "#C0C0C0",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
