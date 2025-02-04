import express from 'express';
import {body} from 'express-validator';
import userController from '../controllers/user.controller.js';
import auth from '../middlewares/auth.middleware.js';
const router = express.Router();
router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be atleast 6 characters'),
    body('name.firstname').isLength({min: 3}).withMessage('First name must be atleast 3 characters'),
] , 
    userController.registerUser
)
router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 1}).withMessage('Field is empty')
], userController.loginUser);
router.get('/profile', auth.authUser,userController.getUserProfile);
router.get('/logout', auth.authUser, userController.logoutUser);
export default router;