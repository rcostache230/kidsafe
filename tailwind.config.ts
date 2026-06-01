import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // Light-only: dark classes stay in code but never auto-trigger from OS.
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "DM Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif"
        ],
        display: [
          "Fraunces",
          "Source Serif Pro",
          "Iowan Old Style",
          "Apple Garamond",
          "Georgia",
          "serif"
        ]
      },
      colors: {
        // Warm paper background system (inspired by Salvați Copiii guide)
        paper: {
          DEFAULT: "#FBF7EF", // cream page background
          50: "#FEFCF7",
          100: "#FBF7EF",
          200: "#F4ECDB",
          300: "#E8DCC2",
          400: "#D9C7A0",
          ink: "#1F2937", // body text — softer than pure black, AA on cream
          mute: "#4B5563", // muted body
          line: "#E8E0D0" // subtle warm divider
        },
        brand: {
          // Deep editorial teal — keeps continuity but more grown-up
          50: "#EAF6F3",
          100: "#D4ECE6",
          200: "#A6D7CC",
          300: "#73BDAE",
          400: "#3F9F8C",
          500: "#1D8470",
          600: "#106B5A",
          700: "#0D5849",
          800: "#0A4538",
          900: "#073329"
        },
        accent: {
          // Warm coral/apricot for emphasis (warmth from PDF guide)
          50: "#FDF1EB",
          100: "#FAE0D2",
          200: "#F4C0A5",
          300: "#EE9D78",
          400: "#E8794B",
          500: "#D85F2F",
          600: "#B14A23"
        },
        sage: {
          // Calm tip/secondary color
          100: "#E4EDE2",
          400: "#7A9B7E",
          600: "#4F7256"
        },
        sun: {
          // Highlight/callout
          100: "#FCF1D1",
          400: "#F4C24A",
          600: "#C99318"
        }
      },
      fontSize: {
        // Slightly larger baseline for parent readability
        base: ["1.0625rem", { lineHeight: "1.75rem" }], // 17px / 28px
        lg: ["1.1875rem", { lineHeight: "1.875rem" }] // 19px / 30px
      },
      boxShadow: {
        // Single soft, warm shadow — replaces the layered teal glow
        soft: "0 1px 2px rgba(31, 41, 55, 0.04), 0 8px 24px -16px rgba(31, 41, 55, 0.12)",
        lift: "0 2px 4px rgba(31, 41, 55, 0.04), 0 16px 36px -20px rgba(31, 41, 55, 0.18)"
      },
      borderRadius: {
        card: "20px"
      }
    }
  },
  plugins: []
};

export default config;
