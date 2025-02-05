import express from 'express';
import { body } from 'express-validator';
import captainController from '../controllers/captain.controller.js';
const router = express.Router();
router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters'),
    body('name.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters'),
    body('name.lastname').isLength({ min: 3 }).withMessage('Last name must be atleast 3 characters'),
    body('vehicle.type').isIn(['car', 'bike', 'auto']).withMessage('Invalid vehicle type'),
    body('vehicle.model').isLength({ min: 1 }).withMessage('Vehicle model is required'),
    body('vehicle.capacity').isNumeric().custom((value) => {
        if (value <= 0) {
            throw new Error('Capacity must be greater than 0');
        }
        return true;
    }),
    body('vehicle.vehicleNumber').isNumeric().withMessage('Vehicle number is required'),
], captainController.registerUser);
export default router;