import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BasicHome from '../components/BasicHome';
import BackToTopButton from '../components/BackToTopButton';
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        document.title = "Home | Cabify";
      }, []);

    return (
        <div>
            <BasicHome/>
        </div>
    );
};

export default Home;