import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minHeight: {
        '1/15': '6.7%',
        '1/10': '10%',
        '1/8': '12.5%',
        '1/5': '20%',
        '1/4': '25%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'discord-gray': '#AB4A4A',
        'macaroon': 'F9E076'
      },
      colors: {
        'brown': '#A52A2A',
        'maroon': '#800000',
        'orange': '#FF8C00',
        'olive': '#808000',
        'turquoise': '#40E0D0',
        'cyan': '#008B8B',
        'navy': '#000080',
        'blue': '#0000CD',
        'orchid': '#9932CC',
        'magenta': '#FF00FF',
        'crimson': '#DC143C',
        'salmon': '#E9967A'
      }
    },
  },
  plugins: [],
}
export default config
