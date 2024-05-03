import React from "react"
import { MdFileOpen } from "react-icons/md"

export default function CommentBox() {
  return (
    <div className="p-4 bg-gray-50 dark:bg-slate-600 flex flex-col gap-1 rounded-md">
      <span className="font-bold dark:text-gray-100">
        علیرضا مهدی زاده - 2 ماه پیش
      </span>

      <p className="mt-2 text-justify font-bold overflow-hidden leading-7 text-sm text-gray-600 dark:text-gray-200">
        شنیدی که میگن: اونی که گریه میکنه یه درد داره. اما اونی که می‌خنده
        هزار‌تا من میگم: اونی که میخنده هزارتا درد داره ولی اونی که گریه می‌کنه
        به هزار‌تا از دردهاش خندیده اما جلوی یکیشون بدجوری کم آورده...️
      </p>
      <div className="flex justify-between items-center flex-wrap gap-3 mt-5">
        <img
          className="w-20 h-20 rounded-md border-2 border-gray-300 dark:border-gray-500 cursor-pointer"
          src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
          alt="Product image"
        />
        <img
          className="w-20 h-20 rounded-md border-2 border-gray-300 dark:border-gray-500 cursor-pointer"
          src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
          alt="Product image"
        />
        <img
          className="w-20 h-20 rounded-md border-2 border-gray-300 dark:border-gray-500 cursor-pointer"
          src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
          alt="Product image"
        />
      </div>
    </div>
  )
}
