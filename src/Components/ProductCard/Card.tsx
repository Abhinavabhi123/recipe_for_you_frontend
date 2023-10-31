import React from "react";
import {FiHeart} from "react-icons/fi"
type Values = {
  values: {
    id: number;
    title: string;
    image: string;
  };
};

export default function Card({ values }: Values) {
  const addToFav=(id:number)=>{
    console.log("Clicked",id);
  }

  return (
    <div className="w-full h-auto gap-4 p-4 md:h-80 :h-72 bg-white rounded-lg shadow-sm shadow-gray-500 flex flex-col justify-around items-center px-4">
        <div className="flex justify-end w-full">
            <FiHeart onClick={()=>{addToFav(values?.id)}} className="text-red-500 text-lg hover:fill-current" />
        </div>
      <img
        src={values?.image}
        className="w-fit shadow-3xl h-auto rounded-md hover:scale-105 ease-out duration-300"
        alt="product image"
      />
      <p>{values?.title}</p>
    </div>
  );
}
