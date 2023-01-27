import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
    img: string;
    progress: number;
};

function Skill({ directionLeft, img, progress }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                src={img}
                className='rounded-full border border-blue-200 object-cover w-[75px] h-[75px] xl:w-[80px] xl:h-[80px] filter group-hover:grayscale ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-[75px] w-[75px] xl:w-[80px] xl:h-[80px] rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-black opacity-100'>{progress}%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill;