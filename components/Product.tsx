import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Product = () => {
  return (
    <section className='flex-col flex-center bg-[#ffeae3] overflow-hidden py-24'>
      <div className='max-container padding-container relative w-full block md:flex gap-4 justify-end'>
      <div className='w-full md:max-w-[50%]'>
        <h2 className='bold-20 lg:bold-32 mb-4 block gap-4'>Our Products</h2>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, tenetur fuga exercitationem veniam quae nulla magni! Earum, minus eveniet tempora eaque ipsam repellat, voluptatum explicabo animi dolore totam nisi cupiditate.</p>
        <span className='mt-10 mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla, amet nam repudiandae hic eligendi.</span>
        <div className='hidden md:block mt-10'>
        <Button 
        type='button'
        title='Go to store'
        variant='btn_dark_pink'
        />
        </div>
      </div>
      <div className='flex gap-6 mt-10'>
        <div className=''>
          <Image src={'/ritual.png'} alt='ritual' width={300} height={300} />
          <h5>Spa Ritual Scrub</h5>
          <span>$250.00</span>
        </div>
        <div>
          <Image src={'/deluxe.png'} alt='deluxe' width={300} height={300} />
          <h5>Deluxe Korean Scrub</h5>
          <span>$250.00</span>
        </div>
      </div>
      <div className='block md:hidden mt-10'>
        <Button 
        type='button'
        title='Go to store'
        variant='btn_dark_pink'
        />
        </div>
      </div>
    </section>
  )
}

export default Product