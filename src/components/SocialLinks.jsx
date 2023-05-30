import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {


    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/ugonna-onyekwuluje-035262166/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/ugo123456789',  
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:ugonnagodson512@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/Ugonna_Onye_-_Software_Developer.pdf',  
            style: 'rounded-br-md',
            download: true,
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

        {links.map(({ id, child, href, style, download }) => (
            <li key={id} className={'flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-lg duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' + style}>
                <a href={href} 
                className='flex justify-between items-center w-full text-white'
                download={download} target='_blank' rel="noreferrer">
                {child}

                </a>
            </li>
             ))}

        </ul>
    </div>
  )
}

export default SocialLinks