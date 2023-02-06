import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import useFetch from "../../hooks/useFetch";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

import Skeleton from "../SkeletonList";

const API_KEY = "dedeaec4a6b9b494f0a2b358a2bb2492";

const MovieSlider = ({ urlCategory }) => {
  const [dataMovie, setDataMovie] = useState([]);

  const { data, isLoading } = useFetch(`${urlCategory}${API_KEY}`);

  if (data === undefined) {
    return (
      <div className="flex flex-col sm:flex-row p-6 w-full">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  } else {
    return (
      <>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 5,
            },
          }}
          grabCursor={true}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
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
