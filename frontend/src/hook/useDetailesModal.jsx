import React from "react"
import ReactDOM from "react-dom"
import { useState } from "react"
import DetailesModal from "../components/DetailesModal/DetailesModal"

export default function useDetailesModal() {
  const [isShow, setIsShow] = useState(false)

  const hideModal = () => setIsShow(false)

  const DetailesModalElem = ({children}) =>
    ReactDOM.createPortal(
      <DetailesModal
        isShow={isShow}
        onHide={hideModal}
        elems={children}
      >{children}</DetailesModal>,
      document.getElementById("modal-and-toast-wrap")
    )

  const fireDetailesModal = () => {
    setIsShow(true)
  }

  return [DetailesModalElem, fireDetailesModal]
}
