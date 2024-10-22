import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chillax: ['Chillax', 'sans-serif'], // Adding your custom font
        
      },
   
     colors:{
      black:"#000",
      white:"#fff",
      gray:"#262626",
      blue:"#1E13AE",
      accent:{
        DEFAULT:"#00ff99",
        hover:"#00e187",
      }
     }
    },
  },
  plugins: [],
};
export default config;
