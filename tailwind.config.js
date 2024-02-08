/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554"
        },
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#eee",
        },
        black: "#000",
        red: "#fc0000",
        midnightblue: "#1e2772",
        silver: "#c2c2c2",
        white: "#fff",
        deepskyblue: "#3da8e4",
        dimgray: "#555",
      },
      spacing: {},
      fontFamily: {
        "istok-web": "'Istok Web'",
        poppins: "Poppins",
      },
      borderRadius: {
        "6xl": "25px",
        "4xs-1": "8.1px",
      },
      fontSize: {
        "13xl": "32px",
        "base-2": "16.2px",
        "mini-1": "14.1px",
        inherit: "inherit",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
