import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        'relux-green': '#00b14f',
        'relux-dark': '#0a1a10',
      },
      minHeight: {
        '55': '55vh',
        '70': '70vh',
      },
      maxWidth: {
        'screen': '100vw',
      },
    },
  },
  plugins: [],
}
export default config
