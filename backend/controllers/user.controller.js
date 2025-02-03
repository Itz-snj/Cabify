import userModel from "../models/user.model.js";
import CreateNewUser from "../services/user.service.js";
import code from "http-status-codes";
import { validationResult } from "express-validator";

const registerUser = async (req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(code.BAD_REQUEST).json({errors: errors.array()});
    }
    const {name, email, password} = req.body;
    //const hashedPassword = await userModel.hashPassword(password);
    console.log("This is from the controller : " , name , email , password);
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
        console.log("Error in validation, from controller");
        return res.status(code.BAD_REQUEST).json({errors: result.array()});
    }
    const {email, password} = req.body;
    const user = await userModel.findOne({email: email}).select("+password");
    if(!user) {
        return res.status(code.BAD_REQUEST).json({error: "User or Password is incorrect"});
    }
    const rehasher = await user.matchPassword(password);
    console.log(password , user.password , rehasher);
    if(!rehasher) {
        return res.status(code.FORBIDDEN).json({error: "User or Password is incorrect"});
    }
    const token = user.generateAuthToken();
    res.status(code.OK).json({token , user});
}
export default {registerUser , loginUser};