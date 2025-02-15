import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { getReceiverSocketId } from '../socket/socket.js';
import { io } from '../socket/socket.js';

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

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }

        res.status(200).json({
            _id: newMessage._id,
            senderId: newMessage.senderId,
            receiverId: newMessage.receiverId,
            message: newMessage.message,
            createdAt: newMessage.createdAt,
        });

    } catch (error) {
        console.log("error in sendMessage controller", error);
        res.status(500).json({ error: 'internal server error' });
    }
};

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