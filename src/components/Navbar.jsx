import React, { useState } from 'react';
import HamBurgerMenu from './HamBurgerMenu';
import Navigation from './Navigation';
// import Logo from '../assets/logo.png';
import { Logo } from './Icons';
import toggleLight from '../assets/dark-moon.png';
import toggleDark from '../assets/light-moon.png';


const Navbar = ({ theme, setTheme }) => {

    const toggleMode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }


    const [navOpen, setNavOpen] = useState(false);
    const handleClick = () => {
        setNavOpen(prevValue => !prevValue)
    }


    return (
        <>
            {/* <div className='fixed w-full max-w-[100vw] h-4 dark:bg-white'xl:-ml-24> */}
            <div className='fixed    w-full max-w-[100vw] shadow-2xl bg-gradient-to-b from-white  via-white to-transparent z-50 bg-opacity-[0.9] border-b-2 border-gray-500'>

                <div className=' bg-white dark:bg-black duration-500 flex justify-between md:pr-40 items-center px-5 max-xl:px-4 max-w-screen-2xl py-2'>
                    <div className='  md:ml-16 md:pl-1 xs:ml-9  max-xs:-ml-1 sm:ml-8'>
                        <a href="/" className=' cursor-pointer'><Logo /></a>
                        {/* <a href="/"><img src={Logo} alt="" style={{ width: 58, height: 57 }} /></a> */}
                    </div>
                    <Navigation ulClass="hidden md:flex  " liClass="" />
                    <HamBurgerMenu handleClick={handleClick} navOpen={navOpen} />

                    <Navigation handleClick={handleClick} ulClass={`${navOpen ? "-translate-x-0 " : "translate-x-full"} duration-700 ease-in-out flex flex-col h-screen bg-white dark:bg-black w-screen  top-0 right-0 absolute items-center justify-center md:scale-0`} liClass="my-4 py-2 text-lg" />


                </div>
                <div className='moon flex justify-end -mt-16 pt-1 cursor-pointer  max-xs:mr-14  mx-auto md:pr-1'>
                    <img onClick={() => toggleMode()} src={theme == 'light' ? toggleLight : toggleDark} alt="" style={{ width: 25, height: 25 }} className='toggle-icon mt-3 md:mr-20 max-xs:mr-2 xs:mr-24' />
                </div>
            </div>

            {/* <div className="md:hidden h-20 w-full bg-white "></div> */}

        </>
    )
}

export default Navbar;