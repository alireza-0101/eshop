import React, { useEffect, useRef } from "react"
import AdminMessage from "./AdminMessage"
import UserMessage from "./UserMessage"
import { BiSend } from "react-icons/bi"

export default function Chat() {
  const chatParent = useRef()

  useEffect(() => {
    chatParent.current.scrollTo(0, chatParent.current.scrollHeight)
  }, [])

  return (
    <div className="w-full m-auto bg-gray-200 dark:bg-gray-800 rounded-md flex flex-col">
      <div
        ref={chatParent}
        className="w-full bg-gray-200 h-96 overflow-y-auto overflow-x-hidden dark:bg-gray-900 p-5 flex flex-col gap-5 rounded-md"
      >
        <AdminMessage />
        <UserMessage />
        <AdminMessage />
        <UserMessage />
        <AdminMessage />
        <UserMessage />
        <AdminMessage />
        <UserMessage />
        <AdminMessage />
        <UserMessage />
        <AdminMessage />
        <UserMessage />
        <AdminMessage />
        <UserMessage />
        <AdminMessage />
        <UserMessage />

        {/* <span className="w-full flex justify-center items-center m-auto text-lg font-bold opacity-50 dark:text-white">
          هنوز پیامی وجود ندارد
        </span> */}
      </div>

      <form className="w-full flex justify-center items-center relative p-2">
        <input
          type="text"
          className="input w-full pl-10"
          placeholder="ارسال پیام به پشتیبانی..."
          rows={1}
        />
        <BiSend className="rotate-180 absolute cursor-pointer text-xl left-6 text-green-600" />
      </form>
    </div>
  )
}
