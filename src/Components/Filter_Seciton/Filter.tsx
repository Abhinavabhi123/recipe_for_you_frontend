import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";

export default function Filter() {
  const [open, setOpen] = useState<boolean>(false);

  // Side bar open function
  const sideBarOpen = () => {
    setOpen(!open);
  };
  // const [checkedRadio, setCheckedRadio] =useState<string>('check1');

  // const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setCheckedRadio(event.target.value);
  // };

  return (
    <div
      className={`h-[30rem]  hidden sm:block md:w-44 w-16 lg:w-72  rounded-br-md bg-slate-200 ps-5 sm:p-1 p-7`}
    >
      <form className="p-7 hidden md:block">
        {/* <div>
        <input id='check1' type='radio' className='resize-y w-4 h-4' checked={checkedRadio === 'check1'} onChange={handleChange} />
        <label htmlFor='check1' className='ms-1'>Liked</label>
      </div>
      <div>
        <input id='check2' type='radio' className='resize-y w-4 h-4' checked={checkedRadio === 'check2'} onChange={handleChange} />
        <label htmlFor='check2' className='ps-1'>Not Liked</label>
      </div> */}
      </form>
      <div
        className="md:hidden block hover:bg-slate-300 p-2 rounded-md ps-4"
        onClick={sideBarOpen}
      >
        <CgMenuLeft size={20} />
      </div>
      <div
        className={` ${
          open ? "block" : "hidden"
        } w-48 h-full rounded-md ms-14 md:hidden mt-[-38px] absolute p-5 bg-blue-300 animate-side-bar `}
      >
        <div className="font-serif text-lg underline">Filter</div>
        <ul>
          <li className="flex gap-2">
            <input type="checkbox" />
            <p>hello</p>
          </li>
          <li className="flex gap-2">
            <input type="checkbox" />
            <p>hello</p>
          </li>
          <li className="flex gap-2">
            <input type="checkbox" />
            <p>hello</p>
          </li>
        </ul>
      </div>
      {/* Responsive side bar */}
    </div>
  );
}
