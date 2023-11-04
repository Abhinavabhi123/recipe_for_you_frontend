
interface Values {
  ingredients: {
    name: string;
    amount: number;
    unit: string;
  }[];
  instructions: string;
}

export default function RightSide({ ingredients, instructions }: Values) {
  return (
    <div className="md:w-[70%] bg-transparent p-6 border-s border-gray-40">
      {/* ingredients section */}
      <div className="w-full flex flex-col rounded-md p-2 bg-slate-200">
        <p className="text-sm md:text-lg font-semibold">Instructions</p>
        <div className="text-xs md:text-sm lg:text-base">{instructions}</div>
      </div>
    {/* Nutrients section */}
      <div className="mt-3 p-2">
        <p className="text-lg font-semibold underline">Ingredients</p>
        <div className="grid md:grid-cols-2 ">
          {ingredients.map((item, index) => (
            <p className="text-xs md:text-sm" key={index}>{`${item.name} : ${item.amount} ${item.unit}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
