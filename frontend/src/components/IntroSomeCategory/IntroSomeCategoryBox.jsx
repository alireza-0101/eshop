import React from "react"
import { Link } from "react-router-dom"

export default function IntroSomeCategoryBox({ title, text, img }) {
  return (
    <Link
      to=""
      className="relative h-60 overflow-hidden flex flex-col justify-between gap-5 items-start p-8 bg-gray-100 dark:bg-gray-600 select-none cursor-pointer"
    >
      <img
        src={img}
        alt="Category intro box"
        className="w-full absolute top-0 left-0 hover:scale-105 transition-all duration-300"
      />

      <div className="text-gray-500 dark:text-gray-200 z-10">
        <span>{text}</span>
        <h3 className="font-extrabold dark:text-gray-50 text-2xl mt-1 text-gray-800">{title}</h3>
      </div>

      <div className="text-gray-500 dark:text-gray-200 z-10">
        <span>تخفیفات ویژه امسال</span>
        <h3 className="font-extrabold text-md mt-1 text-red-500 dark:text-red-400">
          از اینجا به راحتی مشاهده و خرید کن
        </h3>
      </div>
    </Link>
  )
}
