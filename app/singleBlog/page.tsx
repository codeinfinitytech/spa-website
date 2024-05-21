import { BLOGS } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Calendar } from 'react-feather'

const page = () => {
  return (
    <section>
        <div className='border border-red-400 max-container padding-container'>
            <div className=''>
               <h2 className='text-center my-12'>Date</h2>
            </div>
            <div className='border border-green-800 items-center mx-auto'>
                <h2 className='bold-32 md:bold-40 text-center'>Blog Title</h2>
                <div className='flexCenter'>
                    <Image 
                    src={'/deluxe.png'}
                    alt='deluxe'
                    width={500}
                    height={100}
                    className='w-full h-[40%]'
                    />
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio provident voluptatibus culpa eum a, fugit, totam, velit commodi autem incidunt repellat. Optio dolores, accusamus enim maiores quo quisquam! Atque!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nisi asperiores minus unde, sequi modi error aspernatur ipsam praesentium, nostrum atque excepturi quos provident ullam! Quo odio animi blanditiis laboriosam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure placeat ipsam magni aliquam quia quos, qui omnis hic rem nam accusamus illo quasi vitae itaque eveniet? Vero, magni quod.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum similique officia et repudiandae ipsum exercitationem, aperiam neque eveniet unde incidunt saepe temporibus laudantium velit, fugit ut sequi vel quidem?
                
            </div>
        </div>
    </section>
  )
}

export default page