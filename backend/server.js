import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectDB from './db/mongoDB.js';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import { app, server } from './socket/socket.js';
import path from 'path';

dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
const CLIENT_URL = process.env.CLIENT_URL || 'https://chat-app-vjyw.onrender.com' || 'http://localhost:5000';

app.use(cookieParser());
app.use(express.json());
app.use(cors(
    {
        origin: CLIENT_URL,
        credentials: true,
    }
));

app.use('/auth', authRoutes);
app.use('/message', messageRoutes);
app.use('/users', userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
});