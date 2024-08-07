
import React, { Component } from 'react';
import profile from "../assets/aboutpic.png"
import SectionHeading from './SectionHeading';
import techStack from '../data/techStack';


class About extends Component {
    render() {
        return (
            <>
                <div name='About' className='xl:pt-4 max-xs:pt-16 xs:pt-24 lg:pt-32 md:pt-20 md:pb-14    mb-64  xl:mb-72 max-xs:mb-48' >
                    <div className=' max-xs:ml-5 xs:ml-10 sm:ml-8 md:pl-2  md:ml-16 lg:ml-16'>
                        <SectionHeading heading="About Me" />
                    </div>

                    <div className='section  max-xs:-my-10 md:-mt-14 xl:pb-40   flex-col justify-between   lg:flex-row '>
                        <div className='mb-5  flex flex-col justify-center xl:ml-3'>
                            <img src={profile} alt="Profile" width="auto" height="auto" loading='lazy' className=' md:mt-20 xs:-mt-6 xl:mt-4  cursor-pointer grayscale hover:grayscale-0 hover:scale-[1.02] transition-all delay-75 border-4 border-transparent hover:border-aba duration-300 rounded-2xl min-w-[240px] w-1/2 mx-auto  md:w-[270px]' />
                        </div>
                        <div className="lg:mt-12 text-center flex flex-col px-4 xs:-ml-10 xs:px-14 sm:px-11 sm:-ml-10 lg:ml-20 lg:px-0 md:-ml-20 md:px-24 max-xs:px-5 md:py-0 w-screen  dark:text-gray-400 text-gray-600">
                            <br></br>
                            <br></br>
                            <p className='max-xs:px-4 lg:px-5 max-xs:-mt-12'>
                                I am a passionate front-end web developer who is dedicated and certified in creating visually appealing and user-friendly websites.
                                My strong grasp of HTML, CSS, and JavaScript enables me to effectively transform design concepts into functional and interactive web pages.
                                Utilizing frameworks like React Js and Tailwind CSS, I have the ability to develop responsive and dynamic websites.
                                I stay up-to-date with the latest industry trends and value collaboration and clear communication, making me an invaluable member of any team.
                                I thoroughly enjoy working alongside designers, back-end developers, and stakeholders to bring projects to fruition.
                                In my free time, I actively research new web technologies and provide guidance to aspiring developers.
                                With my unique blend of creativity, technical expertise, and enthusiasm,
                                I am poised to make significant contributions to the field of front-end development.
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