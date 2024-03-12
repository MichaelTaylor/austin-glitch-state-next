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
        'primary': 'black',
        'secondary': 'rgb(0, 0, 0)',
        'background': 'rgb(0, 0, 0)',
        'text-color': 'white',
      },
      fontFamily: {
        'custom': ['VT323', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
export default config;
