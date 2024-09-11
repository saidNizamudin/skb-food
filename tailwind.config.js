/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        segoe: ["var(--font-segoe)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F1592A",
        primaryLight: "#FFF0EC",
        secondary: "#FBC54E",
        secondaryLight: "#FFF5E0",
        black: "#1F1F1F",
        grey: "#575757",
      },
      spacing: {
        xCustom: "100px",
      },
    },
  },
  plugins: [],
};
