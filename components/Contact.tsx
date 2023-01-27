import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    message: string;
    subject: string;
};

type Props = {}

export default function Contact({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:aryannair@umass.edu?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-blue-200 text-3xl'>Contact</h3>
            <div className='flex flex-col space-y-8'>
                <h4 className='text-2xl font-normal text-center'>I would love to connect. <span className="underline decoration-[#a2d0fa]">Let's Talk</span></h4>
                <div className='space-y-8'>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='h-7 w-7 text-blue-200 animate-pulse' />
                        <p className='text-2xl'>aryannair@umass.edu</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='h-7 w-7 text-blue-200 animate-pulse' />
                        <p className='text-2xl'>Amherst, MA</p>
                    </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-1 w-fit'>
                        <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
                        <input {...register('email')} placeholder="Email" className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder="Subject" className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder="Message" className='contactInput'></textarea>
                    <button type="submit" className='bg-gradient-to-r from-[#044689] via-[#4c9ae2] to-[#a2d0fa] py-3 px-10 rounded-lg text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}