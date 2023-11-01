import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded: string = jwtDecode(
            credentialResponse.credential?.toString() || ""
          );
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
