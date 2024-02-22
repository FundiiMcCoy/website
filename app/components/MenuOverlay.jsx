import React from 'react';
import Link from 'next/link';

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      <Link href="#about" className='py-2 pl-3 pr-4 text-[#ADB7BE] md:m-10 sm:text-xl rounded md:p-0 hover:text-white'>
        About
      </Link>
      <Link href="#projects" className='py-2 pl-3 pr-4 text-[#ADB7BE] md:m-10 sm:text-xl rounded md:p-0 hover:text-white'>
        Projects
      </Link>
      <Link href="#contact" className='py-2 pl-3 pr-4 text-[#ADB7BE] md:m-10 sm:text-xl rounded md:p-0 hover:text-white'>
        Contact
      </Link>
    </ul>
  )
}

export default MenuOverlay