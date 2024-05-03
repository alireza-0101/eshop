import React from "react"
import ReactDOM from "react-dom"
import { useState } from "react"
import Toast from "../components/Toast/Toast"

export default function useToast() {
  const [isShow, setIsShow] = useState(false)
  const [text, setText] = useState("")
  const [isSuccess, setIsSuccess] = useState(true)

  const ToastElem = () =>
    ReactDOM.createPortal(
      <Toast isShow={isShow} text={text} isSuccess={isSuccess} />,
      document.getElementById("modal-and-toast-wrap")
    )

  const fireToast = (text, isSuccess) => {
    setIsShow(true)
    setText(text)
    setIsSuccess(isSuccess)

    setTimeout(() => {
      setIsShow(false)
      setText("")
      setIsSuccess(true)
    }, 3000)
  }

  return [ToastElem, fireToast]
}
