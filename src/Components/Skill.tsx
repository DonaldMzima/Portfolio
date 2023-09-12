import React from 'react'

const SkillContainer = 'flex flex-col items-center justify-center min-h-screen'

const Title =
  'text-xl md:text-2xl lg:text-3xl text-center text-blue-500 underline'

const CardList = 'flex justify-between mb-40 max-w-screen-lg w-full flex-wrap'

const Card =
  'bg-gray-800 text-gray-300 p-4 rounded-lg w-1/3 md:w-1/4 lg:w-1/5 text-center mb-8 transition-transform transition-shadow hover:transform hover:-translate-y-4 hover:shadow-md'

const SkillList =
  'grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 list-none p-0'

const SkillItem = 'text-gray-300 text-center'

const SkillImage = 'w-20 h-20 md:w-24 md:h-24 mb-2'

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
        'Constantly learning new technologies and keeping up to date with the latest software development trends.',
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
      <h1 className={Title}>Skills</h1>
      <div className={SkillContainer}>
        <div className={CardList}>
          {skills.map((card, index) => (
            <div key={index} className={Card}>
              <p>{card.title}</p>
            </div>
          ))}
        </div>
        <ul className={SkillList}>
          {frontendSkills.map((skill, index) => (
            <li key={index} className={SkillItem}>
              <img src={skill.image} alt={skill.name} className={SkillImage} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skill
