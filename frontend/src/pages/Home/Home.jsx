import React from "react"
import { useContext } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Landing from "../../components/Landing/Landing"
import OptionsList from "../../components/OptionsList/OptionsList"
import IntroSomeCategory from "../../components/IntroSomeCategory/IntroSomeCategory"
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider"
import BrandsSlider from "../../components/BrandsSlider/BrandsSlider"
import MobileNav from "../../components/MobileNav/MobileNav"
import ShowFastly from "../../components/ShowFastly/ShowFastly"
import ThemeTogglerContext from "../../contexts/ThemeTogglerContext"

export default function Home() {
  const { theme, themeToggler } = useContext(ThemeTogglerContext)

  return (
    <>
      <Header />
      <Landing />
      <OptionsList />
      <IntroSomeCategory />
      <ProductsSlider />
      <img
        src="https://www.technolife.ir/image/banner_SingleFullWidthBanner_ZqS9Wv_e7314dc9-6882-4815-8ca9-34e1b0db59aa.png"
        alt="Ads for header"
        className="w-full hover:opacity-80 cursor-pointer transition-all mt-8 duration-300"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-8">
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/04b9f74a3e7a9800e46edc7c6788afd97e0f271d_1674896265.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt="Ads for header"
          className="rounded-md hover:opacity-80 cursor-pointer transition-all duration-300"
        />

        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/662c05a7734c5e7f1ea7cc77a5e6c10f09bf25d4_1682316568.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt="Ads for header"
          className="rounded-md hover:opacity-80 cursor-pointer transition-all duration-300"
        />
      </div>

      <ProductsSlider />
      <ProductsSlider />
      <BrandsSlider />
      <ShowFastly />
      <Footer />
      <MobileNav />
    </>
  )
}
