/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        headerGray: "#8F94A2",
        primary: "#0A84FF",
      },
      spacing: {
        "6px": "6px",
      },
      height: {
        "7px": "7px",
        "15px": "15px",
      },
      minWidth: {
        "7px": "7px",
        "15px": "15px"
      },
      borderRadius: {
        large64: "64px",
        big84: "800px",
        "5px": "5px",
        "2.5px": "2.5px"
      }
    },
  },
  plugins: [],
}
