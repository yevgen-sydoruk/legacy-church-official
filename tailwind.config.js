/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('/legacy-hero-min.jpg')",
        "cafe-block-image": "url('/legacy-cafe.jpg')",
        "Ukraine-block-image": "url('/legacy-Ukraine.png')",
        "mission-banner": "url('/mission_and_vision_banner.jpg')",
        "black-overlay": "linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.8))"
      },
      boxShadow: {
        "nav-shadow": "0 6px 8px -1px rgba(0,0,0,0.3)"
      }
      // fontFamily: {
      //   sans: ["Lato", "Arial", "Helvetica Neue", "Helvetica", "sans-serif"]
      // }
    }
  },
  plugins: []
};
