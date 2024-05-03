import React, { Component } from "react"
import Navbar from "../Navbar/Navbar"

export class MobileMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className={`block px-4 xl:hidden w-full rounded-md transition-all duration-300 overflow-hidden ${
          this.props.isShow ? "max-h-auto py-4" : "max-h-0 py-0"
        }`}
      >
        <Navbar col />
      </div>
    )
  }
}

export default MobileMenu
