


import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [open, setOpen ] = useState(false)

    return (
        <div className='px-2  flex justify-between bg-yellow-500 items-center'>

                <div  onClick={()=> setOpen(!open)} className='  md:hidden'> 
                    {open ? 
                        <FontAwesomeIcon className=' h-10 w-10' icon={faXmark}></FontAwesomeIcon>
                            :
                        <FontAwesomeIcon className=' h-10 w-10' icon={faBars}></FontAwesomeIcon>
                    }
                </div>       
                          
           <div>
                <img className=' h-20 w-20' src="https://png.pngtree.com/png-clipart/20230413/ourmid/pngtree-pop-quiz-clipart-images-png-image_6702095.png" alt="" />
           </div>

           <nav className={`flex flex-col font-semibold gap-2 bg-yellow-500 w-36 rounded-b-lg sm:flex-row absolute duration-300 ease-in md:static  ${open ? " top-20" : "top-[-220px]"}`}>
                <Link to={"home"} className=' hover:border-yellow-400 hover:border-b-2 text-gray-700'> Home </Link>
                <Link to={"blog"} className=' hover:border-yellow-400 hover:border-b-2 text-gray-700'> Blog </Link>
                <Link to={"blog"} className=' hover:border-yellow-400 hover:border-b-2 text-gray-700'> Blog </Link>
           </nav>
        </div>
    );
};

export default Header;