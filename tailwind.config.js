/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-error": "var(--color-on-error)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
        "on-tertiary": "var(--color-on-tertiary)",
        "background": "var(--color-background)",
        "error-container": "var(--color-error-container)",
        "on-secondary": "var(--color-on-secondary)",
        "surface-tint": "var(--color-surface-tint)",
        "secondary": "var(--color-secondary)",
        "primary-container": "var(--color-primary-container)",
        "surface-dim": "var(--color-surface-dim)",
        "outline": "var(--color-outline)",
        "primary-fixed": "var(--color-primary-fixed)",
        "tertiary-container": "var(--color-tertiary-container)",
        "primary": "var(--color-primary)",
        "on-primary": "var(--color-on-primary)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        "secondary-fixed": "var(--color-secondary-fixed)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "error": "var(--color-error)",
        "surface-container-high": "var(--color-surface-container-high)",
        "surface-container-low": "var(--color-surface-container-low)",
        "tertiary-fixed": "var(--color-tertiary-fixed)",
        "surface": "var(--color-surface)",
        "tertiary": "var(--color-tertiary)",
        "outline-variant": "var(--color-outline-variant)",
        "inverse-primary": "var(--color-inverse-primary)",
        "surface-bright": "var(--color-surface-bright)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
        "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",
        "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "on-error-container": "var(--color-on-error-container)",
        "secondary-container": "var(--color-secondary-container)",
        "on-surface": "var(--color-on-surface)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "surface-container": "var(--color-surface-container)",
        "inverse-surface": "var(--color-inverse-surface)",
        "surface-variant": "var(--color-surface-variant)",
        "on-primary-container": "var(--color-on-primary-container)",
        "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant)",
        "on-background": "var(--color-on-background)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
        "on-primary-fixed": "var(--color-on-primary-fixed)"
},
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Manrope"],
        "body": ["Be Vietnam Pro"],
        "label": ["Be Vietnam Pro"]
      }
    }
  },
  plugins: [],
}
