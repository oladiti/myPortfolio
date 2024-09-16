import React from 'react'
import SectionHeading from './SectionHeading'
import Project from './Project'
import myProjects from '../data/projects'
import Slider from "react-slick";


const Projects = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],
    };
    return (
        <div name="Projects" className='pt-6 projects max-xs:px-3 xs:px-2 mb-28  md:-mt-96 lg:px-3 md:px-0  max-xs:-mt-80 max-xs:-mb-28  lg:-mt-16 xl:-mt-96 xl:pt-28   h-full min-h-screen w-full flex items-center  text-white'>
            <div className='section xl:pb-96 max-xs:pt-56 max-sm:-mt-36 max-xs:mb-20  max-xs:px-5'>
                <div className='md:-ml-2 max-xs:-ml-2 sm:-ml-2 lg:-ml-5'>
                    <SectionHeading heading="Projects " secondHeading="Check Out Some of my work " />
                </div>
                <Slider {...settings} className='Service__container lg:-mx-3 xl:-mx-2 max-xs:-ml-1 '>
                    {myProjects.map((project) => {
                        return (
                            <Project key={project.name} project={project} />
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Projects
