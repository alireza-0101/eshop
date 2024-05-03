import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import MobileNav from "../../components/MobileNav/MobileNav"
import { Link } from "react-router-dom"
import { BiShoppingBag } from "react-icons/bi"

export default function NotFound() {
  return (
    <>
      <Header />

      <div className="py-10 flex items-center justify-center">
        <div className="w-full flex gap-5 justify-center items-center flex-col m-auto">
          <img
            src="/images/404.svg"
            alt="Not Founded"
            className="w-96 max-w-screen-2xl mb-8"
          />
          <h1 className="text-gray-900 dark:text-gray-100 text-2xl md:text-3xl xl:text-4xl font-bold">
            محتوایی در این صفحه یافت نشد!
          </h1>
          <Link to="/shop" className="gradient-button text-sm">
          <BiShoppingBag className="text-lg" />
            <span>رفتن به فروشگاه</span>
          </Link>
        </div>
      </div>

      <Footer />
      <MobileNav />
    </>
  )
}
