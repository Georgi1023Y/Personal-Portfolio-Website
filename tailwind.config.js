/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPink: "#b21eb2",
        orangeColor: "#FFCA45",
      },
    },
    screens: {
      xxl: { min: "1824px", max: "2561px" },
      sm: { min: "319px", max: "426px" },
      md: { min: "426px", max: "1023px" },
      lg: { min: "1024px", max: "1439px" },
      xl: { min: "1440px", max: "1823px" },
    },
  },
  plugins: [],
};
