/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        satoshi: ['Satoshi', 'system-ui', 'sans-serif'],
        heading: ['Satoshi', 'system-ui', 'sans-serif'],
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
        'warm-sand': {
          50: '#f8f4ee',
          100: '#f1e9dd',
          200: '#e3d3bb',
          300: '#d5bd99',
          400: '#bfa37a',
          500: '#a68961',
          600: '#8d6f4a',
        },
      },
    },
  },
  plugins: [],
}

