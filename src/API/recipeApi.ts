import { axiosInstance ,userInstance } from "../utils/axios";

interface UserData {
  name: string;
  email: string;
  image: string;
}
const getAllProducts=() =>{
    return axiosInstance.get("/getAllProduct")
}
const UserLogin = (data:UserData)=>{
    return userInstance.post('/userLogin', data);
}

export{getAllProducts,UserLogin}