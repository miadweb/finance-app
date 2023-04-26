/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['24px', '30px'],
      xxl: ['40px', '55px'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '1rem',
        xl: '1rem',

        
        
      },
    },
    extend: {
      colors:{
          'color-slate-500':'#64748b',
          'color-slate-600':'#475569',
          'color-slate-700':'#334155',
          'color-slate-800':'#1e293b',
          white:'#ffffff',
          "main":'#1d4ed8',
          "main2":'#dbeafe',
          "main3":'#eff6ff',
          "shadowcolor":'#dbeafe',
      }
    },
  },
}