import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Users, Award, Lightbulb } from "lucide-react";

const EducationBenefits = () => {
  const totalStudents = 300; // you can change any time of students numbers
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;
    let current = 0;
    const duration = 3000;
    const stepTime = duration / totalStudents;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current === totalStudents) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [startCount, totalStudents]);

  return (
    <section ref={sectionRef} className="bg-[#F9FAFB] py-15">
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <p className="text-[#0AB1F0] font-semibold Body-text">
            Importance of Education
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4 Heading-text">
            Building Confidence and Values Through Learning
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed Body-text">
            At <span className="font-semibold">Samoon Adarsh Vidhyala</span>, we
            focus on learning that shapes both knowledge and character. Each
            student is guided to think deeply, act kindly, and move forward with
            confidence in life.
          </p>

          <div className="mt-10 bg-[#f7fdf4] border-l-4 border-[#92C56C] p-5 rounded-lg inline-block">
            <h3 className="text-5xl font-bold text-[#92C56C] Heading-text">
              {count}
            </h3>
            <p className="text-gray-800 font-medium mt-1 Body-text">
              Students Have Studied With Us
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="grid sm:grid-cols-2 gap-5 bg-white p-6 rounded-2xl shadow-md">
          <div className="border rounded-xl p-5 hover:shadow-xl transition border-[#0AB1F0]">
            <BookOpen className="text-[#92C56C] h-8 w-8 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1 Heading-text">
              Builds Strong Values
            </h3>
            <p className="text-gray-600 text-sm Body-text">
              Education helps students grow with honesty, kindness, and respect
              for others.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg transition border-[#0AB1F0]">
            <Users className="text-[#92C56C] h-8 w-8 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1 Heading-text">
              Encourages Teamwork
            </h3>
            <p className="text-gray-600 text-sm Body-text">
              Students learn to cooperate, share ideas, and support one another
              in every activity.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg transition border-[#0AB1F0]">
            <Award className="text-[#92C56C] h-8 w-8 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1 Heading-text">
              Builds Confidence
            </h3>
            <p className="text-gray-600 text-sm Body-text">
              Every achievement motivates students to believe in their own
              abilities.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg transition border-[#0AB1F0]">
            <Lightbulb className="text-[#92C56C] h-8 w-8 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1 Heading-text">
              Inspires Creativity
            </h3>
            <p className="text-gray-600 text-sm Body-text">
              Learning at our school encourages imagination and independent
              thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationBenefits;
