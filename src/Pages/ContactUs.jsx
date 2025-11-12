import Footer from "../Componants/Footer";
import HomeContact from "../Componants/HomeContact";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";

import bgimg from "../assets/SecondsliderImage/header.webp";

const ContactUs = ({})=>{
    return(
        <>
        <Navbar/>
        <Secondslider bgImage={bgimg} title="Contact Us" subtitle=" Home / Contact Us"/>
        <HomeContact/>
        <Footer/>
        </>
    )
};
export default ContactUs