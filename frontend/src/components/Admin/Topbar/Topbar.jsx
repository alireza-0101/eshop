import React from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { IoHomeOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import Searchbar from "../Searchbar/Searchbar"
import ScreenSettings from "../ScreenSettings/ScreenSettings"
import BatteryDetailes from "../../BatteryDetailes/BatteryDetailes"

export default function Topbar() {
  const navigate = useNavigate()

  return (
    <div className="w-full h-12 py-3 px-5 bg-white dark:bg-gray-700 flex justify-between items-center">
      <ScreenSettings />
      <Searchbar />

      <div className="flex justify-center items-center h-full gap-2 text-xl text-gray-600 dark:text-gray-300">
        <BatteryDetailes />
        <IoIosArrowForward
          onClick={() => navigate(1)}
          className="hover:scale-125 transition-all duration-300 cursor-pointer mr-2"
        />
        <IoIosArrowBack
          onClick={() => navigate(-1)}
          className="hover:scale-125 transition-all duration-300 cursor-pointer"
        />
        <IoHomeOutline
          onClick={() => navigate("/")}
          className="hover:scale-125 transition-all duration-300 cursor-pointer mr-2"
        />

      </div>
    </div>
  )
}
