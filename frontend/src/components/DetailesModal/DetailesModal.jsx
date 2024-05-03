import React, { useState } from "react"
import { IoClose } from "react-icons/io5"

export default function DetailesModal({ isShow, onHide, children }) {
  return (
    <div
      id="parent"
      onClick={(ev) => ev.target.id === "parent" && onHide()}
      className={`${
        isShow ? "left-0  top-0" : "-left-full -top-full"
      } flex w-screen h-screen bg-black bg-opacity-60 fixed z-50 justify-center items-center`}
    >
      <div
        onClick={(ev) => ev.preventDefault()}
        className={`${
          isShow ? "scale-100" : "scale-0"
        } transition-all duration-500 max-w-full w-96 h-auto max-h-96 overflow-auto rounded-md bg-gray-100 dark:bg-gray-800 relative px-5 py-8 flex justify-center items-center`}
      >
        <IoClose
          onClick={onHide}
          className="absolute top-2 left-2 cursor-pointer text-gray-700 dark:text-gray-300 text-xl"
        />

        {children}
      </div>
    </div>
  )
}
