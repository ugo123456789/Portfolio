import React from 'react'
import myImage from '../assets/heroImage.JPG'
import {TiArrowRightOutline} from 'react-icons/ti'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-700'>
  <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
    <div className='flex flex-col justify-center h-full'>
      <h2 className='text-4xl sm:text-7xl font-bold text-white'>Full-Stack Engineer</h2>
      <p className='text-gray-500 py-4'>
        I am a driven and enthusiastic software developer with a strong technical foundation, 
        a passion for innovation, and a commitment to delivering high-quality software solutions that meet business needs. 
        Recent technologies I work with include ReactJS, Tailwind, and NextJS.
      </p>
      <div>
        <Link to='portfolio' smooth duration={700} className='group text-white w-fit px-6 py-3 my-2
        flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'>
          My Portfolio
          <span className='group-hover:rotate-90 duration-300'>
            <TiArrowRightOutline className='ml-1'/>
          </span>
        </Link>
      </div>
    </div>
    <div className="flex-row">
      <img src={myImage} alt="Profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
    </div>
  </div>
</div>





   // <div><img src={myImage} alt="" />
   // <TiArrowRightOutline /></div>
    
  )
}

export default Home