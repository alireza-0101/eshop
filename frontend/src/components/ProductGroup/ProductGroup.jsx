import React from "react"

export default function ProductGroup({children}) {
  return (
    <div className="relative flex w-full p-3 gap-8 rounded-md justify-center items-center border-2 border-gray-300 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer flex-wrap">
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
      <img
        className="w-20 h-20 rounded-md border-2 border-gray-300 dark:border-gray-500 cursor-pointer"
        src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
        alt="Product image"
      />

      <div className="w-full pt-5 pb-3 border-t-2 border-gray-300 dark:border-gray-600 flex flex-col gap-4">
        <div className="text-gray-800 dark:text-gray-100 flex justify-between items-center gap-2 font-bold">
          <span>مجموع قیمت:</span>
          <span>35,000,000 تومان</span>
        </div>

        <div className="text-gray-800 dark:text-gray-100 flex justify-between items-center gap-2 font-bold">
          <span>وضعیت ارسال:</span>
          <span>ارسال شده</span>
        </div>

        <div className="text-gray-800 dark:text-gray-100 flex justify-between items-center gap-2 font-bold">
          <span>شماره پیگیری:</span>
          <span>587796221556</span>
        </div>

        <div className="text-gray-800 dark:text-gray-100 flex justify-between items-center gap-2 font-bold">
          <span>مجموع قیمت:</span>
          <span>35,000,000 تومان</span>
        </div>

        <div className="text-gray-800 dark:text-gray-100 flex justify-between items-center gap-2 font-bold">
          <span>وضعیت ارسال:</span>
          <span>ارسال شده</span>
        </div>

        <div className="text-gray-800 dark:text-gray-100 flex justify-between items-center gap-2 font-bold">
          <span>شماره پیگیری:</span>
          <span>587796221556</span>
        </div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  )
}
