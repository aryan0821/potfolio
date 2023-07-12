import Link from 'next/link';
import React from 'react'
import { useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';


type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["CS + Math @ UMass", "Aspiring SWE", "Perpetual Learner", "Passionate Coder"],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Image alt="Aryan" src="/aryan-edit.png" width="100" height="100" className="relative rounded-full h-36 w-36 mx-auto object-cover z-20" />
            <div className='z-20 xl:w-screen md:w-screen max-md:w-80 sm:w-80'>
                <h2 className='text-sm uppercase text-gray-200 pb-2 tracking-[10px] font-semibold'>Hey I'm Aryan</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3 text-2xl md:text-5xl xl:text-5xl'>{text}</span>
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