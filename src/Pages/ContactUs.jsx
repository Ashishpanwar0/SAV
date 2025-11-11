import Footer from "../Componants/Footer";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";

import bgimg from "../assets/SecondsliderImage/header.webp";

const ContactUs = ({})=>{
    return(
        <>
        <Navbar/>
        <Secondslider bgImage={bgimg} title="Contact Us" subtitle=" Home / Contact Us"/>
        <ContactUs/>
        <Footer/>
        </>
    )
};
export default ContactUs