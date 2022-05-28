// import data
import { projectsData } from '../data';

// import components
import Project from './Project';

//import icon
import { ChevronDownIcon } from '@heroicons/react/outline';

const Projects = () => {

  return (
    <div>
      <section className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8'>
        {projectsData.map((item) => {
          return <Project item={item} key={item.id} />;
        })}

      </section>
      <div className='flex flex-col items-center lg:pt-20'>
      <h1 className='flex text-center pb-3 font-[sans]'>View More </h1>
      <button className=' flex btn rounded-full btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all '>
       <a href="https://github.com/razzaki" > <ChevronDownIcon className='w-10 h-10'/> </a>
        
      </button>
      </div>
      
    </div>
  );
};

export default Projects;
