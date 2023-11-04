import ProfileLeft from "../Components/Profile/ProfileLeft";
import ProfileRight from "../Components/Profile/ProfileRight";


export default function Profile() {
  return (
    <div className="w-full h-fit flex flex-col md:flex-row mt-5 items-center justify-around">
        <ProfileLeft/>
        <ProfileRight/>
    </div>
  )
}

