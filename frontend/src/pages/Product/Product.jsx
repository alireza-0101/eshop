import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import MobileNav from "../../components/MobileNav/MobileNav"
import { AiFillHeart } from "react-icons/ai"
import { MdOutlineShoppingBag } from "react-icons/md"
import {
  BiBookmarkAltPlus,
  BiBox,
  BiCartAdd,
  BiCheckCircle,
  BiHeart,
  BiTrain,
} from "react-icons/bi"
import { Link } from "react-router-dom"
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider"
import { IoWarning } from "react-icons/io5"
import CommentsSlider from "../../components/CommentsSlider/CommentsSlider"
import FileUploader from "../../components/FileUploader/FileUploader"
import ProductImagesGallery from "../../components/ProductImagesGallery/ProductImagesGallery"

export default function Product() {
  return (
    <>
      <Header />

      <div className="w-full py-3 px-5 gap-3 grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 p-5">
          <div className="w-full select-none">
            <ProductImagesGallery />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-8 p-5 flex flex-col items-start justify-center gap-4">
          <div className="text-gray-700 text-sm font-bold flex justify-start items-center gap-2">
            <Link
              to="/"
              className="text-sky-700 hover:text-sky-500 transition-all duration-300"
            >
              خانه
            </Link>
            <span className="select-none">/</span>
            <Link
              to="/shop"
              className="text-sky-700 hover:text-sky-500 transition-all duration-300"
            >
              محصولات
            </Link>
            <span className="select-none">/</span>
            <Link
              to=""
              className="text-sky-700 hover:text-sky-500 transition-all duration-300"
            >
              موبایل و لپتاپ
            </Link>
          </div>

          <h1 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-gray-100">
            آیفون 11 پرومکس 256 گیگابایت با ک 24 ماه گارانتی زرین کالا
          </h1>

          <div className="text-gray-700 dark:text-gray-400 text-sm font-bold flex justify-start items-center gap-3">
            <span>مدل: A2484</span>
            <span className="select-none">|</span>
            <span>شناسه محصول : SO4JK74</span>
          </div>

          <div className="flex gap-1 font-bold text-sm text-gray-700">
            <AiFillHeart className="text-lg text-red-500" />
            <span className="dark:text-gray-400">
              32 نفر این محصول رو پسندیدن
            </span>
          </div>

          <div className="flex justify-center items-center p-2 gap-1 font-bold text-sm text-gray-700 bg-green-100 dark:bg-green-900 dark:text-gray-100 rounded-md w-52">
            <MdOutlineShoppingBag className="text-lg mb-1" />
            <span>23 عدد موجود در انبار</span>
          </div>

          <div className="flex flex-col mt-4 gap-0">
            <span className="text-gray-800 text-xl dark:text-gray-400 font-bold line-through">
              30,000,000 تومان
            </span>
            <span className="text-red-500 font-bold text-2xl">
              30,000,000 تومان
            </span>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-md">
            <button className="flex justify-center items-center gap-2 flex-grow transition-all duration-300 p-3 rounded-md cursor-pointer font-bold text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-300">
              <BiHeart className="text-lg" />
              <span>پسندیدن محصول</span>
            </button>

            <button className="flex justify-center items-center gap-2 flex-grow transition-all duration-300 p-3 rounded-md cursor-pointer font-bold text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-300">
              <BiBookmarkAltPlus className="text-lg" />
              <span>افزودن به ذخیره ها</span>
            </button>

            <button className="flex justify-center items-center gap-2 flex-grow transition-all duration-300 p-3 rounded-md cursor-pointer font-bold text-white hover:opacity-80 bg-gradient-to-r from-red-500 dark:from-red-700 from-10% to-red-400 dark:to-red-500 via-30% to-90%">
              <BiCartAdd className="text-lg" />
              <span>افزودن به سبد خرید</span>
            </button>
          </div>

          <div className="text-gray-700 dark:text-gray-400 text-md font-bold flex flex-col lg:flex-row p-5 px-2 border border-t-0 border-gray-300 dark:border-gray-600 rounded-b-md justify-evenly w-full items-center gap-3">
            <span className="flex justify-center items-center gap-1">
              <BiBox className="text-lg mb-1" />
              ارسال از روز کاری بعد اتمام خرید
            </span>
            <span className="select-none">-</span>
            <span className="flex justify-center items-center gap-1">
              <BiTrain className="text-lg mb-1" />
              امکان ارسال به سراسر ایران
            </span>
            <span className="select-none">-</span>
            <span className="flex justify-center items-center gap-1">
              <BiCheckCircle className="text-lg mb-1" />
              ضمانت 7 روزه بازگشت کالا
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-10 py-3 text-xs sm:text-base text-gray-700 dark:text-gray-300 leading-7">
        {/* CK Editor HTML Elements */}
        <p>
          پایه نگهدارنده کلومن پلاس مدل K-HD029 هولدری زیبا با بدنه ای بسیار
          محکم و مقاوم است. بدنه ی این هولدر از پلاستیک با کیفیت ساخته شده
          است.این پایه دارای دو بازویی است و که گوشی موبایل را نگه میدارد.همچنین
          دارای پایه استند در قسمت پایین گوشی می باشد.هنگام قراردادن گوشی روی
          پایه این بازوها به خوبی فیکس شده و کاملا ایمن گوشی را نگه میدارد.
        </p>
      </div>

      <div className="w-full px-10 py-3 grid grid-cols-2 gap-3">
        <textarea
          placeholder="متن کامنت را وارد کنید..."
          className="input col-span-2"
          rows="4"
        ></textarea>

        <FileUploader accepted={["png", "jpg"]} />

        <button className="col-span-2 bg-blue-500 dark:bg-blue-900 hover:opacity-80 transition-all duration-300 text-gray-50 px-3 py-2 rounded-full font-bold">
          ارسال کامنت
        </button>

        {/* when the user isn't login! */}

        {/* <span className="col-span-2 p-5 bg-red-400 dark:bg-red-800 rounded-md font-bold text-gray-50 flex items-center justify-start gap-1">
          <IoWarning className="text-xl" />
          برای ثبت کامنت وارد حساب کاربری خود شوید و یا ثبت نام کنید.
        </span> */}
      </div>

      <CommentsSlider />

      <ProductsSlider />
      <ProductsSlider />

      <Footer />
      <MobileNav />
    </>
  )
}
