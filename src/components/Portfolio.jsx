import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: reactWeather,
        },
        {
            id:2,
            src: installNode,
        },
        {
            id:3,
            src: navbar,
        },
        {
            id:4,
            src: reactParallax,
        },
        {
            id:5,
            src: reactSmooth,
        },
        {
            id:6,
            src: arrayDestruct,
        }
    ]

  return (
    <div name='portfolio' className='pt-40 bg-gradient-to-b from-black
     to-gray-800 w-full text-white '>
        <h2 className='flex justify-center items-center text-center text-5xl'>Coming Soon! </h2>
        <div className='opacity-5 max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
            <div className='mt-16 pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Previous Projects: </p>
            </div>

            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>
            {portfolios.map((portfolio) => {
    const { id, src } = portfolio;
            return (
                <div key={id} className='shadow-lg shadow-gray-500 rounded-lg'>
                <img src={src} alt="WeatherApp" className='rounded-md duration-300 hover:scale-105' />
                <div className='flex items-center justify-center group'>
                    <button className='w-1/2 px-4  m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-4 py-2 m-4 duration-200 hover:scale-105'>Source Code</button>
                </div>
                </div>
            )})}
            </div>
            
            
            


            
        </div>
    </div>
  )
}

export default Portfolio