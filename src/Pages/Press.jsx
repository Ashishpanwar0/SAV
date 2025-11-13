import React, { useState } from "react";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";
import Footer from "../Componants/Footer";
import bgimg from "../assets/SecondsliderImage/header.webp";

// 👉 IMPORT ALL PRESS RELEASE IMAGES
import p2021_1 from "/public/AuditReport/AUDIT-REPORT-2020-2021.jpg";
import p2021_2 from "/public/AuditReport/AUDIT-REPORT-2020-2021.jpg";

import p2022_1 from "/public/AuditReport/AUDIT-REPORT-2020-2021.jpg";

import p2023_1 from "/public/AuditReport/AUDIT-REPORT-2020-2021.jpg";
import p2023_2 from "/public/AuditReport/AUDIT-REPORT-2020-2021.jpg";

import p2024_1 from "/public/AuditReport/AUDIT-REPORT-2020-2021.jpg";

const Press = () => {
  // PRESS DATA FILL ON THIS PART AND YOU CAN ALSO  CHANGES DATA ON THIS PART AND AD NEW YEAR ALSO ON THIS PART
  const pressData = [
    { img: p2021_1, year: 2021 },
    { img: p2021_2, year: 2021 },

    { img: p2022_1, year: 2022 },

    { img: p2023_1, year: 2023 },
    { img: p2023_2, year: 2023 },

    { img: p2024_1, year: 2024 },

    // {img: p2024_1, year: 2025}
  ];

  const years = ["All", 2021, 2022, 2023, 2024,];

  const [activeYear, setActiveYear] = useState("All");

  const filteredData =
    activeYear === "All"
      ? pressData
      : pressData.filter((item) => item.year === activeYear);

  return (
    <>
      <Navbar />
      <Secondslider
        bgImage={bgimg}
        title="Press Release"
        subtitle="Home / Press Release"
      />

      {/* MAIN SECTION  START HERE */}
      <section className="bg-[#F9FAFB] py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* FILTER BUTTONS IS HERE*/}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {years.map((yr, index) => (
              <button
                key={index}
                onClick={() => setActiveYear(yr)}
                className={`px-6 py-2 rounded-md text-white font-medium transition
                  ${
                    activeYear === yr
                      ? "bg-[#0AB1F0]"
                      : "bg-[#76B646] hover:bg-[#77b646b2]"
                  }
                `}
              >
                {yr === "All" ? "All Press Release" : `Year ${yr}`}
                {activeYear === yr && ""}
              </button>
            ))}
          </div>

          {/* GRID IMAGES START HERE*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-xl transition border p-3"
              >
                <img
                  src={item.img}
                  alt="Press Release"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* NO DATA MESSAGE WHICH DATA IS NOT FIND */}
          {filteredData.length === 0 && (
            <p className="text-center text-gray-600 mt-10 Body-text">
              No press releases found for this year.
            </p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Press;
