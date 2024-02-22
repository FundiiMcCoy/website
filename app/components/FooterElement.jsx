import React from 'react';
import Link from 'next/link';
const FooterElement = () => {
  return (
    <footer className='footer p-8 mb-8 border z-10 border-top-[#33353f] border-r-transparent border-l-transparent border-b-transparent border-[#33353f] '>
      <div className='containers flex justify-between'>
        <span className='  text-slate-500 sm:text-sm ' > <strong> Developed by: </strong>Nomfundo Fundile Mcoyi</span>
        <div>
          <li className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-sm rounded md:p-0 hover:text-white'>
            <Link href="#about" className='py-2 pl-3 pr-4 text-slate-500 md:m-10  rounded md:p-0 hover:text-[#ADB7BE]'>
              About
            </Link>
            <Link href="#projects" className='py-2 pl-3 pr-4 text-slate-500 md:m-10 rounded md:p-0 hover:text-[#ADB7BE]'>
              Projects
            </Link>
            <Link href="#contact" className='py-2 pl-3 pr-4 text-slate-500 md:m-10 rounded md:p-0 hover:text-[#ADB7BE]'>
              Contact
            </Link>
          </li>
        </div>

        <p className='text-slate-500'>All rights reserved. © 2024 </p>
      </div>
    </footer>
  )
}

export default FooterElement