import React, { Component } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { AiFillHeart } from "react-icons/ai"
import { MdGridView, MdOutlineViewDay } from "react-icons/md"
import RowProductCard from "../ProductCard/RowProductCard"
import ShowFastlyCard from "./ShowFastlyCard"

export default class ShowFastly extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mt-8 px-5">
        <div className="text-gray-500 flex justify-start gap-2 mb-5 px-3">
          <h3 className="font-bold text-xl text-yellow-500">بیشترین مورد علاقه</h3>
          <span>سریع ببین و بپسند و خرید کن!</span>
        </div>

        <div
          className="grid grid-cols-12 w-full gap-2"
        >
          <div className="rounded-md bg-gray-50 dark:bg-gray-700 col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center">
            <ProductCard />
          </div>
          <div style={{ height: "540px" }} className="rounded-md bg-gray-50 dark:bg-gray-700 p-5 h-full overflow-auto col-span-12 md:col-span-6 lg:col-span-9 flex flex-wrap justify-evenly gap-5">
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
            <ShowFastlyCard />
          </div>
        </div>
      </div>
    )
  }
}
