/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        evergreen: {
          50: '#eef6f4',
          100: '#ddeee9',
          200: '#bbddd3',
          300: '#99ccbd',
          400: '#77bba8',
          500: '#55aa92',
          600: '#448875',
          700: '#336657',
          800: '#22443a',
          900: '#11221d',
          950: '#0c1814',
        },
      },
    },
  },
  plugins: [],
}

