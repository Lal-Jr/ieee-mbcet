import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import { homeObjOne } from './Data';
import { cardObjOne } from './cardData'
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import InfoSection from '../../components/InfoSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection {...homeObjOne} />
            {/* <InfoSection /> */}
            {/* <Card {...cardObjOne} /> */}
            <Footer />
        </>
    )
}

export default Home;