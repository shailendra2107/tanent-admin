import React from 'react'

const FileUploadInput = () => {
  return (
    <div className='relative border  border-deep-gray py-2 rounded px-2'>
      <input className='w-full' type="file" id='file' hidden />
      <span className="absolute -top-2 px-[3px] left-[10px] text-xs text-darkest-blue font-medium tracking-wider bg-white">Upload Images</span>
      <label className='w-full inline-block text-sm font-bold  text-purple px-3' htmlFor="file">Select File</label>
    </div>
  )
}

export default FileUploadInput