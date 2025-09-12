import React from 'react'
import FooterLink from './FooterLink'
export default function Footer() {
    return (
        <footer className='mx-20'>
            <div className='flex items-start'>
                <h3>Logo</h3>

                <div className='flex gap-20 ml-80'>

                    <ul>
                         <h2 className='font-bold mb-4'>Sitemap</h2>
                        <FooterLink li="Home" link="/home" />
                        <FooterLink li="Work" link="/work" />
                        <FooterLink li="About" link="/about" />
                        <FooterLink li="Blog" link="/blog" />
                    </ul>
                    <ul>

                         <h2 className='font-bold mb-4'>Resources</h2>
                        <FooterLink li="Styleguide" link="/styleguide" />
                        <FooterLink li="Changelog" link="/changelog" />
                        <FooterLink li="Licences" link="/licences" />
                        <FooterLink li="404" link="/not-found" />
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
