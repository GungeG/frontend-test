/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'w-header': '1980px',
        '128': '478.12px',
        'card': '528px',},
        height: {
          'card': '563.65px',
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        co1: "#C017A2",
        h: "#00609C",
        h123: "#E6E7E8"
      },
    },
  },
  plugins: [],
};
