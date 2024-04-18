




import React from 'react';
import Header from '../components/Header';
import Cover from '../components/Cover';
import { Outlet } from 'react-router-dom';
import Main from './Main';


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;