import React, { useState } from "react";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";
import Footer from "../Componants/Footer";

import bgimg from "../assets/SecondsliderImage/header.webp";

// IMPORT AUDIT IMAGES
import audit1 from "/public/AuditReport/AUDIT-REPORT-2020-2021.jpg";

const AuditReport = () => {
  const [showImage, setShowImage] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const reports = [{ img: audit1, year: "FY 2020-2021" }];

  const openImage = (img) => {
    setActiveImage(img);
    setShowImage(true);
  };

  const closeImage = () => {
    setShowImage(false);
    setActiveImage("");
  };

  return (
    <>
      <Navbar />

      <Secondslider
        bgImage={bgimg}
        title="Audit Report"
        subtitle="Home / Audit Report"
      />

      {/* AUDIT REPORT SECTION */}
      <section className="bg-[#F9FAFB] py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADING */}
          <h2 className="lg:text-3xl text-2xl font-bold text-center text-gray-800 mb-10 Heading-text">
            Audit <span className="underline decoration-green-600 decoration-4">Reports</span>
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {reports.map((item, index) => (
              <div
                key={index}
                className="shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer py-5"
                onClick={() => openImage(item.img)}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold Heading-text text-[#1EB8F1] underline decoration-2">
                    {item.year}
                  </h3>
                </div>

                <img
                  src={item.img}
                  alt={item.year}
                  className="w-full h-full object-contain px-2 py-1"
                />
              </div>
            ))}

          </div>

          {/* FOOTNOTE */}
          <p className="text-center text-gray-600 mt-12 Body-text">
            All audit reports are verified and certified. These documents are shared
            for transparency and public trust.
          </p>
        </div>
      </section>

      {/* FULL SCREEN IMAGE VIEWER */}
      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          <img
            src={activeImage}
            alt="Audit Full View"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />

          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
            onClick={closeImage}
          >
            ✕
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default AuditReport;
