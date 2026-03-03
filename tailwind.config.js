const {
  fontFamily,
  screens: defaultScreens,
} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultScreens,
      xs: "480px",
      custom473: "473px",
      custom553: "553px",
      custom930: "930px",
      custom871: "871px",
      custom1136: "1136px",
      custom1014: "1014px",
    },
    extend: {
      colors: {
        primary: "#00B470",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      lineHeight: {
        "3_9": "3.9rem",
      },
    },
  },
  plugins: [],
};
