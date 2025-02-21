import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Searchbar = () => {
  return (
    <div className="flex items-center md:border-2 p-2 rounded-full md:shadow-sm">
      <input
        type="text"
        placeholder="Start your search"
        className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-1.5 bg-transparent outline-none"
      />
      <MagnifyingGlassIcon className="hidden sm:inline-flex h-9 text-white bg-rose-500 rounded-full p-2 cursor-pointer" />
    </div>
  );
};

export default Searchbar;
