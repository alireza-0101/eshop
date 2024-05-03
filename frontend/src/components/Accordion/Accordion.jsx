import React, { useState } from "react"
import { IoIosArrowUp } from "react-icons/io"

export default function Accordion({ title, children }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const accordionToggler = () => setIsAccordionOpen((prev) => !prev)

  return (
    <div
      className={`${
        isAccordionOpen ? "max-h-max" : "max-h-12"
      } flex flex-col w-full p-3 bg-gray-200 dark:bg-gray-900 text-gray-900 font-bold dark:text-gray-200 rounded-md cursor-pointer shadow-xl overflow-hidden transition-all duration-500`}
    >
      <div
        onClick={accordionToggler}
        className={`${
          isAccordionOpen ? "mb-3" : "mb-0"
        } flex justify-between w-full px-3 border-r-2 border-gray-900 dark:border-gray-200 hover:opacity-80 transition-all duration-300 select-none`}
      >
        <span>{title}</span>
        <IoIosArrowUp
          className={`mt-1 transition-all duration-300 ${
            isAccordionOpen && "rotate-180"
          }`}
        />
      </div>

      <div className="w-full p-3 font-normal cursor-auto">{children}</div>
    </div>
  )
}
