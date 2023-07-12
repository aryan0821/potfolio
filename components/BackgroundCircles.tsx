import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

export default function BackgroundCircles({ }: Props) {
    return (
        <div className='relative flex justify-center items-center'>
            <div className='absolute border border-[#c6d5f4] rounded-full h-[146px] w-[146px] mt-52 animate-pulse' />
            <div className='absolute border border-[#c3e0f7] rounded-full h-[165px] w-[165px] mt-52 animate-pulse' />
            {/* <div className='rounded-full border border-[#fffdfd] h-[250px] w-[250px] absolute mt-52 opacity-10 animate-pulse-slow1' />
            <div className='rounded-full border border-[#ffffff] h-[375px] w-[375px] absolute mt-52 opacity-10 animate-pulse-slow2'/>
            <div className='rounded-full opacity-10 border border-[#ffffff] h-[450px] w-[450px] absolute mt-52 animate-pulse-slow3' />
            <div className='rounded-full border border-[#f1f1f5] h-[570px] w-[570px] absolute mt-52 opacity-10 animate-pulse-slow4' /> */}
        </div>
    )
}