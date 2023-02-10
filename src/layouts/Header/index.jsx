import { useState } from "react";
import SearchBox from "../../components/SearchBox";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <header className="flex w-full">
        <nav className="flex w-full h-16 py-2 px-2 sm:px-8 bg-primary text-terniary items-center justify-between fixed z-20 shadow-xl">
          <div className="flex w-full justify-between ">
            <a href="/" className="flex w-max items-center">
              <img className="h-9" src="./images/logo.png" alt="logo" />
              <h1 className="text-lg sm:text-2xl font-semibold">upibarr</h1>
            </a>
          </div>

          <div
            className={`flex flex-col-reverse sm:flex-row p-4 sm:p-0 w-64 sm:w-full justify-end sm:justify-end items-start sm:items-center bg-secondary sm:bg-primary absolute sm:relative 
            top-16 sm:top-0 h-screen sm:h-16  sm:right-0 z-10 ${
              !open ? "right-0" : "-right-64"
            } duration-300 sm:transition-none z-20`}
          >
            <ul className="flex flex-col sm:flex-row text-center gap-y-4 sm:gap-x-14 mt-8 sm:mt-0 sm:mr-10 items-start sm:items-center">
              <a href="/#now-playing">
                <li className="text-lg font-semibold hover:underline hover:text-secondary text-primary sm:text-terniary w-max ">
                  Now Playing
                </li>
              </a>
              <a href="/#top-rated">
                <li className="text-lg font-semibold hover:underline hover:text-secondary text-primary sm:text-terniary w-max active:text-secondary">
                  Top Rated
                </li>
              </a>
              <a href="/#popular">
                <li className="text-lg font-semibold hover:underline hover:text-secondary text-primary sm:text-terniary">
                  Popular
                </li>
              </a>
              <a href="/#upcoming">
                <li className="text-lg font-semibold hover:underline hover:text-secondary text-primary sm:text-terniary">
                  Upcoming
                </li>
              </a>
              <a href="/favorit" className="hidden">
                <li className="text-lg font-semibold hover:underline hover:text-secondary text-primary sm:text-terniary">
                  Favorit
                </li>
              </a>
            </ul>
            <div className="w-full md:w-[500px] sm:inline mr-12 mt-8 sm:mt-0">
              <SearchBox />
            </div>
            <div className="flex justify-between sm:justify-between w-full sm:w-max items-center">
              <span className="flex sm:hidden items-center">
                <img className="h-10" src="./images/logo.png" alt="logo" />
                <h1 className="text-xl sm:text-2xl font-semibold text-primary">
                  upibarr
                </h1>
              </span>
              <button
                type="button"
                className="bg-primary sm:bg-secondary py-2 px-4 text-terniary sm:text-primary font-semibold text-lg"
              >
                Login
              </button>
            </div>
          </div>

          <div className="flex items-center absolute right-2 sm:hidden">
            <img
              className="w-9 h-9 sm:w-12 sm:h-12"
              src="./images/hamburger-menu.svg"
              alt="hamburger"
              onClick={() => setOpen(!open)}
            />
          </div>
        </nav>
      </header>

      {/* transparent effect */}
    </>
  );
};

export default Header;
