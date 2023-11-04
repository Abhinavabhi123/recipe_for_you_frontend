import { useSelector } from "react-redux";
import { Args } from "../../redux/userAuth";

export default function ProfileLeft() {
  const userData = useSelector((state: Args) => {
    return state;
  });
  return (
    <div className=" h-96 bg-slate-200 mb-6 shadow-2xl rounded-md flex flex-col items-center p-8 gap-3">
      <img className="w-28 rounded-full" src={userData?.image} alt="" />
      <p>Name: {userData.userName}</p>
      <p>Email : {userData.email}</p>
    </div>
  );
}
