import React from 'react'
import AboutSvg from './Svg/AboutSvg'
import ResumeButton from './Buttons/ResumeButton'
import ScrollToTopButton from './Buttons/ScrollToTopButton'

const SkillContainerStyles = `
  grid grid-cols-1 gap-20 items-center justify-center list-none p-0 min-h-screen
  md:grid-cols-2
`

const TitleStyles = `
  text-black text-3xl text-center underline
`

const ResumeButtonContainerStyles = `
  flex items-center ml-16
`

const ResumeTitleStyles = `
  text-white ml-[-63px] mt-16
`

const About = () => {
  return (
    <div id="about">
      <ScrollToTopButton />
      <h1 className={TitleStyles}> About Me</h1>
      <div className={SkillContainerStyles}>
        <div className="md:w-1/2">
          <p className="text-gray-800 max-w-xs ml-6 md:max-w-md lg:max-w-lg">
            I am a frontend developer, primarily working on web development. I
            have gained my skills through years of hard work and experience.
            Starting as a Junior developer, I have worked at Joblify-Connect and
            have progressed through various technologies, making me versatile
            and adaptable. I am passionate about learning and problem-solving,
            and currently seeking opportunities with ambitious and innovative
            companies to contribute to their goals.
          </p>
          <div className={ResumeButtonContainerStyles}>
            <ResumeButton />
            <span className={ResumeTitleStyles}>Get Resume</span>
          </div>
        </div>
        <div className="max-w-full">
          <AboutSvg />
        </div>
      </div>
    </div>
  )
}

export default About
