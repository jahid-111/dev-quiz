


import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-slate-300 flex justify-between'>
           
           <div>
                <h3 className=' bg-red-200 p-3 h-16 w-16'>Hello LOGO</h3>
           </div>
           <nav className=' flex justify-center items-center gap-4 font-semibold'>
                <Link to={"home"}> Home </Link>
                {/* <Link to={"quiz"}> Quiz </Link> */}
                <Link to={"blog"}> BLog </Link>
           </nav>
        </div>
    );
};

export default Header;