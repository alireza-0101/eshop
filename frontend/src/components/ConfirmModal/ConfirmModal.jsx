import React from "react"

export default function ConfirmModal({ isShow, text, saveResult, onHide }) {
  return (
    <div
      id="parent"
      onClick={(ev) => ev.target.id === "parent" && onHide()}
      className={`${
        isShow ? "left-0  top-0" : "-left-full -top-full"
      } flex w-screen h-screen bg-black bg-opacity-60 fixed z-50 justify-center items-center`}
    >
      <div
        className={`${
          isShow ? "scale-100" : "scale-0"
        } transition-all duration-500 w-80 h-48 rounded-md bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 flex flex-col justify-evenly items-center`}
      >
        <h2 className="text-2xl font-bold">{text}</h2>

        <div className="w-full p-2 px-8 flex justify-evenly">
          <button
            onClick={() => {
              saveResult(true)
              onHide()
            }}
            className="w-20 p-2 rounded-md bg-green-500 text-white font-bold hover:opacity-80 transition-all duration-300"
          >
            بله
          </button>

          <button
            onClick={() => {
              saveResult(false)
              onHide()
            }}
            className="w-20 p-2 rounded-md bg-red-500 text-white font-bold hover:opacity-80 transition-all duration-300"
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  )
}
