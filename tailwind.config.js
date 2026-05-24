/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-tint": "#0058c9",
        "surface": "#faf8ff",
        "primary": "#0056c4",
        "on-tertiary-container": "#fffbff",
        "secondary-fixed-dim": "#d7baff",
        "secondary": "#782ad9",
        "surface-dim": "#d5d9ec",
        "primary-container": "#006df5",
        "on-surface": "#161b29",
        "on-primary-fixed": "#001944",
        "tertiary-container": "#9e42f2",
        "on-primary-container": "#fefcff",
        "surface-container-high": "#e4e7fb",
        "inverse-surface": "#2b303e",
        "error": "#ba1a1a",
        "on-error-container": "#93000a",
        "on-tertiary-fixed": "#2c0050",
        "on-primary-fixed-variant": "#00429a",
        "on-surface-variant": "#414655",
        "surface-container": "#eaedff",
        "primary-fixed-dim": "#afc6ff",
        "on-secondary-fixed": "#280056",
        "inverse-primary": "#afc6ff",
        "secondary-container": "#924bf3",
        "surface-container-lowest": "#ffffff",
        "outline": "#727787",
        "tertiary": "#841cd8",
        "surface-bright": "#faf8ff",
        "outline-variant": "#c1c6d8",
        "background": "#faf8ff",
        "primary-fixed": "#d9e2ff",
        "on-secondary": "#ffffff",
        "on-tertiary-fixed-variant": "#6900b3",
        "on-secondary-fixed-variant": "#6100be",
        "error-container": "#ffdad6",
        "secondary-fixed": "#eddcff",
        "inverse-on-surface": "#eef0ff",
        "surface-container-low": "#f2f3ff",
        "tertiary-fixed": "#f0dbff",
        "on-tertiary": "#ffffff",
        "on-primary": "#ffffff",
        "on-background": "#161b29",
        "tertiary-fixed-dim": "#ddb7ff",
        "surface-variant": "#dee2f5",
        "surface-container-highest": "#dee2f5",
        "on-secondary-container": "#fffbff",
        "on-error": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Manrope Variable", "Manrope", "sans-serif"],
        "body": ["Inter Variable", "Inter", "sans-serif"],
        "label": ["Inter Variable", "Inter", "sans-serif"]
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        gradient: 'gradient 3s ease infinite',
      }
    },
  },  
  plugins: [],
}
