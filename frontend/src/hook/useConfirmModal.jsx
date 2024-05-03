import React from "react"
import ReactDOM from "react-dom"
import { useState } from "react"
import ConfirmModal from "../components/ConfirmModal/ConfirmModal"

export default function useConfirmModal() {
  const [isShow, setIsShow] = useState(false)
  const [text, setText] = useState("")
  const [result, setResult] = useState(null)

  const hideModal = () => setIsShow(false)

  const ConfirmModalElem = () =>
    ReactDOM.createPortal(
      <ConfirmModal
        isShow={isShow}
        text={text}
        saveResult={setResult}
        onHide={hideModal}
      />,
      document.getElementById("modal-and-toast-wrap")
    )

  const fireConfirmModal = (text) => {
    setIsShow(true)
    setText(text)
    setResult(null)
  }

  return [result, ConfirmModalElem, fireConfirmModal]
}
