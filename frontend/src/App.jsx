import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from "./pages/Home";
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignup';
import About from './pages/About';
import ContactUs from './pages/Contact';
import Services from './pages/Services';
import Navbar from './components/navbar';
import Footer from './components/footer';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
      <BackToTopButton/>
    </div>
  );  
}

export default App;
