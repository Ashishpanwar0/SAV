import react from "react";
import Contactimage from "../assets/SliderImages/SAV4.jpg"

const HomeContact = ({}) => {
    return(
        // Contact Form Start //
       <section className="pt-8">
         <h1 className="lg:text-5xl text-4xl font-bold text-center Heading-text">Contact <span className="underline decoration-4 decoration-[#7FBA51]">Us</span></h1>
        <div className="grid lg:grid-cols-[50%_50%] gap-10 lg:px-20 px-5 py-10">
            <div>
                        <form action="" className="space-y-5 Heading-text">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                <label htmlFor="" className="">Your Name *</label>
                                <input type="text" placeholder="Your Full Name" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600 mt-3"/>
                                    </div>
                                <div>
                                <label htmlFor="">Your Email *</label>
                                <input type="mail"  placeholder="you@youremail.com" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600 mt-3"/>
                            </div>
                            </div>
                            <div>
                                <label htmlFor="">Phone Number *</label>
                                <input type="number" placeholder="Type Your Number" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600 mt-3"/>
                            </div>
                            <div>
                                <label htmlFor="">Meesage</label>
                                <textarea name="" id="" placeholder="Type Your Message" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600 mt-3 h-40"></textarea>
                            </div>
                        </form>
            </div>
            <div>
                    <img src={Contactimage} alt="" className="rounded-xl"/>
            </div>
        </div>
       </section>
    )
};
export default HomeContact;