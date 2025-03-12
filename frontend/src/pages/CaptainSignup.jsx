import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignUp = () => {
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
      const { data, status } = await axios.post(
        `${process.env.URI}/captain/register`,
        formData
      );

      if (status === 201) {
        toast.success("Signup successful!");
        setTimeout(() => navigate("/captain-login"), 2000);
      }
    } catch (error) {
      console.error(error);
      if (error.response?.status === 400) {
        toast.error("User already exists");
      } else if (error.response?.status === 500) {
        toast.error("Signup failed");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Captain Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-3 gap-2">
            <input
              type="text"
              name="name.firstname"
              placeholder="First Name"
              value={formData.name.firstname}
              onChange={handleChange}
              required
              className="p-2 border rounded-md w-full"
            />
            <input
              type="text"
              name="name.middlename"
              placeholder="Middle Name"
              value={formData.name.middlename}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="text"
              name="name.lastname"
              placeholder="Last Name"
              value={formData.name.lastname}
              onChange={handleChange}
              required
              className="p-2 border rounded-md w-full"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border rounded-md w-full"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-2 border rounded-md w-full"
          />

          <select
            name="vehicle.type"
            value={formData.vehicle.type}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
          </select>

          <input
            type="text"
            name="vehicle.model"
            placeholder="Vehicle Model"
            value={formData.vehicle.model}
            onChange={handleChange}
            required
            className="p-2 border rounded-md w-full"
          />

          <input
            type="number"
            name="vehicle.capacity"
            placeholder="Vehicle Capacity"
            value={formData.vehicle.capacity}
            onChange={handleChange}
            required
            className="p-2 border rounded-md w-full"
          />

          <input
            type="text"
            name="vehicle.vehicleNumber"
            placeholder="Vehicle Number"
            value={formData.vehicle.vehicleNumber}
            onChange={handleChange}
            required
            className="p-2 border rounded-md w-full"
          />

          <input
            type="text"
            name="driverLicenseNumber"
            placeholder="Driver License Number (Optional)"
            value={formData.driverLicenseNumber}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default CaptainSignUp;
