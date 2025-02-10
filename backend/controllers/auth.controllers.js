import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../utils/token.js";

export const register = async (req, res) => {
   try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    const user = await User.findOne({ username });
    if (user) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const defFemalePic = "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg"
    const defMalePic = "https://cdn-icons-png.flaticon.com/512/149/149071.png"

    const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === 'male' ? defMalePic : defFemalePic
    });

    if (newUser) {
        generateToken(newUser._id, res);
        await newUser.save();

        res.status(201).json({ 
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
         });
    } else {
        res.status(400).json({ error: 'Invalid user data' });
    }   

   } catch (error) {
    console.error("error in register controller", error);
    res.status(500).json({ error: 'internal server error' });
   }
}


export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordMatch = await bcrypt.compare(password, user?.password || '');

        if (!user || !isPasswordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        generateToken(user, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
            createdAt: user.createdAt,
        });

    } catch (error) {
        console.log("error in login controller", error);
        res.status(500).json({ error: 'internal server error' });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
        
    } catch (error) {
        console.log("error in logout controller", error);
        res.status(500).json({ error: 'internal server error' });
    }
}