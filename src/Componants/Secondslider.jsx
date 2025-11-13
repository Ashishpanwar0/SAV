import react from "react";
import {Link} from "react-router-dom"

const Secondslider = ({bgImage, title, subtitle})=> {
    return(
        <section style={{backgroundImage: `url(${bgImage})`}} className="h-64 md:h-98 bg-cover bg-center flex flex-col justify-center pl-10 md:pl-20 text-white relative opacity-88">
            <div className="absolute inset-0 bg-[#000000ab]"></div>
            <h1 className="text-2xl md:text-6xl font-bold z-10 tracking-[2px] lg:mt-[-40px] Heading-text">{title}</h1>
            <Link to="/"><p className="text-lg md:text-xl font-medium relative z-10 mt-2 tracking-[2px] Sav-text">{subtitle}</p></Link>
        </section>
    )
};
export default Secondslider;
