/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '360px',
      tablet: '740px',
      laptop: '1280px',
      desktop: '1440px',
    },
    extend: {
      backgroundColor: {
        'primary': '#202027',
        'secondary': '#FF6969',
      },
      borderColor:{
        'secondary': '#FF6969',
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
}

