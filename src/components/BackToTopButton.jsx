import React, { useEffect, useState } from 'react'
import { ArrowUp } from "./Icons"
import { Link } from 'react-scroll'

const BackToTopButton = () => {
    const [btnVisiblity, setBtnVisiblity] = useState(false)
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        const toggleVisiblity = () => {
            window.scrollY > 500 ? setBtnVisiblity(true) : setBtnVisiblity(false);
        }
        window.addEventListener('scroll', toggleVisiblity);
        return () => {
            window.removeEventListener('scroll', toggleVisiblity);
        }
    }, [])


    return (
        <Link onClick={handleScroll} to="Home" smooth duration={500} className='' >
            <div className={`my-11 mr-5 max-xs:mr-2  -translate-y-[100vh] transition-all delay-100 ${btnVisiblity && "translate-y-0"} z-[49] fixed bottom-2 right-2 xs:bottom-[1.3rem] xs:right-[1.3rem] md:bottom-4 md:right-16 w-8 h-8 flex justify-center items-center rounded-full bg-aba cursor-pointer  hover:scale-[1.08] duration-500 text-white`}>
                <ArrowUp />
            </div>
        </Link>
    )
}

export default BackToTopButton;
