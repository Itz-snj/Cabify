import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
import logger from "./utils/logger.js";
dotenv.config();
const port = 8000 ;
const server = http.createServer(app);

server.listen(port, () => {
    logger.log(`Server is running on port ${port}`);
});