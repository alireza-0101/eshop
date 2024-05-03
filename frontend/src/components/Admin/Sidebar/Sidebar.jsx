import React from "react"
import { RxDashboard } from "react-icons/rx"
import { AiOutlineSetting, AiOutlineUsergroupAdd } from "react-icons/ai"
import { MdAddShoppingCart, MdCardGiftcard, MdCategory, MdOutlineCrisisAlert, MdOutlineSlideshow, MdOutlineSupportAgent, MdOutlineVerifiedUser, MdPercent } from "react-icons/md"
import AdminInfo from "../AdminInfo/AdminInfo"
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="w-full py-3 bg-white dark:bg-gray-700 border-t-2 border-gray-300 dark:border-gray-500 h-full">
      <AdminInfo />

      <ul className="w-full pt-5 font-bold flex flex-col gap-3">
        {/* border-purple-700 border-r-8 bg-gray-100 dark:bg-gray-600 */}
        <li className="pr-5 hover:bg-gray-100 hover:dark:bg-gray-600 dark:text-gray-100 hover:pr-8 transition-all duration-300 cursor-pointer flex justify-start items-center gap-2">
          <NavLink to="" className="flex w-full h-full justify-start items-center gap-2 p-3">
            <RxDashboard />
            <span>صفحه اصلی</span>
          </NavLink>
        </li>

        <li className="pr-5 hover:bg-gray-100 hover:dark:bg-gray-600 dark:text-gray-100 hover:pr-8 transition-all duration-300 cursor-pointer flex justify-start items-center gap-2">
          <NavLink to="products" className="flex w-full h-full justify-start items-center gap-2 p-3">
            <MdAddShoppingCart />
            <span>محصولات</span>
          </NavLink>
        </li>

        <li className="pr-5 hover:bg-gray-100 hover:dark:bg-gray-600 dark:text-gray-100 hover:pr-8 transition-all duration-300 cursor-pointer flex justify-start items-center gap-2">
          <NavLink to="orders" className="flex w-full h-full justify-start items-center gap-2 p-3">
            <MdCardGiftcard />
            <span>سفارشات</span>
          </NavLink>
        </li>

        <li className="pr-5 hover:bg-gray-100 hover:dark:bg-gray-600 dark:text-gray-100 hover:pr-8 transition-all duration-300 cursor-pointer flex justify-start items-center gap-2">
          <NavLink to="offs" className="flex w-full h-full justify-start items-center gap-2 p-3">
            <MdPercent />
            <span>تخفیفات</span>
          </NavLink>
        </li>

        <li className="pr-5 hover:bg-gray-100 hover:dark:bg-gray-600 dark:text-gray-100 hover:pr-8 transition-all duration-300 cursor-pointer flex justify-start items-center gap-2">
          <NavLink to="categories" className="flex w-full h-full justify-start items-center gap-2 p-3">
            <MdCategory />
            <span>دسته بندی ها</span>
          </NavLink>
        </li>

        <li className="pr-5 hover:bg-gray-100 hover:dark:bg-gray-600 dark:text-gray-100 hover:pr-8 transition-all duration-300 cursor-pointer flex justify-start items-center gap-2">
          <NavLink to="support" className="flex w-full h-full justify-start items-center gap-2 p-3">
            <MdOutlineSupportAgent />
            <span>پشتیبانی</span>
          </NavLink>
        </li>

        <li className="pr-5 hover:bg-gray-100 hover:dark:bg-gray-600 dark:text-gray-100 hover:pr-8 transition-all duration-300 cursor-pointer flex justify-start items-center gap-2">
          <NavLink to="slider" className="flex w-full h-full justify-start items-center gap-2 p-3">
            <MdOutlineSlideshow />
            <span>اسلایدر</span>
          </NavLink>
        </li>

        <li className="pr-5 hover:bg-gray-100 hover:dark:bg-gray-600 dark:text-gray-100 hover:pr-8 transition-all duration-300 cursor-pointer flex justify-start items-center gap-2">
          <NavLink to="header-alert" className="flex w-full h-full justify-start items-center gap-2 p-3">
            <MdOutlineCrisisAlert />
            <span>پیغام هدر</span>
          </NavLink>
        </li>

        <li className="pr-5 hover:bg-gray-100 hover:dark:bg-gray-600 dark:text-gray-100 hover:pr-8 transition-all duration-300 cursor-pointer flex justify-start items-center gap-2">
          <NavLink to="users" className="flex w-full h-full justify-start items-center gap-2 p-3">
            <AiOutlineUsergroupAdd />
            <span>کاربران</span>
          </NavLink>
        </li>

        <li className="pr-5 hover:bg-gray-100 hover:dark:bg-gray-600 dark:text-gray-100 hover:pr-8 transition-all duration-300 cursor-pointer flex justify-start items-center gap-2">
          <NavLink to="settings" className="flex w-full h-full justify-start items-center gap-2 p-3">
            <AiOutlineSetting />
            <span>تنظیمات</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
