import React, { useState } from "react"
import { IoClose } from "react-icons/io5"

export default function TopHeader() {
  const [isShow, setIsShow] = useState(true)

  return (
    <div className={`w-full transition-all overflow-hidden duration-500 bg-gray-50 dark:bg-gray-600 flex items-center relative pl-12 pr-5 ${isShow ? 'max-h-auto py-5' : 'max-h-0 py-0'}`}>
      <button
        onClick={() => setIsShow(false)}
        className="absolute left-5 w-6 h-6 text-gray-500 dark:text-gray-300 text-2xl rounded-md flex justify-center items-center"
      >
        <IoClose />
      </button>

      <p className="font-bold text-gray-500 dark:text-gray-300 text-xs md:text-md lg:text-base">
        تمامی قیمت های سایت{" "}
        <strong className="text-red-400 px-1">بروز میباشد</strong> و میتوانید با
        خیال راحت خرید نمایید :)
      </p>
    </div>
  )
}
