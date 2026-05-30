/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors.teal,
        secondary: colors.sky,
        tertiary: "var(--tertiary)",
        background: "var(--background)",
        "on-background": "var(--on-background)",
        surface: "var(--surface)",
        "on-surface": "var(--on-surface)",
        "on-surface-variant": "var(--on-surface-variant)",
        outline: "var(--outline)",
        "outline-variant": "var(--outline-variant)",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "24px",
        "container-max": "1440px",
        "gutter": "16px",
        "unit": "4px",
        "margin-mobile": "16px"
      },
      maxWidth: {
        "container-max": "1440px",
      },
      fontFamily: {
        "headline-md": ["Geist"],
        "headline-lg": ["Geist"],
        "label-sm": ["JetBrains Mono"],
        "code-md": ["JetBrains Mono"],
        "body-md": ["Geist"],
        "body-lg": ["Geist"],
        "sans": ["Geist", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "label-sm": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "code-md": ["14px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "body-lg": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }]
      }
    },
  },
  plugins: [],
};
