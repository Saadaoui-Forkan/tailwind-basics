/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: '10px'
      },
      colors: {
        instagram: '#C13584',
        facebook: "#4267B2",
        twitter: '#1da1f5',
        mainGreen: '#3fac8e',
        youtube: '#FF0000',
      }
    }
  },
  plugins: [],
}
