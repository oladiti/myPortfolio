import React from 'react'

const SectionHeading = ({ heading, secondHeading }) => {
    return (
        <div className="pb-8 text-gray-400    px-4">
            <h2 className=' text-4xl px-1 inline border-b-4 border-aba dark:border-white font-bold text-gray-700 dark:text-aba '>{heading}</h2>
            {secondHeading && <p className='py-6 text-lg dark:text-gray-400 text-gray-600'>
                {secondHeading}
            </p>}
        </div>
    );
}

export default SectionHeading;
