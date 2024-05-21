import { NAV_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='border border-green-50 flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
            <Image src="/cosma.png" alt='logo' width={74} height={29} />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            { NAV_LINKS.map((nav) => (
                <Link href={nav.href} key={nav.key} className='bold-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                    {nav.label}
                </Link>
            ))}
        </ul>
        <div className='hidden lg:flexCenter'>
            <ul className='regular-14 flex gap-4'>
            { SOCIALS.links.map((link) => (
                <Link href="/" key={link} className='border border-white  rounded-full p-2 hover:brightness hover:invert-0 hover:bg-[#FBA88F] hover:text-white'>
                    <Image src={link} alt='social' width={24} height={24} className='brightness-0 invert hover:invert-0' />
                </Link>
            ))}
            </ul>
        </div>
        <div className='lg:flexCenter hidden'>
            <Button
            type='button'
            title='Contact us'
            icon= ''
            variant='btn_pink'
            />
        </div>
        <Image 
        src="menu.svg"
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
        />
    </nav>
  )
}

export default Navbar