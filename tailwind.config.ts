import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#5fffff', 
        blackPrimary: '#111110',
        blackTransparent: "#11111075",
        whitePrimary: '#fefefe',
        whiteTransparent: '#fefefece',
        grayPrimary: '#808080',
        colorShadow: '#65ffff47', 

      },
      fontSize: {
        'title-lg': ['4.2rem', { lineHeight: '1' }],
        'title-md': ['4rem', { lineHeight: '1.3' }],
        'title-sm': ['3rem', { lineHeight: '1.4' }],
        'subtitle-lg': ['2.4rem', { lineHeight: '1.3' }],
        'subtitle-md': ['1.5rem', { lineHeight: '1.3' }],
        'subtitle-sm': ['1.25rem', { lineHeight: '1.4' }],
        'paragraph-lg': ['1.3rem', { lineHeight: '1.6' }],
        'paragraph-md': ['1.1rem', { lineHeight: '1.6' }],
        'paragraph-sm': ['0.75rem', { lineHeight: '1.6' }],
      },
      fontFamily: {
        // Neue Machina Inktrap
        MachinaLight: ['MachinaLight', 'sans-serif'],
        MachinaLightItalic: ['MachinaLightItalic', 'sans-serif'],
        MachinaRegular: ['MachinaRegular', 'sans-serif'],
        MachinaRegularItalic: ['MachinaRegularItalic', 'sans-serif'],
        MachinaUltrabold: ['MachinaUltrabold', 'sans-serif'],
        MachinaUltraboldItalic: ['MachinaUltraboldItalic', 'sans-serif'],

        // PP Object Sans
        ppObjectSansRegular: ["'PPObjectSansRegular'", "serif"],
        ppObjectSansHeavy: ["'PPObjectSansHeavy'", "serif"],
        ppObjectSansHeavySlanted: ["'PPObjectSansHeavySlanted'", "serif"],
        ppObjectSansSlanted: ["'PPObjectSansSlanted'", "serif"],
      },

    },
    corePlugins: {
      textColor: true, // Habilita text-* para SVG
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
} satisfies Config;
