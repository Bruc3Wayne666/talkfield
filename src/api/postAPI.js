import axios from "axios";

export const getNews = async userId => {
    const {data} = await axios.get(`http://192.168.1.87:5000/api/post/news/${userId}`)
    return data
}

export const getUserPosts = async userId => {
    const {data} = await axios.get(`http://192.168.1.87:5000/api/post/news/${userId}`)
    return data
}

export const likePost = async (postId, userId) => {
    const {data} = await axios.put(`http://192.168.1.87:5000/api/post/${postId}/like`, {userId})
    return data
}

export const createPost = async post => {
    const {data} = await axios.post(`http://192.168.1.87:5000/api/post`, post)
    return data
}

export const uploadFile = async file => {
    const {data} = await axios.post(`http://192.168.1.87:5000/api/upload`, file)
    return data
}