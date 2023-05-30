import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full bg-gradient-to-b from-gray-700
    to-black text-white'>
        <div className='pt-16 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h3 className='text-4xl font-bold inline border-b-4 border-gray-600'>About</h3>
            </div>

            <p className='text-xl mt-20'>
            Hello, I'm Ugonna Onye, a passionate full-stack engineer with 1+ years of experience in creating user-friendly and visually appealing web applications. 
            I have a strong foundation in frontend technologies and a keen eye for design. My goal is to leverage my skills and expertise to build exceptional digital experiences that delight users. Coming from a backend engineer background,
            I have now made the transition into full stack engineering seeing as the development market continues to evolve with more demand for engineers capable of handling both server and client sides of an application. 

            </p>

            <br />

            <p className='text-xl'>
            <h3 className='text-2xl'>Skills:</h3>
<span className='font-bold text-indigo-500 '>Frontend Development </span>: Proficient in HTML, CSS, and JavaScript, with a focus on modern frameworks like React.js, Vue.js and Tailwind Css. Experienced in creating responsive and cross-browser compatible websites.

Responsive Design: Experienced in building websites that adapt seamlessly to different screen sizes and devices, providing a smooth and consistent user experience across platforms.

Version Control: Proficient in Git and familiar with collaborative workflows using platforms like GitHub and Bitbucket.
<br />
<br />
<span className='font-bold text-indigo-500'>Backend Development</span>: Proficient in server-side programming languages like JavaScript (Node.js) and Python (Django). Experienced in building RESTful APIs and handling data storage and retrieval.

<span className='text-1xl'>Database Management</span>: Skilled in working with relational databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB, Firebase). Proficient in writing efficient queries, optimizing database performance, and ensuring data integrity.
<br /><br />
API Development: Experienced in designing and implementing RESTful APIs, integrating third-party services, and handling authentication and authorization.
<br /><br />
Server Infrastructure: Knowledgeable about server deployment, scaling, and management using cloud platforms like AWS, Azure, or Google Cloud. Familiarity with containerization technologies like Docker and orchestration tools like Kubernetes.
<br /><br />
Security and Performance: Understanding of web application security principles, including secure data handling, authentication, and encryption. Proficient in optimizing application performance and implementing caching strategies.
            </p>
        </div>
    </div>
  )
}

export default About