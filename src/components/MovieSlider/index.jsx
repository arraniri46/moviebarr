import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import useFetch from "../../hooks/useFetch";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { useState } from "react";

const API_KEY = "dedeaec4a6b9b494f0a2b358a2bb2492";

const MovieSlider = () => {
  const [dataMovie, setDataMovie] = useState([]);

  const { data, isLoading } = useFetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );

  if (data === undefined) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-full h-full sm:h-full"
        >
          {/* {isLoading ? <div>Loading...</div> : <div>data</div>} */}
          {data.map((item, index) => (
            <SwiperSlide key={index} className="shadow-2xl">
              <Card
                poster={item.poster_path}
                title={item.title}
                overview={item.overview}
                release_date={item.release_date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
};

export default MovieSlider;
