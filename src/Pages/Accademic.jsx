import react from "react";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";
import Footer from "../Componants/Footer";
import Activities from "../Componants/Activities";

import imgbg from "../assets/SecondsliderImage/header.webp";

const Academic = ({}) =>{
return(
    <>
        <Navbar/>
        <Secondslider bgImage={imgbg} title="Academic Facilities" subtitle="Home / Academic Facilities"/>
        <Footer/>
    </>
)
};
export default Academic;