import React from "react"

export default function FilterBar({ children }) {
  return (
    <div className="w-full py-3 px-5 bg-gray-100 dark:bg-gray-700 rounded-sm flex flex-col md:flex-row gap-5 justify-evenly items-center mb-5">
      <input
        type="search"
        placeholder="محصول مورد نظر خود را جستجو کنید..."
        className="input flex-grow h-full w-full"
      />

      <select className="input w-full md:w-52">
        <option className="font-bold" value="-1">
          ترتیب پیشفرض
        </option>
        <option className="font-bold" value="-1">
          ترتیب پیشفرض
        </option>
        <option className="font-bold" value="-1">
          ترتیب پیشفرض
        </option>
        <option className="font-bold" value="-1">
          ترتیب پیشفرض
        </option>
        <option className="font-bold" value="-1">
          ترتیب پیشفرض
        </option>
        <option className="font-bold" value="-1">
          ترتیب پیشفرض
        </option>
      </select>

      {children}
    </div>
  )
}
