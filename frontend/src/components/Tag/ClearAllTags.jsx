import React from "react"
import { IoClose } from "react-icons/io5"

export default function ClearAllTags() {
  return (
    <button className="flex justify-center items-center gap-1 transition-all duration-300 px-3 py-1 rounded-md text-sm text-red-400 border-2 border-red-400 hover:bg-red-500 hover:text-gray-100">
      <IoClose className="text-lg" />
      <span>حذف همه</span>
    </button>
  )
}
