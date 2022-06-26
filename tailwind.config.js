/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#63FDFF",
        "n-black": "#222222",
        "n-gray": "#777777",
        'n-gray-sec': '#bbbbbb'
      },
      gridTemplateColumns: {
        "1fr-1fr": "1fr 1fr",
        "3fr-1.5fr": "3fr 1.5fr",
        "4fr-1.5fr": "4fr 1.5fr",
        auto: "repeat(auto-fit, minmax(400px, 1fr))",
      },
      fontSize: {
        xxs: "10px",
      },
      width: {
        100: "400px",
      },
    },
  },
  plugins: [],
};
