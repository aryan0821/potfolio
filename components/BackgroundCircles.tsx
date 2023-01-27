import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

export default function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 2.5,
            }}
            className='relative flex justify-center items-center'>
            <div className='absolute border border-[#fafafa] rounded-full h-[100px] w-[100px] mt-52 animate-ping' />
            <div className='rounded-full border border-[#fffdfd] h-[250px] w-[250px] absolute mt-52 opacity-10 animate-pulse-slow1' />
            <div className='rounded-full border border-[#ffffff] h-[375px] w-[375px] absolute mt-52 opacity-10 animate-pulse-slow2'/>
            <div className='rounded-full opacity-10 border border-[#ffffff] h-[450px] w-[450px] absolute mt-52 animate-pulse-slow3' />
            <div className='rounded-full border border-[#f1f1f5] h-[570px] w-[570px] absolute mt-52 opacity-10 animate-pulse-slow4' />
        </motion.div>
    )
}