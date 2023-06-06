/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimaryGradient: "#3984F4",
        // "linear-gradient(169.4deg, #3984F4 -6.01%, #0CD3FF 36.87%, #2F7CF0 78.04%, #0E65E8 103.77%)",
        primaryGradient: "#468EF9",
        // "linear-gradient(136.91deg, #468EF9 -12.5%, #0C66EE 107.5%)",
        blue: "#2F7CF0",
        black: "#000000",
        dark: "#222222",
        gray: "#666666",
        lightGray: "#dddddd",
        green: "#28c165",
        red: "f4574d",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
