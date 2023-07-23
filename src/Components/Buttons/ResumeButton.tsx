import React from 'react'
import { BiDownload } from 'react-icons/bi'

const ResumeButton = () => {
  const iconSize = 40
  return (
    <a
      href="/ResumeFile/resume.pdf"
      download="resume.pdf"
      className="flex justify-center"
      // download="Stoman-Resume.pdf"
      // href="/files/Stoman-Resume.pdf"
    >
      <BiDownload size={iconSize} />
    </a>
  )
}

export default ResumeButton
