

interface InputProps {
  searchHandler: (search: string) => void;
}

export default function Input({ searchHandler }: InputProps) {
  return (
    <input
      type="text"
      className="w-[80%] md:w-[20rem] h-8 rounded-md p-4 border border-black focus:outline-none"
      placeholder="Search Dishes..."
      onChange={(e) => {
        searchHandler(e.target.value);
      }}
    />
  );
}
