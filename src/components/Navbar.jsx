import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';
// import {Img} from '../assets/logo/RDL.black.png';
import { github, linkedin} from '../assets';
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          {/* <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain"
          /> */}
          <p style={{ color:"#000"}}>RAGU</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
           <div className="absolute inset-2.5 flex justify-end right-5">
          <div onClick={() => window.open('https://github.com/RagunathRa', '_blank')} className="bg-night sm:w-9 sm:h-9 w-11 h-11 rounded-full flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]">
            <img
              src={github}
              alt="source code"
              className="w-3/3 h-4/5 object-contain rounded-full"
             
            />
          </div>
        </div>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title} </a>
     
            </li>
          ))}
         
                  <div className="absolute inset-3 justify-end right-20  flex">
          <a href="https://www.linkedin.com/in/dev-ragunath-r/" target="_blank" rel="noopener noreferrer">
            <img
              src={linkedin}
              alt="LinkedIn Profile"
              className="w-5/5 h-4/5 object-contain rounded-full"
            />
          </a>
        </div>
       
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[21px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[0rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                     <div className="absolute inset-3 mt-2 flex justify-end right-40">
          <div onClick={() => window.open('https://github.com/RagunathRa', '_blank')} className="bg-night sm:w-9 sm:h-9 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]">
            <img
              src={github}
              alt="source code"
              className="w-2/3 h-4/5 object-contain rounded-full"
             
            />
          </div>
        </div>
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[18px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`} className='h1 ml-10 flex-1'>{nav.title}</a>
        
                  </li>
                ))}
                <div className="absolute inset-3 justify-end right-20 mt-2 flex">
          <a href="https://www.linkedin.com/in/dev-ragunath-r/" target="_blank" rel="noopener noreferrer" className='sm:w-9 sm:h-9 w-11 h-11 rounded-full flex justify-center'>
            <img
              src={linkedin}
              alt="LinkedIn Profile"
              className="w-5/5 h-4/5 object-contain rounded-full"
            />
          </a>
        </div>
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
