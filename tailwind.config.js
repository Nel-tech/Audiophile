/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Pages/Home/Home.jsx",
    "./src/Component/Nav.jsx",
    "./src/Component/Background.jsx",
  ],
  theme: {
    extend: {
      maxWidth: {
        containerWidth: "1250px",
        textWidth: "25rem",
      },
      colors: {
        primary: "rgb(151, 151, 151)",
        TextColor: "#d87d4a",
      },
      margin: {
        leftSide: "9rem",
      },
    },
  },
  plugins: [],
};
