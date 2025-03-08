/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#1E2761',
        secondary: '#E09F3E',
        light: {
          100: '#B0B5E3',
          200: '#888EC6',
          300: '#5F66A8',
        },
        dark: {
          100: '#181C4A',
          200: '#0F1230',
        },
        accent: '#7A2048'
      }
    },
  },
  plugins: [],
}