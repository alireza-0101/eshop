import React, { useState } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import ProductCard from "../../components/ProductCard/ProductCard"
import { AiOutlineFilter } from "react-icons/ai"
import MobileNav from "../../components/MobileNav/MobileNav"
import Tag from "../../components/Tag/Tag"
import ClearAllTags from "../../components/Tag/ClearAllTags"
import FilterBar from "../../components/FilterBar/FilterBar"

export default function Shop() {
  const [isShowFilterBox, setIsShowFilterBox] = useState(false)
  const showFilterBoxToggler = () => setIsShowFilterBox((prev) => !prev)

  return (
    <>
      <Header />

      <FilterBar>
        <button
          onClick={showFilterBoxToggler}
          className="col-span-12 flex flex-grow w-full justify-start items-center gap-2 md:hidden bg-white dark:bg-gray-600 dark:text-gray-200 hover:opacity-90 transition-all duration-300 shadow-md py-3 px-5 cursor-pointer font-bold rounded-md"
        >
          <AiOutlineFilter className="text-lg" />
          <span>اعمال فیلتر</span>
        </button>
      </FilterBar>

      <div className="w-full py-3 px-5 gap-3 grid grid-cols-12">
        <div
          className={`${
            isShowFilterBox ? "flex" : "hidden"
          } md:flex h-auto transition-all duration-500 flex overflow-hidden rounded-md col-span-12 md:col-span-5 xl:col-span-3 px-5 flex-col gap-5 sm:static top-0`}
        >
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-md px-3 py-5  flex-col gap-3">
            <span className="w-full font-bold text-lg dark:text-white">
              انتخاب برند
            </span>
            <ul className="w-full p-3 max-h-56 font-bold text-sm flex flex-col gap-3 overflow-y-auto overflow-x-hidden">
              <li className="flex justify-start items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
                <input type="checkbox" id="xia" />
                <label htmlFor="xia">شیائومی</label>
              </li>

              <li className="flex justify-start items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
                <input type="checkbox" id="xia" />
                <label htmlFor="xia">شیائومی</label>
              </li>

              <li className="flex justify-start items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
                <input type="checkbox" id="xia" />
                <label htmlFor="xia">شیائومی</label>
              </li>

              <li className="flex justify-start items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
                <input type="checkbox" id="xia" />
                <label htmlFor="xia">شیائومی</label>
              </li>

              <li className="flex justify-start items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
                <input type="checkbox" id="xia" />
                <label htmlFor="xia">شیائومی</label>
              </li>

              <li className="flex justify-start items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
                <input type="checkbox" id="xia" />
                <label htmlFor="xia">شیائومی</label>
              </li>
            </ul>
          </div>

          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-md px-3 py-5 flex flex-col gap-3">
            <span className="w-full font-bold text-lg dark:text-white">
              نمایش محصول
            </span>
            <ul className="w-full p-3 max-h-56 font-bold text-sm flex flex-col gap-3 overflow-y-auto overflow-x-hidden">
              <li className="flex justify-start items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
                <input type="checkbox" id="xia" />
                <label htmlFor="xia">فقط محصولات موجود</label>
              </li>

              <li className="flex justify-start items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
                <input type="checkbox" id="xia" />
                <label htmlFor="xia">فقط محصولات با تخفیف</label>
              </li>
            </ul>
          </div>

          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-md px-3 py-5 flex flex-col gap-3">
            <span className="w-full font-bold text-lg dark:text-white">
              قیمت محصول
            </span>

            <div className="w-full p-3 max-h-56 font-bold text-sm flex flex-col gap-3 overflow-y-auto overflow-x-hidden">
              <div className="flex justify-start items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
                از قیمت{" "}
                <input
                  type="text"
                  value={"56,000,000"}
                  className="font-bold w-24 text-center bg-gray-100 dark:bg-gray-700 py-1 rounded-md"
                />{" "}
                تومان
              </div>

              <div className="flex justify-start items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
                تا قیمت{" "}
                <input
                  type="text"
                  value={"56,000,000"}
                  className="font-bold w-24 text-center bg-gray-100 dark:bg-gray-700 py-1 rounded-md"
                />{" "}
                تومان
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded-md col-span-12 md:col-span-7 xl:col-span-9 p-5 grid gap-x-10 gap-y-3 px-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-items-center">
          <div className="col-span-full w-full p-5 border-y-2 transition-all duration-300 rounded-md flex justify-start items-center font-bold cursor-pointer gap-5 flex-wrap">
            <ClearAllTags />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <button className="col-span-full w-full p-5 bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-gray-50 hover:bg-gray-300 transition-all duration-300 shadow-lg rounded-md flex justify-center items-center font-bold cursor-pointer">
            بارگیری بیشتر...
          </button>
        </div>
      </div>

      <Footer />
      <MobileNav />
    </>
  )
}
