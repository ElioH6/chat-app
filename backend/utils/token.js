import jwt from 'jsonwebtoken';

const generateToken = (id, res) => {
    const token = jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: '4h',
    })

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 4 * 60 * 60 * 1000,
    })
}

export default generateToken