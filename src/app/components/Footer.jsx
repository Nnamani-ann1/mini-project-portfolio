import React from 'react'
import FooterLink from './FooterLink'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='mx-20'>
            <div className='flex items-start'>
                <Image src="/FullLogo.jpg" alt="logo" width={80} height={80} className='rounded-2xl'/>

                <div className='flex gap-20 ml-80'>

                    <ul>
                         <h2 className='font-bold mb-4'>Sitemap</h2>
                        <FooterLink li="Home" link="/home" />
                        <FooterLink li="Work" link="/work" />
                        <FooterLink li="About" link="/about" />
                        
                    </ul>
                  
                    <ul>
                        <h2 className='font-bold mb-5'>Socials</h2>
                        <FooterLink li="Facebook" link="/facebook" />
                        <FooterLink li="Twitter" link="/twitter" />
                        <FooterLink li="Instagram" link="/instagram" />
                        <FooterLink li="LinkedIn" link="/linkedin" />
                    </ul>
                </div>
            </div>
            <div className='mb-18'>
                <p>&copy;The ann nnamani. All rights reserved</p>
            </div>
        </footer>
    )
}
