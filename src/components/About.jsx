
import React, { Component } from 'react';
import profile from "../assets/aboutpic.png"
import SectionHeading from './SectionHeading';
import techStack from '../data/techStack';


class About extends Component {
    render() {
        return (
            <>
                <div name='About' className='xl:pt-20 max-xs:pt-24 xs:pt-24 lg:pt-32 md:pt-20 md:pb-14    mb-64  xl:mb-72 max-xs:mb-48' >
                    <div className=' max-xs:ml-5 xs:ml-10 sm:ml-8 md:pl-2  md:ml-16 lg:ml-16'>
                        <SectionHeading heading="About Me" />
                    </div>

                    <div className='section  max-xs:-my-10 md:-mt-14 xl:pb-40   flex-col justify-between   lg:flex-row '>
                        <div className='mb-5  flex flex-col justify-center'>
                            <img src={profile} alt="Profile" width="auto" height="auto" loading='lazy' className=' md:mt-20 xs:-mt-6 xl:mt-4 brightness-150 cursor-pointer grayscale hover:grayscale-0 hover:scale-[1.02] transition-all delay-75 border-4 border-transparent hover:border-aba duration-300 rounded-2xl min-w-[240px] w-1/2 mx-auto  md:w-[270px]' />
                        </div>
                        <div className="lg:mt-12 text-center flex flex-col px-4 xs:-ml-10 xs:px-14 sm:px-11 sm:-ml-10 lg:ml-20 lg:px-0 md:-ml-20 md:px-24 max-xs:px-5 md:py-0 w-screen  dark:text-gray-400 text-gray-600">
                            <div className=' max-xs:mx-3'>
                                <h4 >Hey there,</h4>
                                <h1>I'm Oladiti Abiodun</h1>
                                <h3>Front end Web <u>Developer</u> | Graphics <u>Designer</u></h3>
                            </div>
                            <br></br>
                            <p className='max-xs:px-4 lg:px-5'>
                                I am a certified Web Developer with two years of experience,
                                who is  passionate about creating innovative solutions to challenging problems,
                                also a highly motivated individual who always looking out for ways to enhance my skills
                                by constantly learning new trend in technology to stay ahead of the curve.
                                If you are looking for a Web Developer who is experienced, motivated, and dedicated to excellence,
                                then I am your ideal candidate. I look forward to hearing from you and discussing how I can help you achieve your business goals.
                            </p>
                            <div className='mt-3 dark:text-gray-400 text-gray-600 '>  My Tech Stack
                                <ul className=' flex gap-5 z-40 flex-wrap pt-2 max-xs:mb-28 justify-center items-center  max-xs:px-2 '>
                                    {
                                        techStack.map(({ id, icon, name }) => {
                                            return (
                                                <li key={id} className=" relative list-none group rounded-full w-10 h-10 ">
                                                    <span className='z-20'>
                                                        {icon}
                                                    </span>
                                                    <div className="flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute z-50 -bottom-10 left-1/2 -translate-x-1/2 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300">
                                                        {name}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default About