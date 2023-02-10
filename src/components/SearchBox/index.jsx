import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchStore } from "../../store/store";

const SearchBox = () => {
  const searchRef = useRef();
  // let [searchParams, setSearchParams] = useSearchParams();

  const searchStore = useSearchStore();

  const submitSearch = (e) => {
    e.preventDefault();

    searchStore.setIsSearch();
    searchStore.setQueryString(searchRef.current.value);
    // setSearchParams(searchRef.current.value);
  };

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
            className="w-80 sm:w-[600px] md:w-[960px] py-2 pl-10 text-lg text-terniary rounded-full bg-gradient-to-r from-slate-700 to-primary 
            focus:ring-gray-600 focus:border-gray-600 focus:sm:px-6 duration-200 focus:placeholder-transparent"
            placeholder="Search Movie..."
            required
            // value={searchValue}
            // onChange={(e) => setSearchValue(e.target.value)}
            ref={searchRef}
          />
          <button
            onClick={submitSearch}
            type="submit"
            className="text-primary absolute right-1 self-center bg-secondary hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm p-2"
          >
            <img src="./images/search-icon.svg" className="w-5 h-5"></img>
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
