import React from "react";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";
import Footer from "../Componants/Footer";

// ican import here
import {
  School,  Users, BookOpen, TreePine, HeartHandshake, PencilLine,
} from "lucide-react";

// import bg imge here
import imgbg from "../assets/SecondsliderImage/header.webp";

const Academic = () => {
  return (
    <>
      <Navbar />

      <Secondslider
        bgImage={imgbg}
        title="Academic Facilities"
        subtitle="Home / Academic Facilities"
      />

      {/* Academic Section  code start here */}
      <section className="bg-[#F9FAFB] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* This is my  Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 Heading-text">
              Our Academic <span className="underline decoration-3 decoration-[#76B646]"> Facilities</span>
            </h2>
            <p className="text-gray-600 Body-text mt-3 max-w-4xl mx-auto">
              Samoon Adarsh Vidyalaya is located in the remote Himalayan village of Osla,
              where even basic facilities like internet and transport are still limited.
              Still, we do our best to give children honest and meaningful education.
            </p>
          </div>

          {/* Facility Cards start here */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition" data-aos="zoom-in">
              <Users className="w-12 h-12 text-[#0AB1F0] mb-4" />
              <h3 className="font-bold text-lg text-gray-800 Heading-text mb-2">
                Dedicated Local Teachers
              </h3>
              <p className="text-gray-600 text-sm Body-text">
                Our teachers walk long mountain paths every day so children from
                the village can study regularly without needing to travel far.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition" data-aos="zoom-in">
              <School className="w-12 h-12 text-[#92C56C] mb-4" />
              <h3 className="font-bold text-lg text-gray-800 Heading-text mb-2">
                Simple Classrooms
              </h3>
              <p className="text-gray-600 text-sm Body-text">
                Our classrooms are small and basic, but they are filled with
                hope, discipline, and sincere learning every day.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition" data-aos="zoom-in">
              <BookOpen className="w-12 h-12 text-[#0AB1F0] mb-4" />
              <h3 className="font-bold text-lg text-gray-800 Heading-text mb-2">
                Free Study Materials
              </h3>
              <p className="text-gray-600 text-sm Body-text">
                Notebooks, pens, basic stationery, and school bags are
                provided free through Samoon Foundation so no child is left out.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition" data-aos="zoom-in">
              <PencilLine className="w-12 h-12 text-[#92C56C] mb-4" />
              <h3 className="font-bold text-lg text-gray-800 Heading-text mb-2">
                Activity-Based Learning
              </h3>
              <p className="text-gray-600 text-sm Body-text">
                Children learn through stories, poems, drawings,
                group activities, and simple hands-on tasks that build confidence.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition" data-aos="zoom-in">
              <TreePine className="w-12 h-12 text-[#0AB1F0] mb-4" />
              <h3 className="font-bold text-lg text-gray-800 Heading-text mb-2">
                Learning From Nature
              </h3>
              <p className="text-gray-600 text-sm Body-text">
                The mountains, forests, and farms around the village
                naturally teach children about plants, seasons, animals,
                and the environment.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition" data-aos="zoom-in">
              <HeartHandshake className="w-12 h-12 text-[#92C56C] mb-4" />
              <h3 className="font-bold text-lg text-gray-800 Heading-text mb-2">
                Safe & Caring Environment
              </h3>
              <p className="text-gray-600 text-sm Body-text">
                We treat every child with kindness and care. The school
                is a safe place where children feel respected and supported.
              </p>
            </div>
          </div>

          {/* Message Box start here  */}
          <div className="mt-16 bg-white border-l-4 border-[#0AB1F0] shadow-md p-8 rounded-lg max-w-3xl mx-auto" data-aos="zoom-in">
            <h3 className="text-2xl font-bold text-gray-800 Heading-text mb-3">
              Simple School, Strong Dreams
            </h3>
            <p className="text-gray-700 Body-text leading-relaxed">
              Even though Osla is far from the city and has limited facilities,
              our children have bright dreams. We are doing everything we can
              to guide them with honest education, discipline, and values
              that will help them grow in life.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Academic;
