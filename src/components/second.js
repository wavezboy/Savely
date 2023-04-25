import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/2.jpg";
import image3 from "../assets/img/3.jpg";
import { Pagination, Navigation } from "swiper";

export default function Second() {
  return (
    <div className="bg-[#F7FFF6]">
      <Swiper
        className="mySwiper swiper-h"
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="m-[20px] mb-[10px]">
            <img src={image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-[20px] mb-[10px]">
            <img src={image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-[20px] mb-[10px]">
            <img src={image3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
