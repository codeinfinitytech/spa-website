import { BLOGS } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Calendar } from 'react-feather'

const Blog = () => {
  return (
    <section className='border border-yellow-200 '>
        <div className='max-container padding-container w-full'>
            <div>
                <h1 className='bold-32 md:bold-40 text-center flexCenter py-10'>Welcome To Home of Tranquility,<br /> Relaxation and Respite.</h1>
                <p className='text-center mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quos praesentium magni blanditiis culpa expedita nobis ab nihil deleniti. Facilis, ratione ipsa. Tempore saepe expedita modi cum officia, voluptatem reprehenderit!</p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                { BLOGS.map((blog) => (
                    <div className='' key={blog.name}>
                        <Image src={blog.image} alt={blog.name} width={400} height={500}/>
                        <div className='p-4 bg-black/80 text-gray-10 regular-14'>
                            <h3 className='bold-20'>{blog.name}</h3>
                            <div className='flex justify-end gap-1'>
                                <Calendar width={17} height={17} />
                                <span className=''>{blog.date}</span>
                            </div>
                            <p className='mt-4 mb-4'>{blog.sample.slice(0, 225) + ""}</p>
                            <u className='text-white'>{blog.button}</u>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog