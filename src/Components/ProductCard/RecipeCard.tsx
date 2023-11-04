import React from "react";

interface Values {
  recipe: {
    image: string;
    title: string;
  };
}

export default function RecipeCard({ recipe }: Values) {
  return <div className="md:h-48 bg-white rounded-md p-2 flex flex-col items-center justify-between">
    <img className="w-fit object-cover md:h-[60%] lg:h-[70%] rounded-md" src={recipe?.image} alt="image" />
    <p className="text-sm text-center">{recipe?.title}</p>
  </div>;
}
