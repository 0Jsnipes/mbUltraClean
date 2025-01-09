/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];
export const theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#6B4CA8', // Primary Purple
        light: '#E6D9F3', // Soft Lavender
        dark: '#5A3D74', // Rich Plum
      },
      accent: {
        gold: '#F3C623', // Accent Gold
      },
      neutral: {
        white: '#FFFFFF', // Neutral White
        charcoal: '#2E2E2E', // Deep Charcoal
      },
    },
    fontFamily: {
      cursive: ['Dancing Script', 'cursive'], // Add this
    },
  },
};
export const plugins = [];
