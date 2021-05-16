module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Spartan"],
    },
    extend: {
      colors: {
        gray: { light: "#2E333A", DEFAULT: "#181B1F" },
        pred: { light: "#FF5959", DEFAULT: "#FF3939" },
        purple: { light: "#5552FF", DEFAULT: "#3D39FF" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
