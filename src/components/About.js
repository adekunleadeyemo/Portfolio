import React from 'react';

const About = () => {
  return (
    <section
    id='About'
    className='lg:h-[85vh] flex items-center bg-secondary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    
  >
      <div className='container mx-auto'>
       
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl text-center font-medium lg:font-extrabold mb-3  relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Adekunle Adeyemo
              </h2>
              <p className='mb-4 text-accent text-center'>
                Full Stack Mobile and Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I'm a solution oriented software developer, based in Leicester, United Kingdom.
                I have a combined work experience in Andriod  and Web Development. My prefered technologies, include 
                Kotlin, Java, JavaScript, React, MongoDB, NodeJs,GaphQL, Python, etc. I a hold a bachelor's Degree in 
                Mechatronics Engineering, from the University of Port Harcourt, Nigeria.
                currently, i'm  a masters student in Advanced Software Engineering at the University of Leicester, United Kingdom.
                 <br />
                <br />
                 My other interest involves MDE technology, and Agile Cloud Automation.
              </p>
            </div>
            <button className=' rounded-full self-center btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
            </div>
          </div>
    </section>
  );
};

export default About;