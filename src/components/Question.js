


import { faCircle, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Question = ( { questions } ) => {

    const {question, options, correctAnswer} = questions;

    const [answer, setAnswer] = useState("");
    const correction = (option) => {
        if (correctAnswer !== option) {
         <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>;   setAnswer(correctAnswer);
        } else {
           <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> ; setAnswer ( option)
        }
    }
 
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (option) => {
        if (selectedItem === option ) {
            setSelectedItem(null);
        } else {
            setSelectedItem(option);
        }
    };
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
                <li
                    // onClick={() => handleItemClick(option)}
                    onClick={() => {
                        handleItemClick(option);
                        correction(option);
                    }}
                    className={` ${selectedItem === option ? 'bg-slate-300 cursor-not-allowed' : 'bg-white hover:bg-slate-400'} rounded-md cursor-pointer font-semibold text-gray-700 list-none p-2 h-auto`}
                     >    
                    <FontAwesomeIcon className='me-2' icon={faCircle}></FontAwesomeIcon>    
                    {option}
                </li>)   
                }

                {
                  <p className='bg-yellow-300'>
                  <FontAwesomeIcon icon={faCheck} /> {answer}
                </p>
                }
            </div>

        </div>
    );
};

export default Question;