// tailwind.config.ts
import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0B1220",
        accent: "#2563EB",
        muted: "#94A3B8",

        brand: {
          DEFAULT: "#2563EB",
          dark: "#60A5FA",
        },

        bg: {
          light: "#ffffff",
          dark: "#020617",
        },

        fg: {
          light: "#020617",   // text on light bg
          dark: "#e5e7eb",    // text on dark bg
        },
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;