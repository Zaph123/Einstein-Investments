/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
       'sm': {"max": "450px"},
       'md': {"max": "768px"},
       'lg': {"max": "1024px"},
       'xl': {"max": "1280px"},
      },
      spacing: {
        5: '5px',
        10: '10px',
        30: '30px',
        40: "40px",
        50: "50px",
        100: "100px",
        120: "500px",
        150: '150px',
        200: '200px',
      },
      fontFamily: {
        poppins: ['Poppins', 'DM Serif Display', 'Montserrat', 'Playfair Display'],
        geist: ["Geist", "Serif"],
      },
      colors: {
        primary: '#292929',
        prim_f: "#1e1e1e",
        prim_d: 'rgba(30,30,30,0.42)',
        main_blue: '#6366F1',
        main_blue_f: '#4345BE',
        main_blue_d: 'rgba(67,69,190,0.42)',
      }
    },
  },
  plugins: [],
}

