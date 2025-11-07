import Footer from "../Componants/Footer";
import Navbar from "../Componants/Navbar";
import SchooTeacher from "../Componants/SchooTeacher";
import Secondslider from "../Componants/Secondslider";
import Bgimg from "../assets/SecondsliderImage/header.webp"

const Ourteacher = ({}) =>{
    return(
        <>
        <Navbar/>
        <Secondslider bgImage={Bgimg} title="Our Teachers" subtitle="Home / Our Teachers"/>
        <SchooTeacher/>
        <Footer/>
        </>
    )
};
export default Ourteacher;