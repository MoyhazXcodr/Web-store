/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#0a0a0c",       // Background paling gelap
        bgPanel: "#16161a",      // Background untuk card/sidebar
        primary: "#00d2ff",      // Biru/Cyan terang (seperti di tombol)
        textMain: "#e0e0e0",     // Teks putih agak abu
        textMuted: "#8b8d97",    // Teks abu-abu
        borderMain: "#2a2b36",   // Garis pembatas
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
