// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1db954",
          olive: "#556b2f",
          dark: "#121212",
          elevated: "#181818",
          gray: "#b3b3b3",
          light: "#ffffff",
        },
      },
      backgroundImage: {
        "spotify-gradient": "linear-gradient(to bottom, #556b2f, #121212, black)",
      },
    },
  },
  safelist: [
    "bg-gradient-to-b",
    "from-spotify-olive",
    "via-spotify-dark",
    "to-black",
  ],
  plugins: [],
};
