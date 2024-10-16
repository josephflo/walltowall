import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonPurple: '#9747FF',
      },
      boxShadow: {
        'custom-bottom-right': '3px 3px 3px rgba(0, 0, 0, 1)', // Sombra en la esquina inferior derecha
      },
      fontSize: {
        'font-title': '64px', // Tamaño personalizado de 64px
        'font-subtitle': '60px', // Tamaño personalizado de 60px
        'font-text': '24px', // Tamaño personalizado de 24px
      },
    
    },
  },
  plugins: [],
};
export default config;
