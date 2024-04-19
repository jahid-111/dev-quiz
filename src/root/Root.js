




import React, { createContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
;

 
export const QuizContex =  createContext('quiz_thumnail')













const Root = () => {

    

    return (

  
        <div>
            <Header></Header>
            <Outlet></Outlet>
          
             
        </div>
    );
};

export default Root;