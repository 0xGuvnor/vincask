/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FE5E41",
          secondary: "#5448C8",
          accent: "#32c1c1",
          neutral: "#141b1f",
          "base-100": "#230007",
          info: "#82a5d9",
          success: "#1bc097",
          warning: "#ebce4c",
          error: "#ef7186",
        },
      },
    ],
  },
};
