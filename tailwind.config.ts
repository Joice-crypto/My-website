import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'botao-roxo': '#8C276E',
        'gray-dark': '#4A4A4A',
        'green-button': '#84CC16'
      }
    },
  },
  plugins: [],
}
export default config
