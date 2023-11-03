import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { userActions } from "../redux/userAuth";

interface AuthenticationProps {
  children: React.ReactNode;
}
export interface DecodedToken {
  _id: string;
  name: string;
  email: string;
  image: string;
  recipe: string[];
}

const Authentication = ({ children }: AuthenticationProps) => {
  const cookie: string | undefined = Cookies.get("jwtToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (cookie !== undefined) {
      const cookieData = jwtDecode(cookie) as DecodedToken;
      dispatch(
        userActions.userAddDetails({
          id: cookieData?._id,
          userName: cookieData?.name,
          email: cookieData?.email,
          image: cookieData?.image,
        })
      );
    } else {
      switch (location.pathname) {
        case "/":
          navigate("/");
          break;

        case "/recipes":
          navigate("/recipes");
          break;

        default:
          navigate("/");
      }
    }
  }, [cookie, dispatch, location.pathname, navigate]);

  return <>{children}</>;
};
export default Authentication;
