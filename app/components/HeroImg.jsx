import React from 'react';
import Image from 'next/image';
import ProPic from 'public/images/profile-pic.png';

const HeroImg = () => {
  return (
    <div >
      <Image src={ProPic}
        width={350}
        height={350}
        alt="Hero Image"
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
      />
    </div>

  )
}
export default HeroImg;