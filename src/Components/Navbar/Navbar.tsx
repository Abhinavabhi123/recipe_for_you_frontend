import { useState } from "react";
import person from "../../assets/person.png";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Login from "../Login/Login";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  const menuHandler = () => {
    setOpen(!open);
  };
  const showLogin = () => {
    console.log("Clicked");

    setLoginOpen(!loginOpen);
  };
  return (
    <div className="w-full h-20 bg-primary flex items-center  justify-between px-8 drop-shadow-md">
      <img
        src="https://icon-library.com/images/recipe-icon-png/recipe-icon-png-8.jpg"
        className="w-16 h-auto cursor-pointer"
        alt="logo"
      />
      <ul className="hidden items-center gap-4 md:flex justify-center">
        <li
          className="cursor-pointer font-serif p-2 rounded-md hover:bg-slate-200"
          onClick={() => navigate("/")}
        >
          HOME
        </li>
        <li
          className="cursor-pointer font-serif p-2 rounded-md hover:bg-slate-200"
          onClick={() => navigate("/products")}
        >
          PRODUCTS
        </li>
        <li className="cursor-pointer" onClick={showLogin}>
          <button
            type="button"
            className="bg-violet-400 px-3 py-1 rounded-md hover:bg-violet-700 hover:text-white"
          >
            Login
          </button>
          {loginOpen && <Login />}
        </li>
      </ul>
      <div className="flex md:hidden" onClick={menuHandler}>
        <IoMdMenu size={20} />
      </div>
      <div
        className={`${
          open ? "flex" : "hidden"
        } w-[50%] min-w-32 h-20 bg-red-500 absolute right-0 top-20 z-2 md:hidden`}
      >
        <ul className="flex w-full flex-col items-center justify-center bg-">
          <li
            className="cursor-pointer text-white"
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            HOME
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              navigate("/products");
              setOpen(false);
            }}
          >
            PRODUCTS
          </li>
          <li className="cursor-pointer">
            <img src={`${person}`} className="w-9" alt="person logo" />
          </li>
        </ul>
      </div>
    </div>
  );
}
