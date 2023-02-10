import { useEffect, useState } from "react";
import Card from "../../components/Card";
import NotFound from "../../components/NotFound";
import useFetch from "../../hooks/useFetch";
import { useSearchStore } from "../../store/store";
import SkeletonList from "../../components/SkeletonList";
import MovieDetail from "../../components/MovieDetail";

const SearchPage = () => {
  const [open, setOpen] = useState(false);
  const searchQuery = useSearchStore((state) => state.queryString);

  const { data, isLoading } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&query=${searchQuery}&page=1`
  );

  if (searchQuery === null) {
    return <div className="mt-16 h-screen"></div>;
  } else if (data === undefined) {
    return (
      <div className="w-1/6">
        <SkeletonList />
      </div>
    );
  } else if (data.length === 0) {
    return <NotFound />;
  } else
    return (
      <>
        {isLoading && (
          <div className="flex flex-wrap">
            <div className="w-1/6">
              <SkeletonList />
            </div>
          </div>
        )}
        <div className="flex flex-col min-h-screen mt-16 mx-auto px-12 py-6">
          <span className="flex w-max items-center text-terniary">
            <a href="">
              <img
                className="hover:bg-terniary"
                src="./images/left-arrow.svg"
                alt=""
                width={40}
                height={32}
              />
            </a>
            <p className="text-3xl font-semibold ml-6">Result</p>
            <section>
              <MovieDetail open={open} />
            </section>
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-x-6 w-full h-full mt-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex w-60 h-72 md:w-72 md:h-96 bg-primary mb-48"
              >
                <Card
                  id={item.id}
                  poster={item.poster_path}
                  title={item.title}
                  overview={item.overview}
                  release_date={item.release_date}
                  genre_ids={item.genre_ids}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default SearchPage;
