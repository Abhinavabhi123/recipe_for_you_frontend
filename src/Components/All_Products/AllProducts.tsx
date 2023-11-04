import { useEffect, useState } from "react";
import Card from "../ProductCard/Card";
import Spinner from "../Loader/Spinner";
import { getAllProducts } from "../../API/recipeApi.js";
import Filter from "../Filter_Seciton/Filter.js";
import Input from "../SearchInput/Input.js";
import Empty from "../../assets/Recipe book-pana.svg";
import { showErrorToast } from "../Toaster/Toast.js";


export type Results = {
  id: number;
  title: string;
  image: string;
  imageType: string;
}[];

export default function AllProducts() {
  
  
  const [products, setProducts] = useState<Results>([]);
  const [result, setResult] = useState<Results>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLImit] = useState<string>("all");

  useEffect(() => {
    try {
      setLoading(true);
      getAllProducts()
        .then((response) => {
          if (response.data) {
            setProducts(response.data.results);
            setResult(response.data.results);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error(err);
          showErrorToast(err?.response?.data?.message)
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Searching contents
  const searchHandler = (search: string) => {
    const result = filterData(products, search);
    if(result && search!==""){
      setResult(result)
    }else{
       sortHandler(limit)
    }
  };
  const filterData = (data: Results, searchString: string) => {
      const regex = new RegExp(searchString, "i");
      return data.filter((item) => regex.test(item.title));
  };

  // Sorting recipe data
  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement> | string) => {
    let value;
    typeof e == "string" ? (value = e) : (value = e.target.value);  

    setLImit(value);
    switch (value) {
      case "all":
        setResult(products);
        break;
      case "10":
        setResult(products.slice(0, 10));
        break;
      case "25":
        setResult(products.slice(0, 25));
        break;
      case "100":
        setResult(products.slice(0, 100));
        break;
      default:
        setResult(products);
        break;
    }
  };

  return (
    <div>
      <div className="h-20 flex flex-col md:flex-row  items-center border-b justify-around">
        <div className="gap-3 flex">
          <p>Sort :</p>
          <select
            onChange={sortHandler}
            className="rounded-sm text-sm w-44 border-2 border-black group"
          >
            <option value="all">All</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        {/* Searching */}
        <div className="flex justify-center items-center gap-3">
          <Input searchHandler={searchHandler} />
        </div>
        {/*  */}
      </div>

      <div className="w-full min-h-[30rem]  bg-transparent flex  ">
        <Filter  results={products} setResult={setResult}/>
        {loading ? (
          <Spinner />
        ) : (
          <div className="h-full  md:w-[82%] w-full md:gap-6 bg-transparent grid m-auto p-10 grid-cols-1 gap-4 min-[409px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {result.length > 0 ? (
              result.map((product, index) => (
                <Card key={index} values={product} />
              ))
            ) : (
              <div className="w-[74vw] h-full flex justify-center items-center">
                <img
                  className="w-52 md:w-96 h-auto"
                  src={Empty}
                  alt="no data"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
