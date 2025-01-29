import userModel from "../models/user.model.js";
import CreateNewUser from "../services/user.service.js";
import code from "http-status-codes";
import { validationResult } from "express-validator";
const registerUser = async (req, res , next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(code.BAD_REQUEST).json({errors: errors.array()});
    }
    const {name, email, password} = req.body;
    const hashedPassword = await userModel.hashPassword(password);
    console.log(name , email , password);
    if(userModel.findOne({email: email})) {
        return res.status(code.BAD_REQUEST).json({error: "User already exists"});
    }
    try {
        const user = await CreateNewUser({
            firstname : name.firstname,
            middlename : name.middlename,
            lastname : name.lastname,
            email : email,
            password: hashedPassword,
        });
        const token = user.generateAuthToken();
        res.status(code.CREATED).json({token , user});
    } catch (error) {
        throw new Error(`User registration failed: ${error.message}`);
    }
}
export default {registerUser};