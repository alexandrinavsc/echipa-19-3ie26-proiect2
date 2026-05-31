export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A4D2E",
        secondary: "#4F6F52",
        accent: "#F5EFE6",
        darkbg: "#111827",
      },

      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
        special: ["Montserrat", "sans-serif"],
      },

      borderRadius: {
        custom: "2rem",
      },
    },
  },
  plugins: [],
};