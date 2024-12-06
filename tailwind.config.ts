import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '744px',
      lg: '1920px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gray: {
          light: '#fefefe',
          'light-hover': '#fdfdfd',
          'light-active': '#fafbfb',
          normal: '#f0f1f3',
          'normal-hover': '#d8d9db',
          'normal-active': '#c0c1c2',
          dark: '#b4b5b6',
          'dark-hover': '#909192',
          'dark-active': '#6c6c6d',
          darker: '#545455',
        },
        green: {
          light: '#e6f6f4',
          'light-hover': '#d9f2ef',
          'light-active': '#b0e4dd',
          normal: '#00a991',
          'normal-hover': '#009883',
          'normal-active': '#008774',
          dark: '#007f6d',
          'dark-hover': '#006557',
          'dark-active': '#004c41',
          darker: '#003b33',
        },
      },
    },
  },
  plugins: [],
};

export default config;
