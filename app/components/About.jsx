"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import AboutImg from '/public/images/about-image.png';
import TabButton from './AboutTabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li> Adobe Creative Cloud<br></br>
          <p style={{ marginBottom: '0.5rem' }} className='text-[#828D93] text-sm '> Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe XD</p>
        </li>
        <li> Microsoft Office <br></br>
          <p style={{ marginBottom: '0.5rem' }} className='text-[#828D93] text-sm '> Microsoft Word, Microsoft Powerpoint, Microsoft Excel</p>
        </li>
        <li> Web Development <br></br>
          <p style={{ marginBottom: '0.5rem' }} className='text-[#828D93] text-sm '> HTML, CSS, Javascript, React JS</p>
        </li>
        <li> Packaging Software <br></br>
          <p className='text-[#828D93] text-sm '> Esko</p>
        </li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Graphics Specialist<br></br><a href='https://www.instagram.com/chichima_ivdriptherapy/' className='text-[#828D93] hover:underline text-sm'> Chichima IV Drip Therapy</a> <strong className='text-[#828D93] text-sm '> 2023 </strong></li>
        <li style={{ marginBottom: '0.2rem' }}> Art Director<br></br><a href='https://wearyourbrand.co.za' className='text-[#828D93] hover:underline text-sm'> <span className='italic'>  </span> Wear Your Brand</a><strong className='text-[#828D93] text-sm'> 2022 </strong> </li>
        <li style={{ marginBottom: '0.2rem' }}>Graphic Lead<br></br> <a href='https://wearyourbrand.co.za' className='text-[#828D93] hover:underline text-sm'> <span className='italic'> </span> Go-Graphics Creative Agency</a><strong className='text-[#828D93] text-sm'> 2021-2022 </strong> </li>
        <li style={{ marginBottom: '0.2rem' }}> Graphic Lead <br></br><a href='https://www.snazzisolutions.co.za' className='text-[#828D93] hover:underline text-sm'> <span className='italic'> </span> Snazzi Solutions</a>  <strong className='text-[#828D93] text-sm'> 2021 </strong>  </li>
        <li> Graphic Designer<br></br> <a href='https://www.snazzisolutions.co.za' className='text-[#828D93] hover:underline text-sm'> <span className='italic'> </span> Jonsson Workwear</a>  <strong className='text-[#828D93] '> 2020 </strong></li>

      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li style={{ marginBottom: '0.5rem' }}> University of Johannesburg <br></br>
          <li className='text-[#828D93] text-sm '> BSc. Information Technology in Computer Science & Informatics<span style={{ fontStyle: 'italic ' }}> (pending)</span></li>
        </li>
        <li style={{ marginBottom: '0.5rem' }}> Vega School of Brand Leadership <br></br>
          <li className='text-[#828D93] text-sm '> BA. Creative Brand Communication </li>
        </li>
        <li > Durban Girls&apos; High School <br></br>
          <li className='text-[#828D93] text-sm '> National Senior Certificate </li>
        </li>
      </ul>
    )
  }
];


const About = () => {

  useEffect(() => {
    // This code will only run on the client side
    if (typeof window !== 'undefined') {
      // Place your client-only logic here
      console.log("Component mounted on the client side");
    }

    // Cleanup function (if needed)
    // For now, there's no cleanup needed, so leaving it empty
  }, []);
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };



  return (
    <section id="about" className='text-[#adb7be]'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
        <Image src={AboutImg} alt='About Image' width={600} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4 mt-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            My design philosophy revolves around the belief that every project is an opportunity to create something extraordinary. I thrive on the balance between aesthetics and functionality, crafting designs that not only look stunning but also serve a purpose. From brand identity and print materials to digital interfaces, I approach each project with creativity and precision.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}>
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              Education
            </TabButton>
          </div>
          <div className='mt-6 text-white'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;