import React, { Component } from "react"
import OptionBox from "./OptionBox"

export class OptionsList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 mt-8">
        <OptionBox
          title="ارسال رایگان"
          text="برای بالای 300 هزار تومان"
          icon="free-send"
        />
        <OptionBox
          title="پشتیبانی آنلاین"
          text="پشتیبانی برای خرید محصول"
          icon="support"
        />
        <OptionBox
          title="بازگشت پرداختی"
          text="بازگشت پس از 7 روز خرید"
          icon="pay-back"
        />
        <OptionBox
          title="تخفیفات متنوع"
          text="چندین تخفیف روزانه و هفتگی"
          icon="some-off"
        />
      </div>
    )
  }
}

export default OptionsList
