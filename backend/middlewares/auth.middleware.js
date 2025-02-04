import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import blacklistTokenModel from '../models/blacklist.token.model.js';
const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.header('Authorization')?.split(' ')[1];// Get token from cookies or headers, and when we use the authorization header, we split it to get the token only without the Bearer keyword
    // console.log(token);
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    const isTokenBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isTokenBlacklisted) return res.status(401).json({ error: 'Unauthorized' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // ei maalta use korchi for token verification
        const user = await User.findOne(decoded._id); // id ta khujchi
        req.user = user; // user ta req.user e store korlam
        return next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized error' });
    }
}
export default {authUser};   