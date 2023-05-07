/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "primary-text": "#7b4ae2",
      "primary-bg-extraLight": "rgba(123, 74, 226, 0.1)",
      "primary-bg-light": "rgba(123, 74, 226, 0.5)",
      customGrey: "rgba(255, 255, 255, 0.5)",
    },
  },
  plugins: [],
};
