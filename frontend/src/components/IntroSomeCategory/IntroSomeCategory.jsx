import React from "react"
import IntroSomeCategoryBox from "./IntroSomeCategoryBox"

export default function IntroSomeCategory() {
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 mt-8">
      <IntroSomeCategoryBox
        title="اسکوتر حرفه ای"
        text="دارای کیفیت عالی و بی نظیر"
        img="http://arshawebdesign.com/machic/wp-content/uploads/2021/11/6.webp"
      />

      <IntroSomeCategoryBox
        title="اسکوتر حرفه ای"
        text="دارای کیفیت عالی و بی نظیر"
        img="http://arshawebdesign.com/machic/wp-content/uploads/2021/11/banner-8-1.webp"
      />

      <IntroSomeCategoryBox
        title="اسکوتر حرفه ای"
        text="دارای کیفیت عالی و بی نظیر"
        img="http://arshawebdesign.com/machic/wp-content/uploads/2021/11/9.webp"
      />
    </div>
  )
}
