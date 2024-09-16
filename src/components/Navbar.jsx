import React, { useState } from 'react';
import HamBurgerMenu from './HamBurgerMenu';
import Navigation from './Navigation';
import Logo from '../assets/logo.webp';
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
            <div className='fixed -mt-2   w-full max-w-[100vw] shadow-2xl bg-gradient-to-b from-white  via-white to-transparent z-50 bg-opacity-[0.9] border-b-2 border-gray-500'>

                <div className=' bg-white dark:bg-black duration-500 flex justify-between  items-center max-xs:-mr-1 max-xl:px-4 max-w-screen-2xl'>
                    <div className=' xs:ml-5 max-xs:ml-0 sm:ml-3 max-lg:-mr-4  mt-3.5'>
                        
                        <a href="/"><img src={Logo} alt="" style={{ width: 80, height: 75 }}  className='  max-md:ml-2 xl:ml-14 md:ml-11' /></a>
                    </div>
                    <Navigation ulClass="hidden md:flex md:mr-28  " liClass="" />
                    <HamBurgerMenu handleClick={handleClick} navOpen={navOpen} />

                    <Navigation handleClick={handleClick} ulClass={`${navOpen ? "-translate-x-0 " : "translate-x-full"} duration-700 ease-in-out flex flex-col h-screen bg-white dark:bg-black w-screen  top-0 right-0 absolute items-center justify-center md:scale-0`} liClass="mt-5 py-2 text-lg" />

                </div>
                <div className='moon flex justify-end -mt-14 pb-1.5   w-10 bg-aba  cursor-pointer   max-xs:mr-24 xs:mr-28 mx-auto md:mr-20'>
                    <img onClick={() => toggleMode()} src={theme == 'light' ? toggleLight : toggleDark} alt="" style={{ width: 25, height: 22 }} className='toggle-icon   mt-3 md:mr-2 mx-auto max-xs:mr-2 xs:mr-2' />
                </div>
            </div>

            {/* <div className="md:hidden h-20 w-full bg-white "></div> */}

        </>
    )
}

export default Navbar;