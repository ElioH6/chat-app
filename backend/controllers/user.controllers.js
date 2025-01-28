import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const loggedUsers = req.user._id
        
        const allUsers = await User.find({ _id: { $ne: loggedUsers } }).select('-password');
        res.json(allUsers);
        
    } catch (error) {
        console.log("error in getUsers controller", error);
        res.status(500).json({ error: 'internal server error' });
    }
}