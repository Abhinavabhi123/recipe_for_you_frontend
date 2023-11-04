import {useEffect, useState } from "react";
import { Values } from "../ProductCard/Card";
import { getRecipe } from "../../API/recipeApi";
import Spinner from "../Loader/Spinner";
import RightSide from "./RightSide";
import { showErrorToast } from "../Toaster/Toast";

interface Modal extends Values {
  modalHandler: () => void;
}
interface Data{
  nutations:{
    name:string;
    amount:number;
    unit:string;
  }[];
  ingredients:{
    name:string;
    amount:number;
    unit:string;
  }[],
  instructions:string;
}

export default function Recipe_Modal({ modalHandler, values }: Modal) {
  window.scrollTo(0, 0);
 
  const [loading, setLoading] = useState<boolean>(true);
  const [modalData, setModalDAta] = useState<Data>({
    nutations:[{
      name:"",
      amount:0,
      unit:""
    }],
    ingredients:[{
      name:'',
      amount:0,
      unit:''
    }],
    instructions:''
  });
  useEffect(() => {
    if (values.id) {
      getRecipe(values?.id).then((response) => {
        if (response.status === 200) {
          setModalDAta(response?.data);
          setLoading(false);
        }
      }).catch((error)=>{
        console.error(error);
        showErrorToast(error?.response?.data?.message)
      })
    }
  }, [values.id]);
  return (
    <div className="absolute flex-wrap inset-0 h-[100%] bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center">
      <div className="bg-white flex flex-col  mt-4 p-2 h-fit rounded-2xl w-full mx-5 ">
        {/* top section */}
        <div className="w-full flex justify-end pe-3 border-b border-gray-300">
          <h1
            className="font-thin text-center text-xl text-gray-700 cursor-pointer"
            onClick={modalHandler}
          >
            &#935;
          </h1>
        </div>
        {/* Data container div */}
        {!loading ? (
          <div className="w-full flex flex-col md:flex-row  justify-center">
            <div className="w-full md:w-[30%] bg-transparent flex flex-col sm:justify-center items-center p-5">
              <p className="mb-2 mx-4 font-semibold">{values.title}</p>
              <img
                className="w-64 h-auto rounded-md"
                src={values?.image}
                alt=""
              />
              <p className="mt-3 font-semibold">Nutations</p>
              <div className="md:grid grid-col-1 md:grid-cols-2 ">
                {modalData.nutations.map((item, index) => (
                  <p key={index} className="text-xs ms-2 me-2 sm:ms-0">
                    {item?.name} : {`${item.amount} ${item?.unit},`}
                  </p>
                ))}
              </div>
            </div>
          {/* Right side of the Modal  */}
           <RightSide ingredients={modalData.ingredients} instructions={modalData.instructions}/>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
