/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        sans: ['Amita', 'sans-serif'],
        custom: ['CustomFont', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite', // Slows down the bounce animation to 3 seconds
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3%)' },
        },
      },
    },
  },
  plugins: [],
};
