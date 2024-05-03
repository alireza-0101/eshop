import React from "react"
import DataTable from "../../../components/Admin/DataTable/DataTable"
import FileUploader from "../../../components/FileUploader/FileUploader"

export default function Users() {
  return (
    <div className="admin-wrap">
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200 dark:bg-gray-900 rounded-md">
        <input
          type="text"
          className="input w-full"
          placeholder="نام خود را وارد کنید"
        />

        <select className="input cursor-pointer">
          <option value="-1">انتخاب نقش کاربر</option>
          <option value="admin">مدیریت اصلی</option>
          <option value="developer">تلید کننده محتوا</option>
          <option value="user">کاربر عادی</option>
        </select>

        <input
          type="text"
          className="input w-full"
          placeholder="ایمیل خود را وارد کنید"
        />

        <input
          type="password"
          className="input w-full"
          placeholder="یک رمز برای خود انتخاب کنید"
        />

        <input
          type="tel"
          className="input w-full"
          placeholder="شماره تماس خود را وارد کنید"
        />

        <textarea
          rows={3}
          className="input w-full col-span-full"
          placeholder="آدرس دقیق خود را وارد کنید"
        ></textarea>

        <button className="gradient-button">افزودن کاربر</button>
      </div>

      <DataTable
        titles={[
          "نقش کاربر",
          "ایمیل کاربر",
          "رمز ورود",
          "شماره تماس",
          "عملیات",
        ]}
      >
        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
        </tr>
      </DataTable>
    </div>
  )
}
