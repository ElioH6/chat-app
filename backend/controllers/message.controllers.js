import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;
        
        let conversation = await Conversation.findOne({ 
            members: { $all: [receiverId, senderId] } 
        });

        if (!conversation) {
            conversation = await Conversation.create({ 
                members: [receiverId, senderId] 
            });
        }

        const newMessage = await Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //socketIO functionnality here

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(200).json({ message: newMessage });
        
    } catch (error) {
        console.log("error in sendMessage controller", error);
        res.status(500).json({ error: 'internal server error' });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            members: { $all: [receiverId, senderId] }
        }).populate("messages");

        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }
        const messages = conversation.messages;

        res.status(200).json(messages);
        
    } catch (error) {
        console.log("error in getMessages controller", error);
        res.status(500).json({ error: 'internal server error' });
    }
}