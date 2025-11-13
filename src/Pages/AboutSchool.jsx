import React from "react";
import Secondslider from "../Componants/Secondslider";
import img1 from "../assets/SecondsliderImage/header.webp";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import SchooTeacher from "../Componants/SchooTeacher";

import journeyImg1 from "../assets/SliderImages/SAV3.jpg";
import journeyImg2 from "../assets/SliderImages/SAV4.jpg";

const AboutSchool = () => {
  return (
    <>
      <Navbar />
      <Secondslider
        bgImage={img1}
        title="About School"
        subtitle="Home / About School"
      />

      <section className="py-10 lg:px-15 px-5">
        <div className="grid lg:grid-cols-[38%_60%] gap-8 max-w-7xl mx-auto">
          <div>
            <h1 className="lg:text-7xl text-5xl font-extrabold Sav-text text-[#7FBA51] lg:mb-5">
              Welcome to{" "}
              <span className="underline decoration-[#7FBA51] decoration-5">
                Samoon
              </span>{" "}
              Adarsh Vidhyalaya
            </h1>
          </div>

          <div className="space-y-4 Body-text text-justify">
            <p>
              Samoon Adarsh Vidhyalaya is a Hindi-medium primary school, founded
              in 2021, located in Osla village, Uttarakhand. We provide quality
              education to children in remote areas, developing their potential.
            </p>
            <h1 className="text-[#00A7CB] font-extrabold text-4xl Sav-text underline decoration-4">
              Our Vision
            </h1>
            <p>Quality education for every child in the Himalayan region.</p>
            <h1 className="text-[#00A7CB] font-extrabold text-4xl Sav-text underline decoration-4">
              Our Mission
            </h1>
            <p>
              Providing quality education to children in the Himalayan region.
            </p>
          </div>
        </div>

        {/* SECTION START NEW */}
        <div className="mt-8 lg:mt-20 space-y-12 max-w-8xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src={journeyImg1}
                alt="Our Journey"
                className="rounded-lg shadow-lg w-full h-auto"
               data-aos="zoom-in"/>
            </div>
            <div className="">
              <h1 className="lg:text-5xl text-2xl font-bold text-[#7FBA51] mb-5 Heading-text">
                Our Journey: Commitment to Education
              </h1>
              <h1 className="lg:text-4xl text-2xl font-bold mb-5 text-[#00A7CB] Heading-text">
                Rooted in Compassion
              </h1>
              <p className="text-gray-700 text-justify mb-5 Body-text">
                The Samoon Foundation was established with a profound commitment
                to uplifting those in need, with education as a cornerstone of
                our mission. Inspired by the Indian Constitution’s mandate for
                free and compulsory education, we recognized a glaring gap in
                the remote Himalayan region.
              </p>
              <h1 className="lg:text-4xl font-bold mb-3 text-2xl text-[#00A7CB] Heading-text">
                {" "}
                Addressing a Critical Need
              </h1>
              <p className="text-gray-700 text-justify mb-5 Body-text">
                Osla village, nestled deep within the Uttarkashi district,
                epitomized this challenge. Isolated by geography with no road
                connectivity, the community faced immense hurdles in accessing
                basic services, including education.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={journeyImg2}
                alt="Beacon of Hope"
                className="rounded-lg shadow-lg w-full h-auto"
               data-aos="zoom-in"/>
            </div>
            <div>
              <h1 className="lg:text-4xl text-xl font-bold text-[#7FBA51] mb-4 Heading-text Heading-text">
                Samoon Adarsh Vidyalaya: A Ray of Hope
              </h1>

              <h1 className="lg:text-3xl text-lg font-semibold mb-3 text-[#00A7CB] Heading-text">
                A Beacon of Hope
              </h1>
              <p className="text-gray-700 text-justify mb-4 leading-relaxed  Body-text">
                In response, the Samoon Foundation established Samoon Adarsh
                Vidhyalaya (SAV) in April 2021. This Hindi-medium primary school
                stands as a symbol of our dedication to providing quality
                education to underserved children. SAV has become a lifeline for
                approximately 250 students in Osla, ensuring their educational
                rights are upheld.
              </p>

              <h1 className="lg:text-3xl text-lg font-semibold mb-3 text-[#00A7CB] Heading-text">
                Building a Stronger Future
              </h1>
              <p className="text-gray-700 text-justify leading-relaxed Body-text">
                Our journey is an ongoing commitment to bridging educational
                gaps and empowering young minds. We believe that education is
                the key to unlocking the potential of individuals and
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SchooTeacher />
      <Footer />
    </>
  );
};

export default AboutSchool;
