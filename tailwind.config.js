/** @type {import('tailwindcss').Config} */
export default {
content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
    extend: {
      fontFamily: {
        body: ['Work Sans', 'sans-serif'],
        heading: ['Bebas Neue', 'cursive'],
        cursive: ['Courgette', 'cursive'],
      },
      colors: {
        'duke-blue': '#1bc1f1',
        'duke-dark': '#005aa3',
        'off-white': '#e6f4f1',
        'duke-brown': '#7a3200',
      },
      animation: {
        stripe: 'stripe 8s linear infinite',
      },
      keyframes: {
        stripe: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 0' },
        },
      },
    },
  },
  
  plugins: [],
  
};