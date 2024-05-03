import React from "react"
import Accordion from "../../../components/Accordion/Accordion"

export default function Settings() {
  return (
    <div className="admin-wrap">
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200 dark:bg-gray-900 rounded-md">
          <div className="flex w-full flex-col gap-5">
            <input
              type="text"
              placeholder="نام کاربری شما"
              className="input w-full"
            />

            <input
              type="email"
              placeholder="شماره تماس"
              className="input w-full"
            />

            <input
              type="email"
              placeholder="آدرس ایمیل"
              className="input w-full"
            />
          </div>

          <div className="flex w-full flex-col gap-5">
            <input
              type="password"
              placeholder="رمز عبور قدیم"
              className="input w-full"
            />

            <input
              type="password"
              placeholder="رمز عبور جدید"
              className="input w-full"
            />

            <input
              type="password"
              placeholder="تایید رمز عبور جدید"
              className="input w-full"
            />
          </div>

          <textarea
            rows={5}
            className="input w-full col-span-full"
            placeholder="آدرس دقیق خود را وارد کنید"
          ></textarea>

        <button className="gradient-button">ویرایش اطلاعات</button>

      </div>
    </div>
  )
}
