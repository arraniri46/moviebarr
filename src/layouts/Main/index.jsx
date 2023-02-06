import MovieSlider from "../../components/MovieSlider";
import SearchBox from "../../components/SearchBox";
import Skeleton from "../../components/SkeletonList";

const Main = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-primary text-terniary">
        <section className="flex h-screen">
          {/* <img
            src="./images/movie-cover.jpg"
            alt="cover"
            className="object-cover sm:object-center"
          /> */}
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-fill sm:object-cover"
          >
            <source src="./videos/video-background.mp4" type="video/mp4" />
          </video>

          <div className="flex flex-col absolute w-full h-screen justify-center items-center mt-20 sm:mt-0">
            <div className="flex flex-col items-center sm:mb-24 ">
              <h1 className="text-4xl sm:text-7xl font-extrabold text-secondary mt-6 sm:mt-0 ">
                MupiBarr
              </h1>
              <p className="text-lg font-mono">Movie bareng yuk!</p>
            </div>
            <h2 className="w-3/6 text-center text-sm sm:text-xl font-extralight mb-12 mt-4 sm:mt-0">
              "The length of a film should be directly related to the endurance
              of the human bladder"
            </h2>
            <div className="flex flex-col items-center sm:items-start mb-96">
              <p className="text-md sm:text-lg text-secondary ml-4 mb-2">
                Looking for specific movie?
              </p>
              <SearchBox />
            </div>
          </div>
        </section>

        <section
          id="trending"
          className="flex flex-col h-full w-11/12 p-6 self-center -mt-72 z-10"
        >
          <h2 className="text-lg sm:text-3xl text-center sm:text-left font-semibold ml-0 sm:ml-5">
            Trending
          </h2>
          <div className="flex flex-col sm:flex-row p-6">
            <MovieSlider
              urlCategory={`https://api.themoviedb.org/3/trending/movie/week?api_key=`}
            />
          </div>
          <div className="flex flex-col sm:flex-row p-6"></div>
        </section>

        <section
          id="now-playing"
          className="flex flex-col h-full w-11/12 p-6 self-center -mt-12 z-10"
        >
          <h2 className="text-lg sm:text-3xl text-center sm:text-left font-semibold ml-0 sm:ml-5">
            Now Playing
          </h2>
          <div className="flex flex-col sm:flex-row p-6">
            <MovieSlider
              urlCategory={`https://api.themoviedb.org/3/movie/now_playing?api_key=`}
            />
          </div>
          <div className="flex flex-col sm:flex-row p-6"></div>
        </section>

        <section
          id="top-rated"
          className="flex flex-col h-full w-11/12 p-6 self-center -mt-12 z-10"
        >
          <h2 className="text-lg sm:text-3xl text-center sm:text-left font-semibold ml-0 sm:ml-5">
            Top Rated
          </h2>
          <div className="flex flex-col sm:flex-row p-6">
            <MovieSlider
              urlCategory={`https://api.themoviedb.org/3/movie/top_rated?api_key=`}
            />
          </div>
          <div className="flex flex-col sm:flex-row p-6"></div>
        </section>

        <section
          id="popular"
          className="flex flex-col h-full w-11/12 p-6 self-center -mt-12 z-10"
        >
          <h2 className="text-lg sm:text-3xl text-center sm:text-left font-semibold ml-0 sm:ml-5">
            Popular
          </h2>
          <div className="flex flex-col sm:flex-row p-6">
            <MovieSlider
              urlCategory={`https://api.themoviedb.org/3/movie/popular?api_key=`}
            />
          </div>
          <div className="flex flex-col sm:flex-row p-6"></div>
        </section>

        <section
          id="upcoming"
          className="flex flex-col h-full w-11/12 p-6 self-center -mt-12 z-10"
        >
          <h2 className="text-lg sm:text-3xl text-center sm:text-left font-semibold ml-0 sm:ml-5">
            Upcoming
          </h2>
          <div className="flex flex-col sm:flex-row p-6">
            <MovieSlider
              urlCategory={`https://api.themoviedb.org/3/movie/upcoming?api_key=`}
            />
          </div>
          <div className="flex flex-col sm:flex-row p-6"></div>
        </section>
      </div>
    </>
  );
};

export default Main;
