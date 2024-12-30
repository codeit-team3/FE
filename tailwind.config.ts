import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '744px',
      lg: '1024px',
    },
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gray: {
          white: '#ffffff',
          'light-01': '#fdfdfd',
          'light-02': '#fafbfb',
          'normal-01': '#f0f1f3',
          'normal-02': '#d8d9db',
          'normal-03': '#c0c1c2',
          'dark-01': '#b4b5b6',
          'dark-02': '#909192',
          'dark-03': '#6c6c6d',
          darker: '#545455',
          black: '#222222',
        },
        green: {
          'light-01': '#e6f6f4',
          'light-02': '#d9f2ef',
          'light-03': '#b0e4dd',
          'normal-01': '#00a991',
          'normal-02': '#009883',
          'normal-03': '#008774',
          'dark-01': '#007f6d',
          'dark-02': '#006557',
          'dark-03': '#004c41',
          darker: '#003b33',
        },
        blue: {
          light: '#d9ebff',
          'light-active': '#009cf4',
          normal: '#007aff',
        },
        red: {
          pink: '#ff337e',
          normal: '#dc2626',
        },
      },
    },
  },
  plugins: [],
};

export default config;
