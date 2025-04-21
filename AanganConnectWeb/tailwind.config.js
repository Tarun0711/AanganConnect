/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'custom-tight': '-0.05em',
        'custom-wide': '0.1em',
      },
      boxShadow: {
        'inner-custom': 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

