import { useEffect, useState } from 'react'

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-2 rounded-full bg-blue-500 text-white ${
        isVisible ? 'visible' : 'invisible'
      }`}
    >
      Scroll to Top
    </button>
  )
}

export default ScrollToTopButton
