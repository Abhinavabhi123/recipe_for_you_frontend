/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ccbdfd",
      },
      keyframes: {
        sideBar: {
          '0%': { transform: 'translateX(0)' },    
          '100%': { transform: 'translateX(-100%)' },  
        },
      },
      sideBarAnimation: {
        'side-bar': 'sideBar 2s linear infinite',
      }
    },
  },
  plugins: [],
};
