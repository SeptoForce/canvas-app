import type {Config} from "tailwindcss";

const config: Config = {
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
      colors: {
        "special-red": "#ff453a",
        "special-orange": "#ff9f0a",
        "special-yellow": "#ffd60a",
        "special-green": "#32d74b",
        "special-teal": "#66d4cf",
        "special-lightblue": "#6ac4dc",
        "special-skyblue": "#5ac8f5",
        "special-blue": "#0a84ff",
        "special-indigo": "#5e5ce6",
        "special-purple": "#bf5af2",
        "special-pink": "#ff375f",
        "special-brown": "#ac8e68",
        "special-grey": "#98989d",
      },
    },
  },
  plugins: [],
};
export default config;
