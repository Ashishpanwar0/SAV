import Footer from "../Componants/Footer";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";
import StudentRegistration from "../Componants/StudentRegistration";

// Header Bg img import here 
import imgbg from "../assets/SecondsliderImage/samoonsecondheader2.jpg"

const RagistrationForm = ({}) =>{
    return(
        <>
            <Navbar/>
            <Secondslider bgImage={imgbg} title="Registration Form" subtitle="Home / Registration Form"/>
            <StudentRegistration/>
            <Footer/>
        </>
    )
};
export default RagistrationForm;