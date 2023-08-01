/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': 'pink',
        'gray':'#B1B1B1',
        'red':'#FF1949',
        'yellow':'#eab830',
        'blue':'#eab830',
        'gray':'#666666',
        'black': {
          100: '#000000',
          200:'#1E1E1E',
        },
        // ...
      },
      fontFamily: {
        display: ['var(--font-neueu)'],
      },
    },
  },
  plugins: [],
}
