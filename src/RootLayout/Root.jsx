import React from 'react';
import Navbar from '../components/Navbar';
import HomePage from '../Pages/HomePage';


const Root = () => {
    return (
        <div>
            <div  className='mb-16'>
                  <Navbar/>
            </div>
          
    <HomePage/>
          
        </div>
    );
};

export default Root;