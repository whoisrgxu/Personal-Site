/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
      extend: {
        keyframes: {
          'fade-in': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
        animation: {
          'fade-in': 'fade-in 2s ease-out forwards',
        },
        
      },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
  }
  