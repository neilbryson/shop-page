module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '800px',
      md: '1200px',
      lg: '1600px',
      xl: '1920px',
      '2xl': '2400px',
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      mono: ['ui-monospace', 'monospace'],
    },
    extend: {
      colors: {
        'shop-text-dark': '#222222',
        'shop-text-light': '#888888',
        'shop-header-bg': '#F6F6F7',
        'shop-required': '#C90000',
        'shop-border-light': '#CCCCCC',
        'shop-border-dark': '#222222',
      },
    },
  },
  plugins: [],
};
