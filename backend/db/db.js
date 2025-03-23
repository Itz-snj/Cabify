import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "../utils/logger.js";
dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        logger.log(`MongoDB Connected: ${conn.connection.name}`);
    } catch (error) {
        logger.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;