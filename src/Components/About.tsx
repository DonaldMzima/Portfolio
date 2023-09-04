import React from 'react'
import AboutSvg from './Svg/AboutSvg'
import styled from '@emotion/styled'
import ResumeButton from './Buttons/ResumeButton'
import ScrollToTopButton from './Buttons/ScrollToTopButton'

const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  min-height: 80vh;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Title = styled.h1`
  color: black;
  font-size: 34px;
  text-align: center;
  text-decoration: underline;
`

const ResumeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 90px;
`

const ResumeTitle = styled.span`
  color: white;
  margin-left: -63px;
  margin-top: 55px;
`

const About = () => {
  return (
    <div id="about">
      <ScrollToTopButton />
      <Title> About Me</Title>
      <SkillContainer>
        <div className="md:w-1/2">
          <p className="text-gray-800 max-w-xs md:ml-6 md:max-w-md lg:max-w-lg">
            I am a frontend developer, primarily working on web development. I
            have gained my skills through years of hard work and experience.
            Starting as a Junior developer, I have worked at Joblify-Connect and
            have progressed through various technologies, making me versatile
            and adaptable. I am passionate about learning and problem-solving,
            and currently seeking opportunities with ambitious and innovative
            companies to contribute to their goals.
          </p>
          <div>
            <ResumeButtonContainer>
              <ResumeButton />
              <ResumeTitle>Get Resume</ResumeTitle>
            </ResumeButtonContainer>
          </div>
        </div>
        <div className="max-w-full">
          <AboutSvg />
        </div>
      </SkillContainer>
    </div>
  )
}

export default About
