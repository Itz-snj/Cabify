import mongoose from "mongoose";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
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
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET);
    return token;
}
userSchema.methods.matchPassword = async function(enteredPassword) {
    const compare =  await bycrypt.compare(enteredPassword, this.password);
    return compare;
}
userSchema.statics.hashPassword = async function(password) {
    const hashedPass =  await bycrypt.hash(password, 10);
    return hashedPass;
}
const User = mongoose.model("user", userSchema);
export default User;