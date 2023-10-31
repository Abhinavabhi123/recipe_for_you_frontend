import { axiosInstance } from "../utils/axios";

const getAllProducts=(data)=>{
    return axiosInstance.get("/getAllProduct",data)
}

export{getAllProducts}