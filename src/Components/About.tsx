import React from 'react'
import AboutSvg from './Svg/AboutSvg'
import styled from '@emotion/styled'
import ResumeButton from './Buttons/ResumeButton'

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(2, 1fr); /* Create 5 equal columns */
  grid-gap: 10px;
  list-style: none;
  padding: 0;
`

const Title = styled.h1`
  color: black;
  font-size: 34px;
  text-align: center;
`

const About = () => {
  return (
    <div id="about">
      <Title> About Me</Title>
      {/* <div className="bg-gray-900 h-screen w-full flex items-center justify-center"> */}
      <SkillContainer>
        <div className="md:w-1/2">
          <p className="text-gray-500 max-w-xs md:ml-6">
            I am a frontend developer, primarily working on web development. I
            have gained my skills through years of hard work and experience.
            Starting as a Junior developer, I have worked at Joblify-Connect and
            have progressed through various technologies, making me versatile
            and adaptable. I am passionate about learning and problem-solving,
            and currently seeking opportunities with ambitious and innovative
            companies to contribute to their goals.
          </p>
          <div>
            <a className="flex items-center">
              <ResumeButton />
              <span className="text-white ml-2">Resume</span>
            </a>
          </div>
        </div>
        <div className="max-w-3xl flex flex-col ">
          <AboutSvg />
        </div>
      </SkillContainer>
    </div>
    // </div>
  )
}

export default About
