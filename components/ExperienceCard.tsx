import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    img: string,
    position: string,
    company: string,
    date: string,
    skills: string[],
    desc: string[],
};

export default function ExperienceCard({ img, position, company, date, skills, desc}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-gradient-to-r from-[#044689] via-[#1a074d] to-[#3172b44b] p-8 
        hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            {/* Company logo */}
            <motion.img
                initial={{y:-100, opacity: 0}}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true}}
                src={img}
                className='rounded-full w-[75px] h-[75px] md:w-[90px] md:h-[90px] xl:w-[100px] xl:h-[100px] object-cover object-center border border-gray-300'
                alt={company}
            />
            {/* credentials */}
            <div className='px-0 md:px-7 w-full h-[300px] overflow-scroll'>
                <h4 className='text-2xl font-light'>{position}</h4>
                <p className='font-bold text-xl my-1'>{company}</p>
                <div className="flex space-x-2 my-1"> 
                    {/* Tech used */}
                    {skills.map((skill, index) => <img key={index} src={skill} className='h-8 w-8 rounded-full' />)}
                </div>
                {/* Dates */}
                <p className='uppercase py-2 text-gray-300'>{date}</p>

                {/* Summary */}
                <ul className='list-disc space-y-3 ml-5 text-lg'>
                    {desc.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </article >
    )
}