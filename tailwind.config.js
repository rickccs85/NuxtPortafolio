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
    //themes: ["lofi", "Dark",],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}