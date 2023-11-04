import { FiHeart } from "react-icons/fi";
import { useState, useEffect } from "react";
import Recipe_Modal from "../Modal/Recipe_Modal";
import Cookies from "js-cookie";
import { addFavorite } from "../../API/recipeApi";
import { useSelector } from "react-redux";
import { Args } from "../../redux/userAuth";
import { showErrorToast, showSuccessToast } from "../Toaster/Toast";

export type Values = {
  values: {
    id: number;
    title: string;
    image: string;
  };
};

export default function Card({ values }: Values) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [changed, setChanged] = useState<boolean>(false);

  const userId = useSelector((state: Args) => {
    return state.id;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const favoriteRecipes = localStorage.getItem("recipes");
    if (favoriteRecipes) {
      const recipeArray: string[] = favoriteRecipes
        .replace(/"/g, "")
        .split(",");
      recipeArray.map((item) => {
        if (Number(item) == values.id) {
          setFavorite(true);
        }
      });
    }
  }, [changed, values.id,userId]);


  const addToFav = async (id: number) => {
    const cookie: string | undefined = Cookies.get("jwtToken");
    if (cookie) {
      addFavorite(id, userId)
        .then((response) => {
          if (response.status === 200) {
            showSuccessToast("Recipe added to favorite");
            localStorage.setItem("recipes", response?.data?.recipes);
          }
        })
        .then(() => {
          setChanged(!changed);
        })
        .catch((error) => {
          console.error(error);
          showErrorToast(error?.response?.data?.message)
        });
    } else {
     showErrorToast("Please Login to add recipe favorite")
    }
  };

  const modalHandler = () => {
    setOpenModal(!openModal);
  };

  return !openModal ? (
    <div className="w-full h-auto gap-4 p-4 md:h-84 bg-white rounded-lg shadow-sm shadow-gray-500 flex flex-col justify-around items-center px-4">
      <div className="flex justify-end w-full h-10">
        {!favorite ?(
          <FiHeart
            onClick={() => {
              addToFav(values?.id);
            }}
            className="text-red-500 text-lg me-1 hover:fill-current hover:text-xl ease-in-out duration-300 hover:text-red-500"
          />
        ) : (
          <FiHeart className="text-red-500 text-lg fill-current hover:text-red-500" />
        )}
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
