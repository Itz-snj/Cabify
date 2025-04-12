import React from 'react';
import { Helmet } from 'react-helmet-async';
import BasicHome from '../components/BasicHome';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Cabify - Book Rides Instantly</title>
        <meta 
          name="description" 
          content="Affordable and reliable transportation service. Book rides with Cabify now!" 
        />
        <meta 
          property="og:title" 
          content="Cabify - Your Ride, Your Way" 
        />
        <meta 
          property="og:description" 
          content="Experience seamless transportation with Cabify. Download the app today!"
        />
        <meta 
          property="og:image" 
          content="/assets/og-home.jpg" // Update with actual image
        />
      </Helmet>
      
      <BasicHome/>
    </div>
  );
};

export default Home;