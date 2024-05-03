import React, { useState } from "react"
import { useEffect } from "react"
import { MdCancel } from "react-icons/md"
import { BiCloudUpload } from "react-icons/bi"

export default function FileUploader({ accepted }) {
  const [files, setFiles] = useState([])
  const [acceptedFiles, setAcceptedFiles] = useState(accepted)
  const [filesSize, setFilesSize] = useState(0)

  useEffect(() => {
    files.forEach((file) => setFilesSize((prev) => prev + file.size))
  }, [files])

  const [labelText, setLabelText] = useState(
    "برای آپلود فایل ها بکشید و رها کنید و یا کلیک کنید."
  )

  const uploadFile = (filesObj) => {
    const filesArrey = Object.entries(filesObj)
    const currectFilesArrey = filesArrey.filter((file) =>
      acceptedFiles.join("-").includes(file[1].name.slice(-3))
    )

    currectFilesArrey.forEach((file) => setFiles((prev) => [...prev, file[1]]))

    setLabelText(
      `${currectFilesArrey.length} فایل جدید آپلود شد. برای آپلود بیشتر بکشید و رها کنید و یا کلیک کنید`
    )
  }

  const dragOverHandler = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setLabelText("فایل هارا اینجا رها کنید.")
  }

  const dragLeaveHandler = () =>
    setLabelText("برای آپلود فایل ها بکشید و رها کنید و یا کلیک کنید.")

  const dropHandler = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    if (ev.dataTransfer.files && ev.dataTransfer.files[0]) {
      uploadFile(ev.dataTransfer.files)
    }
  }

  const inputUploadHandler = (ev) => uploadFile(ev.target.files)

  const deleteAll = (ev) => {
    ev.preventDefault()
    setFiles([])
    setFilesSize(0)
    setLabelText("برای آپلود فایل ها بکشید و رها کنید و یا کلیک کنید.")
  }

  return (
    <div className="w-full col-span-full">
      <label
        onDragOver={dragOverHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
        htmlFor="files-uploader"
        className="h-auto rounded-md border-2 border-gray-200 bg-white transition-all duration-300 p-5 text-sm hover:opacity-80 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 dark:placeholder:text-gray-300 shadow-sm font-bold w-full cursor-crosshair text-gray-500 flex items-center justify-start gap-2"
      >
        {files.length >= 1 && (
          <MdCancel
            onClick={deleteAll}
            className="text-5xl sm:text-2xl text-red-600 hover:opacity-90 cursor-pointer"
          />
        )}
        <BiCloudUpload className="text-5xl sm:text-2xl" />
        <div className="flex flex-grow text-xs md:text-sm justify-between items-center flex-wrap gap-1">
          <span>
            {labelText} - (مجموع {files.length.toLocaleString()} فایل با حجم{" "}
            {filesSize.toLocaleString()} بایت آپلود شده)
          </span>
          <span className="uppercase opacity-80 text-center">
            {acceptedFiles.join(" - ")}
          </span>
        </div>
      </label>

      <input
        type="file"
        id="files-uploader"
        onChange={inputUploadHandler}
        className="hidden"
        multiple
        accept={acceptedFiles.map((file) => `.${file}`)}
      />
    </div>
  )
}
