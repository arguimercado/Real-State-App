/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular","sans-serif"],
        "rubik-bold": ["Rubik-Bold","sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold","sans-serif"],
        "rubik-light": ["Rubik-Light","sans-serif"],
        "rubik-medium": ["Rubik-Medium","sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold","sans-serif"],
      }
    },
    colors: {
      primary: {
        100: "#0061FF0A",
        200: "#0061FF1A",
        300: "#0061FF",

      },
      accent: {
        100: "#FBFBFD",

      },
      black: {
        DEFAULT: "#000000",
        100: "#8C8E98",
        200: "#666876",
        300: "#191d31"
      },
      danger: "#F75555",
      green: {
        DEFAULT: "#027A48",
        800: "#027A48",
        400: "#4C7B62",
        100: "#ECFDF3",
      },
      red: {
        DEFAULT: "#EF3A4B",
        800: "#EF3A4B",
        400: "#F46F70",
      },
      light: {
        900: "#FFFFFF",
        800: "#F8FAFC",
        700: "#F8F8FF",
        600: "#EDF1F1",
        200: "#9298A1",
        100: "#64748B",
      },
      dark: {
        800: "#16191E",
        500: "#1C2025",
        400: "#1E293B",
        200: "#3A354E",
        100: "#64748B",
      },
    },
    screens: {
      xs: "480px",
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
  plugins: [],
}