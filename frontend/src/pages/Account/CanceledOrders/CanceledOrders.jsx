import React from "react"
import ProductGroup from "../../../components/ProductGroup/ProductGroup"

export default function CanceledOrders() {
  return (
    <div className="bg-gray-100 w-full dark:bg-gray-700 rounded-md col-span-12 md:col-span-7 xl:col-span-9 grid gap-x-10 gap-y-3 sm:px-10 grid-cols-1 items-center justify-items-center">
      <ProductGroup />
      <ProductGroup />
      <ProductGroup />
      <ProductGroup />
    </div>
  )
}
