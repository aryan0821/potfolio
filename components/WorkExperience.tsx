import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'


type Props = {exps : any}

export default function WorkExperience({ exps }: Props) {
    const expsList = exps.experiences
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-blue-200 text-3xl'>Experience</h3>
            
            <div className='w-full flex space-x-4 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a2d0fa]/80'>
                {expsList.map((experience: { img: string; skills: string[]; position: string; company: string; desc: string[]; date: string; }) => <ExperienceCard img={experience.img} skills={experience.skills} position={ experience.position} company={experience.company} desc={experience.desc} date={experience.date} />)}
            </div>
            
        </motion.div>
    )
}