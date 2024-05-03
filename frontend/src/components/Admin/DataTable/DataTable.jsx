import React from "react"

export default function DataTable({ titles, children }) {
  return (
    <div className="w-full overflow-auto pb-5">
      <table className="w-full text-center text-black dark:text-white">
      <thead>
        <tr className="bg-gray-400 dark:bg-gray-500 cursor-pointer select-none">
          {titles.map((title) => (
            <th key={title} className="p-4">
              {title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody >{children}</tbody>
    </table>
    </div>
  )
}
