import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
import logger from "./utils/logger.js";
dotenv.config();
const port = process.env.PORT ;
const server = http.createServer(app);

server.listen(port, () => {
    logger.log(`Server is running on port ${port}`);
});