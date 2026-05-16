import { axiosClient } from "./axiosClient";

export const loginUser = async (credentials)=>{
    const res = await axiosClient.post('/login',credentials);
    return res.data;
};

export const logoutUser = async (userData) => {
    const res = await axiosClient.post('/logout')
    return res.data;
}

export const registerUser = async (userData)=>{
    const res = await axiosClient.post('/register', userData);
    return res.data;
}