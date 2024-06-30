import React from 'react'
import GridLayout from './GridLayout'
import SectionHeading from './SectionHeading'
import skills from "../data/skills"
import Skill from './Skill'

const Skills = () => {
    return (
        <div name="Skills" className='  h-full max-xs:px-5 lg:pt-8 xl:-mt-[26rem] xl:pt-24   md:pt-2  min-h-screen w-full flex items-center lg:px-5 xl:px-10'>
            <div className="section  xs:px-6 sm:px-10 max-xs:mt-32  lg:px-5 lg:mt-8  xl:-mt-16 xs:mt-20">
                <div className=' max-xs:ml-0 xs:ml-4 md:ml-8 lg:ml-7 sm:-ml-2 xl:ml-3 dark:text-gray-400 text-gray-600 '>
                    <SectionHeading heading="Skills" secondHeading="These are the Technologies I've worked with " />
                </div>
                {/* <div className="py-2 xs:px-5 border-2 border-red-500 max-xs:px-2  rounded-lg sm:px-2 md:px-12 xl:px-7"> */}
                <GridLayout style="grid-cols-2 py-2 xs:px-8 max-xs:px-4  rounded-lg sm:px-2 md:px-12 xl:px-7 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                    {skills.map((skill, index) => {
                        return (
                            <Skill key={index} skill={skill} />
                        )
                    })}
                </GridLayout>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Skills;