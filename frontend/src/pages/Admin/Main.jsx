import React from "react"
import Topbar from "../../components/Admin/Topbar/Topbar"
import Sidebar from "../../components/Admin/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"

export default function Main() {
  return (
    <div className="w-full min-h-screen">
      <Topbar />

      <div className="grid grid-cols-5 w-full">
        <div className="col-span-5 md:col-span-1 min-h-screen">
          <Sidebar />
        </div>
        <div className="col-span-5 md:col-span-4 bg-gray-300 dark:bg-gray-800 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
