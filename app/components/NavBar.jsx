"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='container mx-auto lg:py-4 p-4 md:p-8 py-2 flex items-center justify-between'>
        <Link href='/' className='text-xl md:text-3xl text-white font-semibold'>
          <h1>
            Fundi
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Design</span>
          </h1>
        </Link>

        <div className='mobile-menu md:hidden'>
          {!navBarOpen ? (
            <button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>

        <div className={`md:flex md:w-auto ${navBarOpen ? 'block' : 'hidden'}`} id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            <li className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
              <Link href="#about" className='py-2 pl-3 pr-4 text-[#ADB7BE] md:m-10 sm:text-xl rounded md:p-0 hover:text-white'>
                About
              </Link>
              <Link href="#projects" className='py-2 pl-3 pr-4 text-[#ADB7BE] md:m-10 sm:text-xl rounded md:p-0 hover:text-white'>
                Projects
              </Link>
              <Link href="#contact" className='py-2 pl-3 pr-4 text-[#ADB7BE] md:m-10 sm:text-xl rounded md:p-0 hover:text-white'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {navBarOpen && <MenuOverlay />}
    </nav>
  );
}

export default NavBar;
