import React from "react"
import { IoClose } from "react-icons/io5"

export default function Tag() {
  return (
    <button className="flex justify-center items-center gap-1 bg-blue-700 hover:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-950 dark:text-gray-300 text-gray-50 transition-all duration-300 px-3 py-1 rounded-md text-sm">
      <IoClose className="text-lg" />
      <span>شیائومی</span>
    </button>
  )
}
