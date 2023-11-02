import React from "react";
import Logo from "../../assets/footer_logo.png";

export default function Footer() {
  return (
    <div className="w-full h-44 bg-primary flex flex-col justify-around">
      <img
        className="w-28 sm:w-32 md:w-40 pt-8 ms-10"
        src={Logo}
        alt="footer logo"
      />
      <div className=" w-full flex justify-center items-center">
        <p className="hidden min-[729px]:block md:text-sm">
          RecipeForYou is a website where you can find delicious and easy
          recipes for any occasion
        </p>
      </div >
      <div className=" w-full  flex justify-center items-center">
        <p className="text-xs">RecipeForYou © 2023. All rights reserved</p>
      </div>
    </div>
  );
}
