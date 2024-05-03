import React, { useState } from "react"
import {
  AiOutlineCoffee,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { BiHomeSmile, BiPhoneCall, BiSun } from "react-icons/bi"
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Navbar({ col }) {
  const [isLastAddedDropdownOpen, setIsLastAddedDropdownOpen] = useState(false)
  const [isCallUsDropdownOpen, setIsCallUsDropdownOpen] = useState(false)

  const callUsDropdownHandler = (ev) => {
    ev.preventDefault()
    setIsCallUsDropdownOpen((prev) => !prev)
  }

  const lastAddedDropdownHandler = (ev) => {
    ev.preventDefault()
    setIsLastAddedDropdownOpen((prev) => !prev)
  }

  return (
    <ul
      className={`list-none flex gap-8 font-bold z-50 ${
        col ? "flex-col" : "flex-row"
      }`}
    >
      <li>
        <Link
          to="/"
          className={`h-full w-full flex items-center text-gray-700 dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-500 transition duration-300 ${
            col ? "justify-right" : "justify-center"
          }`}
        >
          <BiHomeSmile className="text-xl mb-1 ml-1" />
          <span>صفحه اصلی</span>
        </Link>
      </li>

      {col && (
        <>
          <li>
            <Link
              to="/account"
              className={`h-full w-full flex items-center text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 ${
                col ? "justify-right" : "justify-center"
              }`}
            >
              <AiOutlineUser className="text-xl mb-1 ml-1" />
              <span>ناحیه کاربری</span>
            </Link>
          </li>

          <li>
            <Link
              to="/account/saved-products"
              className={`h-full w-full flex items-center text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 ${
                col ? "justify-right" : "justify-center"
              }`}
            >
              <AiOutlineHeart className="text-xl mb-1 ml-1" />
              <span>لیست ذخیره</span>
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className={`h-full w-full flex items-center text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 ${
                col ? "justify-right" : "justify-center"
              }`}
            >
              <AiOutlineShoppingCart className="text-xl mb-1 ml-1" />
              <span>سبد خرید</span>
            </Link>
          </li>
        </>
      )}

      <li className="relative">
        <Link
          onClick={lastAddedDropdownHandler}
          to=""
          className={`h-full w-full flex items-center text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 ${
            col ? "justify-right" : "justify-center"
          }`}
        >
          <IoMdCheckmarkCircleOutline className="text-xl mb-1 ml-1" />
          <span>جدیدترین ها</span>
          <MdOutlineKeyboardArrowDown className="text-xl mb-1 text-gray-400 mr-1" />
        </Link>
        <ul
          className={`${!col && "absolute"} ${
            isLastAddedDropdownOpen ? "max-h-auto py-3" : "max-h-0 py-0"
          } w-52  top-10 right-2 list-none flex flex-col text-sm bg-gray-50 gap-3 rounded-md overflow-hidden transition-all dark:bg-gray-700 duration-300`}
        >
          <li>
            <Link
              to="/shop/new-products/laptop-and-mobile"
              className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 block"
            >
              جدید های لپتاپ و موبایل
            </Link>
          </li>
          <li>
            <Link
              to="/shop/new-products/tv"
              className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 block"
            >
              جدید های تلویزیون
            </Link>
          </li>
          <li>
            <Link
              to="/shop/new-products/clothes"
              className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 block"
            >
              جدید های لباس
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link
          to="/shop/offs"
          className={`h-full w-full flex items-center text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 ${
            col ? "justify-right" : "justify-center"
          }`}
        >
          <AiOutlineCoffee className="text-xl mb-1 ml-1" />
          <span>تخفیفات داغ</span>
        </Link>
      </li>

      <li>
        <Link
          to="/about-us"
          className={`h-full w-full flex items-center text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 ${
            col ? "justify-right" : "justify-center"
          }`}
        >
          <HiOutlineChatBubbleBottomCenterText className="text-xl mb-1 ml-1" />
          <span>درباره ما</span>
        </Link>
      </li>

      <li className="relative">
        <Link
          onClick={callUsDropdownHandler}
          to=""
          className={`h-full w-full flex items-center text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 ${
            col ? "justify-right" : "justify-center"
          }`}
        >
          <BiPhoneCall className="text-xl mb-1 ml-1" />
          <span>ارتباط باما</span>
          <MdOutlineKeyboardArrowDown className="text-xl mb-1 text-gray-400 mr-1" />
        </Link>
        <ul
          className={`${!col && "absolute"} ${
            isCallUsDropdownOpen ? "max-h-auto py-3" : "max-h-0 py-0"
          } w-52  top-10 right-2 list-none flex flex-col text-sm bg-gray-50 dark:bg-gray-700 gap-3 rounded-md overflow-hidden transition-all duration-300`}
        >
          <li>
            <Link
              to="/account/support"
              className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 block"
            >
              ارسال تیکت پشتیبانی
            </Link>
          </li>
          <li>
            <Link
              to="tel:09000000000"
              className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 block"
            >
              تماس با بخش پشتیبانی
            </Link>
          </li>
          <li>
            <Link
              to="tel:09000000000"
              className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-400 transition duration-300 block"
            >
              تماس با بخش محصولات
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  )
}
