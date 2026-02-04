/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "./themes/pehtheme-hugo/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        body: '#404040',
        surface: '#ffffff',
        'surface-alt': '#f9fafb',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
