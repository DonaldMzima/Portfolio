// import React from 'react'
// import { render } from '@testing-library/react'
// import AutoWriteText from '@/Components/AutoWriteText/AutoWriteText'

// describe('AutoWriteText', () => {
//   jest.useFakeTimers() // Enable fake timers for controlling time-based functions

//   it('should display the titles correctly', () => {
//     const titles = ['Hi, I am Donald', 'A Frontend Developer']
//     const speed = 200
//     const { getByText } = render(
//       <AutoWriteText titles={titles} speed={speed} />,
//     )

//     // Initial state
//     expect(getByText('')).toBeInTheDocument()

//     // First title
//     jest.advanceTimersByTime(speed)
//     expect(getByText('H')).toBeInTheDocument()
//     jest.advanceTimersByTime(speed)
//     expect(getByText('Hi')).toBeInTheDocument()
//     jest.advanceTimersByTime(speed)
//     expect(getByText('Hi, I')).toBeInTheDocument()
//     jest.advanceTimersByTime(speed * titles[0].length)
//     expect(getByText(titles[0])).toBeInTheDocument()

//     // Second title
//     jest.advanceTimersByTime(speed)
//     expect(getByText('A')).toBeInTheDocument()
//     jest.advanceTimersByTime(speed * titles[1].length)
//     expect(getByText(titles[1])).toBeInTheDocument()
//   })

//   it('should loop through titles', () => {
//     const titles = ['Hi, I am Donald', 'A Frontend Developer']
//     const speed = 200
//     const { getByText } = render(
//       <AutoWriteText titles={titles} speed={speed} />,
//     )

//     for (let i = 0; i < titles.length; i++) {
//       jest.advanceTimersByTime(speed * titles[i].length)
//       expect(getByText(titles[i])).toBeInTheDocument()
//     }

//     // The component should loop back to the first title after showing all titles
//     jest.advanceTimersByTime(
//       speed * titles.reduce((acc, title) => acc + title.length, 0),
//     )
//     expect(getByText(titles[0])).toBeInTheDocument()
//   })
// })
