import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import Button from './Button';
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';
import SecondButton from './SecondButton';

export default function Header({ name }) {
    return (
        <div className='mx-10'>
            <h1 className='text-7xl text-center mt-30'>{name}</h1>
            <div className='flex gap-10 mt-15'>
                <div className='h-1 w-130 bg-sky-700'></div>
                <p className='max-w-[400px]'> Experienced creative designer and custom artist based in London, blending innovation with artistic flair. Crafting captivating visuals that leave a lasting impression.
                </p>
            </div>

            <div className='flex items-center gap-100 mt-15'>
                <div className='flex items-center gap-2 text-xl'>
                    <FaInstagram />
                    <FaBehance />
                    <CiBasketball />
                </div>

                <Button text="Hire me" />
            </div>
            <div className='flex flex-col text-3xl items-center justify-center my-20 cursor pointer'>
                <MdKeyboardArrowDown className='-mb-5' />
                <MdKeyboardArrowDown className='-mb-5 text-gray-400' />
                <MdKeyboardArrowDown className='-mb-5 text-gray-400' />
            </div >

            <div className='flex items-center justify-center gap-x-15 mx-3'>
                <div >
                    <Image src='/profile pic.jpg' alt='Ann' height={300} width={900} />
                </div>
                <div className='flex flex-col gap-y-10'>
                    <h2 className='text-7xl'>Creating design that <span className='text-orange-600'>ignite</span> responses</h2>
                    <p>
                        Direct your energy towards growing your business, and entrust me with the task of efficiently presenting your business in the digital world, setting it apart from competitors.
                    </p>
                    <SecondButton text="About Me" />
                </div>

            </div>
            <div className='flex font-bold text-9xl justify-center px 20'id='About'>ABOUT ME</div>
              <div className='flex font-bold text-9xl justify-center px 20'id='Projects'>PROJECTS</div>


            <div className='text-5xl font-bold'>
                <p>I provide artistic <span className='text-orange-600'>solutions</span>  to </p>
                <p> meet your business</p>
                <p> requirements.</p>
            </div>

            <div className='flex items-center justify-between gap-x-15 mx-10 my-20'>

                <div> <img src="/image1.webp" alt="note" width={400} height={400} />
                    <p>My services blend creativity and strategy to bring your vision to life, leaving a lasting impact.</p>
                </div>
                <div></div>
            </div>
        </div >
    )

}
