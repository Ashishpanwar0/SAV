import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wider Heading-text">ABOUT US</h3>
          <p className="text-sm leading-relaxed opacity-90 Body-text">
            Founded in the year 2021, Samoon Adarsh Vidyalaya is a Hindi medium primary school that blends the best educational practices, driven by committed and truly modern educational concepts.
          </p>
        </div>

        {/* Quick Menu */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wider Heading-text">QUICK MENU</h3>
          <ul className="space-y-2 text-sm Nav-text">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Disclaimer</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* School Address */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wider Heading-text">SCHOOL ADDRESS</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2 Nav-text">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Post Office - Gangaad, Block - Mori, District - Uttarkashi, Uttarakhand, India 249185</span>
            </p>
            <p className="flex items-center gap-2 Nav-text">
              <Phone className="w-4 h-4" />
              <span>+91-9027001689 - Office</span>
            </p>
            <p className="flex items-center gap-2 Nav-text">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@samoonfoundation.org" className="hover:underline">info@samoonfoundation.org</a>
            </p>
          </div>
        </div>

        {/* Head Office */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wider Heading-text">HEAD OFFICE ADDRESS</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 Nav-text" />
              <span>C/O Vinita Devi Jethuri, Delhi Farm, Khadri Road, Shyampur, Rishikesh District - Dehradun, Uttarakhand - 249204</span>
            </p>
            <p className="flex items-center gap-2 Nav-text">
              <Phone className="w-4 h-4" />
              <span>+91-9027001689 - Office</span>
            </p>
            <p className="flex items-center gap-2 Nav-text">
              <Mail className="w-4 h-4" />
              <a href="mailto:admin@samoonfoundation.org" className="hover:underline">admin@samoonfoundation.org</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-cyan-400 text-center text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="Nav-text">Copyright 2025 Samoon Adarsh Vidyalaya . Managed & Devloped by Ashish Panwar </p>
          <div className="flex items-center gap-4 Heading-text">
            <span className="Nav-text">Follow Us:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-orange-300 transition"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-orange-300 transition"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-orange-300 transition"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-orange-300 transition"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="hover:text-orange-300 transition"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}