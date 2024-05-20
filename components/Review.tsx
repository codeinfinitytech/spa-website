import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Review = () => {
  return (
    <section className=' bg-blue-100 py-24 flexCenter flexBetween gap-10 max-container padding-container flex sm:flex-row flex-col'>
      <div className='mb-5'>
        <Image 
        src={'/expression.png'}
        alt='client'
        width={400}
        height={400}
        />
      </div>
      <div className=' w-full md:w-[50%] mx-auto'>
        <h1 className=' md:bold-32 mb-10 text-3xl font-bold text-black/90'>Client's Expression</h1>
        <p className='mb-10 whitespace-wrap text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia, ad animi ea obcaecati accusamus aspernatur minima facere eum culpa maiores deserunt rerum! Distinctio rerum autem, aut consequuntur iste maiores! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae fugit debitis deserunt aliquid temporibus omnis amet praesentium ea voluptas aliquam corrupti rerum, odio sequi ut voluptatibus. Earum est aut atque! </p>
        <Button 
        type='button'
        title='Check Reviews'
        variant='btn_dark_pink'
        />
      </div>
    </section>
  )
}

export default Review