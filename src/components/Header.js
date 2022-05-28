import React, { useEffect, useState } from 'react';

// import components
import Logo from '../assets/img/LogoMe.png';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

function Header(props){
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-[#fafaf9] h-20' : 'bg-[#fafaf9] h-24'
      } flex items-center fixed top-0 w-full text-[#262626] z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' className='flex mb-30' />
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
        <Nav />

        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
