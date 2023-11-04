import { axiosInstance ,userInstance } from "../utils/axios";
import UserAxios from "../utils/intercepter";

interface UserData {
  name: string;
  email: string;
  image: string;
}


export const getAllProducts=() =>{
    return axiosInstance.get("/getRecipe")
}
export const UserLogin = (data:UserData)=>{
    return userInstance.post('/userLogin', data);
}
export const getRecipe=(id:number)=>{
  return axiosInstance.get(`/getRecipe/${id}`)
}
export const addFavorite =(id:number,userId:string)=>{
  return UserAxios.post("/addRecipeFav",{id,userId})
}
export const favoriteRecipes =(id:string,userId:string)=>{
  return UserAxios.get("/favoriteRecipes",{
    params: { id, userId },
  })
}
