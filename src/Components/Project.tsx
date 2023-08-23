import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h1`
  color: black;
  font-size: 34px;
  text-align: center;
  margin-top: 0px;
`

const myProjects = [
  {
    src: '/images/spaceX api.jpg',
    name: 'SpaceX API',
    title:
      'I created this project to dive into the exciting world of APIs and React. This project showcases my journey as I learned to pull data from the SpaceX API.',
    link: '/services',
  },
  {
    src: '/images/dogschedule.jpg',
    name: 'Dog Schedule',
    title:
      "I created this project to showcase my love for dogs and my skills in React. This project helps dog owners manage their pet's schedule effectively.",
    link: '/services',
  },
]

const Project = () => {
  return (
    <div>
      <div id="project" className="w-full items-center  ">
        <Title>My Project</Title>
        <div className="relative flex h-screen w-full items-center justify-center">
          <div className="flex flex-wrap justify-center items-center mt-10">
            {myProjects.map((project, index) => (
              <div
                key={index}
                className="max-w-sm mx-4 my-6 rounded  bg-gray-900 "
              >
                <img
                  className="w-full h-48 object-cover"
                  src={project.src}
                  alt={project.name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{project.name}</div>
                  <p className="text-gray-700 text-base">{project.title}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a
                    href={project.link}
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
