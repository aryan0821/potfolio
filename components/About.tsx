import React, { useMemo } from 'react'
import { motion } from 'framer-motion'


type Props = {}

export default function About({ }: Props) {
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-blue-200 text-4xl'>About</h3>
            <motion.img
                initial={{
                    x: -180,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="/prof_photo.png" alt="Aryan Nair"
                className='-mb-20 md:mb-0 flex-shrink-0 w-32 h-36 rounded-full object-cover md:rounded-lg md:w-40 md:h-60 xl:w-[300px] xl:h-[400px] my-10' />
            <div className="space-y-5 px-0 md:px-10">
                <h4 className='text-3xl font-semibold text-[#edf3f8]'>Here is a little background</h4>
                <p className='text-base'>Hey there! I'm Aryan Nair; I'm a Junior at UMass Amherst double majoring in Computer Science and Mathematics with a concentration in Data Science & Statistics. As someone passionate about software, naturally, I enjoy a challenge that forces me to think out of the box. My interests lie in the areas of AI/ML, Data Science, Product Management, Blockchain and Product Design. Feel free to connect with me regarding my interests or experience.</p>
            </div>
        </motion.div>
    )
}