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
        aboutBg: "url('/about 1.png')",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "640px", // Small screens (mobile)
        md: "768px", // Medium screens (tablet)
        lg: "1024px", // Large screens (desktop)
        xl: "1280px",
        xll: "1520px",
        xxl: "1920px", // Extra large screens (wide desktop)
      },
      colors: {
        primary: "#F67A3C",
        secondary: "#1E5DAA",
        tertiary: "#0883BC",
        bgPrimary: "#90BEF6",
        bgSecondary: "#EBEBEB",
        textPrimary: "#8C8C8C",
        textFooter: "#595959",
        footerHeader: "#535353",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
