module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./libs/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      "off-white": "#fef8e8",
      black: "#000000",
      blue: "#5d5fef",
      purple: "#746187",
      pink: "#f1aaaa",
      // Main ones
      core1: '#a5a6f6',
      core2: '#fab8c0',
      core3: '#fece00',
      accent1: '#f38d31',
      accent2: '#b9eeff',
      accent3: '#7684ff',
      black: '#212121',
      'medium-grey': '#9e9c9a',
      'light-grey': '#c6c3c1',
      'lightest-grey': '#eeeeee',
      white: '#ffffff',
      'system-success': '#66b441',
      'system-warning': '#fde376',
      'system-error': '#f95353'
    },
    fontFamily: {
      librecaslon: "'Libre Caslon Text', serif",
      montserrat: "'Montserrat', sans-serif",
      mulish: "'Mulish', sans-serif",
      notosans: "'Noto Sans JP', sans-serif",
    },
    screens: {
      // 'xs': { 'max': '639px' },
      // 'sm': { 'min': '640px', 'max': '767px' },
      // 'md': { 'min': '768px', 'max': '1023px' },
      // 'lg': { 'min': '1024px', 'max': '1279px' },
      // 'xl': { 'min': '1280px', 'max': '1535px' },
      // '2xl': { 'min': '1536px' },
      'xs': { 'max': '639px' },
      'sm': { 'min': '640px' },
      'md': { 'min': '768px' },
      'lg': { 'min': '1024px' },
      'xl': { 'min': '1280px' },
      '2xl': { 'min': '1536px' },
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'display': 'display',
      },
      spacing: {
        'custom-clamp': 'clamp(120px, 250px, 8%)',
      },
      fontSize: {
        'custom-clamp': 'clamp(40px, 3.5vw, 64px)',
        'full-width': '100%',
      }
    }
  },
  plugins: [],
};
