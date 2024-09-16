import React from 'react'
import { GMail, Map, CopyRight, ArrowRightLong } from './Icons'
import { Link } from 'react-scroll'
import navLinks from '../data/navlinks'
import contactInfo from '../data/contactInfo'
const Footer = () => {
    const year = new Date().getFullYear().toString()
    return (
        <div className='w-full  text-gray-600 max-xs:px-5'>
            <div className="section footer pb-5 max-xs:px-4">
                <div className="flex flex-wrap xs:pl-3 md:px-0 justify-between dark:text-gray-400 text-gray-600">
                    <div className="w-full sm:w-3/5 lg:w-2/5 pr-2">
                        <h3 className='text-gray-600 text-[1.75rem] font-bold pb-2'>Oladiti Abiodun</h3>
                        <p className='text-lg text-gray-500 pb-5'>Frontend Developer</p>
                        <p>Thanks for visiting my Personal Portfolio.</p>
                        <p>Lets connect over socials.</p>
                        <p>Open to any Feedback</p>
                    </div>
                    <div className="w-full xs:w-2/5 mt-8 sm:w-2/5 sm:mt-0 lg:w-[30%] sm:pl-20 lg:pl-12 justify-start">
                        <h3 className='text-gray-600 text-[1.35rem] xs:text-2xl font-bold pb-4'>Quick Links</h3>
                        {navLinks.map(({ link, id }) => {
                            return (
                                <div key={id} className="group w-fit px-3 pt-1 ">
                                    <Link to={link} smooth duration={500}>
                                        <div className="flex items-center justify-between w-fit gap-2 font-semibold cursor-pointer">
                                            <ArrowRightLong />
                                            <span className='bg-clip-text bg-aba group-hover:text-aba duration-500 group-hover:animate-pulse '>
                                                {link}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full mt-8 xs:w-3/5 sm:w-full lg:mt-0 lg:w-[30%] lg:pl-16">
                        <h3 className=' text-gray-600 text-2xl font-bold pb-4 max-xs:text-center '>Contact Information</h3>
                        <div className="flex  flex-col sm:flex-row lg:flex-col  gap-5 xs:gap-10 sm:gap-5 md:gap-10 justify-between">
                            <div className='text-[0.9rem] font-advanced   mt-2'>
                                <p className='flex items-center max-xs:justify-center dark:text-gray-400  gap-3 mb-1'>
                                    <GMail /> oladitiabiodun86@gmail.com
                                </p>
                                <p className='flex  items-center max-xs:justify-center max-xs:pl-9 '>
                                    <Map /><span className="pt-4 dark:text-gray-400 max-xs:mx-3 xl:px-4 ">127,Bamgbose Street, Lagos Island, Nigeria.</span>
                                </p>
                            </div>
                            <ul className="flex items-center max-xs:px-9 gap-5 md:gap-3 justify-start">
                                {contactInfo.map(({ id, link, name, icon, download }) => {
                                    return (
                                        <li key={id} className={` bg-gray-900 group relative w-8 h-8 flexs max-xs:mx-auto justify-center items-center rounded-full p-1 sm:grayscale  cursor-pointer duration-[450ms] transition ease-in hover:grayscale-0 hover:scale-105 focus:grayscale-0 focus:scale-105 active:grayscale-0 active:scale-105`}>
                                            <a href={link} download={download} target="_blank" rel='noferrer'>{icon}</a>
                                            <div className="flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute -bottom-10 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300">
                                                {name}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="section py-6 font-advanced">
                <div className="">
                    <p className=' text-md  dark:text-gray-400 flex justify-center items-center '>
                        <span className="px-1 pb-[0.2rem]">  <CopyRight /></span> {`2022- ${year}`} | All Rights Reserved</p>
                </div>
            </div>
        </div >
    )
}

export default Footer
