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
      <div>
        <Intro />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <Project />
      </div>

      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
