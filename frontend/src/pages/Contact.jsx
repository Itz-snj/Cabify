import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Navbar />

      {/* Contact Section */}
      <div className="flex-grow flex items-center justify-center p-6 pt-24">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <p className="text-gray-600 mb-4">Have questions? Fill out the form and we will get back to you as soon as possible.</p>
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start text-gray-700">
                  <FaPhone className="mr-3 text-xl text-blue-500" /> +123 456 7890
                </div>
                <div className="flex items-center justify-center md:justify-start text-gray-700">
                  <FaEnvelope className="mr-3 text-xl text-blue-500" /> contact@cabify.com
                </div>
                <div className="flex items-center justify-center md:justify-start text-gray-700">
                  <FaMapMarkerAlt className="mr-3 text-xl text-blue-500" /> 123 Cabify St, City, Country
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                required
              ></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
