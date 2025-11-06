import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import samoonlogo from "../assets/SamoonLogo/samoonadarshvidhyalayalogo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [subDropdown, setSubDropdown] = useState("");
  const [sticky, setSticky] = useState(false);
  const navRef = useRef(null);

  // Sticky on scroll
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const close = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDropdown("");
        setSubDropdown("");
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? "" : menu);
    setSubDropdown("");
  };

  const toggleSub = (sub) => {
    setSubDropdown(subDropdown === sub ? "" : sub);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setDropdown("");
    setSubDropdown("");
  };

  return (
    <header ref={navRef} className="w-full z-50 bg-white">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block text-sm pt-2">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-8 Nav-text">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91-9027001689</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info@samoonfoundation.org</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Gangaad, Block - Mori, District - Uttarakashi, Uttarakhand, India 249185</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`${
          sticky
            ? "fixed top-0 left-0 right-0 shadow-lg bg-white/95 backdrop-blur-sm"
            : "relative"
        } transition-all duration-300 z-50`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-1">
          <div className="flex items-center justify-between h-16 lg:h-auto">
            {/* Logo */}
            <Link to="/" onClick={closeAll}>
              <img
                src={samoonlogo}
                alt="Samoon Adarsh Vidyalaya"
                className="h-12 lg:h-20 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-1 text-sm Nav-text">
              <NavItem to="/" onClick={closeAll}>
                HOME
              </NavItem>

              <Dropdown
                label="ABOUT US"
                isOpen={dropdown === "about"}
                onToggle={() => toggleDropdown("about")}
              >
                <SubDropdown
                  label="About SAV-Osla"
                  isOpen={subDropdown === "sav"}
                  onToggle={() => toggleSub("sav")}
                >
                  <MenuLink to="/about-school" onClick={closeAll}>
                    About School
                  </MenuLink>
                  <MenuLink to="/principal-message" onClick={closeAll}>
                    Principal Message
                  </MenuLink>
                  <MenuLink to="/chairman-message" onClick={closeAll}>
                    Chairman Message
                  </MenuLink>
                </SubDropdown>

                <MenuLink to="/about-samoon-foundation" onClick={closeAll}>
                  About Samoon Foundation
                </MenuLink>
                <MenuLink to="/our-visionary" onClick={closeAll}>
                  Our Visionary
                </MenuLink>

                <SubDropdown
                  label="Financial Report"
                  isOpen={subDropdown === "financial"}
                  onToggle={() => toggleSub("financial")}
                >
                  <MenuLink to="/financial-report" onClick={closeAll}>
                    Financial Report
                  </MenuLink>
                  <MenuLink to="/audit-report" onClick={closeAll}>
                    Audit Report
                  </MenuLink>
                </SubDropdown>

                <MenuLink to="/press-release" onClick={closeAll}>
                  Press Release
                </MenuLink>
              </Dropdown>

              <Dropdown
                label="ACADEMICS"
                isOpen={dropdown === "academics"}
                onToggle={() => toggleDropdown("academics")}
              >
                <MenuLink to="/academic-facilities" onClick={closeAll}>
                  Academic Facilities
                </MenuLink>
                <MenuLink to="/our-teachers" onClick={closeAll}>
                  Our Teachers
                </MenuLink>
              </Dropdown>

              <Dropdown
                label="ADMISSION"
                isOpen={dropdown === "admission"}
                onToggle={() => toggleDropdown("admission")}
              >
                <MenuLink to="/registration-process" onClick={closeAll}>
                  Registration Process
                </MenuLink>
                <MenuLink to="/registration-form" onClick={closeAll}>
                  Registration Form
                </MenuLink>
              </Dropdown>

              <Dropdown
                label="OUR ACHIEVEMENTS"
                isOpen={dropdown === "achievements"}
                onToggle={() => toggleDropdown("achievements")}
              >
                <MenuLink to="/certificates" onClick={closeAll}>
                  Certificates
                </MenuLink>
                <MenuLink to="/awards" onClick={closeAll}>
                  Awards
                </MenuLink>
              </Dropdown>

              <NavItem to="/photo-gallery" onClick={closeAll}>
                PHOTO GALLERY
              </NavItem>

              <Dropdown
                label="CONTACT US"
                isOpen={dropdown === "contact"}
                onToggle={() => toggleDropdown("contact")}
              >
                <MenuLink to="/career-with-us" onClick={closeAll}>
                  Career With Us
                </MenuLink>
                <MenuLink to="/student-scholarship-form" onClick={closeAll}>
                  Student Scholarship Form
                </MenuLink>
              </Dropdown>
            </ul>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-16 bg-white shadow-xl transition-all duration-300 overflow-y-auto ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-1 text-sm font-medium">
            <MobileItem to="/" onClick={closeAll}>HOME</MobileItem>

            <MobileDropdown label="ABOUT US">
              <MobileSubDropdown label="About SAV-Osla">
                <MobileLink to="/about-school" onClick={closeAll}>About School</MobileLink>
                <MobileLink to="/principal-message" onClick={closeAll}>Principal Message</MobileLink>
                <MobileLink to="/chairman-message" onClick={closeAll}>Chairman Message</MobileLink>
              </MobileSubDropdown>

              <MobileLink to="/about-samoon-foundation" onClick={closeAll}>
                About Samoon Foundation
              </MobileLink>
              <MobileLink to="/our-visionary" onClick={closeAll}>Our Visionary</MobileLink>

              <MobileSubDropdown label="Financial Report">
                <MobileLink to="/financial-report" onClick={closeAll}>Financial Report</MobileLink>
                <MobileLink to="/audit-report" onClick={closeAll}>Audit Report</MobileLink>
              </MobileSubDropdown>

              <MobileLink to="/press-release" onClick={closeAll}>Press Release</MobileLink>
            </MobileDropdown>

            <MobileDropdown label="ACADEMICS">
              <MobileLink to="/academic-facilities" onClick={closeAll}>Academic Facilities</MobileLink>
              <MobileLink to="/our-teachers" onClick={closeAll}>Our Teachers</MobileLink>
            </MobileDropdown>

            <MobileDropdown label="ADMISSION">
              <MobileLink to="/registration-process" onClick={closeAll}>Registration Process</MobileLink>
              <MobileLink to="/registration-form" onClick={closeAll}>Registration Form</MobileLink>
            </MobileDropdown>

            <MobileDropdown label="OUR ACHIEVEMENTS">
              <MobileLink to="/certificates" onClick={closeAll}>Certificates</MobileLink>
              <MobileLink to="/awards" onClick={closeAll}>Awards</MobileLink>
            </MobileDropdown>

            <MobileItem to="/photo-gallery" onClick={closeAll}>PHOTO GALLERY</MobileItem>

            <MobileDropdown label="CONTACT US">
              <MobileLink to="/career-with-us" onClick={closeAll}>Career With Us</MobileLink>
              <MobileLink to="/student-scholarship-form" onClick={closeAll}>
                Student Scholarship Form
              </MobileLink>
            </MobileDropdown>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* Reusable Components */
const NavItem = ({ to, children, onClick }) => (
  <li className="px-4 py-3 hover:text-cyan-600 transition">
    <Link to={to} onClick={onClick}>{children}</Link>
  </li>
);

const Dropdown = ({ label, isOpen, onToggle, children }) => (
  <li className="relative group">
    <button
      onClick={onToggle}
      className="px-4 py-3 flex items-center gap-1 hover:text-cyan-600 transition w-full"
    >
      {label} <span className="text-xs">▼</span>
    </button>
    {isOpen && (
      <ul className="absolute left-0 top-full mt-1 bg-white shadow-xl rounded-lg w-64 border border-gray-100">
        {children}
      </ul>
    )}
  </li>
);

const SubDropdown = ({ label, isOpen, onToggle, children }) => (
  <li className="group">
    <button
      onClick={onToggle}
      className="w-full text-left px-5 py-3 flex justify-between items-center hover:bg-gray-50"
    >
      {label} <span>›</span>
    </button>
    {isOpen && (
      <ul className="absolute left-full top-0 ml-1 bg-white shadow-xl rounded-lg w-56 border border-gray-100">
        {children}
      </ul>
    )}
  </li>
);

const MenuLink = ({ to, children, onClick }) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className="block px-5 py-3 hover:bg-gray-50 transition"
    >
      {children}
    </Link>
  </li>
);

/* Mobile Components */
const MobileItem = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700 rounded"
  >
    {children}
  </Link>
);

const MobileDropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 flex justify-between items-center hover:bg-cyan-50"
      >
        {label} <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pl-6 bg-gray-50">{children}</div>}
    </div>
  );
};

const MobileSubDropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 flex justify-between text-sm font-medium"
      >
        {label} <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pl-4">{children}</div>}
    </div>
  );
};

const MobileLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block py-2 text-sm text-gray-700 hover:text-cyan-700"
  >
    {children}
  </Link>
);