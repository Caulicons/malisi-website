import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      tablet: '720px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      borderRadius: {
        section: '75px',
      },
      colors: {
        primary: 'rgba(var(--primary), <alpha-value>)',
        secondary: 'rgba(var(--secondary), <alpha-value>)',
        black: 'rgba(var(--black), <alpha-value>)',
        white: 'rgba(var(--white), <alpha-value>)',
      },
      lineHeight: {
        heading1: '150%',
        heading: '120%',
      },
      maxWidth: {
        sectionContainerSmall: '1024px',
        sectionContainer: '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
