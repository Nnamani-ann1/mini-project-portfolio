import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <ul className='flex items-center gap-15 justify-between mx-10 my-8 font-bold text-lg'>
        <div className='flex item-center gap-5'>
          <li className='active:text-orange-500 hover:text-orange-500'>
            <Link href="/">Home</Link>
          </li>
          <li className='active:text-orange-500 hover:text-orange-500'>
            <Link href="#about">About</Link>
          </li>
          <li className='active:text-orange-500 hover:text-orange-500'>
            <Link href="#project">Projects</Link>
          </li>
        </div>
        <li>
            <Image src="/FullLogo.jpg" alt="logo" width={80} height={80} className='rounded-2xl'/>
        </li>
        <div className='flex items-center gap-5'>
          <li className='active:text-orange-500 hover:text-orange-500'>
            <Link href="#contact">Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}
