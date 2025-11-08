import React from "react";
import { Calendar, Users, Trophy, BookOpen, Heart, Camera } from "lucide-react";
import img1 from "../assets/SliderImages/SAV1.webp";
import img2 from "../assets/SliderImages/SAV2.webp";
import img3 from "../assets/Savgallary/sav (4).jpg";
import img4 from "../assets/Savgallary/sav (36).jpg";
import img5 from "../assets/Savgallary/sav (30).jpg";
import img6 from "../assets/Savgallary/sav (21).jpg"

const activities = [
  {
    icon: <Calendar className="w-6 h-6 text-[#7FBA51]" />,
    title: "Annual Sports Day",
    desc: "A full day of races, team games, and fun competitions. Students showcase athletic skills and teamwork.",
    color: "bg-orange-100",
    img: img1,
  },
  {
    icon: <Users className="w-6 h-6 text-[#7FBA51]" />,
    title: "Cultural Fest",
    desc: "Dance, drama, music, and art exhibitions. Children perform traditional and modern acts with pride.",
    color: "bg-pink-100",
    img: img6,
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#06B0EF]" />,
    title: "Science & Tech Fair",
    desc: "Students build robots, solar models, and present innovative projects. Judges award best ideas.",
    color: "bg-blue-100",
    img: img3,
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#7FBA51]" />,
    title: "Literary Week",
    desc: "Debates, storytelling, poetry, and essay writing. We celebrate language and creative expression.",
    color: "bg-green-100",
    img: img4,
  },
  {
    icon: <Heart className="w-6 h-6 text-[#7FBA51]" />,
    title: "Community Service",
    desc: "Tree planting, village clean-up, and helping elders. We teach kindness and social responsibility.",
    color: "bg-emerald-100",
    img: img5,
  },
  {
    icon: <Camera className="w-6 h-6 text-[#06B0EF]" />,
    title: "Photography Club",
    desc: "Students capture nature, school life, and emotions. Annual exhibition in the school hall.",
    color: "bg-purple-100",
    img: img2,
  },
];

export default function Activities() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-4">
      {/* Hero Section */}
      <div className="text-center p mb-5 Heading-text">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 px-5">
          Samoon Adarsh Vidhyalaya{" "}
          <span className="underline decoration-[#8CC264] decoration-4 text-[#8CC264]">
            Activities
          </span>
        </h1>
      </div>

      {/* Activities Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              data-aos="zoom-in"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={act.img}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className={`inline-flex p-3 rounded-full ${act.color} mb-4`}
                >
                  {act.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 Heading-text">
                  {act.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed Body-text">
                  {act.desc}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Facebook Embed */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6  text-center">
                <h3 className="text-xl font-bold mb-2 Heading-text">
                  Facebook
                </h3>
                <p className="text-sm opacity-90 text-[#92C56C] Body-text">
                  Samoon Adarsh Vidyalaya
                </p>
              </div>
              <div className="p-4">
                <div id="fb-root"></div>
                <script
                  async="1"
                  defer="1"
                  crossorigin="anonymous"
                  src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v24.0"
                ></script>
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/samooneducation/"
                  data-height="500"
                  data-small-header=""
                  data-adapt-container-width="1"
                  data-hide-cover=""
                  data-show-facepile=""
                  data-show-posts="true"
                  data-width="600"
                >
                  <blockquote
                    cite="https://www.facebook.com/samooneducation/"
                    class="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/samooneducation/">
                      समूण आदर्श विद्यालय
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Instagram Embed */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 Heading-text">Twitter</h3>
                <p className="text-sm opacity-90 text-[#92C56C] Body-text">
                  @samoonfoundation
                </p>
              </div>
              <div className="p-4 flex justify-center">
                <a
                  className="twitter-timeline"
                  data-theme="light"
                  data-height="500"
                  href="https://twitter.com/samoonfoundation?ref_src=twsrc%5Etfw"
                >
                  Tweets by Samoon Foundation
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                ></script>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
