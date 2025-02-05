import express from 'express';
const app = express();
import cors from 'cors';
import connectDB from './db/db.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import captainRoutes from './routes/captain.routes.js';
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors()); // Allow requests from any origin, we can restrict this later
connectDB();
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/user', userRoutes);
app.use('/captain', captainRoutes);
export default app;