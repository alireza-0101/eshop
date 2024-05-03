import React, { useEffect, useState, Context } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./routes"
import ThemeTogglerContext from "./contexts/ThemeTogglerContext"
import SupportButton from "./components/SupportButton/SupportButton"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const webLastTheme = localStorage.getItem("theme")

    if (webLastTheme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }, [])

  const themeToggler = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setTheme("light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }
  }

  let router = useRoutes(routes)

  return (
    <ThemeTogglerContext.Provider
      value={{
        theme,
        themeToggler,
      }}
    >
      <div className="2xl:container bg-white dark:bg-gray-800 mx-auto w-full">
        {router}
      </div>
      <SupportButton />
      <ScrollToTop />

    </ThemeTogglerContext.Provider>
  )
}

export default App
