import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  { 
    title: "City Rides", 
    description: "Affordable and comfortable rides within the city for 24/7 with flexible pricing.", 
    price: "$10 - $50", 
    image: "/city-rides.jpg" 
  },
  { 
    title: "Airport Transfer", 
    description: "Reliable airport pickup and drop services to ensure timely travel.", 
    price: "$30 - $100", 
    image: "/airplane.jpg" 
  },
  { 
    title: "Hourly Rental", 
    description: "Book a cab on an hourly basis for your flexible travel needs.", 
    price: "$20 per hour", 
    image: "/hourly.jpg" 
  },
  { 
    title: "Business Travel", 
    description: "Premium rides for business professionals with high-class service.", 
    price: "$50 - $200", 
    image: "/business.jpg" 
  },
];

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-12 px-6 pt-24">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <p className="text-lg font-bold text-blue-600 mt-3">{service.price}</p>
              
              {/* Book Now Button */}
              <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default Services;
