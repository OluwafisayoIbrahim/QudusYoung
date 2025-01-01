import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      screens: {
        'xs': '320px',
        'sm': '375px',    
        'md': '425px',    
        'lg': '768px',   
        'xl': '1024px',   
        '2xl': '1440px',  
      },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
        black: "#000000",
        white: "#FFFFFF"
      },
    },
  },
  plugins: [],
};

export default config;
