import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

const CastSlider = ({ credit, index }) => {
  //   console.log("Cast Slider: ", credit);

  if (credit === undefined) {
    return <div className="flex flex-col sm:flex-row p-6 w-full"></div>;
  } else
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
          {/* {dataCredits.map((cast, index) => (

            ))} */}
          <SwiperSlide key={index} className="shadow-2xl">
            <div className="flex flex-col w-full bg-secondary">
              <img
                src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                alt="profile-picture"
                className="w-max"
              />
              <div>
                <p>{credit.name}</p>
                <p>as {credit.character}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default CastSlider;
