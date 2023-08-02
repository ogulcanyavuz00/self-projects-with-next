/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        hankenGrotesk: ["var(--font-hanken-grotesk)"],
      },
      colors: {
        resultsSummary: {
          lightRed: "hsl(0, 100%, 67%)",
          orangeyYellow: "hsl(39, 100%, 56%)",
          greenTeal: "hsl(166, 100%, 37%)",
          cobaltBlue: "hsl(234, 85%, 45%)",
          lightSlateBlue: "hsl(252, 100%, 70%)",
          lightRoyalBlue: "hsl(241, 81%, 54%)",
          violetBlue: "hsla(256, 72%, 46%, 1)",
          persianBlue: "hsla(241, 72%, 46%, 0)",
          paleBlue: "hsl(221, 100%, 96%)",
          lightLavender: "hsl(241, 100%, 83%)",
          darkGrayBlue: "hsl(224, 30%, 15%)",
        },
      },
    },
  },
  plugins: [],
};
