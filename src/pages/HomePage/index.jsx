import { useState } from "react";
import MovieDetail from "../../components/MovieDetail";
import MovieSlider from "../../components/MovieSlider";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center bg-primary text-terniary">
        <section>
          <MovieDetail open={open} />
        </section>
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

          <div className="flex flex-col w-full  absolute justify-center items-center mt-32 z-10">
            <div className="flex flex-col items-center sm:mb-24 ">
              <h1 className="text-4xl sm:text-7xl font-extrabold text-secondary sm:mt-0 ">
                MupiBang
              </h1>
              {/* <p className="text-lg font-mono">Movie bareng yuk!</p> */}
            </div>
            <h2 className="w-5/6 sm:w-4/6 text-center text-2xl sm:text-4xl font-normal mb-12 mt-12 sm:mt-0 ">
              "The length of a film should be directly related to the endurance
              of the human bladder"
            </h2>
            {/* <div className="flex flex-col items-center sm:items-start mb-96">
              <p className="text-md sm:text-lg text-secondary ml-4 mb-2">
                Looking for specific movie?
              </p>
              <SearchBox />
            </div> */}
          </div>
          <div className="flex w-full h-screen absolute top-16 bg-gradient-to-t from-primary to-transparent"></div>
          <div className="flex w-full h-screen absolute top-16 bg-gradient-to-t from-primary to-primary opacity-50"></div>
        </section>

        <section
          id="trending"
          className="flex flex-col h-full w-11/12 p-6 self-center -mt-[500px] sm:-mt-[420px] z-10"
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

export default HomePage;
