import React from 'react';

// import woman image
import WomanImg from '../assets/img/Hero.jpg';

  const myStyle = {
    backgroundImage:`url("${WomanImg}")`,
    opacity:"0.9" 
  }

function Blog() {
    return (
        <section
        id='blog'
        style={myStyle}
        className='lg:h-[85vh] flex flex-row justify-center  items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
        
      >
        <div className=' w-100vh h-100vh'>
        <h1 className='text-4xl leading-[44px] md:text-5xl pb-8 text-center font-[sans] md:leading-tight lg:text-10xl lg:leading-[1.2]  md:tracking-[-2px]'>
              Page Under Construction
        </h1>
        </div>
   

      </section>
    );
}

export default Blog;