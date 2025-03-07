import React from 'react';

const BasicHome = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                        alt="Hero background" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold">Your Ride, Your Way</h1>
                        <p className="text-xl md:text-2xl max-w-2xl">Experience comfortable and safe rides with Cabify. Book your next journey in seconds.</p>
                        <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300">
                            Book Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Cabify?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                <div className="text-blue-500 mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg">
                                <img src={service.image} alt={service.title} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-white text-xl font-semibold">{service.title}</h3>
                                    <p className="text-gray-200 mt-2">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-white/90 mb-8">Join thousands of satisfied customers who trust Cabify for their daily rides.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition duration-300">
                            Download App
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-blue-600 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Features Data
const features = [
    {
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: "24/7 Availability",
        description: "Book a ride anytime, day or night. Our service never stops."
    },
    {
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
        title: "Secure Payments",
        description: "Multiple secure payment options for your convenience."
    },
    {
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
        title: "Safe Rides",
        description: "Verified drivers and real-time trip tracking for your safety."
    }
];

// Services Data
const services = [
    {
        title: "City Rides",
        description: "Quick and comfortable rides within the city",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
        title: "Airport Transfer",
        description: "Reliable airport pickup and drop-off service",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
        title: "Hourly Rental",
        description: "Rent a car with driver by the hour",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
        title: "Business Travel",
        description: "Corporate travel solutions for businesses",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
];

export default BasicHome;