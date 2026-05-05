/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        inkElevated: "var(--color-ink-elevated)",
        inkSoft: "var(--color-ink-soft)",
        gold: "var(--color-gold)",
        goldMuted: "var(--color-gold-muted)",
        goldDeep: "var(--color-gold-deep)",
        snow: "var(--color-snow)",
        mist: "var(--color-mist)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
        "glow-lg": "var(--shadow-glow-lg)",
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      backgroundImage: {
        "gold-shine": "var(--gradient-gold-shine)",
        "hero-overlay": "var(--gradient-hero-overlay)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 215, 0, 0.25)" },
          "50%": { boxShadow: "0 0 28px 4px rgba(255, 215, 0, 0.15)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
