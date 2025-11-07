import Footer from "../Componants/Footer";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";
import bgimg from "../assets/SecondsliderImage/header.webp"

const AuditReport = ({}) =>  {
    return(
        <>
        <Navbar/>
        <Secondslider bgImage={bgimg} title="Audit Report" subtitle="Home / Audit Report"/>
        <Footer/>
        </>
    )
};
export default AuditReport;