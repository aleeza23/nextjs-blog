/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor : {
        "primary-color" : "#181A2A",
        "secondary-color" :"#4B6BFB"
      },
      colors : {
        "primary-text-color ": "#4B6BFB"
      },
      fontFamily : {
       "heading-font" : "Work Sans', sans-serif;",
       "text-font" : "Source Serif 4', serif;"
      }
    },
  },
  plugins: [],
}
