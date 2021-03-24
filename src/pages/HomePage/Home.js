import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import { cardObjOne } from '../../components/Card/cardData.js';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection/>
            <AboutSection />
            {/* <Card {...cardObjOne} /> */}
            <Footer />
        </>
    )
}

export default Home;