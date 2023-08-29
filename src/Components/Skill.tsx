import React from 'react'
import styled from '@emotion/styled'

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const Title = styled.h1`
  color: #cfcbcb;
  font-size: 34px;
  text-align: center;
  text-decoration: underline;
`

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px; /* Increased margin to create more space */
  max-width: 900px;
  width: 100%;
  flex-wrap: wrap;
`

const Card = styled.div`
  background-color: #2b2d42;
  color: #cfcbcb;
  padding: 20px;
  border-radius: 8px;
  width: calc(33.33% - 20px);
  text-align: center;
  margin-bottom: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-20px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const SkillItem = styled.li`
  color: #cfcbcb;
  font-size: 'font-bold';
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SkillImage = styled.img`
  width: 110px;
  height: 110px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const Skill = () => {
  const skills = [
    {
      title:
        'Developing blazing fast web applications for seamless user interaction.',
    },
    {
      title:
        'Mobile-first, responsive design layout for all devices is a top priority.',
    },
    {
      title:
        'Constantly learning new technologies and keeping up to date with the lastest software development trends.',
    },
  ]

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
        <CardList>
          {skills.map((card: any) => (
            <Card key={card}>
              <p>{card.title}</p>
            </Card>
          ))}
        </CardList>
        <SkillList>
          {frontendSkills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillImage src={skill.image} alt={skill.name} />
              <span>{skill.name}</span>
            </SkillItem>
          ))}
        </SkillList>
      </SkillContainer>
    </div>
  )
}

export default Skill
