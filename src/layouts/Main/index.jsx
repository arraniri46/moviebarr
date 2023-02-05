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
            className="object-center"
          />

          <div className="flex flex-col absolute w-full h-screen justify-center items-center">
            <div className="flex items-center sm:mb-24 ">
              {/* <img className="h-32" src="./images/logo.png" alt="logo" /> */}
              <h1 className="text-3xl sm:text-7xl font-extrabold text-secondary ">
                Movie Bareng
              </h1>
            </div>
            <h2 className="w-3/6 text-center text-sm sm:text-2xl mb-12 mt-4 sm:mt-0">
              The length of a film should be directly related to the endurance
              of the human bladder
            </h2>
            <div className="flex mb-96">
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
