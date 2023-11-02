import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/userAuth";

interface AuthenticationProps {
  children: React.ReactNode;
}
export interface DecodedToken {
  _id: string;
  name: string;
  email: string;
  image: string;
}

const Authentication = ({ children }: AuthenticationProps) => {
  const cookie: string | undefined = Cookies.get("jwtToken");
  console.log(cookie, "gg");

  const dispatch = useDispatch();

  useEffect(() => {
    if (cookie) {
      const cookieData = jwtDecode(cookie) as DecodedToken;
      console.log(cookieData, "kookie");
      dispatch(
        userActions.userAddDetails({
          id: cookieData?._id,
          userName: cookieData?.name,
          email: cookieData?.email,
          image: cookieData?.image,
        })
      );
    }
  }, [cookie, dispatch]);

  return <>{children}</>;
};
export default Authentication;
