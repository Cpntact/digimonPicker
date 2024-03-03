/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-a9': 'rgba(0,0,0,0.7)',
        'black-a7': 'rgba(0,0,0,0.5)',
      },
      boxShadow: {
        'SwitchRoot': '0 2px 10px black-a7',
        'SwitchThumb': '0 2px 2px black-a7',
      },
      data: {
        "checked": "state~='checked'",
      },
    },
  },
  plugins: [],
}