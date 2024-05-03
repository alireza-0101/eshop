import React from "react"
import FileUploader from "../../../components/FileUploader/FileUploader"
import DataTable from "../../../components/Admin/DataTable/DataTable"

export default function Slider() {
  return (
    <div className="admin-wrap">
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200 dark:bg-gray-900 rounded-md">
        <input
          placeholder="عنوان اسلاید"
          type="text"
          className="input w-full"
        />

        <input
          placeholder="لینک راهبری اسلاید"
          type="url"
          className="input w-full"
        />

        <FileUploader accepted={["png", "jpg"]} />

        <button className="gradient-button">افزودن اسلاید</button>
      </div>

      <DataTable
        titles={["عنوان اسلاید", "لینک راهبری", "عملیات"]}
      >
        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
        </tr>

        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
          <td className="p-4">زیر مجموعه</td>
        </tr>
      </DataTable>
    </div>
  )
}
