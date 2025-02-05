import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const captainSchema = new mongoose.Schema({
    name : {
        firstname:{
            type: String,
            required: true,
            minlength: [3 , "First name should be atleast 3 characters long"],
        },
        middlename:{
            type: String,
            required: false,
        },
        lastname:{
            type: String,
            required: false,
            minlength: [3 , "Last name should be atleast 3 characters long"],
        }
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match : [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g , "Invalid email format"],
    },
    password : {
        type: String,
        required: true,
        select: false,
    },
    createdAt : {
        type: Date,
        default: Date.now,
    },
    socketId : {
        type: String,
        required: false,
    },
    status : {
        type: String,
        enum: ["online", "offline"],
        default: "offline",
    },
    role : {
        type: String,
        enum: ["captain"],
        default: "captain",
    },
    vehicle : {
        type:{
            type: String,
            required: true,
            enum: ["car", "bike" , "auto"],
        },
        model:{
            type: String,
            required: true,
        },
        capacity:{
            type: Number,
            required: true,
        },
        vehicleNumber:{
            type: String,
            required: true,
        }
    },
    driverLicenseNumber : {
        type: String,
        required: false,
    },
    location : {
        latitude : {
            type: Number // required korlam na kano if inactive then it is 0
        },
        longitude : {
            type: Number
        },
    }
}); 
captainSchema.methods.generateAuthToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
}
captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}
captainSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}
const captainModel = mongoose.model("captain", captainSchema);
export default captainModel;