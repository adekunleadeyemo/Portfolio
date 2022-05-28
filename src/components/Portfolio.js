import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[800px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title  mb-10'>
            Projects
          </h2>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
