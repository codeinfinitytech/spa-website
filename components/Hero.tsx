import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center h-[100vh] justify-center'>
      <div className='bg-gradient-to-tr to-[#000000] from-[#282525] absolute opacity-90 top-0 -z-10 w-full h-full'>
        <div className='absolute opacity-70 h-full w-full flex items-center justify-center -z-20 overflow-hidden'>
          <Image 
          src={`/pexels-olly.jpg`}
          alt='background'
          layout='fill'
          objectFit='cover'
          />
        </div>
        <div className='z-20 md:w-3/5 text-white padding-container my-64'>
          <h1 className='bold-40 md:bold-52 lg:bold:88'>Beauty &amp; <br />SPA Center</h1>
          <p className='regular-16 mt-6 mb-10 '>It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <Button 
          type='button'
          title='Our services'
          variant='btn_pink'
          />
        </div>
      </div>

    </div>
  )
}

export default Hero