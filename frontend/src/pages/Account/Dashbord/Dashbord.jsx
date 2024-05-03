import React from "react"
import Widget from "../../../components/Widget/Widget"
import Chat from "../../../components/Chat/Chat"

export default function Dashbord() {
  return (
    <div className="bg-gray-100 w-full dark:bg-gray-700 rounded-md col-span-12 md:col-span-7 xl:col-span-9 grid gap-x-10 gap-y-3 sm:px-10 grid-cols-1 items-center justify-items-center">
      <div className="w-full shadow-xl bg-gray-200 dark:bg-gray-800 p-5 rounded-md grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </div>

      <Chat />
    </div>
  )
}
