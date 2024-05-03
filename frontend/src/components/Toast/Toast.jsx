import React from "react"
import { HiCheckCircle, HiXCircle } from "react-icons/hi"

export default function Toast({ isShow, text, isSuccess }) {
  return (
    <div
      className={`${isShow ? "right-8" : "-right-full"} ${
        isSuccess
          ? "bg-green-400 dark:bg-green-800"
          : "bg-red-400 dark:bg-red-800"
      } top-8 transition-all duration-500 fixed flex items-center justify-start gap-1 text-white max-w-full w-80 p-3 rounded-md shadow-xl cursor-pointer z-50 select-none`}
    >
      {isSuccess ? (
        <HiCheckCircle className="text-4xl" />
      ) : (
        <HiXCircle className="text-4xl" />
      )}

      <span className="flex-grow">{text}</span>
    </div>
  )
}
