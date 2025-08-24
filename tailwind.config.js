/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-bg': 'hsl(0 0% 9.8%)',
        'dark-card': 'hsl(0 0% 14.5%)',
        'accent-yellow': 'hsl(51 100% 50%)',
        'text-gray': 'hsl(0 0% 62.7%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
    }
  },
  plugins: []
}