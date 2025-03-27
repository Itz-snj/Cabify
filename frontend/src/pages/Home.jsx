import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BasicHome from '../components/BasicHome';
import BackToTopButton from '../components/BackToTopButton';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <BasicHome/>
            <Footer/>
            <BackToTopButton />
        </div>
    );
};

export default Home;