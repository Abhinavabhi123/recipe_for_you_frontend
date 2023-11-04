import { useSelector } from "react-redux";
import { Args } from "../../redux/userAuth";


export default function ProfileLeft() {
  const userData = useSelector((state: Args) => {
    return state;
  });
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" md:h-96 sm:w-[90%] md:w-fit bg-slate-200 mb-6 shadow-2xl rounded-md flex flex-col items-center p-8 gap-3">
      <img
        className="sm:w-28 w-20 max-[332px]:w-14 rounded-full"
        src={userData?.image}
        alt=""
      />
      <p className="text-sm md:text-base">Name: {userData.userName}</p>
      <p className="text-sm md:text-base">Email : {userData.email}</p>
    </div>
  );
}
