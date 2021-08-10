module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // the important thing makes sure that all tailwind styling has priority
  // important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        scarlett: "var(--scarlett)",
        grey: "var(--bio-background)",
        text_white: "var(--text-white)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
