import userModel from "../models/user.model.js";
import CreateNewUser from "../services/user.service.js";
import logger from "../utils/logger.js";
import code from "http-status-codes";
import { validationResult } from "express-validator";
import tokenTimerModel from "../models/blacklist.token.model.js";

const registerUser = async (req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(code.BAD_REQUEST).json({errors: errors.array()});
    }
    const {name, email, password} = req.body;
    const userExists = await userModel.findOne({email: email});
    if(userExists){
        return res.status(code.BAD_REQUEST).json({error: "User already exists"});
    }
    try {
        const user = await CreateNewUser({
            firstname : name.firstname,
            middlename : name.middlename,
            lastname : name.lastname,
            email : email,
            password: await userModel.hashPassword(password),
        });
        const token = user.generateAuthToken();
        res.status(code.CREATED).json({token , user});
    } catch (error) {
        throw new Error(`User registration failed: ${error.message}`);
    }
}
const loginUser = async (req,res) =>{
    const result = validationResult(req);
    if(!result.isEmpty()) {
        logger.log("Error in validation, from controller");
        return res.status(code.BAD_REQUEST).json({errors: result.array()});
    }
    const {email, password} = req.body;
    const user = await userModel.findOne({email: email}).select("+password");
    if(!user) {
        return res.status(code.BAD_REQUEST).json({error: "User or Password is incorrect"});
    }
    const rehasher = await user.matchPassword(password);
    logger.log("Password verification",password , user.password, rehasher);
    if(!rehasher) {
        return res.status(code.FORBIDDEN).json({error: "User or Password is incorrect"});
    }
    const token = user.generateAuthToken();
    res.cookie("token", token); // cookie set krlam
    res.status(code.OK).json({token , user});
}
const getUserProfile = async (req, res) => {
    try {
        res.status(code.OK).json(req.user);
    } catch (error) {
        res.status(code.BAD_REQUEST).json({error: error.message});
    }
}
const logoutUser = async (req, res) => {
    res.clearCookie("token");
    const token = req.cookies.token || req.header('Authorization')?.split(' ')[1];
    await tokenTimerModel.create({token}); // token taake blacklist korlam
    res.status(code.OK).json({message: "Logged out successfully"});
}
export default {registerUser , loginUser , getUserProfile , logoutUser};