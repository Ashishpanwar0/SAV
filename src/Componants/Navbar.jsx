import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import samoonlogo from "../assets/SamoonLogo/samoonadarshvidhyalayalogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenu, setSubMenu] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  // Sticky Navbar on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu("");
        setSubMenu("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
    setSubMenu("");
  };

  const toggleSubMenu = (submenu) => {
    setSubMenu(subMenu === submenu ? "" : submenu);
  };

  return (
    <header ref={navRef} className="w-full z-50 bg-white shadow-sm">
      {/* ==== Top Info Bar ==== */}
      <div className="hidden lg:flex justify-end items-center text-sm text-gray-700 px-10 pt-6 border-gray-200">
        <div className="flex items-center gap-2 mr-5">
          <Phone className="w-4 h-4 text-green-700" />
          <span>+91-9027001689</span>
        </div>
        <div className="flex items-center gap-2 mr-5">
          <Mail className="w-4 h-4 text-green-700" />
          <span>info@samoonfoundation.org</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-green-700" />
          <span>Gangaad, Mori Block, Uttarkashi, Uttarakhand, India 249185</span>
        </div>
      </div>

      {/* ==== Main Navbar ==== */}
      <nav
        className={`transition-all duration-300 ${
          isSticky ? "sticky top-0 shadow-md bg-white" : ""
        }`}
      >
        <div className="flex items-center justify-between px-4 lg:px-10 py-2 lg:py-1">
          {/* === Logo === */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={samoonlogo}
              alt="Samoon Logo"
              className="lg:w-45 w-32 h-auto"
            />
          </Link>

          {/* === Mobile Menu Button === */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-gray-800 focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* === Navigation Menu === */}
          <ul
            className={`absolute lg:static bg-white w-full lg:w-auto left-0 transition-all duration-300 ease-in-out shadow-md lg:shadow-none ${
              menuOpen ? "top-[100%] opacity-100" : "opacity-0 lg:opacity-100 hidden lg:flex"
            } flex-col lg:flex-row text-sm lg:items-center`}
          >
            {/* HOME */}
            <li className="px-5 py-3 hover:text-green-700">
              <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
            </li>

            {/* ABOUT US */}
            <li className="relative px-5 py-3">
              <button
                onClick={() => toggleMenu("about")}
                className="flex justify-between items-center w-full hover:text-green-700"
              >
                ABOUT US <span>▾</span>
              </button>
              {activeMenu === "about" && (
                <ul className="lg:absolute bg-white shadow-lg rounded-md w-60 mt-1 z-40">
                  {/* ABOUT SAV-OSLA */}
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <button
                      onClick={() => toggleSubMenu("about-savosla")}
                      className="w-full text-left flex justify-between"
                    >
                      About Sav-Osla <span>›</span>
                    </button>
                    {subMenu === "about-savosla" && (
                      <ul className="lg:absolute bg-white shadow-lg rounded-md w-56 mt-1 z-50">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/about-school" onClick={() => setMenuOpen(false)}>About School</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/principal-message" onClick={() => setMenuOpen(false)}>Principal Message</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/chairman-message" onClick={() => setMenuOpen(false)}>Chairman Message</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* About Samoon Foundation */}
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/about-samoon-foundation" onClick={() => setMenuOpen(false)}>
                      About Samoon Foundation
                    </Link>
                  </li>

                  {/* Our Visionary */}
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/our-visionary" onClick={() => setMenuOpen(false)}>Our Visionary</Link>
                  </li>

                  {/* Financial Report */}
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <button
                      onClick={() => toggleSubMenu("financial")}
                      className="w-full text-left flex justify-between"
                    >
                      Financial Report <span>›</span>
                    </button>
                    {subMenu === "financial" && (
                      <ul className="lg:absolute bg-white shadow-lg rounded-md w-56 mt-1 z-50">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/financial-report" onClick={() => setMenuOpen(false)}>Financial Report</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/audit-report" onClick={() => setMenuOpen(false)}>Audit Report</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Press Release */}
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/press-release" onClick={() => setMenuOpen(false)}>Press Release</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* ACADEMICS */}
            <li className="relative px-5 py-3">
              <button
                onClick={() => toggleMenu("academics")}
                className="flex justify-between items-center w-full hover:text-green-700"
              >
                ACADEMICS <span>▾</span>
              </button>
              {activeMenu === "academics" && (
                <ul className="lg:absolute bg-white shadow-lg rounded-md w-56 mt-1 z-40">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/academic-facilities" onClick={() => setMenuOpen(false)}>Academic Facilities</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/our-teachers" onClick={() => setMenuOpen(false)}>Our Teachers</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* ADMISSION */}
            <li className="relative px-5 py-3">
              <button
                onClick={() => toggleMenu("admission")}
                className="flex justify-between items-center w-full hover:text-green-700"
              >
                ADMISSION <span>▾</span>
              </button>
              {activeMenu === "admission" && (
                <ul className="lg:absolute bg-white shadow-lg rounded-md w-56 mt-1 z-40">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/registration-process" onClick={() => setMenuOpen(false)}>Registration Process</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/registration-form" onClick={() => setMenuOpen(false)}>Registration Form</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* OUR ACHIEVEMENTS */}
            <li className="relative px-5 py-3">
              <button
                onClick={() => toggleMenu("achievements")}
                className="flex justify-between items-center w-full hover:text-green-700"
              >
                OUR ACHIEVEMENTS <span>▾</span>
              </button>
              {activeMenu === "achievements" && (
                <ul className="lg:absolute bg-white shadow-lg rounded-md w-56 mt-1 z-40">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/certificates" onClick={() => setMenuOpen(false)}>Certificates</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/awards" onClick={() => setMenuOpen(false)}>Awards</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* PHOTO GALLERY */}
            <li className="px-5 py-3 hover:text-green-700">
              <Link to="/photo-gallery" onClick={() => setMenuOpen(false)}>PHOTO GALLERY</Link>
            </li>

            {/* CONTACT US */}
            <li className="relative px-5 py-3">
              <button
                onClick={() => toggleMenu("contact")}
                className="flex justify-between items-center w-full hover:text-green-700"
              >
                CONTACT US <span>▾</span>
              </button>
              {activeMenu === "contact" && (
                <ul className="lg:absolute bg-white shadow-lg rounded-md w-56 mt-1 z-40">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/career-with-us" onClick={() => setMenuOpen(false)}>Career With Us</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/student-scholarship-form" onClick={() => setMenuOpen(false)}>Student Scholarship Form</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
