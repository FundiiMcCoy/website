"use client";
import React, { useState } from 'react';
import BehanceIcon from '/public/images/icon-behance.svg';
import LinkedInIcon from '/public/images/icon-linkedin.svg';
import MediumIcon from '/public/images/icon-medium.svg';
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };
    const JSONData = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Corrected header
      },
      body: JSONData,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  };


  return (
    <section
      id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"> </div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&apos;s connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {""}
          I&apos;m always open to new opportunities and collaborations. If you have a project that demands a senior designer&apos;s touch, let&apos;s connect!

        </p>
        <div className='mt-4 mb-4 p-4 line-spacing-1.5px'>
          <Link href={'//mailto:hello@fundidev.co.za'} typeof='button' > <span className='text-[#ADB7BE]'>Email: </span> <span className='text-purple-500 hover:text-purple-600'>fundilemcoyi@gmail.com</span>  </Link>
          <br></br>
          <Link href={'//mailto:hello@fundidev.co.za'} typeof='button' > <span className='text-[#ADB7BE]'>Whatsapp: </span> <span className='text-purple-500 hover:text-purple-600'>+27 61 806 97 82</span>  </Link>
        </div>

        <div className='socials flex flex-row gap-8'>
          <Link href={"https://www.behance.net/aliment_fundi"}>
            <Image src={BehanceIcon}
              alt='Behance Icon'
              width={40}
              height={40} />
          </Link>
          <Link href={"https://www.linkedin.com/in/fundile-nomfundo-mcoyi/"}>
            <Image src={LinkedInIcon}
              alt='Linkedin Icon'
              width={40}
              height={40} />
          </Link>
          <Link href={"https://medium.com/@fundilemcoyi"}>
            <Image src={MediumIcon}
              alt='Medium Icon'
              width={40}
              height={40} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className='text-green-500 text-sm mt-2'> Email Sent Successfulls!</p>
        ) : (
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label htmlFor='email'
                type='email'
                className='text-white block mb-4 text-sm font-medium'>
                Your Email
              </label>
              <input
                name='email'
                type='email'
                id='email'
                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '
                required placeholder='yourname@domain.com' />
            </div>
            <div >
              <label htmlFor='subject'
                className='text-white block mb-4 text-sm font-medium'>
                Subject
              </label>
              <input
                name='subject'
                type='text'
                id='subject'
                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '
                required placeholder='Let&apos;s connect :)' />
            </div>
            <div className='mb-6'>
              <label htmlFor='message'
                className='text-white block text-sm mb-4 mt-6 font-medium'>
                Message
              </label>
              <textarea name='message'
                id='message'
                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full  p-2.5'
                placeholder='I have a project in mind that I believe aligns perfectly with your skill set and design philosophy. I am eager to discuss ...' />
            </div>
            <button type='submit'
              className='bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2.5 rounded-lg w-full'>Send Message</button>
          </form>
        )}

      </div>

    </section >
  )
}

export default Contact