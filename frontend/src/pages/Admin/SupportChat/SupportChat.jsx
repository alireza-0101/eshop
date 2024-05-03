import React from "react"
import Chat from "../../../components/Chat/Chat"

export default function SupportChat() {
  return (
    <div className="admin-wrap">
      <Chat />
      <button className="flex justify-center items-center gap-2 transition-all duration-300 p-3 rounded-md cursor-pointer font-bold text-white hover:opacity-80 bg-gradient-to-r from-red-500 from-10% to-red-700 dark:from-red-700 dark:to-red-950 via-30% to-90% col-span-full w-full">مسدود سازی مخاطب</button>
    </div>
  )
}
