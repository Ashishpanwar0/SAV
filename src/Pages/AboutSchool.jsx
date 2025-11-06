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
        <section className="py-10 px-10">
            <div className="grid grid-cols-[40%_60%]">
                <div>
                <h1 className="text-7xl font-bold">Welcome to <span className="underline decoration-[#7FBA51] decoration-5">Samoon</span> Adarsh Vidhyalaya</h1>
            </div>
            <div>
                    <p>Samoon Adarsh Vidhyalaya is a Hindi-medium primary school, founded in 2021, located in Osla village, Uttarakhand. We provide quality education to children in remote areas, developing their potential.</p>
                    <h1>Our Vision</h1>
                    <p>Quality education for every child in the Himalayan region.</p>
                    <h1>Our Mission</h1>
                    <p>Providing quality education to children in the Himalayan region.</p>
            </div>
            </div>
        </section>
        {/* <SchooTeacher/> */}
        <Footer/>
        </>
    )
};
export default AboutSchool;