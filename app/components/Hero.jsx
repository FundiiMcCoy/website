"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';

/*-------------------COMPONENTS--------------------*/
import ProPic from '/public/images/profile-pic.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='grid grid-cols-1 sm:grid-cols-12 p-8'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I&apos;m {""}</span>
            <br ></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Nomfundo Fundile',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'graphic designer',
                1000,
                'web designer',
                1000,
                'UI/UX Designer',
                1000
              ]}
              wrapper="span"
              speed={150}
              repeat={Infinity} />
          </h1>
          <p className='text-[#adb7be] lg:p-0 text-base sm:leading-loose mb-8 mt-8 lg:text-lg lg:mb-8 '>
            Hey, I&apos;m Fundile, a seasoned graphic designer with a passion for visual storytelling and design. Over 5 years in the field, I&apos;ve mastered the art of transforming concepts into impactful designs. Let&apos;s bring your ideas to life through the lens of compelling visual communication&#39;
          </p>
          <div>
            <Link href={'#projects'}>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                See Work
              </button>
            </Link>
            <Link href={'https://drive.google.com/file/d/1LQZ09FVJQ96egDAmbmlA7dwZ4N2Pxz_V/view?usp=share_link'}>
              <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3'>Download CV</span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
              <Image src={ProPic}
                width={350}
                height={350}
                alt="Hero Image"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
              />
            </div>
          </div>
        </motion.div>
      </div >
    </section >
  )
}

export default Hero;