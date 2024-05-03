import React from "react"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { useContext } from "react"
import ThemeTogglerContext from "../../../contexts/ThemeTogglerContext"

export default function ScreenSettings() {
  const [isOpenScreenSettings, setIsOpenScreenSettings] = useState(false)

  const screenSettingsToggler = () => setIsOpenScreenSettings((prev) => !prev)
  const { theme, themeToggler } = useContext(ThemeTogglerContext)

  const changeThemeCheckBox = () => themeToggler()

  const changeFullScreenCheckBox = (ev) =>
    ev.target.checked
      ? document.documentElement.requestFullscreen()
      : document.exitFullscreen()

  const changeBrightnessCheckBox = (ev) =>
  ev.target.checked
    ? document.documentElement.style.filter ='brightness(70%)'
    : document.documentElement.style.filter ='brightness(100%)'

  return (
    <div className="flex justify-center items-center gap-1 text-xl font-bold relative">
      <span className="text-gray-700 dark:text-gray-100">مدیریت سایت</span>
      <IoIosArrowDown
        onClick={screenSettingsToggler}
        className="text-gray-600 dark:text-gray-400 hover:scale-125 transition-all duration-300 cursor-pointer"
      />

      <div
        className={`${
          isOpenScreenSettings ? "max-h-fit py-2" : "max-h-0 py-0"
        } transition-all duration-300 w-48 select-none bg-white dark:bg-gray-700 text-sm font-bold rounded-bl-md overflow-hidden absolute top-8 -right-5`}
      >
        <ul className="w-full flex flex-col text-gray-700 dark:text-gray-200">
          <li className="hover:bg-gray-50 dark:hover:bg-gray-600 p-3 flex justify-between items-center">
            <label htmlFor="darkmode" className="h-full flex-grow">
              حالت تاریک
            </label>
            <input
              checked={theme === "dark" ? true : false}
              type="checkbox"
              id="darkmode"
              onChange={changeThemeCheckBox}
            />
          </li>
          <li className="hover:bg-gray-50 dark:hover:bg-gray-600 p-3 flex justify-between items-center">
            <label htmlFor="fullscreen" className="h-full flex-grow">
              حالت تمام صفحه
            </label>
            <input
              onChange={changeFullScreenCheckBox}
              type="checkbox"
              id="fullscreen"
            />
          </li>
          <li className="hover:bg-gray-50 dark:hover:bg-gray-600 p-3 flex justify-between items-center">
            <label htmlFor="lowbrightness" className="h-full flex-grow">
              حالت کم نور
            </label>
            <input onChange={changeBrightnessCheckBox} type="checkbox" id="lowbrightness" />
          </li>
        </ul>
      </div>
    </div>
  )
}
