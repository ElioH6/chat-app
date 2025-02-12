import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const unauthorized = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        
    } catch (error) {
        console.log("error in unauthorized middleware", error);
        res.status(500).json({ error: 'internal server error' });
    }
}

export default unauthorized