import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import MobileNav from "../../components/MobileNav/MobileNav"
import { BiLogInCircle } from "react-icons/bi"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <>
      <Header />

      <div className="py-10 flex items-center justify-center">
        <form className="p-3 flex text-center flex-col gap-4 max-w-full w-96 shadow-2xl py-10 px-5 bg-gray-50 dark:bg-gray-800">
          <h1 className="text-3xl mb-3 text-gray-400 font-extrabold">
            ورود به حساب
          </h1>

          <input
            type="text"
            className="input w-full"
            placeholder="ایمیل خود را وارد کنید..."
          />

          <input
            type="password"
            className="input w-full"
            placeholder="رمز خود را وارد کنید..."
          />

          <button type="submit" className="gradient-button">
            <BiLogInCircle className="text-lg" />
            ورود به حساب
          </button>

          <Link
            className="font-bold text-sm mt-5 hover:opacity-100 opacity-80 transition-all duration-300 text-gray-700 dark:text-gray-400"
            to="/register"
          >
            حسابی ندارید؟ ثبت نام
          </Link>
        </form>
      </div>

      <Footer />
      <MobileNav />
    </>
  )
}
