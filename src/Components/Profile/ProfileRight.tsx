import { useEffect, useState } from "react";
import { favoriteRecipes } from "../../API/recipeApi";
import { useSelector } from "react-redux";
import { Args } from "../../redux/userAuth";
import RecipeCard from "../ProductCard/RecipeCard";
import Spinner from "../Loader/Spinner";
import { showErrorToast } from "../Toaster/Toast";

interface Recipes {
  image: string;
  title: string;
}
[];

export default function ProfileRight() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const userId = useSelector((state: Args) => {
    return state.id;
  });
  const items = localStorage.getItem("recipes");

 
// Fetching favorite recipe
  useEffect(() => {
    try {
      if (items && userId) {
        favoriteRecipes(items, userId)
          .then((response) => {
            if (response?.status === 200) {
              setLoading(false);
              setRecipes(response?.data?.resultArray);
            }
          })
          .catch((err) => {
            console.error(err);
            showErrorToast(err?.response?.data?.message)
          });
      }
    } catch (error) {
      console.error(error);
    }
  }, [userId, items]);

  return (
    <div className="w-[80%] md:w-[60%] mb-6 min-h-[80%] h-fit bg-slate-200 rounded-md flex flex-col items-center">
      <div className="h-10 w-full flex items-center justify-center">
        <h3 className="italic underline">Favorite Recipe</h3>
      </div>
      <div className="w-full min-h-full ">
        <div className="grid grid-cols-1 min-[483px]:grid-cols-2 min-[1267px]:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 md:gap-2 gap-4 sm:p-2 p-7">
          {!loading ? (
            recipes.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)
          ) : (
            <div className="w-full h-64 flex justify-center items-center md:ps-[16em] min-[490px]:ps-[10rem] sm:ps-[50%] lg:ps-[20rem] xl:ps-[30rem]">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
