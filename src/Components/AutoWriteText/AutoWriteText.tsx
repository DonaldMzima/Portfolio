import React, { useState, useEffect } from 'react'

const AutoWriteText = ({ titles, speed }: any) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [currentTitle, setCurrentTitle] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isWriting, setIsWriting] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isWriting) {
        const title = titles[currentTitleIndex]
        setCurrentTitle(title.substring(0, currentIndex))
        setCurrentIndex((prevIndex) => prevIndex + 1)
        if (currentIndex > title.length) {
          setIsWriting(false)
          setTimeout(() => {
            setIsWriting(true)
            setCurrentIndex(0)
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
          }, speed)
        }
      }
    }, speed)
    return () => clearInterval(interval)
  }, [currentTitleIndex, currentIndex, isWriting, speed, titles])

  return <h1>{currentTitle}</h1>
}

export default AutoWriteText
