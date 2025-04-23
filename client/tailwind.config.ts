import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'githubColor': '#0D1117',
    },
  },
},
  plugins: [],
} satisfies Config;
