/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      // center: true,
      padding: "4%",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 4.4vw + 1rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2rem, 6.66rem)",
        "6xl": "clamp(4rem, 7.48vw + 3rem, 8.5rem)",
      },
      fontFamily: {
        "yellow-tail": ["Yellowtail-Regular", "sans-serif"],
        clash: ["ClashGrotesk-Variable", "sans-serif"],
        clashExtralight: ["ClashGrotesk-Extralight", "sans-serif"],
        clashLight: ["ClashGrotesk-Light", "sans-serif"],
        clashRegular: ["ClashGrotesk-Regular", "sans-serif"],
        clashMedium: ["ClashGrotesk-Medium", "sans-serif"],
        clashSemibold: ["ClashGrotesk-Semibold", "sans-serif"],
        clashBold: ["ClashGrotesk-Bold", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#f3ebe3",
          brighter: "#f8f4f0",
          darker: "#b6ac9e",
        },
        foreground: "hsl(var(--foreground))",
        pencil: {
          DEFAULT: "#282019",
        },
        primary: {
          DEFAULT: "#282019",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-110%)" },
        },
        "snap-loop": {
          "0%, 12.5%": { transform: "translateX(50%)" }, // Image 1 stays
          "33.33%, 45.83%": { transform: "translateX(-57%)" }, // Image 2 stays
          "66.66%, 79.16%": { transform: "translateX(-164%)" }, // Image 3 stays
          "100%": { transform: "translateX(50%)" }, // Loop back to Image 1
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite",
        "scroll-faster": "scroll 20s linear infinite",
        "snap-loop": "snap-loop 6s ease-in-out infinite", // Adjust duration
        rotate: "spin 10s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
