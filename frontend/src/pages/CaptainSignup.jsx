

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const CaptainSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: { firstname: "", middlename: "", lastname: "" },
    email: "",
    password: "",
    vehicle: { type: "car", model: "", capacity: "", vehicleNumber: "" },
    driverLicenseNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("name.")) {
      setFormData((prev) => ({
        ...prev,
        name: { ...prev.name, [name.split(".")[1]]: value },
      }));
    } else if (name.includes("vehicle.")) {
      setFormData((prev) => ({
        ...prev,
        vehicle: { ...prev.vehicle, [name.split(".")[1]]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.URI}/captain/register`, formData);
      toast.success("Signup successful!");
      setTimeout(() => navigate("/captain-login"), 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            transform: "scale(1.1)",
          }}
        />

        <div className="relative z-10 w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg text-white">
          <h2 className="text-2xl font-semibold text-center">Captain Signup</h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-3">
              {['firstname', 'middlename', 'lastname'].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={`name.${field}`}
                  placeholder={field.replace(/\b\w/g, (c) => c.toUpperCase())}
                  value={formData.name[field]}
                  onChange={handleChange}
                  className="bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              ))}
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="vehicle.type"
              value={formData.vehicle.type}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>
            {['model', 'capacity', 'vehicleNumber'].map((field) => (
              <input
                key={field}
                type={field === 'capacity' ? 'number' : 'text'}
                name={`vehicle.${field}`}
                placeholder={field.replace(/\b\w/g, (c) => c.toUpperCase())}
                value={formData.vehicle[field]}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
            <input
              type="text"
              name="driverLicenseNumber"
              placeholder="Driver License Number (Optional)"
              value={formData.driverLicenseNumber}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 font-medium shadow-md transition-all"
            >
              Sign Up &rarr;
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer/>
    </>
  );
};

export default CaptainSignup;

