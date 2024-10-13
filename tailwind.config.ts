import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#858EAD",
        orange: "#F9995D",
        blue: "#2947A9",
        primary: "#14171F",
        secondary: "#292E3D",
      },
      backgroundColor: {
        orange: "#F9995D",
        secondary: "#292E3D",
        blue: "#2947A9",
      },
      backgroundImage: {
        hero: "url('/hero.png')",
        Consultation: "url('/consultation-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
