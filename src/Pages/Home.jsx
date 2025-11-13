import React from "react";
import {Link} from "react-router-dom";
// swiper import here
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// import Componants here
import Navbar from "../Componants/Navbar";
import HomeSlider from "../Componants/HomeSlider";
import HomeCard from "../Componants/HomeCard.jsx";
import Footer from "../Componants/Footer.jsx";
import Activities from "../Componants/Activities.jsx";
import SchooTeacher from "../Componants/SchooTeacher.jsx";
import HomeContact from "../Componants/HomeContact.jsx";
import Partners from "../Componants/Partners.jsx";
import EducationBenefits from "../Componants/EducationBenefits.jsx";
// Import Gellary img here more img import here
import img1 from "../assets/SliderImages/SAV1.webp";
import img2 from "../assets/SliderImages/SAV2.webp";
import img3 from "../assets/SliderImages/SAV3.jpg";
import img4 from "../assets/SliderImages/SAV4.jpg";
import img5 from "../assets/SliderImages/SAV5.jpg";
import StudentRegistration from "../Componants/StudentRegistration.jsx";


const galleryImages = [img1, img2, img3, img4, img5];

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSlider />
      <HomeCard />
      <Activities />
      {/* Home Photo Gallary Start Here */}
      <section className="py-5 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="lg:text-4xl text-2xl font-bold text-center text-gray-800 mb-10 Heading-text">
            Samoon Adarsh Vidhyala <span className="underline decoration-[#92C56C] text-[#92C56C]">Photo Gallary</span>
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="rounded-2xl shadow-xl"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={`School moment ${i + 1}`}
                    className="w-full h-110 object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* View All Photo Link Here */}
          <div className="text-center mt-6">
            <Link
              to="/PhotoGallery"
              className="text-2xl font-medium text-[#92C56C] hover:text-cyan-800 underline Sav-text"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>
      <EducationBenefits/>
      <Partners/>
      {/* <SchooTeacher/> */}
      <HomeContact/>
      <Footer />
    </>
  );
};

export default Home;