import { SPAPRICING, THERAPYPRICING } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <section className='py-12 text-black/80'>
      <div className='max-container padding-container relative w-full gap-4'>
        <h1 className='bold-32 lg:bold-40 mb-4 block gap-4 flexCenter'>Spa &amp; Therapy Pricing</h1>
        <p className='flexCenter md:w-[80%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia provident officiis molestiae ad fugiat. Doloremque accusantium iusto fuga voluptatibus, adipisci voluptate quaerat a quidem fugiat numquam, amet exercitationem accusamus?</p>
      <div className='w-full py-10 block md:flex md:justify-between items-center justify-center'>

        <ul className='bold-16 w-full md:max-w-[40vw] bg-[#fff8f6] px-8 py-3 text-gray-90
  } gap-4 p-4 mb-5'>
          <h2 className='bold-20 md:bold-32 lg:bold-40 flexCenter mb-10'>Spa Pricing</h2>
          { SPAPRICING.map((service) => (
            <div className='p-2 flex gap-10 justify-between' key={service.id}>
                <p className=''>{service.title}  &nbsp;...........</p>
                <span>${service.price}</span>
            </div>
          )) }
        </ul>
        <ul className='bold-16 w-full md:max-w-[40vw] bg-[#fff8f6] px-8 py-3 text-gray-90
  } gap-4 p-4'>
          <h2 className='bold-20 md:bold-32 lg:bold-40 flexCenter mb-10'>Therapy Pricing</h2>
          { THERAPYPRICING.map((service) => (
            <div className='p-2 flex gap-10 justify-between' key={service.id}>
                <p className=''>{service.title}  &nbsp;...........</p>
                <span>${service.price}</span>
            </div>
          )) }
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Work