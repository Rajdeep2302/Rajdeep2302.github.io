/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rock3d: ['"Rock 3D"', "serif"],
        Audiowide: ['"Audiowide"', "serif"],
        Orbitron: ['"Orbitron"', "serif"],
        Kaushan: ['"Kaushan Script"', "serif"],
        Chalk: ['"Fredericka the Great"',"serif"],
        Gravitas: ['"Gravitas One"', "serif"],
        Workbench: ['"Workbench"',"serif"]
      },
      screens: {
        'h640': { 'raw': '(min-height: 640px)' }, // Custom height-based breakpoint
      },
    },
  },
  plugins: [],
};
