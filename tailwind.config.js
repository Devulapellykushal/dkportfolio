/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        brand: {
          gold: "var(--color-gold)",
          "gold-muted": "var(--color-gold-muted)",
          "gold-deep": "var(--color-gold-deep)",
        },
        muted: "var(--color-muted)",
      },
      fontFamily: {
        heading: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "glow-gold": "var(--shadow-glow-gold)",
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      backgroundImage: {
        "gradient-border": "var(--gradient-border)",
        "hero-glow": "var(--gradient-hero)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
