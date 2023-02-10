import { useState } from "react";
import genres from "../../data/genres";
import { useDetailStore } from "../../store/store";

const Card = (props) => {
  const { id, title, overview, release_date, poster, vote_avg, genre_ids } =
    props;
  const genre = genres;

  // const [isOpen, setIsOpen] = useState(false);

  const detailStore = useDetailStore();

  const getDetail = (e) => {
    e.preventDefault();

    detailStore.setIdMovie(id);
    detailStore.setIdCredits(id);
    detailStore.setIsOpen(true);
    // console.log(id);
  };

  return (
    <>
      <div className="w-full h-full rounded-lg shadow-lg">
        <a href="#" onClick={(e) => getDetail(e)}>
          <img
            className="w-full h-full"
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            alt="thumbnail"
            loading="lazy"
          />

          <div className="p-5 max-w-xs text-terniary bg-primary overflow-hidden shadow-2xl">
            <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight truncate text-secondary">
              {title}
            </h5>
            <p className="mb-3 font-normal text-xs sm:text-sm">
              {release_date}
            </p>
            {genre_ids.length === 0 && (
              <p className="text-secondary text-base">-</p>
            )}

            {...genre_ids
              .map((el) => genre.filter(({ id, name }) => el === id))
              .map((result) => (
                <p className="mb-3 font-semibold text-xs inline truncate text-secondary">
                  {result[0].name},<span>&nbsp;</span>
                </p>
              ))}
            <p className="mb-3 font-normal text-sm truncate">
              Overview: {overview}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Card;

{
  /* <p
                key={index}
                className="mb-3 font-normal text-xs sm:text-base inline"
              >
                {genre.name}
              </p> */
}
