import React, { useState } from "react"
import DataTable from "../../../components/Admin/DataTable/DataTable"
import useToast from "../../../hook/useToast"
import useLoaderButton from "../../../hook/useLoaderButton"
import { useEffect } from "react"
import useDetailesModal from "../../../hook/useDetailesModal"

export default function Categories() {
  const [categorie, setCategorie] = useState([])
  const [categoryName, setCategoryName] = useState("")
  const [editCategoryName, setEditCategoryName] = useState("")
  const [ToastElem, fireToast] = useToast()
  const [startLoad, endLoad] = useLoaderButton()
  const [DetailesModalElem, fireDetailesModal] = useDetailesModal()

  const fetchCategories = () =>
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => setCategorie(data))

  useEffect(() => {
    fetchCategories()
  }, [])

  const createNewCategory = (ev) => {
    if (categoryName.trim()) {
      startLoad(ev)

      let newCategory = JSON.stringify({
        name: categoryName,
      })

      fetch("http://localhost:8000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newCategory,
      }).then((res) => {
        res.ok
          ? fireToast("با موفقیت افزوده شد.", true)
          : fireToast("مشکلی در افزودن هست!", false)

        setCategoryName("")
        fetchCategories()
        endLoad()
      })
    } else {
      fireToast("در ورودی مقداری وارد کنید!", false)
    }
  }

  const removeCategory = (id) => {
    fetch(`http://localhost:8000/categories/${id}`, {
      method: "DELETE",
    }).then((res) => {
      res.ok
        ? fireToast("با موفقیت حذف شد.", true)
        : fireToast("مشکلی در حذف هست!", false)

      fetchCategories()
    })
  }

  const editCategory = (id) => {
    fireDetailesModal()

    // let newCategory = JSON.stringify({
    //   name: categoryName,
    // })

    // fetch(`http://localhost:8000/categories/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: newCategory,
    // }).then((res) => {
    //   res.ok
    //     ? fireToast("با موفقیت حذف شد.", true)
    //     : fireToast("مشکلی در حذف هست!", false)

    //   fetchCategories()
    // })
  }

  return (
    <div className="admin-wrap">
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200 dark:bg-gray-900 rounded-md">
        <input
          placeholder="نام دسته بندی"
          type="text"
          className="input w-full col-span-full"
          value={categoryName}
          onChange={(ev) => setCategoryName(ev.target.value)}
        />

        <button onClick={createNewCategory} className="gradient-button">
          افزودن دسته بندی
        </button>
      </div>

      <DataTable titles={["شماره", "نام دسته بندی", "عملیات"]}>
        {categorie.map((category, index) => (
          <tr
            key={category.id}
            className="border-b-2 border-gray-400 dark:border-gray-600"
          >
            <td className="p-4">{index + 1}</td>
            <td className="p-4">{category.name}</td>
            <td className="p-4 flex justify-center items-center gap-5">
              <button
                className="delete-btn"
                onClick={() => removeCategory(category.id)}
              >
                حذف
              </button>
              <button
                onClick={() => editCategory(category.id)}
                className="edit-btn"
              >
                ویرایش
              </button>
            </td>
          </tr>
        ))}
      </DataTable>

      <ToastElem />
      <DetailesModalElem>
        <div className="w-full grid gap-4">
          <input
            placeholder="نام دسته بندی"
            type="text"
            className="input w-full"
            value={editCategoryName}
            onChange={(ev) => setEditCategoryName(ev.target.value)}
          />

          <button onClick={createNewCategory} className="gradient-button">
            ویرایش دسته بندی
          </button>
        </div>
      </DetailesModalElem>
    </div>
  )
}
