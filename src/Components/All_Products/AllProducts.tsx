import { useEffect,useState } from "react";
import axios from "axios";
import Card from "../ProductCard/Card";
// import {getAllProducts} from "../../API/recipeApi.js"

export default function AllProducts() {
  const [products,setProducts] = useState([])
  useEffect(() => {
    console.log(import.meta.env.SERVER_URL);
    axios.get(`${import.meta.env.VITE_SERVER_URL}getRecipe`).then((response)=>{
      console.log(response.data.results);
      
      setProducts(response.data.results)
      
    }).catch(err=>{
      console.error(err);
    })
  }, []);
  console.log(products.push,"");


  
  
  return (
    <div>
      <div className="w-full h-20 bg-green-400">
        details
      </div>
      <div className="w-full bg-yellow-500 flex  ">
        <div className="h-full md:w-[18%] w-20  bg-blue-400"></div>
        <div className="h-full md:w-[82%] w-full md:gap-6 bg-orange-400 grid m-auto p-10 grid-cols-2 gap-4 md:grid-cols-4">
          {
            products.map((product,index)=>(
              <Card key={index} values={product}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
