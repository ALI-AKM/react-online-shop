/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         colors:{
      'primary':"#212A31",
      'secondary':"#2E3944",
      'third':"#124E66",
      'fourth':"#748D92",
      'fifth':"#D3D9D4",
    },
    },
  },
  plugins: [],
}

