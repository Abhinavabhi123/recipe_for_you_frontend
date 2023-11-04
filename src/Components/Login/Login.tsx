import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../API/recipeApi.js";
import { showErrorToast, showSuccessToast } from "../Toaster/Toast.js";
import { Toaster } from "react-hot-toast";
import { DecodedToken } from "../../Middleware/AuthMiddleware.js";
import { userActions } from "../../redux/userAuth.js";

interface UserData {
  name: string;
  email: string;
  image: string;
}
interface LoginClose {
  setLoginClose: React.Dispatch<React.SetStateAction<boolean>>;
  setLogout: React.Dispatch<React.SetStateAction<boolean>>
}

type DecodedType = { [key: string]: string };

export default function Login({ setLoginClose,setLogout }: LoginClose) {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    image: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.values(userData).some((value) => value !== "")) {
      UserLogin(userData).then((response) => {
        if (response?.status === 200) {
          showSuccessToast(response?.data?.message);
          setLogout(false);
          localStorage.setItem("recipes",response?.data?.userData?.recipes)
          setLoginClose(true);
          const cookieData = jwtDecode(
            response?.data?.jwtToken
          ) as DecodedToken;
          dispatch(
            userActions.userAddDetails({
              id: cookieData?._id,
              userName: cookieData?.name,
              email: cookieData?.email,
              image: cookieData?.image,
            })
          );
          Cookies.set("jwtToken", response?.data?.jwtToken);
        }
      }).catch((error)=>{
        showErrorToast(error?.response?.data?.message)
        console.error(error);
      })
    }
  }, [userData]);

  return (
    <div className="right-4 top-16 absolute">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded: DecodedType = jwtDecode(
            credentialResponse.credential?.toString() || ""
          );
          setUserData({
            name: decoded?.given_name,
            email: decoded?.email,
            image: decoded?.picture,
          });
        }}
        onError={() => {
          showErrorToast("Login Failed");
        }}
      />
      <Toaster />
    </div>
  );
}
