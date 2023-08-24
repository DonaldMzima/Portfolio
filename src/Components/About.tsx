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
  height: auto; /* Change to auto height for responsiveness */
  grid-template-columns: repeat(1, 1fr); /* Change to 1 column for mobile */
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
      <SkillContainer>
        <div className="md:w-1/2">
          <p className="text-gray-500 max-w-xs md:ml-6 md:max-w-md lg:max-w-lg">
            {/* Apply responsive text and margin classes */}I am a frontend
            developer, primarily working on web development. I have gained my
            skills through years of hard work and experience. Starting as a
            Junior developer, I have worked at Joblify-Connect and have
            progressed through various technologies, making me versatile and
            adaptable. I am passionate about learning and problem-solving, and
            currently seeking opportunities with ambitious and innovative
            companies to contribute to their goals.
          </p>
          <div>
            <a className="flex items-center">
              <ResumeButton />
              <span className="text-white ml-2">Resume</span>
            </a>
          </div>
        </div>
        <div className="max-w-full flex flex-col md:mt-6">
          {/* Apply margin-top class for spacing */}
          <AboutSvg />
        </div>
      </SkillContainer>
    </div>
  )
}

export default About
