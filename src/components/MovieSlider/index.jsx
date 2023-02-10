import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import useFetch from "../../hooks/useFetch";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import { useState } from "react";

import Skeleton from "../SkeletonList";

const MovieSlider = ({ urlCategory }) => {
  const [dataMovie, setDataMovie] = useState([]);

  const { data, isLoading } = useFetch(
    `${urlCategory}${import.meta.env.VITE_API_KEY}`
  );

  if (data === undefined) {
    return (
      <div className="flex flex-col sm:flex-row p-6 w-full">
        <Skeleton />
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
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 6,
            },
          }}
          grabCursor={true}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="w-full h-full sm:h-full"
        >
          {/* {isLoading ? <div>Loading...</div> : <div>data</div>} */}
          {data.map((item, index) => (
            <SwiperSlide key={index} className="shadow-2xl">
              <Card
                id={item.id}
                poster={item.poster_path}
                title={item.title}
                overview={item.overview}
                release_date={item.release_date}
                genre_ids={item.genre_ids}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
};

export default MovieSlider;
