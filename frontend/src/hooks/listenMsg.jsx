import { useSocket } from "../context/socketContext"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import soundNotification from "../assets/sounds/notification.mp3"

const listenMsg = () => {
    const { socket } = useSocket();
    const { messages, setMessages, auth, currentChat } = useContext(AuthContext);
    const [sound, setSound] = useState(null);

    useEffect(() => {
        socket?.on("newMessage", (data) => {
            data.shouldShake = true
            if (data.senderId !== currentChat._id && data.receiverId !== currentChat._id) {
                const playSound = new Audio(soundNotification);
                setSound(playSound);
                playSound.play();
            }
            setMessages([...messages, data])
        })

        return () => socket.off("newMessage");

    }, [messages, setMessages, socket]);

    useEffect(() => {
        return () => {
            if (sound) {
                sound.pause();
                sound.currentTime = 0;
            }
        };
    }, [sound]);
}


export default listenMsg