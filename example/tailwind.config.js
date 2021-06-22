const plugin = require("tailwindcss/plugin")
const kit = require("fission-kit")


module.exports = {
  mode: "jit",
  darkMode: "media",


  purge: [
    "src/**/*.{js,jsx}",
    "node_modules/fission-kit/src/Components/Classes.json",
    "node_modules/fission-kit/src/Components/React/**/*.jsx"
  ],


  theme: {

    colors: {
      ...kit.dasherizeObjectKeys(kit.colors),

      current: "currentColor",
      inherit: "inherit",
      transparent: "transparent",
    },

    fontFamily: kit.fonts,

  },


  plugins: [

    // Add custom font
    plugin(function({ addBase }) {
      kit.fontFaces({ fontsPath: "/fonts/" }).forEach(fontFace => {
        addBase({ "@font-face": fontFace })
      })
    })

  ]

}
