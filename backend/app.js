import express from 'express';
const app = express();
import cors from 'cors';
import connectDB from './db/db.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import captainRoutes from './routes/captain.routes.js';

// Configure CORS before any routes
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/user', userRoutes);
app.use('/captain', captainRoutes);

export default app;