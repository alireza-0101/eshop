import React from "react"
import DataTable from "../../../components/Admin/DataTable/DataTable"

export default function Offs() {
  return (
    <div className="admin-wrap">
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200 dark:bg-gray-900 rounded-md">
        <select className="input cursor-pointer">
          <option value="-1">انتخاب محصول برای تخفیف</option>
          <option value="all">تمامی محصولات</option>
          <option value="1">محصول شماره 1</option>
          <option value="2">محصول شماره 2</option>
          <option value="3">محصول شماره 3</option>
          <option value="4">محصول شماره 4</option>
          <option value="5">محصول شماره 5</option>
        </select>

        <input
          placeholder="درصد تخفیف اعمالی"
          type="number"
          className="input w-full"
        />

        <input placeholder="کد تخفیف" type="text" className="input w-full" />

        <button className="gradient-button">افزودن تخفیف روی این محصول</button>
      </div>

      <DataTable titles={["تاریخ ثبت", "درصد تخفیف", "تخفیف", "کد تخفیف"]}>
        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
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
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
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
        </tr>
      </DataTable>
    </div>
  )
}
