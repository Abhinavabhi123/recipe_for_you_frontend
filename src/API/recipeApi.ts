import { axiosInstance ,userInstance } from "../utils/axios";

interface UserData {
  name: string;
  email: string;
  image: string;
}
// interface RecipeId{
//   id:number
// }
const getAllProducts=() =>{
    return axiosInstance.get("/getRecipe")
}
const UserLogin = (data:UserData)=>{
    return userInstance.post('/userLogin', data);
}
const getRecipe=(id:number)=>{
  return axiosInstance.get(`/getRecipe/${id}`)
}

export{getAllProducts,UserLogin,getRecipe}