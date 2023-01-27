import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
    img: string;
    progress: number;
};

function Skill({ img, progress }: Props) {
    return (
        <motion.div
            initial={{
                x: 80,
                opacity: 0,
            }}
            transition={{
                duration: 1,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }} className='group relative flex cursor-pointer'>
            <Image
                src={img}
                alt='skill'
                width={50}
                height={50}
                className='rounded-full border border-blue-200 object-cover w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] filter group-hover:grayscale ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-[60px] w-[60px] xl:w-[80px] xl:h-[80px] rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-black opacity-100'>{progress}%</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Skill;