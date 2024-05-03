import React, { useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"

export default function Tooltip({ color, text, children }) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`${
          isShow ? " opacity-70" : "opacity-0"
        } flex transition-all duration-500 justify-center items-center flex-col absolute bottom-full w-44 z-50`}
      >
        <div
          className={`flex justify-center items-center px-5 py-2 m-0 text-xs rounded-md cursor-pointer bg-${color}-500 hover:bg-${color}-600 text-gray-200`}
        >
          {text}
        </div>
        <AiFillCaretDown
          className={`p-0 m-0 text-${color}-500 hover:text-${color}-600 text-2xl`}
        />
      </div>

      <div
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setTimeout(() => setIsShow(false), 300)}
        className="p-0 m-0 block"
      >
        {children}
      </div>
    </div>
  )
}
