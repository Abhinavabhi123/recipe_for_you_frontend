import person from "../../assets/person.png"


export default function Navbar() {
  return (
    <div className="w-full h-20 bg-primary flex items-center justify-between px-8 drop-shadow-md">
      <img src="https://icon-library.com/images/recipe-icon-png/recipe-icon-png-8.jpg" className="w-16 h-auto " alt="logo" />
      <ul className="flex items-center gap-4 md:flex">
        <li className="cursor-pointer font-serif">HOME</li>
        <li className="cursor-pointer"></li>
        <li className="cursor-pointer">
            <img src={`${person}`} className="w-9" alt="person logo" />
        </li>
      </ul>
      <ul className="bg-green-500  md:hidden">
      <li className="cursor-pointer text-white">HOME</li>
        <li className="cursor-pointer">hai</li>
        <li className="cursor-pointer">
            <img src={`${person}`} className="w-9" alt="person logo" />
        </li>
      </ul>
    </div>
  )
}
