import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

export default function Spinner() {
  return (
    <div className=" w-screen  md:h-[20rem] flex justify-center items-center bg-cyan-400">
      <BeatLoader color="#ccbdfd" />
    </div>
  );
}
