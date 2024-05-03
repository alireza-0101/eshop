import React from "react"
import AdminInfo from "../../../components/Admin/AdminInfo/AdminInfo"
import DataTable from "../../../components/Admin/DataTable/DataTable"
import { Link } from "react-router-dom"

export default function Support() {
  return (
    <div className="admin-wrap">
      <DataTable
        titles={["نام کاربر", "تعداد سفارشات", "زمان ثبت نام", "عملیات"]}
      >
        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">
            <Link to="user-id" className="gradient-button">
              ورود به صفحه چت
            </Link>
          </td>
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">
            <Link to="user-id" className="gradient-button">
              ورود به صفحه چت
            </Link>
          </td>
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">
            <Link to="user-id" className="gradient-button">
              ورود به صفحه چت
            </Link>
          </td>
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">
            <Link to="user-id" className="gradient-button">
              ورود به صفحه چت
            </Link>
          </td>
        </tr>
      </DataTable>
    </div>
  )
}
