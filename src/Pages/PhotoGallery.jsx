import React, { useState } from "react";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import Secondslider from "../Componants/Secondslider";
import bgimg from "../assets/SecondsliderImage/header.webp";

// Gallary Import //
import img1 from "../assets/Savgallary/sav (1).jpg";
import img2 from "../assets/Savgallary/sav (2).jpg";
import img3 from "../assets/Savgallary/sav (2).webp";
import img4 from "../assets/Savgallary/sav (3).jpg";
import img5 from "../assets/Savgallary/sav (4).jpg";
import img6 from "../assets/Savgallary/sav (5).jpg";
import img7 from "../assets/Savgallary/sav (6).jpg";
import img8 from "../assets/Savgallary/sav (7).jpg";
import img9 from "../assets/Savgallary/sav (9).jpg";
import img10 from "../assets/Savgallary/sav (10).jpg";
import img11 from "../assets/Savgallary/sav (11).jpg";
import img12 from "../assets/Savgallary/sav (12).jpg";
import img13 from "../assets/Savgallary/sav (13).jpg";
import img14 from "../assets/Savgallary/sav (14).jpg";
import img15 from "../assets/Savgallary/sav (12).jpg";
import img16 from "../assets/Savgallary/sav (17).jpg";
import img17 from "../assets/Savgallary/sav (17).jpg";
import img18 from "../assets/Savgallary/sav (18).jpg";
import img19 from "../assets/Savgallary/sav (19).jpg";
import img20 from "../assets/Savgallary/sav (20).jpg";
const photos = [
  { id: 1, src: img1, alt: "Samoon 1" },
  { id: 2, src: img15, alt: "Samoon 2" },
  { id: 3, src: img3, alt: "Samoon 2" },
  { id: 4, src: img4, alt: "Samoon 2" },
  { id: 5, src: img5, alt: "Samoon 2" },
  { id: 6, src: img6, alt: "Samoon 2" },
  { id: 7, src: img7, alt: "Samoon 2" },
  { id: 8, src: img8, alt: "Samoon 2" },
  { id: 9, src: img9, alt: "Samoon 2" },
  { id: 10, src: img10, alt: "Samoon 2" },
  { id: 11, src: img11, alt: "Samoon 2" },
  { id: 12, src: img12, alt: "Samoon 2" },
  { id: 13, src: img13, alt: "Samoon 2" },
  { id: 14, src: img14, alt: "Samoon 2" },
  { id: 15, src: img15, alt: "Samoon 2" },
  { id: 16, src: img16, alt: "Samoon 2" },
  { id: 17, src: img17, alt: "Samoon 2" },
  { id: 18, src: img18, alt: "Samoon 2" },
  { id: 19, src: img19, alt: "Samoon 2" },
  { id: 120, src: img20, alt: "Samoon 2" },
];

const PhotoGallery = ({}) => {
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const photosPerPage = 16;
  const totalPages = Math.ceil(photos.length / photosPerPage);

  const startIndex = (currentPage - 1) * photosPerPage;
  const currentPhotos = photos.slice(startIndex, startIndex + photosPerPage);
  return (
    <>
      <Navbar />
      <Secondslider
        bgImage={bgimg}
        title="Photo Gallery"
        subtitle="Home / Photo Gallery"
      />
      <section className="bg-[#F9FAFB] py-18">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="lg:text-5xl text-3xl text-center text-gray-800 mb-4 font-bold Heading-text">
            Welcome to the{" "}
            <span className="underline decoration-4 decoration-[#76B646]">
              Samoon Family
            </span>
          </h1>
          <p className="text-center max-w-6xl mx-auto text-gray-600 text-lg leading-relaxed">
            Step into the heart of <strong>Adarsh Vidyalaya</strong> - where
            every smile, achievement, and moment tells a story. Our gallery
            captures the vibrant spirit of learning, creativity, and
            togetherness that defines the{" "}
            <span className="text-[#76B646] font-semibold">Samoon Family</span>.
            Explore memories that celebrate our students, teachers, and the
            values that make our school truly special.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center lg:mt-10">
            {currentPhotos.map((photo) => (
              <div
                data-aos="zoom-in"
                key={photo.id}
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg w-full max-w-"
                onClick={() => setSelected(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-60 object-cover rounded-xl transform hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <span className="text-white font-semibold text-lg">View</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition font-medium ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>
            <span className="px-4 py-2 font-semibold text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className={`px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition font-medium ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>

        {/* Image Popup */}
        {selected && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-white text-3xl font-bold"
              >
                ✕
              </button>
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full h-auto max-h-[90vh] rounded-lg shadow-2xl object-contain"
              />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};
export default PhotoGallery;
