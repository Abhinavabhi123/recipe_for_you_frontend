import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../API/recipeApi.js";
import { showSuccessToast } from "../Toaster/Toast.js";
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
          setLogout(false);
          showSuccessToast("response?.data?.message");
          console.log(response.data,"data");
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
      });
    }
  }, [userData]);

  return (
    <div className="right-0 top-16 absolute">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded: DecodedType = jwtDecode(
            credentialResponse.credential?.toString() || ""
          );
          console.log(decoded);

          setUserData({
            name: decoded?.given_name,
            email: decoded?.email,
            image: decoded?.picture,
          });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <Toaster />
    </div>
  );
}
