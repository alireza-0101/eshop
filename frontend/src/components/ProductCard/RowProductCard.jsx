import React from "react"
import { BiShoppingBag } from "react-icons/bi"
import { HiTrash } from "react-icons/hi"
import { IoPricetagsOutline } from "react-icons/io5"
import Tooltip from "../Tooltip/Tooltip"

export default function RowProductCard() {
  return (
    <div className="relative flex w-full p-3 gap-3 rounded-md justify-start items-center border-2 border-gray-300 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer">
      <img
        className="w-20 h-20 rounded-md"
        src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
        alt="Product image"
      />

      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-bold text-sm text-gray-700">
          <span className="dark:text-gray-300">
            لپتاپ MSI Intel-5 مدل پاورنال با حافظه 256 گیگابایت
          </span>
        </div>

        <div className="flex gap-1 font-bold text-sm text-gray-700">
          <IoPricetagsOutline className="text-lg text-blue-500" />
          <span className="dark:text-gray-300">30,000,000 تومان</span>
          <div className="mr-2 flex justify-center gap-2 items-center font-bold">
            <input
              type="number"
              value={1}
              className="w-10 bg-red-200 dark:bg-red-900 dark:text-gray-100 h-5 text-center align-middle rounded-md"
            />
            <span className="text-gray-900 dark:text-gray-200">عدد</span>
          </div>
        </div>
      </div>

      <button className="absolute left-3 bottom-3 flex justify-center items-center gap-3 rounded-md text-xl font-bold">
        <Tooltip text='افزودن به سبد خرید' color='green'>
          <BiShoppingBag className="transition-all duration-300 hover:text-2xl text-green-400" />
        </Tooltip>
        <Tooltip text="حذف محصول از لیست" color="red">
          <HiTrash className="transition-all duration-300 hover:text-2xl text-red-400" />
        </Tooltip>
      </button>
    </div>
  )
}
