import Link from 'next/link'
import React from 'react'

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
        <li className='active:text-orange-500 hover:text-orange-500'>
          <Link href="/logo">Logo</Link>
        </li>
        <div className='flex items-center gap-5'>
          <li className='active:text-orange-500 hover:text-orange-500'>
            <Link href="#blogs">Blogs</Link>
          </li>
          <li className='active:text-orange-500 hover:text-orange-500'>
            <Link href="#contact">Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}
