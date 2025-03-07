import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BasicHome from '../components/BasicHome';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <BasicHome/>
            <Footer/>
        </div>
    );
};

export default Home;