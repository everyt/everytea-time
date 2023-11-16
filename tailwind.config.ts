import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        suit: ['var(--font-suit)'],
      },
      spacing: {
        '68': '17rem',
        '76': '19rem',
      },
      colors: {
        'redishgray-500': 'rgb(110, 94, 104)',
        'redishgray-800': 'rgb(84, 74, 83)',
      },
    },
  },
  plugins: [],
};
export default config;
