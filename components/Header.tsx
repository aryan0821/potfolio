import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-row items-center">
                {/* Icons */}
                <SocialIcon url="https://www.linkedin.com/in/aryan-nair-517b67106" fgColor='white' bgColor='transparent' />
                <SocialIcon url="https://github.com/aryan0821" fgColor='white' bgColor='transparent' />
            </motion.div>
            
            <Link href="#contact">
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon className='cursor-pointer transition-all' network='email' fgColor='white' bgColor='transparent' />
                <h2 className='uppercase hidden md:inline-flex text-sm text-white-400 transition-all hover:border-[#a2d0fa] hover:text-[#a2d0fa] font-bold '>Contact Me!</h2>
                </motion.div>
            </Link>
        </header>
    )
}