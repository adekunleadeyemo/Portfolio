import React from 'react';

// import woman image
import WomanImg from '../assets/img/Hero.jpg';

const Hero = () => {
  const myStyle = {
    backgroundImage:`url("${WomanImg}")`,
    opacity:"0.95" 
  }
  return (
    <section
      id='home'
      style={myStyle}
      className='lg:h-[85vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
      
    >
      <div  className='container mx-auto  h-full'>
        <div className='flex flex-col justify-center  items-center w-100vh h-full'>
        <p className='text-xl text-accent text-md mb-[22px]'>
              Hey, I'm Adekunle!
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl pb-8 text-center font-[sans] md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build Mobile & Web  <br />  Applications
            </h1>
            <button className='btn rounded-full btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Contact Me
            </button>
          </div>
        </div>
    </section>
  );
};

export default Hero;
