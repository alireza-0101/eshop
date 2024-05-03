import React from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiBookmark, BiMoon, BiShoppingBag, BiSun } from "react-icons/bi"
import { useContext } from "react"
import ThemeTogglerContext from "../../contexts/ThemeTogglerContext"
import { Link } from "react-router-dom"

export default function MobileNav() {
  const { theme, themeToggler } = useContext(ThemeTogglerContext)

  return (
    <div className="bg-white dark:bg-gray-700 border-t border-gray-300 fixed bottom-0 left-0 py-3 w-full h-auto z-50 flex md:hidden justify-evenly items-center">
      <Link
        to="/account/saved-products"
        className="flex flex-col justify-center items-center gap-1 w-16 text-gray-700 dark:text-gray-100 py-2 rounded-md"
      >
        <BiBookmark className="text-xl" />
        <span className="text-xs font-bold">ذخیره ها</span>
      </Link>

      <Link
        to="/shop"
        className="flex flex-col justify-center items-center gap-1 w-16 text-gray-700 dark:text-gray-700 bg-yellow-300 p-2 rounded-md"
      >
        <BiShoppingBag className="text-xl" />
        <span className="text-xs font-bold">محصولات</span>
      </Link>

      <Link
        to="/cart"
        className="flex flex-col justify-center items-center gap-1 w-16 text-gray-700 dark:text-gray-100 py-2 rounded-md"
      >
        <AiOutlineShoppingCart className="text-xl" />
        <span className="text-xs font-bold">سبد خرید</span>
      </Link>

      <span
        onClick={themeToggler}
        className="flex cursor-pointer flex-col justify-center items-center gap-1 w-16 text-gray-700 dark:text-gray-100 py-2 rounded-md"
      >
        {theme === "dark" ? (
          <BiSun className="text-xl" />
        ) : (
          <BiMoon className="text-xl" />
        )}
        <span className="text-xs font-bold">
          {theme === "dark" ? "روشن" : "تیره"}
        </span>
      </span>
    </div>
  )
}
