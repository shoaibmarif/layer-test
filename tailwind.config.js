/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#096B68',      // blue-600
        secondaryColor: '#f59e42',    // orange-400
        ternaryColor: '#10b981',      // e.g. emerald-500
        foreColor: '#1e293b',         // e.g. slate-800
        backgroundLight: '#F2F9FF',
        primaryText:"#071013",
      },
      screens: {
        'xs': '336px',
        'sm': '540px',
        'md': '768px',
        'lg': '1023px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
