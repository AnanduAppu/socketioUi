import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Chatpage() {
    const [chat, setChat] = useState([]);

    const fetchdata = async () => {
        try {
            const response = await axios.get("http://localhost:3075/api/chats");
            setChat(response.data.message);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            {chat.map((c) => (
                <div key={c._id}>{c.chatName}</div>
            ))}
        </div>
    );
}

export default Chatpage;