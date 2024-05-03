import React from "react"

export default function HeaderAlert() {
  return (
    <div className="admin-wrap">
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200 dark:bg-gray-900 rounded-md">
        <input
          placeholder="لینک پیغام هدر"
          type="url"
          className="input w-full col-span-full"
        />
        <textarea
          placeholder="متن پیغام هدر"
          rows={5}
          type="text"
          className="input w-full col-span-full"
        ></textarea>

        <button className="gradient-button">بروزرسانی پیغام هدر</button>
      </div>
    </div>
  )
}
