import React from 'react';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';

const HomePage = () => {
    return (
        <div >
            <div id='home' >
                     <Banner/>
            </div>
       
            <div id='about'>
                  <AboutMe/>
            </div>
            <div id='skills'>
                  <Skills/>
            </div>
          
        </div>
    );
};

export default HomePage;