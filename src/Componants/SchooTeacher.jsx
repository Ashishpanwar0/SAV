import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import vijaypal from "../assets/SamoonTeacher/Vijaypal.jpg";
import harimohan from "../assets/SamoonTeacher/Hari-mohan-1.jpg";
import vijaylal from "../assets/SamoonTeacher/male-icon.png";
import motilal from "../assets/SamoonTeacher/motilal.jpg";

const teachers = [
  {
    name: "Vijaypal Singh",
    position: "Principal",
    img: vijaypal,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Harimohan Rawat",
    position: "Hindi Teacher",
    img: harimohan,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Moti Lal",
    position: "Math Teacher",
    img: motilal,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Vijay Lal",
    position: "Class Teacher",
    img: vijaylal,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
];

export default function SchooTeacher() {
  return (
    <section className="py-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="Heading-text text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Expert <span className="underline decoration-[#7FBA51] decoration-4">Teachers</span>
        </h1>
        <p className="text-center max-w-6xl mx-auto text-gray-600 text-lg leading-relaxed">
  Meet the dedicated mentors of <strong>Adarsh Vidyalaya</strong> - passionate educators who nurture curiosity, 
  inspire creativity, and guide every student toward excellence. Their commitment, knowledge, and compassion 
  form the foundation of the <span className="text-[#76B646] font-semibold">Samoon Family’s</span> success.
</p>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:mt-10" >
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            data-aos="zoom-in">
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    <a href={teacher.socials.facebook} className="text-white hover:text-[#06B0EF] transition">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={teacher.socials.twitter} className="text-white hover:text-[#06B0EF] transition">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={teacher.socials.instagram} className="text-white hover:text-[#06B0EF] transition">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={teacher.socials.linkedin} className="text-white hover:text-[#06B0EF] transition">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 Nav-text">{teacher.name}</h3>
                <p className="text-1xl text-[#7FBA51] font-medium Sav-text">{teacher.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}