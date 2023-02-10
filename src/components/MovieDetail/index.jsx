import { Dialog, Transition } from "@headlessui/react";
import { useDetailStore } from "../../store/store";
import useFetch from "../../hooks/useFetch";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

import Skeleton from "../SkeletonList";

const MovieDetail = () => {
  const { idMovie, isOpen, setIsOpen } = useDetailStore();
  const [dataDetailMovie, setDataDetailMovie] = useState();
  const [dataCredits, setDataCredits] = useState();

  let url = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`;
  let urlCredits = `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`;

  useEffect(() => {
    function fetchDetailMovie() {
      axios
        .get(url)
        .then((res) => setDataDetailMovie(res.data))
        .catch((err) => console.log(err.message));
    }

    fetchDetailMovie();
  }, [url]);

  useEffect(() => {
    function fetchCredits() {
      axios
        .get(urlCredits)
        .then((res) => setDataCredits(res.data.cast))
        .catch((err) => console.log(err.message));
    }

    fetchCredits();
  }, [urlCredits]);

  // console.log(dataDetailMovie);
  // console.log(dataCredits);
  // console.log(idMovie);
  // console.log(isOpen);
  if (dataCredits === undefined || dataDetailMovie === undefined) {
    return <div>{/* <Skeleton /> */}</div>;
  } else
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            setIsOpen(false);
            // setDataDetailMovie(undefined);
            // setDataCredits(undefined);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-screen sm:h-full container transform overflow-hidden rounded-2xl bg-primary text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${dataDetailMovie.backdrop_path}`}
                      alt="cover"
                      className="h-full w-full object-fill"
                    />
                    <div className="flex w-full h-full absolute top-0 bg-gradient-to-r from-black to-transparent"></div>
                    <div className="flex w-full h-full absolute top-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="flex flex-col w-full absolute top-0 mt-32 px-12">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl sm:text-4xl font-semibold leading-6 text-terniary"
                      >
                        {dataDetailMovie.title}
                      </Dialog.Title>
                      <p className="max-w-96 text-base text-secondary mt-2">
                        {dataDetailMovie.release_date}
                      </p>
                      <p className="max-w-96 text-base sm:text-xl text-secondary">
                        {dataDetailMovie.genres.map(
                          (genre) => genre.name + " "
                        )}
                      </p>
                      <div className="w-full sm:w-3/6 font-bold text-secondary mt-6 ">
                        <p>Overview:</p>
                        <p className="text-base sm:text-lg text-terniary text-justify ">
                          {dataDetailMovie.overview}
                        </p>
                      </div>

                      <p className="w-full font-bold text-secondary mt-12 hidden sm:flex">
                        Cast:
                      </p>
                      <div className="text-terniary gap-x-2 hidden sm:flex">
                        {dataCredits.slice(0, 8).map((credit, index) => (
                          <div
                            key={index}
                            className="flex flex-col w-20 sm:w-max h-28 shadow-md shadow-secondary"
                          >
                            <div className="w-20 sm:w-32">
                              <img
                                src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                                alt="profile-picture"
                                className="object-fill"
                              />
                            </div>
                            <div className="flex flex-col w-32">
                              <p className="font-semibold text-xs sm:text-base">
                                {credit.name}
                              </p>
                              <p className="text-xs sm:text-sm font-light text-secondary">
                                as {credit.character}
                              </p>
                            </div>
                          </div>
                          // <CastSlider credit={credit} index={index} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 absolute z-20 top-0 right-0 mr-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-lg border border-secondary text-secondary bg-primary px-4 py-2 text-base font-bold hover:bg-secondary hover:text-primary"
                      onClick={() => {
                        setIsOpen(false);
                        // setDataDetailMovie(undefined);
                        // setDataCredits(undefined);
                      }}
                    >
                      X
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
};

export default MovieDetail;
