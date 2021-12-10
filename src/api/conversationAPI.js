import axios from "axios";

export const getConversations = async userId => {
    const {data} = await axios.get(`http://192.168.1.87:5000/api/conversation/${userId}`)
    return data
}

export const getConversation = async (firstId, secondId) => {
    const {data} = await axios.get(`http://192.168.1.87:5000/api/conversations/${firstId}/${secondId}`)
    return data
}