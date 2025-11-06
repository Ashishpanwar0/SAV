import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// Import your teacher images
import vijaypal from "../assets/SliderImages/SAV3.jpg";
import harimohan from "../assets/SliderImages/SAV3.jpg";
import vijaylal from "../assets/SliderImages/SAV3.jpg";
import motilal from "../assets/SliderImages/SAV3.jpg";

const teachers = [
  {
    name: "Vijaypal Singh",
    position: "Principal",
    img: vijaypal,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Harimohan Rawat",
    position: "Mathematics Teacher",
    img: harimohan,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Vijaylal Sharma",
    position: "Science Teacher",
    img: vijaylal,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Motilal Joshi",
    position: "Hindi & Sanskrit",
    img: motilal,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
];

export default function SchooTeacher() {
  return (
    <section className="py-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Expert <span className="underline decoration-[#7FBA51] decoration-4">Teachers</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          Dedicated educators who inspire, guide, and shape the future of every child with care and knowledge.
        </p>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
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

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{teacher.name}</h3>
                <p className="text-sm text-[#7FBA51] font-medium">{teacher.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}