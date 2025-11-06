import { useState } from "react";
import Footer from "../Componants/Footer";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";
import headerimg from "../assets/SecondsliderImage/header.webp"

import img1 from "../assets/SamoonTeacher/VINOD-JETHURI.jpg";
import img2 from "../assets/SamoonTeacher/RAMESH-INDRADUTT-NAITHANI.jpg";
import img3 from "../assets/SamoonTeacher/manojpaliwal.jpg";
import img4 from "../assets/SamoonTeacher/female-icon.png";
import img5 from "../assets/SamoonTeacher/male-icon.png";

const team = [
  {
    name: "SHRI VINOD JETHURI",
    position: "FOUNDER & CEO",
    phones: ["+971 503738567", "+91 6395436883"],
    image: img1,
    details:
      "Vinod Singh Jethuri is the founder of Samoon Foundation and originally belongs to Tehri Garhwal in Uttarakhand. He once dreamed to enhance women empowerment, education, employment, and healthcare, for the people who are residing in the rural areas, especially in the Himalayas. And, today his dreams are turning into reality. Presently, Mr Jethuri is working in Dubai (U.A.E.) for the past 16 years in the education field and putting his efforts into taking Samoon to new heights.",
  },
  {
    name: "SHRI RAMESH INDRADUTT NAITHANI",
    position: "DIRECTOR",
    phones: ["+91 99303 57208"],
    image: img2,
    details:
      "Mr. Ramesh handles daily operations with calm and precision. He has been with the foundation from the start and knows every detail inside out.",
  },
  {
    name: "SMT VINITA JETHURI",
    position: "CO-FOUNDER & DIRECTOR",
    phones: ["+91 6395436883"],
    image: img3,
    details:
      "The heart of the team. She keeps everyone together, brings fresh ideas, and makes sure every member feels valued.",
  },
  {
    name: "MR. RAJESH SHARMA",
    position: "SENIOR ADVISOR",
    phones: ["+91 98765 43210"],
    image: img4,
    details:
      "15 years of experience in education and planning. He guides big decisions to keep programs practical and effective.",
  },
  {
    name: "MS. PRIYA SINGH",
    position: "PROGRAM HEAD",
    phones: ["+91 87654 32109"],
    image: img5,
    details:
      "Runs all student programs with energy and care. Always ready to help the next child succeed.",
  },
];

export default function Visinary() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Navbar />
      <Secondslider bgImage={headerimg} title="Our Visionary" subtitle="Home/ Our Visionary"/>

      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
            <span className="underline decoration-green-600 decoration-4 Heading-text">Management</span> Committee 
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-sm md:text-base">
            Meet the people behind Samoon Foundation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((person, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                style={{ height: selected === person ? "auto" : "fit-content" }}
              >
                {/* Full Image - No Crop */}
                <div className="relative h-72">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 Heading-text">{person.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 Body-text">{person.phones.join(" | ")}</p>
                  <div className="mt-3 inline-block px-4 py-1 text-1xl font-medium rounded-full Body-text">
                    {person.position}
                  </div>

                  {/* Read More Button */}
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(selected === person ? null : person);
                    }}
                    className="mt-3 text-[#0CB2F0] text-sm font-medium cursor-pointer"
                  >
                    {selected === person ? "Show Less" : "Read More"}
                  </p>
                </div>

                {/* Expandable Content - Only grows this card */}
                {selected === person && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                    <p className="text-gray-700 text-1xl leading-relaxed text-left">
                      {person.details}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(null);
                      }}
                      className="mt-4 w-full py-2 bg-[#76B646] text-white text-sm font-medium rounded-lg hover:bg-[#77b646d5] transition"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}