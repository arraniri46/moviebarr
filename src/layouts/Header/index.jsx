import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex w-full">
        <div className="flex w-full h-16 py-2 px-2 sm:px-8 bg-primary text-terniary items-center justify-between">
          <div className="w-full">
            <span className="flex items-center">
              <img className="h-9" src="./images/logo.png" alt="logo" />
              <h1 className="text-lg sm:text-2xl font-semibold">upibarr</h1>
            </span>
          </div>

          <div
            className={`flex sm:flex sm:flex-row p-4 sm:p-0 w-64 sm:w-full justify-between sm:justify-end items-start sm:items-center bg-secondary sm:bg-primary absolute sm:relative 
            top-16 sm:top-0 h-screen sm:h-16  sm:right-0 z-10 ${
              !open ? "right-0" : "-right-64 hidden"
            } duration-300 z-20`}
          >
            <ul className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-14 mt-14 sm:mt-0 sm:mr-8">
              <a href="/#">
                <li className="text-lg font-semibold hover:underline text-primary sm:text-terniary">
                  Box Office
                </li>
              </a>
              <a href="/#">
                <li className="text-lg font-semibold hover:underline text-primary sm:text-terniary">
                  Trending
                </li>
              </a>
              <a href="/#">
                <li className="text-lg font-semibold hover:underline text-primary sm:text-terniary">
                  Category
                </li>
              </a>
              <a href="/#">
                <li className="text-lg font-semibold hover:underline text-primary sm:text-terniary">
                  Favorit
                </li>
              </a>
            </ul>
            <button
              type="button"
              className="bg-primary sm:bg-secondary py-2 px-4 text-terniary sm:text-primary font-semibold text-lg"
            >
              Login
            </button>
          </div>

          <div className="flex items-center absolute right-2 sm:hidden">
            <img
              className="w-9 h-9 sm:w-12 sm:h-12"
              src="./images/hamburger-menu.svg"
              alt="hamburger"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>

      {/* transparent effect */}
      <div className="flex w-full h-screen absolute top-16 bg-gradient-to-t from-primary to-transparent"></div>
      <div className="flex w-full h-screen absolute top-16 bg-gradient-to-t from-primary to-primary opacity-60"></div>
    </>
  );
};

export default Header;
