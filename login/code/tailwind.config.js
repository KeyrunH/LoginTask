const colors = require("./src/types/palette/colours");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./safelist.txt"],
  theme: {
    boxShadow: {
      sm: "0 1px 4px -1px rgba(9, 11, 18, 0.07)",
    },
    fontSize: {
      xxs: ["11px"],
      xs: [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      sm: [
        "13px",
        {
          lineHeight: "16px",
        },
      ],
      md: [
        "15px",
        {
          lineHeight: "20px",
        },
      ],
      lg: [
        "17px",
        {
          lineHeight: "24px",
        },
      ],
      "2xl": [
        "18px",
        {
          lineHeight: "24px",
        },
      ],
      "3xl": [
        "24px",
        {
          lineHeight: "34px",
        },
      ],
      "8xl": [
        "32px",
        {
          lineHeight: "44px",
        },
      ],
    },
    extend: {
      colors,
      visibility: ["group-hover"],
    },
    screens: {
      // sm: { max: "360px" }, // sm is default
      md: { min: "744px" }, // from 744px to 1440px
      lg: { min: "1440px" }, // from  "1440px" to "1920px"
      xl: { min: "1920px" }, // xl width: "1920px" greater
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@headlessui/tailwindcss"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
