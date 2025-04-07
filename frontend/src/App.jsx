import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home";
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignup';
import About from './pages/About';
import ContactUs from './pages/Contact';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  },);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
