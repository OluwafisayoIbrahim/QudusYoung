/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      screens: {
        'sm': '640px',    
        'md': '768px',    
        'lg': '1024px',   
        'xl': '1280px',   
        '2xl': '1536px',  
      },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        black: "#000000",
        white: "#FFFFFF"
      },
    },
  },
  plugins: [],
};

export default config;
