/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Amatic SC", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        "can-can": {
          50: "#fcf4f4",
          100: "#f9eaeb",
          200: "#f4d7dc",
          300: "#ebb6be",
          400: "#df8f9c",
          500: "#cf6479",
          600: "#b94561",
          700: "#9b3550",
          800: "#822f47",
          900: "#702b41",
          950: "#3d1420",
          0.5: "#df8f9c",
        },
      },

      textShadow: {
        default: "0px 1px 3px rgba(0, 0, 0, 0.2)",
      },

      backgroundImage: {
        "hero-bg": "url(/img/sun-tornado.svg)",
        "hero-bg-mobile": "url(/img/sun-tornado-mobile.svg)",
      },
    },
  },
};
