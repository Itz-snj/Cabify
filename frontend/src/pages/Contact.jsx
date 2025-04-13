import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const formFieldVariant = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Navbar />

      {/* Contact Section */}
      <motion.div 
        className="flex-grow flex items-center justify-center p-6 pt-24"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <motion.div 
          className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8"
          variants={itemVariant}
        >
          <motion.h2 
            className="text-3xl font-semibold text-gray-800 text-center mb-6"
            variants={itemVariant}
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="text-center md:text-left"
              variants={containerVariant}
            >
              <motion.p 
                className="text-gray-600 mb-4"
                variants={itemVariant}
              >
                Have questions? Fill out the form and we will get back to you as soon as possible.
              </motion.p>
              <motion.div 
                className="space-y-4"
                variants={containerVariant}
              >
                <motion.div 
                  className="flex items-center justify-center md:justify-start text-gray-700"
                  variants={itemVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaPhone className="mr-3 text-xl text-blue-500" /> +123 456 7890
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center md:justify-start text-gray-700"
                  variants={itemVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaEnvelope className="mr-3 text-xl text-blue-500" /> contact@cabify.com
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center md:justify-start text-gray-700"
                  variants={itemVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaMapMarkerAlt className="mr-3 text-xl text-blue-500" /> 123 Cabify St, City, Country
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4"
              variants={containerVariant}
            >
              <motion.div variants={formFieldVariant}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>
              
              <motion.div variants={formFieldVariant}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>
              
              <motion.div variants={formFieldVariant}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                  required
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                variants={itemVariant}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}