import React, { createContext } from "react"

const ThemeTogglerContext = createContext({
  theme: "light",
  themeToggler: () => {},
})

export default ThemeTogglerContext
