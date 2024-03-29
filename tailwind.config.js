/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*"],
  theme: {
    extend: {
      colors: {
        verydarkcolor: "#475C7A",
        yellow: "#FCBB6D",
        orange: "#D8737F",
        darkerorange: "#AB6C82",
        brown: "#685D79",
        offwhite: "#EFEEEE",
        darkmode: "#121212",
      },
      fontFamily: {
        Bitter: ["Bitter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
