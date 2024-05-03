import React, { useEffect, useState } from "react"
import { IoSearch } from "react-icons/io5"
import { HiArrowLeft, HiMenuAlt1 } from "react-icons/hi"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai"
import Navbar from "../Navbar/Navbar"
import { BiMoon, BiSun } from "react-icons/bi"
import MobileMenu from "../MobileMenu/MobileMenu"
import TopHeader from "../TopHeader/TopHeader"
import { useContext } from "react"
import ThemeTogglerContext from "../../contexts/ThemeTogglerContext"
import { Link } from "react-router-dom"

export default function Header() {
  const [isAllProductDropdownOpen, setIsAllProductDropdownOpen] =
    useState(false)
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)

  const { theme, themeToggler } = useContext(ThemeTogglerContext)

  const allProductDropdownHandler = (ev) => {
    ev.preventDefault()
    setIsAllProductDropdownOpen((prev) => !prev)
  }

  const showMobileMenuHandler = () => setIsShowMobileMenu((prev) => !prev)

  return (
    <>
      <TopHeader />

      <div className="w-full flex flex-col px-4 md:px-6 pt-5 pb-2 gap-2">
        {/* Top Box Start */}
        <div className="w-full flex justify-between items-center p-0 md:p-4">
          {/* Mobile Cart Buttons */}
          <div className="flex xl:hidden justify-evenly gap-4 items-center">
            <Link
              to="/cart"
              className="w-42 h-42 p-3 bg-gray-100 dark:bg-gray-600 dark:text-white hover:bg-gray-200 transition duration-300 font-bold flex items-center rounded-3xl"
            >
              <AiOutlineShoppingCart className="text-xl" />
            </Link>
          </div>

          {/* Logo */}
          <Link to="/" className="w-36 h-full md:w-52 p-1">
            <img src="/images/logo.png" className="w-full" alt="Brand" />
          </Link>

          {/* Search Box */}
          <div className="w-auto hidden md:flex justify-center items-center rounded-xl overflow-hidden border border-gray-400 bg-white dark:bg-gray-500 px-4 pl-0">
            <div className="flex-grow h-10 w-52 md:w-96 text-gray-400 flex justify-around items-center gap-3">
              <IoSearch className="text-xl" />
              <input
                type="text"
                className="flex-grow h-full pt-1 bg-transparent text-gray-700 dark:text-white placeholder:text-gray-700 placeholder:dark:text-white"
                placeholder="عبارت یا نام برای جستجو..."
              />
            </div>
            <button className="text-white text-sm font-bold bg-gray-500 dark:bg-gray-700 hover:bg-gray-600 transition h-10 px-8">
              جستجو
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex xl:hidden justify-evenly gap-4 items-center">
            <button
              onClick={showMobileMenuHandler}
              className="w-42 h-42 p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:text-white transition duration-300 font-bold flex items-center rounded-3xl"
            >
              <HiMenuAlt1 className="text-xl" />
            </button>
          </div>

          {/* Other Buttons */}
          <div className="hidden xl:flex justify-evenly gap-4 items-center">
            <Link
              to="/account"
              className="w-42 bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:text-gray-200 transition duration-300 px-6 py-2 font-bold flex items-center gap-2 rounded-3xl"
            >
              <AiOutlineUser className="text-lg md:text-2xl" />
              <span className="text-sm hidden md:block">ناحیه کاربری</span>
            </Link>

            <Link
              to="/account/saved-products"
              className="w-42 bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:text-gray-200 transition duration-300 px-6 py-2 font-bold flex items-center gap-2 rounded-3xl"
            >
              <AiOutlineHeart className="text-lg md:text-2xl" />
              <span className="text-sm hidden md:block">لیست ذخیره</span>
            </Link>
          </div>
        </div>
        {/* Top Box End */}

        {/* Bottom Box Start */}
        <div className="hidden md:flex w-full justify-between gap-6 items-center p-4 flex-wrap">
          {/* Show Products List */}
          <Link to='/categories' className="relative z-50 px-5 py-2 h-12 hidden lg:flex justify-center items-center gap-1 bg-gray-100 text-gray-700 hover:bg-gray-50 dark:bg-gray-600 dark:text-gray-200 transition duration-300 font-bold text-sm rounded-md">
            <HiMenuAlt1 className="text-xl" />
            <span>مشاهده لیست محصولات</span>
          </Link>

          {/* Navbar */}
          <div className="h-full flex items-center p-1 flex-grow">
            <Navbar />
          </div>

          <div className="hidden xl:flex justify-evenly gap-4 items-center">
            <button
              onClick={themeToggler}
              className="w-42 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-200 transition duration-300 px-6 py-2 font-bold flex items-center gap-2 rounded-3xl"
            >
              {theme === "dark" ? (
                <BiSun className="text-lg md:text-2xl" />
              ) : (
                <BiMoon className="text-lg md:text-2xl" />
              )}
              <span className="text-sm hidden md:block">
                حالت {theme === "dark" ? "روشن" : "تیره"}
              </span>
            </button>

            <Link
              to="/cart"
              className="w-42 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:text-gray-200 transition duration-300 px-6 py-2 font-bold flex items-center gap-2 rounded-3xl"
            >
              <AiOutlineShoppingCart className="text-lg md:text-2xl" />
              <span className="text-sm hidden md:block">سبد خرید</span>
            </Link>
          </div>
        </div>
        {/* Bottom Box End */}

        {/* Mobile Menu List Start */}
        <MobileMenu isShow={isShowMobileMenu} />
        {/* Mobile Menu List End */}
      </div>
    </>
  )
}
