import { useRef, useState } from "react";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState();

  const searchRef = useRef();

  const submitSearch = (e) => {
    e.preventDefault();

    setSearchValue(searchRef.current.value);
  };

  console.log(searchValue);

  return (
    <>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-terniary sr-only"
        >
          Search
        </label>
        <div className="flex relative shadow-2xl">
          <input
            type="search"
            id="default-search"
            className="w-80 sm:w-[600px] md:w-[960px] py-4 pl-10 text-sm text-terniary rounded-full bg-gradient-to-r from-slate-700 to-primary 
            focus:ring-gray-600 focus:border-gray-600 focus:sm:py-6 focus:sm:w-[1024px] duration-200"
            placeholder="Search Movie..."
            required
            // value={searchValue}
            // onChange={(e) => setSearchValue(e.target.value)}
            ref={searchRef}
          />
          <button
            onClick={submitSearch}
            type="submit"
            className="text-primary absolute right-4 self-center bg-secondary hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm p-2"
          >
            <img src="./images/search-icon.svg" className="w-6 h-6"></img>
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
