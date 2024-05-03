import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import MobileNav from "../../components/MobileNav/MobileNav"
import CategoryCard from "../../components/CategoryCard/CategoryCard"

export default function Categories() {
  return (
    <>
      <Header />

      <div className="w-full flex flex-col justify-start items-center sm:items-start p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-5 mr-4">
          تکنولوژی و بهره برداری فردی
        </h2>
        <div className="rounded-md w-full bg-gray-50 dark:bg-gray-700 p-5 h-full overflow-auto flex flex-wrap justify-evenly gap-5">
          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-5 mr-4">
          تکنولوژی و بهره برداری فردی
        </h2>
        <div className="rounded-md w-full bg-gray-50 dark:bg-gray-700 p-5 h-full overflow-auto flex flex-wrap justify-evenly gap-5">
          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-5 mr-4">
          تکنولوژی و بهره برداری فردی
        </h2>
        <div className="rounded-md w-full bg-gray-50 dark:bg-gray-700 p-5 h-full overflow-auto flex flex-wrap justify-evenly gap-5">
          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />

          <CategoryCard />
        </div>
      </div>

      <Footer />
      <MobileNav />
    </>
  )
}
