import axios from "axios";

export const getMessages = async conversationId => {
    const {data} = await axios.get(`http://192.168.1.87:5000/api/message/${conversationId}`)
    return data
}

export const sendMessage = async message => {
    const {data} = await axios.post(`http://192.168.1.87:5000/api/message`, message)
    return data
}