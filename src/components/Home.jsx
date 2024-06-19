import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ArrowDown } from "./Icons";
import AB from "../assets/Ab.png"
import contactInfo from '../data/contactInfo';
import { Download } from './Icons';
import resume from "../assets/ola.pdf";

const home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
};

function Home() {
    const work = ['Frontend Developer', 2000, 'web Developer', 2000, 'Graphics Designer', 2000,];

    return (
        <div name='Home' className=' max-2xl:-mt-14 h-full min-h-screen w-full flex items-center '>
            <div className='section  max-md:flex-col-reverse max-md:mt-28 max-md:pt-20  gap-10 md:gap-1 md:justify-between  items-center md:flex-row-reverse  w-screen'>
                <div className=' flex  flex-col gap-3 text-center  text-gray-700 w-max md:w-4/5 lg:mt-40 md:mt-16 max-xs:px-4'>
                    <h1 className='text-5xl max-xs:text-3xl lg:text-8xl font-bold '>
                        <span className='block lg:text-7xl dark:text-gray-400 text-gray-600'>
                            Hi There
                            <span className='wave'>👋</span>
                        </span>
                        <span className='dark:text-gray-400 text-gray-600'>I'm </span>
                        <span className='text-transparent bg-gradient-to-br from-cyan-300 to-blue-600 bg-clip-text max-xs:text-4xl'> ABIODUN </span>
                    </h1>

                    <p className='text-gray-400 text-xl xs:text-2xl mx-auto  font-semibold py-4 min-w-[16rem] xs:min-w-[25rem] max-w-[26rem]'>
                        <span className='block xs:inline text-center dark:text-gray-400 text-gray-600 '> I am a</span>
                        <span className='text-cyan-400 xs:pl-2'>
                            <TypeAnimation
                                sequence={work}
                                speed={1}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity} />
                        </span>
                    </p>
                    <ul className="flex items-center z-40 gap-3 md:gap-8 lg:gap-4  mx-auto w-44">
                        {contactInfo.map(({ id, link, name, icon, download }) => {
                            return (
                                <li key={id} link={link} className={`bg-black  group relative w-8 h-8 flex justify-center items-center rounded-full p-1 sm:grayscale  cursor-pointer duration-[450ms] transition ease-in hover:grayscale-0 hover:scale-105 focus:grayscale-0 focus:scale-105 active:grayscale-0 active:scale-105`}>
                                    <a href={link} download={download} target="_blank" rel='noferrer'>{icon}</a>
                                    <div className="flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute z-50 -bottom-10 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300">
                                        {name}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className='py-5 -ml-40 max-lg:mx-auto '>
                        <div>
                            <Link to="About" smooth duration={500} className='z-30 group  mx-auto dark:bg-gradient-to-br from-aba to-blue-600 bg-black  flex items-center  justify-center  gap-3 px-3 py-3  rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-40 relative '>
                                <span className='pr-6 md:mx-auto sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[1000ms] ease-out text-white'>About Me</span>
                                <span className="absolute z-30 right-5 sm:-translate-y-7 sm:group-hover:translate-y-0 sm:scale-0 transition-all group-hover:scale-125 ease-in delay-200 animate-pulse duration-500 ">
                                    <ArrowDown />
                                </span>
                            </Link>
                        </div>

                        <div className='-mt-12 justify-center flex' >
                            <a href={resume} target="_blank" rel="noreferrer" download={true} className='z-30 max-lg:mt-16 group dark:bg-gradient-to-br from-aba to-blue-600 bg-black flex items-center justify-center gap-3   lg:ml-96 py-3  rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-44 relative'>
                                <span className='pr-6 sm:pr-0 sm:group-hover:-translate-x-5  sm:transition-transform delay-[1000ms] ease-out text-white'>Resume</span>
                                <span className="absolute right-5 sm:scale-0 transition-all group-hover:scale-100 ease-in delay-200 animate-pulse duration-500 ">
                                    <Download />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <img src={AB} alt="" style={{ width: "20rem", height: "20rem", }} loading='eager' className='image-element border-4 border-gray-600 dark:border-white border-double  xl:ml-2 ml-2 max-sm:w-52  mx-auto max-sm:h-52  ' />
                </div>

            </div>
        </div>
    );
}

export default Home;