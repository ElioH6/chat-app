import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectDB from './db/mongoDB.js';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import { app, server } from './socket/socket.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
    }
));
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/message', messageRoutes);
app.use('/users', userRoutes);

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
});