import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
const port = 8000 ;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});