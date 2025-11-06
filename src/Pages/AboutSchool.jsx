import react from "react";
import Secondslider from "../Componants/Secondslider";
import img1 from "../assets/SecondsliderImage/header.webp";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import SchooTeacher from "../Componants/SchooTeacher";

const AboutSchool = ({})=>{
    return(
        <>
        <Navbar/>
        <Secondslider bgImage={img1} title="About School" subtitle="Home / About School"/>
        <section className="py-10 lg:px-15 px-5">
            <div className="grid lg:grid-cols-[38%_60%]">
                <div>
                <h1 className="lg:text-7xl text-4xl font-extrabold Sav-text text-[#7FBA51] mb-5">Welcome to <span className="underline decoration-[#7FBA51] decoration-5">Samoon</span> Adarsh Vidhyalaya</h1>
            </div>
            <div className="space-y-3 Body-text text-justify">
                    <p>Samoon Adarsh Vidhyalaya is a Hindi-medium primary school, founded in 2021, located in Osla village, Uttarakhand. We provide quality education to children in remote areas, developing their potential.</p>
                    <h1 className="text-[#00A7CB] font-extrabold text-4xl Sav-text underline decoration-4">Our Vision</h1>
                    <p>Quality education for every child in the Himalayan region.</p>
                    <h1 className="text-[#00A7CB] font-extrabold text-4xl Sav-text underline decoration-4">Our Mission</h1>
                    <p>Providing quality education to children in the Himalayan region.</p>
            </div>
            </div>
            <div>
                <div>
                    <div><img src="" alt="" /></div>
                    <div><h1>Our Journey: A Commitment to Education</h1></div>
                </div>
                <div>
                    <div><img src="" alt="" /></div>
                    <div>
                        <h1></h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
        <SchooTeacher/>
        <Footer/>
        </>
    )
};
export default AboutSchool;