import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import MobileNav from "../../components/MobileNav/MobileNav"
import { Link } from "react-router-dom"
import { AiOutlineUnorderedList } from "react-icons/ai"

export default function SuccessPay() {
  return (
    <>
      <Header />

      <div className="py-10 flex items-center justify-center">
        <div className="w-full flex gap-5 justify-center items-center flex-col m-auto">
          <img
            src="/images/pay-success.svg"
            alt="Not Founded"
            className="w-96 max-w-screen-2xl mb-8"
          />
          <h1 className="text-gray-900 dark:text-gray-100 text-2xl md:text-3xl xl:text-4xl font-bold">
            پرداخت شما با موفقیت انجام شد :)
          </h1>
          <Link to="/account/current-orders" className="gradient-button text-sm">
            <AiOutlineUnorderedList className="text-lg" />
            <span>رفتن به سفارشات</span>
          </Link>
        </div>
      </div>

      <Footer />
      <MobileNav />
    </>
  )
}
