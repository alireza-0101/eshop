import React from "react"
import DataTable from "../../../components/Admin/DataTable/DataTable"
import FileUploader from "../../../components/FileUploader/FileUploader"

export default function Products() {
  return (
    <div className="admin-wrap">
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200 dark:bg-gray-900 rounded-md">
        <select className="input cursor-pointer">
          <option value="-1">انتخاب دسته بندی محصول</option>
          <option value="1">دسته بندی شماره 1</option>
          <option value="2">دسته بندی شماره 2</option>
          <option value="3">دسته بندی شماره 3</option>
          <option value="4">دسته بندی شماره 4</option>
          <option value="5">دسته بندی شماره 5</option>
        </select>

        <input
          placeholder="نام کامل محصول"
          type="text"
          className="input w-full"
        />

        <input
          placeholder="مدل دقیق محصول"
          type="text"
          className="input w-full"
        />

        <input placeholder="شناسه محصول" type="text" className="input w-full" />

        <input placeholder="قیمت محصول" type="text" className="input w-full" />

        <input
          placeholder="درصد تخفیف محصول"
          type="number"
          className="input w-full"
        />

        <input
          placeholder="تعداد موجودی محصول"
          type="number"
          className="input w-full"
        />

        <textarea
          placeholder="توضیح کوتاه درباره محصول"
          rows={5}
          type="text"
          className="input w-full col-span-full"
        ></textarea>

        <FileUploader accepted={["png", "jpg"]} />

        <button className="gradient-button">افزودن محصول</button>
      </div>

      <DataTable
        titles={["نام کامل", "مدل", "شناسه", "قیمت", "تخفیف", "موجودی"]}
      >
        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
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
          <td className="p-4">زیر مجموعه</td>
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
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
          <td className="p-4">زیر مجموعه</td>
        </tr>
      </DataTable>
    </div>
  )
}
