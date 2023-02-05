const Card = ({ title, overview, release_date, poster, vote_avg }) => {
  // const data = useFetch()

  return (
    <>
      <div className="min-w-sm h-full rounded-lg shadow-lg">
        <a href="#">
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            alt="thumbnail"
          />

          <div className="p-5 max-w-xs text-terniary">
            <h5 className="mb-2 text-2xl font-bold tracking-tight truncate">
              {title}
            </h5>
            <p className="mb-3 font-normal">{release_date}</p>
            <p className="mb-3 font-normal">Action, Adventure, Comedy</p>
            <p className="mb-3 font-normal truncate">{overview}</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Card;
