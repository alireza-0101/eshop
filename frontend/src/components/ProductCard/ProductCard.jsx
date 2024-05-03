import React from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { BiBookmarkAltPlus } from "react-icons/bi"
import { Link } from "react-router-dom"

export default function ProductCard() {
  return (
    <div className="relative rounded-lg w-full p-3 m-5 flex flex-col gap-4 shadow-xl hover:shadow-2xl transition-all duration-300">
      <span className="absolute text-xs top-2 right-2 py-1 px-5 bg-red-500 text-white text-center font-bold rounded-full">
        65% تخفیف
      </span>

      <div className="absolute top-2 left-2 flex flex-col gap-2">
        <span className="p-2 border-2 cursor-pointer transition-all duration-300 hover:bg-red-100 hover:text-red-500 hover:border-red-200 border-gray-300 bg-gray-50 text-gray-700 text-center font-bold rounded-full">
          <AiOutlineHeart className="text-xl" />
        </span>

        <Link
          to=""
          className="p-2 border-2 cursor-pointer transition-all duration-300 hover:bg-blue-100 hover:text-blue-500 hover:border-blue-200 border-gray-300 bg-gray-50 text-gray-700 text-center font-bold rounded-full"
        >
          <BiBookmarkAltPlus className="text-xl" />
        </Link>
      </div>

      <img
        src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
        alt="Product image"
        className="rounded-md"
      />
      <Link to="" className="font-bold dark:text-gray-100">
        لپتاپ MSI Intel-5 مدل پاورنال با حافظه 256 گیگابایت
      </Link>

      <div className="flex gap-1 font-bold text-sm text-gray-700">
        <AiFillHeart className="text-lg text-red-500" />
        <span className="dark:text-gray-400">32 نفر پسندیدن</span>
      </div>

      <div className="flex flex-col gap-0">
        <span className="text-gray-800 dark:text-gray-400 font-bold line-through">
          30,000,000 تومان
        </span>
        <span className="text-red-500 font-bold text-xl">30,000,000 تومان</span>
      </div>

      <button className="flex justify-center items-center text-sm font-bold bg-green-700 hover:bg-green-600 transition-all duration-300 text-white py-2 px-5 rounded-3xl">
        افزودن به سبد خرید
      </button>
    </div>
  )
}
