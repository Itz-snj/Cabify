import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import Captain from '../models/captain.model.js';
import blacklistTokenModel from '../models/blacklist.token.model.js';
import code from 'http-status-codes';

// New middleware to handle existing tokens during login
const handleLoginTokens = async (req, res, next) => {
    const token = req.cookies.token || req.header('Authorization')?.split(' ')[1];
    if (token) {
        // If there's an existing token, add it to blacklist
        await blacklistTokenModel.create({ token });
        res.clearCookie('token');
    }
    next();
}
const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.header('Authorization')?.split(' ')[1];// Get token from cookies or headers, and when we use the authorization header, we split it to get the token only without the Bearer keyword
    // logger.log(token);
    if (!token) return res.status(code.FORBIDDEN).json({ error: 'Unauthorized' });
    const isTokenBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isTokenBlacklisted) return res.status(401).json({ error: 'Unauthorized' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // ei maalta use korchi for token verification
        const user = await User.findOne(decoded._id); // id ta khujchi
        req.user = user; // user ta req.user e store korlam
        return next();  
    } catch (error) {
        res.status(code.FORBIDDEN).json({ error: 'Unauthorized error' });
    }
}
const authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    const isTokenBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isTokenBlacklisted) return res.status(code.FORBIDDEN).json({ error: 'Unauthorized' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await Captain.findOne(decoded._id);
        req.captain = captain;
        return next();
    } catch (error) {
        res.status(code.FORBIDDEN).json({ error: 'Unauthorized error' });
    }
}

export default { authUser, authCaptain, handleLoginTokens };