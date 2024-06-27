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
        <div name="Projects" className='pt-44  projects max-xs:px-3 xs:px-2 md:-mt-80 lg:px-3 md:px-0 max-xs:-mt-80 lg:-mt-16 xl:-mt-96   h-full min-h-screen w-full flex items-center  text-white'>
            <div className='section  xl:-mt-6 max-sm:-mt-36 xl:pb-96'>
                <div className='md:-ml-2 max-xs:-ml-2 sm:-ml-2'>
                    <SectionHeading heading="Projects " secondHeading="Check Out Some of my work " />
                </div>
                {/* max-xs:-ml-1 sm:mr-0 md:mr-0  lg:-mr-3 xs:mr-1 xl:mr-3 */}
                <Slider {...settings} className='Service__container lg:-mx-3 xl:-mx-2 max-xs:-ml-1 '>

                    {/* <GridLayout style="sm:grid-cols-2 xs:px-4 md:max-w-2xl mx-auto lg:max-w-none lg:grid-cols-3 sm:px-2 md:px-2 "> */}
                    {myProjects.map((project) => {
                        return (
                            <Project key={project.name} project={project} />
                        )
                    })}

                    {/* </GridLayout> */}
                </Slider>
            </div>
        </div>
    )
}

export default Projects
