import react from "react";
import Navbar from "../Componants/Navbar";
import HomeSlider from "../Componants/HomeSlider";
import HomeCard from "../Componants/HomeCard.jsx";
import Footer from "../Componants/Footer.jsx";

const Home = ({}) => {
    return(
        <>
        <Navbar/>
        <HomeSlider/>
        <HomeCard/>
        <Footer/>
        </>
    )
}
export default Home;