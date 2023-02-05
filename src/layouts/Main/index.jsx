import Card from "../../components/Card";
import MovieSlider from "../../components/MovieSlider";
import SearchBox from "../../components/SearchBox";

const Main = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-primary text-terniary">
        <div className="flex h-screen">
          <img
            src="./images/movie-cover.jpg"
            alt="cover"
            className="object-cover sm:object-center"
          />

          <div className="flex flex-col absolute w-full h-screen justify-center items-center">
            <div className="flex flex-col items-center sm:mb-24 ">
              {/* <img className="h-32" src="./images/logo.png" alt="logo" /> */}
              <h1 className="text-4xl sm:text-7xl font-extrabold text-secondary mt-24 sm:mt-0 ">
                MupiBarr
              </h1>
              <p className="text-base font-mono">Movie bareng yuk!</p>
            </div>
            <h2 className="w-3/6 text-center text-sm sm:text-2xl mb-12 mt-4 sm:mt-0">
              The length of a film should be directly related to the endurance
              of the human bladder
            </h2>
            <div className="flex flex-col items-center sm:items-start mb-96">
              <p className="text-md sm:text-lg text-secondary ml-4 mb-2">
                Looking for specific movie?
              </p>
              <SearchBox />
            </div>
          </div>
        </div>

        <div className="flex flex-col h-screen w-11/12 p-6 self-center -mt-72 z-10">
          <h2 className="text-lg sm:text-3xl">Box Office</h2>
          <div className="flex flex-col sm:flex-row p-6">
            <MovieSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
