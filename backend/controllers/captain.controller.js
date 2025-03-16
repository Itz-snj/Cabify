import captainModel from "../models/captain.model.js";
import CaptainService from "../services/captain.service.js";
import { validationResult } from "express-validator";
import blacklistTokenModel from "../models/blacklist.token.model.js";
import logger from "../utils/logger.js";
import code from "http-status-codes";
import jwt from 'jsonwebtoken';
const registerCaptain = async (req, res) => {
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
        logger.log("Data from the controller section", newCaptain);
        const token = newCaptain.generateAuthToken();
        res.status(201).json({ newCaptain, token });

    } catch (error) {
        res.status(code.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};
const loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        logger.log("Error in validation, from controller");
        return res.status(code.BAD_GATEWAY).json({errors: errors.array()});
    }
    try {
        const {email , password} = req.body;
        const checkCaptain = await captainModel.findOne({email: email}).select("+password");
        if(!checkCaptain){
            return res.status(code.BAD_REQUEST).json({message: "Invalid email or password"});
        }
        const rehasher = await checkCaptain.matchPassword(password);
        if(!rehasher){
            return res.status(code.BAD_REQUEST).json({message: "Invalid email or password"});
        }
        const token = checkCaptain.generateAuthToken();
        res.cookie("token", token);
        res.status(code.OK).json({token , checkCaptain});

    } catch (error) {
        logger.log("Error in loginCaptain controller", error.message);
        res.status(code.INTERNAL_SERVER_ERROR).json({message: error.message});
    }
};
const logoutCaptain = async (req, res) => {
    res.clearCookie("token");
    const token = req.cookies.token || req.header('Authorization')?.split(' ')[1];
    logger.log("Token from the logoutCaptain controller", token);
    await blacklistTokenModel.create({token: token});
    res.status(code.OK).json({message: "Logged out successfully"});
};
const getCaptainProfile = async (req, res) => {
    const token  = req.cookies.token || req.header('Authorization')?.split(' ')[1];
    if(!token) return res.status(code.BAD_REQUEST).json({message: "Unauthorized"});
    const isTokenBlacklisted = await blacklistTokenModel.findOne({token: token});
    if(isTokenBlacklisted) return res.status(code.BAD_REQUEST).json({message: "Unauthorized"});
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findOne(decoded._id);
    try {
        res.status(code.OK).json({"user":captain});
    } catch (error) {
        res.status(code.BAD_REQUEST).json({message : error.message});
    }
};
export default {registerCaptain , loginCaptain , logoutCaptain , getCaptainProfile};