



import React from 'react';

const Cover = () => {
    return (
        <div className=' bg-[#f7f7f7] px-2 rounded-b-md md:flex md:flex-row-reverse'>
            
            <div className=' w-full sm:w-6/12'>
                <img className=' w-full h-40 sm:h-72'  src="https://www.pngitem.com/pimgs/m/124-1247029_digital-skills-social-media-hd-png-download.png" alt="" />
            </div>

            <div className=' w-full sm:w-6/12 flex justify-start items-center'>
              <h2 className=' text-5xl font-semibold leading-tight'>
                    <span className=' text-gray-800'>Improve Your</span>
                <br/> 
                    <span className=' text-orange-600'>Skill</span>
              </h2>
            </div>

        </div>
    );
};

export default Cover;