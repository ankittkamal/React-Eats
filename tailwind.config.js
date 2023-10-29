/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bio: "#999",
        shimmer: "#999",
        "gray-count": "#bebfc5",
      },
    },
  },
  plugins: [],
};
