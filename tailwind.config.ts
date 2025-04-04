import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blay: "#1b1b1b",
        cream: "#f7f7ef",
        cookie: "#252222",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        radius: "var(--radius)",
        chart1: "hsl(var(--chart-1))",
        chart2: "hsl(var(--chart-2))",
        chart3: "hsl(var(--chart-3))",
        chart4: "hsl(var(--chart-4))",
        chart5: "hsl(var(--chart-5))",
      },
      screens: {
        "2xl": "1600px",
      },
      keyframes: {
        blink: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
        },
        snake: {
          "0%": { transform: "scale(1.5)", opacity: "0" },
          "50%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }, // Nur -50%, weil die Liste sich verdoppelt
        },
      },
      animation: {
        blink: "blink 2s infinite",
        snake: "snake 3s ease-in-out infinite",
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
