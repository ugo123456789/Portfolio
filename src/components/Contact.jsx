import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='pt-20 w-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Feel free to reach out to me for any inquiries or collaboration opportunities. I'm open to discussing exciting projects or answering any questions you may have</p>
            </div>

            <div className='flex justify-center item-center'>
                <form action="https://getform.io/f/9186dad0-98e1-49b1-8e6e-594cf54e7a84" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' required placeholder='Enter your name' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white
                    focus:outline-none'/>
                    <input type="text" name='email' required placeholder='Enter your email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white
                    focus:outline-none'/>

                    <textarea name="message" rows="10" required placeholder='Message' className='p-2 bg-transparent
                    border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500
                    px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact