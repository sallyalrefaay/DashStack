/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'h1Color': '#202224'
      },
      backgroundImage: {
        'auth-bg': "url('/public/assets/auth-bg.png')"
      },
    },  
  },
  plugins: [],
}

