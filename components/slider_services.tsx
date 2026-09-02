"use client";

import { serviceData } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SliderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-70 md:h-87.5 w-67.5 md:w-137.5"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="flex px-6 py-8 h-auto md:h-72.5 rounded-lg cursor-pointer bg-[rgba(65, 47, 123, 0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group
            hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300 hover:border-(--bg-secondary) border-2"
          >
            <div className="mb-4 text-4xl text-(--bg-secondary)">
              {item.icon}
            </div>
            <div>
              <h3 className="mb-4 text-lg">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
