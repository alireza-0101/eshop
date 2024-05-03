import React from "react"
import { IoReloadOutline } from "react-icons/io5"
import { BiSearchAlt } from "react-icons/bi"

export default function Searchbar() {
  return (
    <div className="hidden md:flex justify-center items-center gap-3">
      <BiSearchAlt className="hover:scale-125 transition-all duration-300 cursor-pointer text-xl text-gray-600 dark:text-gray-300" />

      <div className="flex justify-center items-center rounded-md bg-gray-100 dark:bg-gray-600 pl-2">
        <input
          type="text"
          className="flex-grow w-96 py-1 px-3 bg-transparent text-base"
          placeholder="چیزی جستجو کنید..."
        />

        <IoReloadOutline className="hover:scale-125 transition-all duration-300 cursor-pointer text-base text-gray-600 dark:text-gray-300" />
      </div>
    </div>
  )
}
