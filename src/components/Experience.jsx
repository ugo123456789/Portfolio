import React from 'react'

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascipt from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import graphql from "../assets/graphql.png"
import tailwind from "../assets/tailwind.png"
import github from "../assets/github.png"
import node from "../assets/node.png"




const techs = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        src: javascipt,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        src: reactImage,
        title: 'React',
        style: 'shadow-blue-500'
    },
    {
        id: 5,
        src: nextjs,
        title: 'NextJS',
        style: 'shadow-gray-400'
    },
    {
        id: 6,
        src: graphql,
        title: 'GraphQL',
        style: 'shadow-pink-500'
    },
    {
        id: 7,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-500'
    },
    {
        id: 8,
        src: github,
        title: 'Github',
        style: 'shadow-gray-500'
    },
    {
        id: 9,
        src: node,
        title: 'Node',
        style: 'shadow-green-500'
    },
];



const Experience = () => {

  return (
    <div name='experience' className='pt-20 bg-gradient-to-b from-gray-800 to-black w-full'>
  <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
    <div>
      <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
      <p className='py-6'>Technologies I work with</p>
    </div>

    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8'>
      {techs.map((tech) => {
        const { id, src, title, style } = tech;
        return (
          <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style}>
            <img src={src} alt="html" className='w-20 mx-auto' />
            <p className='mt-4'>{title}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

  )
}

export default Experience