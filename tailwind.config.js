/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "var(--red)",

        "very-dark-blue": "var(--very-dark-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blu)",
        "grayish-blue": "var(--grayish-blue)",
        "light-grayish-blue": "var(--light-grayish-blue)",
      },
      fontFamily: {
        barlow: "var(--barlow)",
        "barlow-condensed": "var(--barlow-condensed)",
      },
      boxShadow: {
        "css-1": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
