import captainModel from "../models/captain.model.js";
import CaptainService from "../services/captain.service.js";
import { validationResult } from "express-validator";
import code from "http-status-codes";
const registerUser = async (req, res) => {
    const errors = validationResult(req); // abar same jinis checking ki data thik thak esche ki na
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const captain = req.body;
        const existingCaptain = await captainModel.findOne({ email: captain.email });
        const existingVehicle = await captainModel.findOne({ vehicleNumber: captain.vehicle.vehicleNumber });
        if (existingCaptain) {
            return res.status(400).json({ message: "Captain already exists" });
        }
        if (existingVehicle) {
            return res.status(400).json({ message: "Vehicle already exists" });
        } 
        const hashedPassword = await captainModel.hashPassword(captain.password);
        const captainData = {
            firstname: captain.name.firstname,
            lastname: captain.name.lastname,
            email: captain.email,
            password: hashedPassword,
            type: captain.vehicle.type,
            model: captain.vehicle.model,
            capacity: captain.vehicle.capacity,
            vehicleNumber: captain.vehicle.vehicleNumber
        }    
        const newCaptain = await CaptainService.CreateNewCaptain(captainData);
        console.log("Data from the controller section", newCaptain);
        const token = newCaptain.generateAuthToken();
        res.status(201).json({ newCaptain, token });

    } catch (error) {
        res.status(code.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

export default {registerUser};