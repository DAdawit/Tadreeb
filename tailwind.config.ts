import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px", // Small screens (mobile)
        md: "768px", // Medium screens (tablet)
        lg: "1024px", // Large screens (desktop)
        xl: "1280px",
        xll: "1620px",
        xxl: "1920px", // Extra large screens (wide desktop)
      },
      colors: {
        primary: "#F67A3C",
        secondary: "#1E5DAA",
        tertiary: "#0883BC",
        bgPrimary: "#90BEF6",
        bgSecondary: "#EBEBEB",
      },
    },
  },
  plugins: [],
};
export default config;
