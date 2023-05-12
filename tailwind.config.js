/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: [`var(--font-orbitron),'latin'`],
        poppins: [`var(--font-poppins),'latin'`],
      },
      backgroundImage: {
        "bg-hand": "url('/handBackground.jpg')",
      },
    },
  },
  plugins: [],
};
