import Footer from "../Componants/Footer";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";
import Bgimg from "../assets/SecondsliderImage/header.webp"
import principalImg from "../assets/SamoonTeacher/Vijaypal.jpg";

const PrincipalMessage = () => {
  return (
    <>
      <Navbar />
      <Secondslider
        bgImage={Bgimg}
        title="Principal's Message"
        subtitle="Home / Principal's Message"
      />
      <section className="py-12 px-5 lg:px-10">
        <div className="max-w-8xl mx-auto grid md:grid-cols-[300px_1fr] gap-10 items-start">
          <div className="flex justify-center md:justify-end">
            <img
              src={principalImg}
              alt="Vijaypal Singh Rana - Principal"
              className="w-64 h-64 object-cover rounded-xl shadow-2xl border-4 border-white hover:scale-120"
            />
          </div>
          <div className="space-y-5 text-gray-700 Body-text leading-relaxed text-justify">
            <p>
              Samoon Adarsh Vidhyalaya is an institution for primary education
              that provides a conducive environment for study and creativity to
              students residing in Osla and the surrounding villages of this
              remote area. At our school, we are dedicated to taking our
              students on an exciting journey of learning and self-exploration.
            </p>
            <p>
              The teachers at Samoon Adarsh Vidhyalaya not only impart knowledge
              but also serve as role models and mentors to the students. They
              are highly motivated and trained to help students clarify and
              deepen their understanding.
            </p>
            <p>
              Situated in the interior Himalayas, this region’s children were
              previously deprived of basic education, forcing many parents to
              send their kids to the nearest towns and villages for schooling.
              The establishment of Samoon Adarsh Vidhyalaya has successfully
              addressed this issue, ensuring education for all the children in
              the region.
            </p>
            <p>
              The school’s mission is to develop well-rounded capacities in its
              students and instill strong values that enable them to distinguish
              right from wrong, ultimately contributing to a better world.
            </p>
            <p className="font-medium">
              I eagerly look forward to welcoming you all to Samoon Adarsh
              Vidhyalaya.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-300">
              <h3 className="text-xl font-bold text-[#7FBA51]">
                Vijaypal Singh Rana
              </h3>
              <p className="text-sm text-gray-600">Principal</p>
              <p className="text-sm text-gray-600">Samoon Adarsh Vidhyalaya</p>
              <p className="text-sm text-gray-600">
                Osla, Uttarkashi (Uttarakhand)
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrincipalMessage;
