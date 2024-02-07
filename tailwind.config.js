/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "200": "#eee",
        },
      },
      spacing: {},
      },
    
  },
  corePlugins: {
    preflight: false,
  },
};
