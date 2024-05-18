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
        'blue-black': '#171E1D',
        'blue-green': '#7EB1A8',
      } 
    },
    screens: {
      xs: '475px',
    },
  },
  plugins: [],
};
export default config;
