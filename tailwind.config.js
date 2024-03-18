/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Amatic SC", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      backdropBlur: {
        none: "0",
        sm: "0.1px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },

      colors: {
        // Add this section
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
        texture: "url(/img/bg-2.webp)",
        "hero-bg": "url(/img/sun-tornado.svg)",
      },
    },
  },
};
