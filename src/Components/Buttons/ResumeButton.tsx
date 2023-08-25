import React from 'react'
import { RiFileTextFill } from 'react-icons/ri'

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
      <RiFileTextFill size={iconSize} />
    </a>
  )
}

export default ResumeButton
