import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import img1 from "../assets/SliderImages/SAV1.webp";
import img2 from "../assets/SliderImages/SAV2.webp";
import img3 from "../assets/SliderImages/SAV3.jpg";
import img4 from "../assets/SliderImages/SAV4.jpg";

const cards = [
  {
    img: img1,
    title: "OUR PRESENCE",
    short:
      "Samoon Adarsh Vidyalaya started in Osla village to bring modern education to remote Himalayan children.",
    full: "Nestled in the serene mountains of Uttarkashi, our school was founded in 2018 by local educators and volunteers. We focus on holistic growth—academics, sports, arts, and life skills—so every child stays connected to their culture while preparing for the future.",
    color: "bg-green-500",
  },
  {
    img: img2,
    title: "EXPERT TEACHERS",
    short:
      "Dedicated teachers give one-on-one attention and inspire curiosity in every student.",
    full: "Our faculty includes trained graduates from Garhwal University and experienced mentors from Delhi. They teach not just subjects but values—discipline, empathy, and critical thinking. Weekly training keeps their methods fresh and effective.",
    color: "bg-rose-500",
  },
  {
    img: img3,
    title: "VISION & MISSION",
    short:
      "We dream of confident, educated leaders who will uplift their villages.",
    full: "Our vision is a literate, self-reliant mountain community. We run evening classes for adults, skill workshops for youth, and scholarships for higher studies. Every year, 10+ students join colleges outside the valley.",
    color: "bg-amber-500",
  },
  {
    img: img4,
    title: "COMMUNITY IMPACT",
    short:
      "From clean water projects to digital literacy, we serve beyond the classroom.",
    full: "We installed solar lights in Osla, started a library with 500+ books, and trained 50 women in tailoring. Students lead tree-plantation drives and health camps. Education here changes the entire village.",
    color: "bg-indigo-500",
  },
];

export default function HomeCard() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-8">
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" data-aos="zoom-in">
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className={`w-10 h-1 ${card.color} rounded-full mb-3`} />
                  <h3 className="text-lg font-bold text-gray-800 mb-2 Heading-text">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed Body-text">
                    {open === i ? card.full : card.short}
                  </p>

                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="mt-3 text-xs font-medium text-blue-600 hover:text-blue-800 underline Nav-text"
                  >
                    {open === i ? "Show less" : "Read more"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* About Samoon Adarsh Vidhyalaya */}
      <section className="lg:px-5 px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:px-5 lg:mt-10 h-auto">
          <div>
            <img src={img3} alt="" className="rounded-xl" data-aos="zoom-in"/>
          </div>
          <div className="lg:pt-1">
            <h1 className="lg:text-5xl text-4xl font-bold lg:text-justify p Heading-text">
              About Samoon
            </h1>
            <h1 className="lg:text-5xl text-4xl font-bold mb-5 lg:text-justify p Heading-text">
              <span className="underline decoration- text-[#8CC264] decoration-4">
                Adarsh
              </span>{" "}
              Vidhyalaya
            </h1>
            <p className="text-justify mb-3 Body-text">
              Founded in the year 2021, Samoon Adarsh Vidhyalaya is a Hindi
              medium primary school that blends the best educational practices,
              driven by committed and truly modern educational concepts. We are
              highly passionate about developing our students’ learning so that
              they can fulfill all their ambitions and lead a better life.
              Offering the best possible primary education in an invigorating
              and inventive environment, we provide high-quality teaching with
              an individualistic approach that helps build our children’s
              strengths and talents.
            </p>
            <p className="mb-5">
              So, let your child enjoy the bliss of learning!
            </p>
            <button className="px-8 py-3 bg-[#8CC264] hover:bg-[#8dc264d8] rounded-lg text-white font-bold text-1xl Nav-text">
              Reade More
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
