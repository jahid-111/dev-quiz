


import React from 'react';

const Question = ( { questions } ) => {

    const {question, options} = questions

    console.log("hi",options)
    return (
        <div className='  bg-slate-200 my-3 rounded-md p-4'>
            <h3 className=' text-3xl'>{question}</h3>
            <h3 className=' text-3xl  font-semibold my-2'>OPTION </h3>

            <div className=' grid grid-cols-2 text-justify bg-red-700 gap-3 justify-center items-center'>
                {
                    options.map (option => <li className=' h-auto bg-teal-200'>{option}</li>)
                }
            </div>

        </div>
    );
};

export default Question;