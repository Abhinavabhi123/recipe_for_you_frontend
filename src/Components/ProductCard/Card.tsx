import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import Recipe_Modal from "../Modal/Recipe_Modal";

export type Values = {
  values: {
    id: number;
    title: string;
    image: string;
  };
};

export default function Card({ values }: Values) {
  window.scrollTo(0, 0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const addToFav = (id: number) => {
    console.log("Clicked", id);
  };

  const modalHandler = () => {
    setOpenModal(!openModal);
  };

  return !openModal ? (
    <div className="w-full h-auto gap-4 p-4 md:h-84 bg-white rounded-lg shadow-sm shadow-gray-500 flex flex-col justify-around items-center px-4">
      <div className="flex justify-end w-full">
        <FiHeart
          onClick={() => {
            addToFav(values?.id);
          }}
          className="text-red-500 text-lg hover:fill-current hover:text-red-500"
        />
      </div>
      <img
        src={values?.image}
        className="w-fit shadow-3xl h-auto rounded-md hover:scale-105 ease-out duration-300"
        alt="product image"
      />
      <p className="text-sm md:text-base">{values?.title}</p>
      <button
        className="text-2xl hover:scale-125 ease-in duration-200"
        onClick={modalHandler}
      >
        &#8594;
      </button>
    </div>
  ) : (
    <Recipe_Modal modalHandler={modalHandler} values={values} />
  );
}
