/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkBlue: "hsl(218, 23%, 16%)",
      darkGrayishBlue: "hsl(217, 19%, 24%)",
      grayishBlue: "hsl(217, 19%, 38%)",
      lightGrayishBlue: "hsl(193, 38%, 86%)",
      neonGreen: "hsl(150, 100%, 66%)",
      lightCyan: "hsl(193, 38%, 86%)",
    },
    extend: {},
  },
  plugins: [],
};
