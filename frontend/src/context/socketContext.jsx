import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
}

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { auth } = useContext(AuthContext);
    const VITE_SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'https://chat-app-vjyw.onrender.com';

    useEffect(() => {
        if (auth) {
            const socket = io(VITE_SOCKET_URL, {
                query: {
                    userId: auth.id,
                },
            })

            setSocket(socket);

            socket.on("onlineUsers", (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [auth]);

    return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>;
};