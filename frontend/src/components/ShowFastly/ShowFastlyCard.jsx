import React from "react"
import { AiFillHeart } from "react-icons/ai"

export default function ShowFastlyCard() {
  return (
    <div className="flex flex-col gap-3 rounded-md justify-center items-center border-2 border-gray-300 dark:border-gray-500 p-2 hover:scale-110 transition-all duration-300 cursor-pointer">
      <img
        className="w-36 h-36 rounded-md"
        src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
        alt="Product image"
      />
      <div className="flex gap-1 font-bold text-sm text-gray-700">
        <AiFillHeart className="text-lg text-red-500" />
        <span className="dark:text-gray-300">32 نفر پسندیدن</span>
      </div>
    </div>
  )
}
