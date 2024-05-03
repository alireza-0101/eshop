import React from "react"
import { IoCashOutline } from "react-icons/io5"
import { MdSupportAgent } from "react-icons/md"
import { RiPaypalLine, RiShipLine } from "react-icons/ri"

export default function OptionBox({ title, text, icon }) {
  return (
    <div className="hover:scale-x-110 transition-all duration-300 flex justify-right sm:justify-center gap-5 items-center p-4 bg-gray-5 select-none cursor-pointer">
      {icon === "free-send" && (
        <RiShipLine className="text-4xl text-blue-500" />
      )}
      {icon === "support" && (
        <MdSupportAgent className="text-4xl text-blue-500" />
      )}
      {icon === "pay-back" && (
        <IoCashOutline className="text-4xl text-blue-500" />
      )}
      {icon === "some-off" && (
        <RiPaypalLine className="text-4xl text-blue-500" />
      )}

      <div className="text-gray-500">
        <h3 className="font-bold text-blue-500">{title}</h3>
        <span>{text}</span>
      </div>
    </div>
  )
}
