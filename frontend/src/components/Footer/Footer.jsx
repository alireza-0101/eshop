import React from "react"
import { MdMessage } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="mb-16 sm:mb-0 mt-10 w-full flex flex-col bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-5">
      <div className="w-fulll gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col gap-3 justify-centers items-center">
          <h3 className="font-bold text-xl">لینک مشاهده سریع</h3>
          <ul className="sm:pr-12 flex flex-col gap-3 font-medium">
            <li>
              <Link to="">رفتن به حساب</Link>
            </li>
            <li>
              <Link to="">پشتیبانی سریع</Link>
            </li>
            <li>
              <Link to="">تغاضای فروش محصول</Link>
            </li>
            <li>
              <Link to="">مشترک شدن در خبرنامه</Link>
            </li>
            <li>
              <Link to="">ایجاد حساب جدید</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 justify-centers items-center">
          <h3 className="font-bold text-xl">لینک مشاهده سریع</h3>
          <ul className="sm:pr-12 flex flex-col gap-3 font-medium">
            <li>
              <Link to="">محصولات تخفیفی</Link>
            </li>
            <li>
              <Link to="">محصولات پرفروش</Link>
            </li>
            <li>
              <Link to="">ساماندهی شده ها</Link>
            </li>
            <li>
              <Link to="">پر درخواست شده</Link>
            </li>
            <li>
              <Link to="">معروف ترین ها فروشگاه</Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-right flex-col gap-5">
          <h3 className="font-bold text-xl">لینک مشاهده سریع</h3>
          <p>
            اینجا میتونی ایمیلت رو برامون بزاری تا از آخرین تخفیفات فروشگاه با
            خبرت کنیم....
          </p>
          <div className="w-auto flex justify-center items-center rounded-xl overflow-hidden border border-gray-400 bg-white px-4 pl-0">
            <div className="flex-grow h-10 w-full text-gray-400 flex justify-around items-center gap-3">
              <MdMessage className="text-xl" />
              <input
                type="text"
                className="flex-grow h-full pt-1"
                placeholder="ایمیل برای مشترک شدن..."
              />
            </div>
            <button className="text-white text-sm font-bold bg-gray-500 hover:bg-gray-600 transition h-10 px-8">
              ارسال
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8">
          <img src="/images/etemad-1.png" className="w-24" alt="e-namad" />
          <img src="/images/etemad-2.svg" className="w-24" alt="e-namad" />
        </div>
      </div>

      <div className="w-full text-center sm:text-right py-5 mt-8 font-bold text-gray-800 dark:text-white px-3">
        تمامی حقوق برای این سایت و مدیریت محفوظ است و کپی برداری غیر قانونی است.
      </div>
    </div>
  )
}
