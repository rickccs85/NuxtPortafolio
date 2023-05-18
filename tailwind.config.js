const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        tugangaelectronic: {
          "primary": "#021544",
          "secondary": "#EAEBEE",
          "accent": "#F8EF1F",
          "neutral": "#021544",
          "base-100": "#FFFFFF",
          "info": "#4AA8C0",
          "success": "#823290",
          "warning": "#EE8133",
          "error": "#E93F33",
        }
      }],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
  content: ['./src/**/*.html' /* ... */],
}