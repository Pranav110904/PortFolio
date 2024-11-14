/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        georama: ['Georama', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
        mazius: ['MaziusReview', 'sans-serif'],  
      },
      fontWeight: { 
        ultrathin: 100,  
        thin: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        heavy: 800,
      },
    },
  },
  plugins: [],
}
