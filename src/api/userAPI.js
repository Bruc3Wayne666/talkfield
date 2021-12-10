import axios from "axios";

export const getOneUser = async userId => {
    // const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    const {data} = await axios.get(`http://192.168.1.87:5000/api/user/${userId}`)
    return data
}

export const getFriends = async userId => {
    const {data} = await axios.get(`http://192.168.1.87:5000/api/user/friends/${userId}`)
    return data
}

export const getFollowing = async (userId, follower) => {
    const {data} = await axios.put(`http://192.168.1.87:5000/api/user/${userId}/follow`, {user: follower})
    return data
}

export const getUnfollowing = async (userId, unfollower) => {
    const {data} = await axios.put(`http://192.168.1.87:5000/api/user/${userId}/unfollow`, {userId: unfollower})
    return data
}