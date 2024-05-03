import React from "react"
import Widget from "../../../components/Widget/Widget"
import Accordion from "../../../components/Accordion/Accordion"
import { BiCheckCircle } from "react-icons/bi"

export default function Settings() {
  return (
    <div className="bg-gray-100 w-full dark:bg-gray-700 rounded-md col-span-12 md:col-span-7 xl:col-span-9 grid gap-x-10 gap-y-3 sm:px-10 grid-cols-1 items-center justify-items-center gap-8">
      <div className="w-full shadow-xl bg-gray-200 dark:bg-gray-800 p-5 rounded-md grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </div>

      <div className="flex flex-col gap-5 w-full mt-2 p-2 pb-5">
        <Accordion title="تنظیمات کاربری شما">
          <div className="flex w-full flex-col gap-5">
            <input
              type="text"
              placeholder="نام کاربری شما..."
              className="input w-full"
            />

            <input
              type="email"
              placeholder="آدرس ایمیل..."
              className="input w-full"
            />
          </div>
        </Accordion>

        <Accordion title="تنظیمات رمز عبور">
          <div className="flex w-full flex-col gap-5">
            <input
              type="password"
              placeholder="رمز عبور قدیم..."
              className="input w-full"
            />

            <input
              type="password"
              placeholder="رمز عبور جدید..."
              className="input w-full"
            />

            <input
              type="password"
              placeholder="تایید رمز عبور جدید..."
              className="input w-full"
            />
          </div>
        </Accordion>

        <Accordion title="تنظیمات آدرس ارسال">
          <textarea
            rows={5}
            className="input w-full max-h-96"
            placeholder="آدرس دقیق خود را وارد کنید..."
          ></textarea>
        </Accordion>

        <button type="submit" className="gradient-button">
          <BiCheckCircle className="text-lg" />
          ذخیره اطلاعات
        </button>
      </div>
    </div>
  )
}
