

import { Link } from 'react-router-dom';


const Catagory = ({ thumnail }) => {
    const {id,name, logo, total} = thumnail;
    return (
        <div className=' border-2 border-gray-300 rounded-md p-2 '>

            <img className=' rounded-md bg-yellow-300' src={logo} alt="" />
            <div className='flex justify-between'>
                <div>
                    <h3 className=' text-xl font-semibold text-gray-800'>{name}</h3>
                    <h5 className=' text-md font-mono'>Total  {total}</h5>
                </div>
                <div className=' my-auto'>
                    <Link to={`/home/quiz/quiz/${id}`}>
                        <button className='bg-yellow-700 px-5 rounded-md py-1 font-semibold text-white'>Start</button>
                    </Link>
                </div>
            </div>
        
        </div>
    );
};

export default Catagory;