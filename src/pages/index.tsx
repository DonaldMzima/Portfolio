import Navbar from '@/Components/UI/Navbar'
import ContactForm from '@/Components/Contacts/contact'
import About from '@/Components/About'
import Intro from '@/Components/AutoWriteText/Intro'
import Footer from '@/Components/Footer'
import Skill from '@/Components/Skill'
import Project from '@/Components/Project'
import ScrollToTopButton from '@/Components/Buttons/ScrollToTopButton'

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <ScrollToTopButton />
      </div>
      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-800">
        <Intro />
        <ScrollToTopButton />
      </div>
      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-300">
        <About />
        <ScrollToTopButton />
      </div>
      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-800">
        <Skill />
        <ScrollToTopButton />
      </div>
      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-300">
        <Project />
        <ScrollToTopButton />
      </div>

      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-800">
        <ContactForm />
        <ScrollToTopButton />
      </div>
      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-800">
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  )
}
