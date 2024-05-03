import React from "react"
import { CgProfile } from "react-icons/cg"

export default function AdminInfo() {
  return (
    <div className="w-full p-3 pt-5 flex md:flex-col md:text-center lg:text-right lg:flex-row justify-start items-center gap-3 cursor-pointer">
      <CgProfile className="text-gray-500 dark:text-gray-300 text-5xl" />

      <div className="flex flex-col text-gray-500 dark:text-gray-300 ">
        <span className="text-base font-bold">علیرضا مهدی زاده</span>
        <span className="text-sm">مدیریت اصلی</span>
      </div>

      <div className="h-full flex-grow flex justify-center items-center">
        <span className="relative bg-red-500 w-5 h-5 rounded-full text-white flex justify-center items-center">
          <span className="pt-1 text-white">5</span>
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
        </span>
      </div>
    </div>
  )
}
