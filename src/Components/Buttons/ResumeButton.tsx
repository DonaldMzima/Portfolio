import React from 'react'
import { RiFileTextFill } from 'react-icons/ri'

const ResumeButton = () => {
  const iconSize = 40
  return (
    <a
      href="/ResumeFile/PDF_1682368837740 (2).PDF"
      download="PDF_1682368837740 (2).PDF"
      className="flex justify-center"
      // download="Stoman-Resume.pdf"
      // href="/files/Stoman-Resume.pdf"
    >
      <RiFileTextFill size={iconSize} />
    </a>
  )
}

export default ResumeButton
