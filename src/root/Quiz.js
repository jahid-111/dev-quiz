


import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../components/Question';

const Quiz = () => {
    const dataQuiz = useLoaderData();
    const questions =  dataQuiz.data.questions;

    return (
        <div>
            <div className=' flex justify-start items-center gap-4 bg-yellow-300 rounded-b-lg px-4 border-3'>
                <img className=' h-52 w-52' src={dataQuiz.data.logo} alt="" />

                <div className=' '>
                    <h3 className=' text-3xl'>Name :  {dataQuiz.data.name}</h3>
                    <p className=' text-xl'>Total {dataQuiz.data.total}</p>
                </div>
            </div>

            <div className=' mx-auto sm:px-24'>   
                {   
                    questions.map( question => <Question
                        key={question.id}
                        questions ={question}
                    ></Question>)
                }
            </div>


        </div>
    );
};

export default Quiz;