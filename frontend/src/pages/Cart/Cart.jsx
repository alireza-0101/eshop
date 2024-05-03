import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import FilterBar from "../../components/FilterBar/FilterBar"
import RowProductCard from "../../components/ProductCard/RowProductCard"
import MobileNav from "../../components/MobileNav/MobileNav"
import { MdOutlineShoppingCartCheckout } from "react-icons/md"
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider"

export default function Cart() {
  return (
    <>
      <Header />

      <FilterBar />

      <div className="w-full py-1 sm:py-3 px-3 sm:px-5 gap-3 grid grid-cols-12">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-md col-span-12 md:col-span-7 xl:col-span-9 p-5 grid gap-x-10 gap-y-3 px-3 sm:px-10 grid-cols-1 items-center justify-items-center">
          <RowProductCard />
          <RowProductCard />
          <RowProductCard />
          <RowProductCard />
          <RowProductCard />
          <RowProductCard />
          <RowProductCard />
          <button className="col-span-full w-full p-5 bg-red-200 dark:bg-red-800 dark:hover:bg-red-900 dark:text-red-50 hover:bg-red-300 transition-all duration-300 shadow-lg rounded-md flex justify-center items-center font-bold cursor-pointer">
            حذف تمامی محصولات
          </button>
        </div>

        <div className="flex h-auto transition-all duration-500 overflow-hidden rounded-md col-span-12 md:col-span-5 xl:col-span-3 px-5 flex-col gap-5">
          <div className="w-full flex flex-col bg-gray-100 dark:bg-gray-700 rounded-md px-3 py-5 gap-3">
            <div className="flex justify-between items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
              <span>مجموع قیمت:</span>
              <span className="font-bold text-red-500 dark:text-red-400">
                35,000,000 تومان
              </span>
            </div>

            <div className="flex justify-between items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
              <span>قابل پرداخت:</span>
              <span className="font-bold text-red-500 dark:text-red-400">
                35,000,000 تومان
              </span>
            </div>

            <div className="flex justify-between items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
              <span>سود شما:</span>
              <span className="font-bold text-red-500 dark:text-red-400">
                35,000,000 تومان
              </span>
            </div>

            <div className="flex justify-between items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-50 transition-all duration-300 p-3 rounded-md cursor-pointer">
              <span className="font-bold text-sm">
                امکان بازگشت کالا تا{" "}
                <strong className="text-red-500 dark:text-red-400 px-1">
                  7 روز
                </strong>{" "}
                پس از خرید.
              </span>
            </div>

            <button className="gradient-button">
              <MdOutlineShoppingCartCheckout className="text-lg" />
              <span>پرداخت</span>
            </button>
          </div>

          <div className="w-full text-sm flex flex-col font-bold bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md px-3 py-5 gap-8">
            <p>
              هزینه این سفارش هنوز <mark className="dark:bg-yellow-200 px-1">پرداخت نشده‌</mark> و در صورت اتمام موجودی، کالاها
              از سبد حذف می‌شوند.
            </p>

            <p><mark className="dark:bg-yellow-200 px-1">چهل هزارتومان هزینه ارسال</mark> به سراسر ایران برای تمامی کاربران.</p>

            <p><mark className="dark:bg-yellow-200 px-1">ارسال رایگان</mark> برای خرید های بالای پانصد هزارتومان.</p>
          </div>
        </div>
      </div>

      <ProductsSlider />

      <Footer />
      <MobileNav />
    </>
  )
}
