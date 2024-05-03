import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import MobileNav from "../../components/MobileNav/MobileNav"
import { useState } from "react"
import { BiBookmark, BiLogOut, BiMenu, BiShoppingBag, BiSupport } from "react-icons/bi"
import { IoSettingsOutline } from "react-icons/io5"
import {
  MdOutlineCancel,
  MdOutlineDashboard,
  MdShoppingCartCheckout,
} from "react-icons/md"
import { Link, Outlet } from "react-router-dom"

export default function Account() {
  const [isShowListBtn, setIsShowListBtn] = useState(false)
  const showListBtnToggler = () => setIsShowListBtn((prev) => !prev)

  return (
    <>
      <Header />

      <div className="w-full px-5 pt-8 rounded-sm flex md:hidden flex-col md:flex-row gap-5 justify-evenly items-center mb-5">
        <button
          onClick={showListBtnToggler}
          className={`${
            isShowListBtn
              ? "bg-gray-50 dark:bg-gray-700"
              : "bg-white dark:bg-gray-600"
          } col-span-12 flex flex-grow w-full justify-start items-center gap-2 md:hidden dark:text-gray-200 hover:opacity-90 transition-all duration-300 shadow-md py-3 px-5 cursor-pointer font-bold rounded-md`}
        >
          <BiMenu className="text-lg" />
          <span>منوی راهبری</span>
        </button>
      </div>

      <div className="w-full py-3 px-5 gap-3 grid grid-cols-12">
        <div
          className={`${
            isShowListBtn ? "flex" : "hidden"
          } md:flex h-auto transition-all duration-500 flex overflow-hidden rounded-md col-span-12 md:col-span-5 xl:col-span-3 px-5 py-5 flex-col gap-5 sm:static top-0 bg-gray-100 dark:bg-gray-700`}
        >
          <ul className="w-full">
            <li className="w-full mb-3">
              <Link
                to="/account"
                className="p-3  rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-200 hover:opacity-80 transition-all duration-300 font-bold flex items-center justify-start gap-1"
              >
                <MdOutlineDashboard className="text-lg" />
                <span>پیش نمایش کلی</span>
              </Link>
            </li>

            <li className="w-full mb-3">
              <Link
                to="saved-products"
                className="p-3  rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-200 hover:opacity-80 transition-all duration-300 font-bold flex items-center justify-start gap-1"
              >
                <BiBookmark className="text-lg" />
                <span>محصولات ذخیره شده</span>
              </Link>
            </li>

            <li className="w-full mb-3">
              <Link
                to="current-orders"
                className="p-3  rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-200 hover:opacity-80 transition-all duration-300 font-bold flex items-center justify-start gap-1"
              >
                <BiShoppingBag className="text-lg" />
                <span>سفارش جاری</span>
              </Link>
            </li>

            <li className="w-full mb-3">
              <Link
                to="previous-orders"
                className="p-3  rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-200 hover:opacity-80 transition-all duration-300 font-bold flex items-center justify-start gap-1"
              >
                <MdShoppingCartCheckout className="text-lg" />
                <span>سفارشات گذشته</span>
              </Link>
            </li>

            <li className="w-full mb-3">
              <Link
                to="canceled-orders"
                className="p-3  rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-200 hover:opacity-80 transition-all duration-300 font-bold flex items-center justify-start gap-1"
              >
                <MdOutlineCancel className="text-lg" />
                <span>لغو شده</span>
              </Link>
            </li>

            <li className="w-full mb-3">
              <Link
                to="support"
                className="p-3  rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-200 hover:opacity-80 transition-all duration-300 font-bold flex items-center justify-start gap-1"
              >
                <BiSupport className="text-lg" />
                <span>پشتیبانی سایت</span>
              </Link>
            </li>

            <li className="w-full mb-3">
              <Link
                to="settings"
                className="p-3  rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-200 hover:opacity-80 transition-all duration-300 font-bold flex items-center justify-start gap-1"
              >
                <IoSettingsOutline className="text-lg" />
                <span>تنظیمات حساب</span>
              </Link>
            </li>

            <li className="w-full mb-3">
              <span className="p-3  rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-200 hover:opacity-80 transition-all duration-300 font-bold flex items-center justify-start gap-1 cursor-pointer">
                <BiLogOut className="text-lg" />
                <span>خروج از حساب</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded-md col-span-12 md:col-span-7 xl:col-span-9 p-5 flex justify-center items-start">
          <Outlet />
        </div>
      </div>

      <Footer />
      <MobileNav />
    </>
  )
}
