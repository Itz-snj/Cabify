
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom'; 

import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignup";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import BackToTopButton from "./components/BackToTopButton";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (

    <HelmetProvider>
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
        </Routes>
        <Footer/>
        <BackToTopButton/>
      </div>
    </HelmetProvider>
  );  
}

export default App;