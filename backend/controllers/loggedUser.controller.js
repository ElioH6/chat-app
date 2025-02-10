import jwt from 'jsonwebtoken';

export const loggedUser = async (req, res) => {
    const { token } = req.cookies;

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        } else {
            return res.json(user);
        }
    });
};