import React from 'react'
import { Link } from 'react-scroll'
import navLinks from '../data/navlinks'



const Navigation = ({ ulClass, liClass, handleClick, }) => {
    return (
        <ul className={ulClass}>

            {navLinks.map(({ id, link, href }) => {
                return (

                    <li key={id}
                        className={`md:ml-6 mt-4   lg:ml-12  capitalize font-medium  md:cursor-pointer text-gray-700 dark:text-gray-400 md:hover:scale-[1.15]   duration-500 dark:md:hover:text-gray-100 ${liClass}`}>
                        {id === 6 ?
                            <a href={href} target="_blank" rel='noferrer'>{link}</a>
                            :
                            <Link
                                onClick={handleClick}
                                to={link} smooth duration={500}> {link}
                            </Link>
                        }
                    </li>


                )
            })}
        </ul>
    )
}

export default Navigation
