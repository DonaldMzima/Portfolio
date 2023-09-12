import React from 'react'

const myProjects = [
  {
    src: '/images/dogschedule.jpg',
    name: 'Dog Schedule',
    title:
      "I created this project to showcase my love for dogs and my skills in React. This project helps dog owners manage their pet's schedule effectively.",
    link: '/services',
  },
  {
    src: '/images/dogschedule.jpg',
    name: 'SafaClean',
    title:
      "I created this project to showcase my love for dogs and my skills in React. This project helps dog owners manage their pet's schedule effectively.",
    link: '/services',
  },
  {
    src: '/images/spaceX api.jpg',
    name: 'Music-Static-Site',
    title:
      'I created this project to dive into the exciting world of APIs and React. This project showcases my journey as I learned to pull data from the .',
    link: '/services',
  },
]

const Project = () => {
  return (
    <div>
      <div id="project" className="w-full items-center">
        <h1 className="text-gray-700 text-3xl text-center mt-0 underline">
          My Project
        </h1>
        <div className="relative flex flex-col items-center mt-10">
          <div className="flex flex-wrap justify-center items-center mx-2 sm:mx-0">
            {myProjects.map((project, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 my-6 project-card"
              >
                <div className="rounded bg-gray-900 shadow-md">
                  <img
                    className="w-full h-48 object-cover rounded-t"
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
                      className="inline-block learn-more-button font-bold py-2 px-2 rounded-full"
                    >
                      Learn More
                    </a>
                  </div>
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
