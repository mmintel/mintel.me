/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      "gray-light": {
        DEFAULT: "#C7C7CC",
        50: "#FFFFFF",
        100: "#FCFCFD",
        200: "#FAFAFA",
        300: "#F2F2F3",
        400: "#DCDCDF",
        500: "#C7C7CC",
        600: "#AAAAB1",
        700: "#8C8C97",
        800: "#70707B",
        900: "#55555D",
      },
      "gray-dark": {
        DEFAULT: "#48484A",
        50: "#C9C9CA",
        100: "#B4B4B6",
        200: "#909093",
        300: "#767679",
        400: "#656567",
        500: "#4E4E50",
        600: "#3A3A3B",
        700: "#262627",
        800: "#171717",
        900: "#000000",
      },
      "yellow-light": {
        DEFAULT: "#FFCC00",
        50: "#FFF1B8",
        100: "#FFEDA3",
        200: "#FFE47A",
        300: "#FFDC52",
        400: "#FFD429",
        500: "#FFCC00",
        600: "#C79F00",
        700: "#8F7200",
        800: "#574500",
        900: "#1F1800",
      },
      "yellow-dark": {
        DEFAULT: "#FFD60A",
        50: "#FFF5C2",
        100: "#FFF1AD",
        200: "#FFEA84",
        300: "#FFE45C",
        400: "#FFDD33",
        500: "#FFD60A",
        600: "#D1AE00",
        700: "#997F00",
        800: "#615100",
        900: "#292200",
      },
      "green-light": {
        DEFAULT: "#34C759",
        50: "#C3EFCE",
        100: "#B3EBC1",
        200: "#93E3A7",
        300: "#72DA8D",
        400: "#52D272",
        500: "#34C759",
        600: "#289B45",
        700: "#1D6E31",
        800: "#11421D",
        900: "#061509",
      },
      "green-dark": {
        DEFAULT: "#30D158",
        50: "#C6F2D1",
        100: "#B6EFC4",
        200: "#94E7A9",
        300: "#73E08E",
        400: "#51D873",
        500: "#30D158",
        600: "#25A444",
        700: "#1A7631",
        800: "#10491E",
        900: "#061B0B",
      },
      "red-light": {
        DEFAULT: "#FF3B30",
        50: "#FFE9E8",
        100: "#FFD6D3",
        200: "#FFAFAA",
        300: "#FF8882",
        400: "#FF6259",
        500: "#FF3B30",
        600: "#F70D00",
        700: "#BF0A00",
        800: "#870700",
        900: "#4F0400",
      },
      "red-dark": {
        DEFAULT: "#FF453A",
        50: "#FFF2F2",
        100: "#FFDFDD",
        200: "#FFB9B4",
        300: "#FF928C",
        400: "#FF6C63",
        500: "#FF453A",
        600: "#FF1002",
        700: "#C90B00",
        800: "#910800",
        900: "#590500",
      },
      "blue-light": {
        DEFAULT: "#0069FF",
        50: "#B8D5FF",
        100: "#A3C9FF",
        200: "#7AB1FF",
        300: "#5299FF",
        400: "#2981FF",
        500: "#0069FF",
        600: "#0052C7",
        700: "#003B8F",
        800: "#002457",
        900: "#000D1F",
      },
      "blue-dark": {
        DEFAULT: "#0A84FF",
        50: "#C2E0FF",
        100: "#ADD6FF",
        200: "#84C1FF",
        300: "#5CADFF",
        400: "#3398FF",
        500: "#0A84FF",
        600: "#0068D1",
        700: "#004C99",
        800: "#003061",
        900: "#001429",
      },
    },
    extend: {},
  },
  plugins: [],
};
