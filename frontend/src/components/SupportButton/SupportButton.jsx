import React, { useState } from "react"
import { BiSupport } from "react-icons/bi"
import Chat from "../Chat/Chat"
import { useLocation } from "react-router-dom"

export default function SupportButton() {
  const [isShowSupports, setIsShowSupport] = useState(false)

  const showSupportsHandler = () => setIsShowSupport((prev) => !prev)

  const location = useLocation()

  return (
    !(
      location.pathname.includes("account") ||
      location.pathname.includes("admin")
    ) && (
      <div className="hidden sm:block z-50 fixed bottom-7 right-7">
        <div
          className={`absolute transition-all duration-500 text-xs bottom-12 right-10 w-96 overflow-hidden ${
            isShowSupports ? "py-5 max-h-auto" : "py-0 max-h-0"
          }`}
        >
          <Chat />
        </div>

        <div
          onClick={showSupportsHandler}
          className="bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 cursor-pointer text-white p-0 rounded-full w-14 h-14 flex justify-center items-center text-3xl"
        >
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
          <BiSupport />
        </div>
      </div>
    )
  )
}
