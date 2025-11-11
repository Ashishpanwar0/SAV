import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// patners imges import here
import canva from "../assets/patnersphoto/canva.png";
import google from "../assets/patnersphoto/google.png"
import give from "../assets/patnersphoto/giveindia.png";
import microsoft from "../assets/patnersphoto/microsoft.png";
import chezuba from "../assets/patnersphoto/Chezuba.png";

const partners = [
  { name: "Navjivan Center for Development", img: canva },
  { name: "TEPL", img: google },
  { name: "Tally", img: give },
  { name: "Microsoft", img: microsoft },
  { name: "UPES", img: chezuba },
];

const Partners = () => {
  return (
    <section className="py-12 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 Heading-text">
          Meet Our <span className="underline decoration-3 decoration-[#92C57F]">Partners</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="pb-10"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="h-25 md:h-25 object-contain mb-3 transition-transform duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
