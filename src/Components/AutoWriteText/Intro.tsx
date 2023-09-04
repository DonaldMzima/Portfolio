import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import ResumeButton from '../Buttons/ResumeButton'
import AutoWriteText from './AutoWriteText'
import { MdPhone } from 'react-icons/md'
import ScrollToTopButton from '../Buttons/ScrollToTopButton'

const Intro = () => {
  const titles = ['Hi, I am Donald', 'A Frontend Developer']
  const speed = 200 // milliseconds
  const iconSize = 40 // Set the desired icon size (you can change this value)

  return (
    <>
      <ScrollToTopButton />
      <div className="relative flex h-screen w-full items-center justify-center ">
        <div className="max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-300 p-6 text-center shadow-lg backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
              Hi, I am Donald
            </h2>

            <h2 className="flex text-4xl gap-x-4 text-neutral-100">
              A Frontend Developer
            </h2>

            <div className="flex w-full justify-center gap-x-4">
              <a
                href="https://www.linkedin.com/"
                className="flex items-center hover:text-blue-500"
              >
                <AiFillLinkedin size={iconSize} />
                <span className="text-white ml-2 ">LinkedIn</span>
              </a>

              <a
                href="https://github.com/DonaldMzima"
                className="flex items-center hover:text-blue-500"
              >
                <AiFillGithub size={iconSize} />
                <span className="text-white ml-2">GitHub</span>
              </a>

              <a
                href="#contact"
                className="flex items-center hover:text-blue-500"
              >
                <MdPhone size={iconSize} />
                <span className="text-white ml-2">Contacts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
