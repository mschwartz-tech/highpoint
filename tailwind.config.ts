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
        primary: "#1B5E20",
        "primary-light": "#2E7D32",
        "primary-dark": "#145214",
        secondary: "#4E342E",
        accent: "#FF8F00",
        "accent-light": "#FFA000",
        background: "#FAFAF5",
        dark: "#1A1A1A",
        "text-primary": "#212121",
        "text-secondary": "#5D4037",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 32px rgba(27,94,32,0.15)",
        cta: "0 4px 20px rgba(255,143,0,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
