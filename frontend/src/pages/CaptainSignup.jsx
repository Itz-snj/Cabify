import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const CaptainSignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: { firstname: "", lastname: "" },
        email: "",
        password: "",
        vehicle: { type: "", model: "", capacity: "", vehicleNumber: "" },
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes("name.")) {
            setFormData({
                ...formData,
                name: { ...formData.name, [name.split(".")[1]]: value },
            });
        } else if (name.includes("vehicle.")) {
            setFormData({
                ...formData,
                vehicle: { ...formData.vehicle, [name.split(".")[1]]: value },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/captain/register", formData);
            toast.success("Registration successful! Redirecting to login...", {
                autoClose: 3000,
            });
            setTimeout(() => navigate("/captain-login"), 3000);
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Registration failed. Try again."
            );
        }
    };

    return (
        <div>
            <h1>Welcome to the Captain Sign-Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name.firstname" placeholder="First Name" required minLength={3} onChange={handleChange} />
                <input type="text" name="name.lastname" placeholder="Last Name" required minLength={3} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" required minLength={6} onChange={handleChange} />
                <select name="vehicle.type" required onChange={handleChange}>
                    <option value="">Select Vehicle Type</option>
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                    <option value="auto">Auto</option>
                </select>
                <input type="text" name="vehicle.model" placeholder="Vehicle Model" required onChange={handleChange} />
                <input type="number" name="vehicle.capacity" placeholder="Capacity" required min={1} onChange={handleChange} />
                <input type="text" name="vehicle.vehicleNumber" placeholder="Vehicle Number" required onChange={handleChange} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default CaptainSignUp;
