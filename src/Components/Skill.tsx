import React from 'react'

import styled from '@emotion/styled'

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Title = styled.h1`
  color: white;
  font-size: 34px;
  text-align: center;
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: grid; /* Use CSS Grid for the layout */
  grid-template-columns: repeat(4, 1fr); /* Create 5 equal columns */
  grid-gap: 20px; /* Add some gap between the columns */
`

const SkillItem = styled.li`
  color: #666;
  font-size: 18px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`

const SkillImage = styled.img`
  width: 150px;
  height: 150x;
  margin-right: 8px;
`

const Skill = () => {
  const frontendSkills = [
    { name: 'HTML', image: '/images/html5.png' },
    { name: 'CSS', image: '/images/css.png' },
    { name: 'TailWindCss', image: '/images/Tailwind_CSS.png' },
    { name: 'React', image: '/images/React.png' },
    { name: 'JavaScript', image: '/images/javascript.png' },
    { name: 'TypeScript', image: '/images/TypeScript.png' },
    { name: 'GraphQL', image: '/images/GraphQL.png' },
    { name: 'Rest-API', image: '/images/Rest-API.png' },
  ]

  return (
    <div id="skills">
      <Title>Skills</Title>
      <SkillContainer>
        <SkillList>
          {frontendSkills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillImage src={skill.image} alt={skill.name} />
              {skill.name}
            </SkillItem>
          ))}
        </SkillList>
      </SkillContainer>
    </div>
  )
}

export default Skill
