import { createContext, useEffect, useState } from "react";
import Loading from "../components/loading/loading";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/users/loggedUser`, {
                    method: 'GET',
                    credentials: 'include',
                });
    
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                    const data = await res.json();
                    setAuth(data);
            } catch (error) {
                console.log('Error:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchUser();
    }, [currentChat]);
        
    if (loading) {
        return <Loading />
    }


    return (
        <AuthContext.Provider value={{ auth, setAuth, setLoading, currentChat, setCurrentChat, messages, setMessages }}>
            {children}
        </AuthContext.Provider>
    );
};