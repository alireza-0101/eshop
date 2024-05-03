import React from "react"

export default function Widget() {
  return (
    <div className="flex justify-center items-center flex-col gap-1 font-bold p-5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md cursor-pointer hover:scale-y-110 transition-all duration-300">
      <span className="text-sky-700 text-3xl">+156</span>
      <span>خرید موفق</span>
    </div>
  )
}
