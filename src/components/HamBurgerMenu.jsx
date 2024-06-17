import React from 'react'
import { Hamburger, Menu, Cancel } from './Icons';
const HamBurgerMenu = ({ handleClick, navOpen }) => {
    return (

        <div className='group md:hidden z-50 sm:px-8 mt-2  xs:pr-10 cursor-pointer ease-in-out transition-all duration-700'
            onClick={handleClick}
        >
            {navOpen &&
                <div className='group'>
                    <span className="group-hover:hidden">
                        <Cancel color="gray" />
                    </span>
                    <span className="hidden group-hover:block">
                        <Cancel color="" />
                    </span>
                </div>
            }
            {!navOpen &&
                <div>
                    <span className="group-hover:hidden">
                        <Menu />
                    </span>
                    <span className="hidden transition-all delay-75 group-hover:block">
                        <Hamburger />
                    </span>
                </div>
            }
        </div>
    )
}

export default HamBurgerMenu;
