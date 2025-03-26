import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackToTopButton from "../components/BackToTopButton";

const About = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="text-center py-20 bg-gradient-to-r from-purple-500 to-indigo-700 shadow-lg">
        <h1 className="text-6xl font-extrabold tracking-wide">About Cabify</h1>
        <p className="text-lg mt-3 opacity-80">Redefining your transportation experience</p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">Our Mission</h2>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          At Cabify, we aim to transform urban mobility by providing seamless, reliable, and safe transportation.
        </p>
      </div>

      {/* Values Section */}
      <div className="bg-gray-800 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Safety First", desc: "Rigorous driver checks and app safety features.", icon: "🛡️" },
            { title: "Reliability", desc: "Timely pickups and efficient routes.", icon: "⏳" },
            { title: "Sustainability", desc: "Optimized routes to reduce environmental impact.", icon: "🌱" },
            { title: "Community", desc: "Supporting drivers and local communities.", icon: "🤝" },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg text-center bg-gray-700 bg-opacity-70 backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-3">{value.icon}</div>
              <h3 className="text-2xl font-semibold">{value.title}</h3>
              <p className="text-gray-300 mt-2">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">How Cabify Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {["Request a Ride", "Get Matched", "Track Your Ride", "Arrive Safely"].map((step, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-gray-700 bg-opacity-70 backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-indigo-400">{index + 1}</div>
              <h3 className="text-xl font-semibold mt-3">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="bg-indigo-600 text-center py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold">Ready to Experience Cabify?</h2>
        <p className="text-lg mt-3 opacity-90">Join thousands of satisfied riders.</p>
        <Link
          to="/signup"
          className="mt-6 inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </Link>
      </motion.div>
      <BackToTopButton />
    </div>
  );
};

export default About;
