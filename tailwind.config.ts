import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    screens: {
      sm: '380px',
      md: '744px',
      lg: '1920px',
    },
  },
  plugins: [],
};

export default config;
