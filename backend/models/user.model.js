import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import logger from "../utils/logger.js";
dotenv.config();
const userSchema = new mongoose.Schema({
    name: {
        firstname: {
            type: String,
            minlength: [2 , "Atleast 3 letters required"],
            required: true, 
        },
        middlename: {
            type: String,
            required: false,
        },
        lastname: {
            type: String,
            required: true,
        }
    },
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be atleast 6 characters"],
        select: false,
    },  
    socketId: {
        type: String,
        required: false,
    },
}) 

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET , {expiresIn: '24h'});
    return token;
}
userSchema.methods.matchPassword = async function(enteredPassword) {
    try {
        return await bcrypt.compare(enteredPassword, this.password);
      } catch (error) {
        logger.error("Error comparing passwords:", error.message);
        return false;
      }
}
userSchema.statics.hashPassword = async function(password) {
    const hashedPass =  await bcrypt.hash(password, 10);
    return hashedPass;
}
const User = mongoose.model("user", userSchema);
export default User;