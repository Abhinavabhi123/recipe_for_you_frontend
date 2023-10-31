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
  console.log(values);

  return (
    <div className="w-60 h-72 bg-white rounded-lg shadow-3xl flex flex-col justify-around items-center p-4">
        <div className="flex justify-end w-full pe-4 bg-yellow-300">
            <FiHeart className="text-red-500"/>
        </div>
      <img
        src={values.image}
        className="w-auto shadow-3xl h-auto rounded-md hover:scale-110 ease-out duration-300"
        alt="product image"
      />
      <p>{values.title}</p>
    </div>
  );
}
