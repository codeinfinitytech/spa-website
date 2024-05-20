import { SERVICE } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Service = () => {
  return (
    <section className=' pb-10'>
      <div className='flex'>
        {/* <div className='h-[10vw] w-full'>
        <Image 
        src={'/pexels-cottonbro.jpg'}
        alt='service'
        width={1440}
        height={720}
        />
        </div> */}
        <div className='w-1/2 '></div>
      <div className='padding-container max-container mx-auto flexCenter'>
        <div className='mt-10'>
          <h2 className='bold-20 lg:bold-32 pb-8 '>Our Spa Hot Service</h2>
          <p className='text-gray-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam enim quod vero eaque sequi, cum magni atque. Quod cum tenetur iure, dicta perspiciatis eos dolorum necessitatibus ut recusandae, laboriosam quo.</p>  
          <ul className='block lg:flex lg:flex-wrap gap-7 p-4 '>
            { SERVICE.map((tip) => (
              <Link href={'/services'} key={tip.name}>
                <div className=''>
                  <Image src={tip.image} alt={tip.label} width={200} height={200} />
                  <h4 className='bold-20'>{tip.name}</h4>
                  <span className='text-gray-50'>{tip.amount}</span>
                </div>
              </Link>
            ))}
          </ul>
        </div>     
      </div>
    </div>
    </section>
  )
}

export default Service