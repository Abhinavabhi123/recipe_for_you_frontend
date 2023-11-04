import ProfileLeft from "../Components/Profile/ProfileLeft";
import ProfileRight from "../Components/Profile/ProfileRight";


export default function Profile() {
  return (
    <div className="w-full min-h-[29rem] h-fit flex flex-col md:flex-row mt-5 items-center justify-around">
        <ProfileLeft/>
        <ProfileRight/>
    </div>
  )
}

