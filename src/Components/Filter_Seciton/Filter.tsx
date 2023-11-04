import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { Results } from "../All_Products/AllProducts";

interface Props {
  setResult: React.Dispatch<React.SetStateAction<Results>>;
  results: {
    id: number;
    title: string;
    image: string;
    imageType: string;
  }[];
}

export default function Filter({ setResult, results }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const favRecipe = localStorage.getItem("recipes");

  const sideBarOpen = () => {
    setOpen(!open);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (favRecipe) {
      const arr = favRecipe.split(",");
      if (event?.target?.value === "option1") {
        const matchingData = results.filter((item) =>
          arr.includes(item.id.toString())
        );
        setResult(matchingData);
      } else {
        const nonMatchingData = results.filter(
          (item) => !arr.includes(item.id.toString())
        );
        setResult(nonMatchingData);
      }
    }
    setSelectedOption(event.target.value);
  };

  const clearFilter = () => {
    setResult(results);
    setOpen(false)
    setSelectedOption("");
  };

  return (
    <div
      className={`h-[30rem]   hidden sm:block md:w-44 w-16 lg:w-72  rounded-br-md bg-slate-200 ps-5 sm:p-1 p-7`}
    >
      <div className="p-7 hidden md:flex flex-col gap-3">
        <label className="flex items-center">
          <input
            type="radio"
            value="option1"
            className=" resize-y w-4 h-4 me-2"
            checked={selectedOption === "option1"}
            onChange={handleRadioChange}
          />
          Liked
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            value="option2"
            className="resize-y w-4 h-4 me-2"
            checked={selectedOption === "option2"}
            onChange={handleRadioChange}
          />
          Not LIked
        </label>
        <button
          className="bg-sky-300 hover:bg-sky-500 mt-3 p-2 rounded"
          onClick={clearFilter}
        >
          Clear Filter
        </button>
      </div>
    {/* side bar open button */}
      <div
        className="md:hidden block hover:bg-slate-300  max-[624px]:p-0 sm:p-2 rounded-md ps-4 "
        onClick={sideBarOpen}
      >
        <CgMenuLeft size={20} />
      </div>
      {/* responsive side bar open container */}
      <div
        className={` ${
          open ? "block" : "hidden"
        } w-48 h-full rounded-md sm:ms-14 ms-12 md:hidden  mt-[-38px] absolute p-5 bg-slate-200 animate-side-bar gap-3`}
      >
        <div className="font-serif text-lg underline">Filter</div>
        <label className="flex items-center">
          <input
            type="radio"
            value="option1"
            className=" resize-y w-4 h-4 me-2"
            checked={selectedOption === "option1"}
            onChange={handleRadioChange}
          />
          Liked
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            value="option2"
            className="resize-y w-4 h-4 me-2"
            checked={selectedOption === "option2"}
            onChange={handleRadioChange}
          />
          Not LIked
        </label>
        <button
          className="bg-sky-300 hover:bg-sky-500 mt-3 p-2 rounded"
          onClick={clearFilter}
        >
          Clear Filter
        </button>
      </div>
      {/* Responsive side bar */}
    </div>
  );
}
