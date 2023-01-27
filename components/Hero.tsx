import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';


type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hello, I'm Aryan.", "I'm a Software Developer.", "I'm a Perpetual Learner"],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img src="/aryan-edit.png" className="relative rounded-full h-36 w-36 mx-auto object-cover z-20" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-200 pb-2 tracking-[15px] font-semibold'>CS + Math @ UMASS</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#048AAA' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}