import axios from "axios";
export const axiosInstance =axios.create({
    baseURL:import.meta.env.VITE_USER_API,
    headers:{
        "Content-Type":"application/json"
    }
});