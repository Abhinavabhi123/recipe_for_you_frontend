import { useState, useEffect } from "react";
import person from "../../assets/person.png";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Cookies from "js-cookie";
import Login from "../Login/Login";
import { useSelector, useDispatch } from "react-redux";
import { Args, userActions } from "../../redux/userAuth";
import { showSuccessToast } from "../Toaster/Toast";
import { Toaster } from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPath = useLocation().pathname;
  const [open, setOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [loginClose, setLoginClose] = useState(false);
  const [logout, setLogout] = useState<boolean>(false);
  const [userData, setUserData] = useState<Args>({
    id: "",
    userName: "",
    email: "",
    image: "",
  });
  const userDetails = useSelector((state: Args) => {
    return state;
  });

  useEffect(() => {
    if (userDetails) {
      setUserData(userDetails);
    }
  }, [userDetails]);

  const menuHandler = () => {
    setOpen(!open);
  };
  const showLogin = () => {
    setLoginClose(false);
    setLoginOpen(!loginOpen);
  };
  const closeButton = () => {
    setLogout((prev) => !prev);
  };
  const logoutHandler = () => {
    showSuccessToast("Logged Out");
    Cookies.remove("jwtToken");
    localStorage.removeItem("recipes");
    dispatch(
      userActions.userLogout({
        userName: "",
        email: "",
        id: "",
        image: "",
      })
    );
    navigate("/");
    setLogout(false);
  };

  return (
    // NavBar
    <div className=" w-full h-20 bg-primary flex items-center justify-between px-8 drop-shadow-md">
      <img
        src="https://icon-library.com/images/recipe-icon-png/recipe-icon-png-8.jpg"
        className="w-16 h-auto cursor-pointer"
        alt="logo"
        onClick={() => navigate("/")}
      />
      <ul className="hidden items-center gap-4 md:flex justify-center">
        <li
          className={`cursor-pointer font-serif p-2 rounded-md hover:bg-slate-200  ${
            currentPath === "/" ? "active" : ""
          }`}
          onClick={() => navigate("/")}
        >
          HOME
        </li>
        <li
          className={`cursor-pointer font-serif p-2 rounded-md hover:bg-slate-200 ${
            currentPath === "/recipes" ? "active" : ""
          }`}
          onClick={() => navigate("/recipes")}
        >
          RECIPES
        </li>
        {/* If user loggedIn then change the button */}
        {!userData.email ? (
          <li className="cursor-pointer" onClick={showLogin}>
            <button
              type="button"
              className="bg-violet-400 px-3 py-1 rounded-md hover:bg-violet-700 hover:text-white"
            >
              Login
            </button>
            {loginOpen && !loginClose && (
              <Login setLoginClose={setLoginClose} setLogout={setLogout} />
            )}
          </li>
        ) : (
          <>
            <button type="button">
              {userData.image ? (
                <img
                  className=" w-10 rounded-full"
                  src={`${userData.image}`}
                  alt="image"
                  onClick={closeButton}
                />
              ) : (
                ""
              )}
            </button>
            {logout && (
              <div className="absolute right-7 rounded-md top-16 w-28 h-20 flex items-center justify-center  bg-slate-200">
                <ul className="flex w-full items-center flex-col gap-2 justify-center text-center ">
                  <li className="hover:bg-slate-300 w-full">
                    <button
                      className=" px-2  p-1 rounded-md "
                      onClick={() => {
                        navigate("/profile");
                        setLogout(false);
                      }}
                    >
                      Profile
                    </button>
                  </li>
                  <li className="hover:bg-slate-300 w-full">
                    <button
                      type="button"
                      className=" px-2  p-1 rounded-md"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
      </ul>
      {/* responsive Navbar design  */}
      <div className="flex md:hidden" onClick={menuHandler}>
        <IoMdMenu size={20} />
      </div>
      <div
        className={`${
          open ? "flex" : "hidden"
        } w-[50%] min-w-32 h-28 justify-between rounded-lg bg-slate-300 absolute right-0 top-20 z-2 md:hidden`}
      >
        <ul className="flex w-full  flex-col items-center justify-center ">
          <li
            className="cursor-pointer w-full  text-center text-white"
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            HOME
          </li>
          <li
            className="cursor-pointer w-full  text-center"
            onClick={() => {
              navigate("/recipes");
              setOpen(false);
            }}
          >
            RECIPES
          </li>
          <li className="cursor-pointer">
            <button
              type="button"
              className=" px-2  p-1 rounded-md"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </li>
          {!userData.email ? (
            <li className="cursor-pointer">
              <img src={`${person}`} className="w-9" alt="person logo" />
            </li>
          ) : (
            <li className="cursor-pointer flex justify-center items-center gap-3">
              <img
                src={`${userData.image}`}
                className="w-6 rounded-full"
                alt="person logo"
              />{" "}
              Profile
            </li>
          )}
        </ul>
      </div>
      <Toaster />
    </div>
  );
}
