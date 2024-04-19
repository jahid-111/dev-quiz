


import { faCircle, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Question = ( { questions } ) => {

    const {question, options} = questions

    // console.log("hi",options)
    return (
        <div className='  bg-slate-200 my-3 rounded-md p-4'>
            <h3 className=' text-3xl'> 
             <span className=' text-red-500'>
                <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>
              </span> {question}    
            </h3>
            <h3 className=' text-2xl text-gray-600 font-semibold my-2'>OPTION : </h3>


            <div className=' grid grid-cols-2 bg-gray-100 gap-3 p-3 justify-center'>
                { options.map (option => 
                    <li className=' hover:bg-slate-400 rounded-md cursor-pointer font-semibold text-gray-700 list-none p-2 h-auto bg-white'> 
                        <FontAwesomeIcon className='me-2' icon={faCircle}></FontAwesomeIcon>
                         {option}
                    </li>)
                }
            </div>

        </div>
    );
};

export default Question;