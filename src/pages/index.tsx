import Navbar from '@/Components/UI/Navbar'
import ContactForm from '@/Components/Contacts/contact'
import About from '@/Components/About'
import Intro from '@/Components/AutoWriteText/Intro'
import Footer from '@/Components/Footer'
import Skill from '@/Components/Skill'
import Project from '@/Components/Project'

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-800">
        <Intro />
      </div>
      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-300">
        <About />
      </div>
      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-800">
        <Skill />
      </div>
      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-300">
        <Project />
      </div>

      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-800">
        <ContactForm />
      </div>
      <div className="sm:px-4 md:px-8 lg:px-16 bg-gray-800">
        <Footer />
      </div>
    </>
  )
}
