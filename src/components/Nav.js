import React, {useState} from 'react';

// import navigation data
import { navigation } from '../data';

// import Link
import { Link } from 'react-scroll';




function Nav (props) {
 
 function handleClick(){
      props.clicked(props.name)
 }
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-[#262626] hover:text-accent cursor-pointer'
              key={idx}
            >
              <Link
                onClick={handleClick}
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {item.name}

              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
