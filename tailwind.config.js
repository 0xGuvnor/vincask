/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-header)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("daisyui"),
    require("tailwindcss-debug-screens"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FACA16",
          secondary: "#0059CF",
          accent: "#FF8000",
          neutral: "#2a323c",
          "base-100": "#111111",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
