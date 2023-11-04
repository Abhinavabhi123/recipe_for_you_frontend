import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();

  return (
    <div className="container relative m-auto w-screen h-[30rem] justify-center items-center mb-20 rounded-lg flex flex-col md:flex-row">
      <img
        className="relative w-[100%] h-[100%] object-cover rounded-lg"
        src="https://th.bing.com/th/id/R.77fa1fc7a6be41d666833e45ea864460?rik=RVEny0MPFXQwjA&riu=http%3a%2f%2fwww.superiorwallpapers.com%2fdownload%2fyour-secret-book-with-food-recipes-1920x1080.jpg&ehk=fKF7b1dLRwPDWj%2f3618NpRffr9vQhGxL0jLj6IdmKjg%3d&risl=&pid=ImgRaw&r=0"
        alt="image"
      />
      <div className="absolute flex flex-col ">
        <h1 className="text-center text-xs md:text-base mb-4">
          Cook Up Your Creations
        </h1>
        <button className=" p-2 text-xs md:text-base text-center bg-blue-400 rounded-md bg-opacity-30 hover:bg-opacity-100" onClick={() => navigate("/recipes")}>
          Explore Recipe &#8594;
        </button>
      </div>
    </div>
  );
}
