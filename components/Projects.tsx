import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = { projs: any }

export default function Projects({ projs }: Props) {
    const projects = projs.Projs
    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-blue-200 text-3xl'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 items-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a2d0fa]/80'>
                {projects.map((project: { img: string; link: string; title: string; desc: string; }, i: number) => (
                    <div key={i}
                        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-20'>
                        <Image
                            width={400}
                            height={300}
                            className="h-[180px] w-[300px] md:h-[200] md:w-[340] xl:w-[350] xl:h-[210] object-cover border border-gray-300" src={project.img} alt="projects" />
                        <div className='space-y-8 px-0 md:px-10 max-w-5xl overflow-scroll max-h-[250px]'>
                            <h2 className='text-3xl md:text-4xl xl:text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#a2d0fa]'>Project {i + 1} of {projects.length}</span>
                                : <a href={project.link}>{project.title}</a>
                            </h2>

                            <p className='text-lg text-center md:text-left'>{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[23%] bg-[#0e4e9397] left-0 h-[450px] -skew-y-12'></div>
        </motion.div>
    )
}