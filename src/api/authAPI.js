import axios from "axios";
import {LoginFailure, LoginStart, LoginSuccess} from "../store/AuthActions";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch(LoginStart)
    try {
        console.log(userCredentials)
        const {data} = await axios.post(`http://192.168.1.87:5000/api/auth/login`, userCredentials)
        console.log(data)
        dispatch(LoginSuccess(data))
    } catch (err) {
        dispatch(LoginFailure(err))
    }
}

export const registerCall = async (userCredentials, dispatch) => {
    dispatch(LoginStart)
    try {
        const {data} = await axios.post(`http://192.168.1.87:5000/api/auth/register`, userCredentials)
        dispatch(LoginSuccess(data))
    } catch (err) {
        dispatch(LoginFailure(err))
    }
}