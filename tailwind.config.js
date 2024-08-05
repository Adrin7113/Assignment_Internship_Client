/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#181823",
        secondary: "#E9F8F9",
        tertiary: "#537FE7",
        quaternary: "#C0EEF2",
        highlight: "#301E67",
      },
    },
  },
  plugins: [],
};
