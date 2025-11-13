import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

//  this is card img and ad more img here for your code 
import img1 from "../assets/SliderImages/SAV1.webp";
import img2 from "../assets/Savgallary/sav (19).jpg";
import img3 from "../assets/Savgallary/sav (12).jpg";
import img4 from "../assets/Savgallary/sav (6).jpg";

// About Code img here 
import img5 from "../assets/Savgallary/sav (24).jpg"


// card json file start here
const cards = [
  {
    img: img1,
    title: "OUR PRESENCE",
    short:
      "Bringing quality education to the heart of the Himalayas, Samoon Adarsh Vidyalaya began its journey in Osla village to light the path of learning for every child.",
    full: "Perched high in the peaceful ranges of Uttarkashi, Samoon Adarsh Vidyalaya was founded with a simple yet powerful dream - to make education accessible to children in remote mountain regions. What started as a small classroom now thrives as a center of learning and hope. We combine modern education with traditional values, helping our students grow in wisdom while staying rooted in their heritage and community.",
    color: "bg-green-500",
  },
  {
    img: img2,
    title: "EXPERT TEACHERS",
    short:
      "Passionate mentors who teach from the heart, guiding every child with patience, dedication, and care.",
    full: "Our teachers are the true pillars of Samoon Adarsh Vidyalaya. Each one brings deep knowledge, warmth, and a genuine desire to see students succeed. Trained in modern pedagogy yet grounded in moral values, they inspire curiosity and confidence in every learner. From personalized guidance to innovative teaching methods, our educators ensure that no child is left behind - nurturing both intellect and character with equal devotion.",
    color: "bg-rose-500",
  },
  {
    img: img3,
    title: "VISION & MISSION",
    short:
      "Shaping young minds into confident, capable, and compassionate leaders for tomorrow's world.",
    full: "Our vision is to build a future where education empowers every mountain child to rise above limitations. We believe learning should open doors - not just to careers, but to courage, wisdom, and service. Through inclusive programs, skill training, and scholarships, we strive to create self-reliant individuals who uplift their families and communities. Our mission is not only to teach — but to transform lives through knowledge, empathy, and opportunity.",
    color: "bg-amber-500",
  },
  {
    img: img4,
    title: "COMMUNITY IMPACT",
    short:
      "Education that extends beyond the classroom — uplifting families, empowering women, and strengthening the village.",
    full: "Samoon Adarsh Vidyalaya stands at the heart of positive change in Osla and neighboring villages. Our students lead tree plantation drives, health awareness programs, and clean-water campaigns. We’ve established solar-powered classrooms, community libraries, and vocational training for women. Each initiative reflects our belief that true education inspires action - creating a ripple of hope that transforms not just students, but the entire community..",
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
                {/* Image  inster here*/}
                <div className="h-48 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content  ad on this part */}
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

      {/* About Samoon Adarsh Vidhyalaya part start here  any change any time*/}
      <section className="lg:px-5 px-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-10 lg:px-5 lg:mt-10 h-auto">
          <div>
            {/* about card img is here */}
            <img src={img5} alt="" className="rounded-xl" data-aos="zoom-in"/>
          </div>
          <div className="lg:pt-1">
            <h1 className="lg:text-4xl text-2xl font-bold lg:text-justify p Heading-text text-center">
              About Samoon
            </h1>
            <h1 className="lg:text-4xl text-2xl font-bold mb-5 lg:text-justify p Heading-text text-center">
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
            <Link to="/AboutSchool"><button className="px-8 py-3 bg-[#8CC264] hover:bg-[#8dc264d8] rounded-lg text-white font-bold text-1xl Nav-text">
              Reade More
            </button></Link>
          </div>
        </div>
      </section>
    </section>
  );
}
