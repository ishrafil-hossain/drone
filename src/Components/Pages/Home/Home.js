import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Slider from '../Slider/Slider';
import SecondPart from '../HomeContent/SecondPart';
import ThirdPart from '../HomeContent/ThirdPart';
import FourthPart from '../HomeContent/FourthPart';
import Team from '../HomeContent/Team';
import Footer from '../Footer/Footer';

import DronePictures from '../HomeContent/DronePictures'
import Faq from '../Faq/Faq'


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <SecondPart></SecondPart>
            <FourthPart></FourthPart>
            <ThirdPart></ThirdPart>
            <DronePictures></DronePictures>
            <Team></Team>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;