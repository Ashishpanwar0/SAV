import Footer from "../Componants/Footer";
import Navbar from "../Componants/Navbar";
import Secondslider from "../Componants/Secondslider";
import Annualimg from "../assets/SecondsliderImage/header.webp"

const reports = [
  { year: "2021-2022", pdf: "/public/AnnualReport/ANNUAL-REPORT-2021-2022.pdf" },
  { year: "2022-2023", pdf: "/AnnualReport/ANNUAL-REPORT-2022-2023.pdf" },
  { year: "2023-2024", pdf: "/AnnualReport/ANNUAL-REPORT-2023-2024.pdf" },
  { year: "2024-2025", pdf: "/AnnualReport/ANNUAL-REPORT-2024-2025.pdf" },
];

export default function AnnualReport() {
  const openPDF = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <Secondslider bgImage={Annualimg} title="Annual Report" subtitle=" Home / Annual Report"/>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Annual <span className="underline decoration-green-600 decoration-4">Reports</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-sm md:text-base">
            View our yearly progress and transparency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {reports.map((report, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#000000b9]"
               data-aos="zoom-in">
                {/* PDF Icon */}
                <div className="p-8 flex justify-center">
                  <div className="w-28 h-36 bg-white border-4 border-red-600 rounded-lg shadow-sm flex flex-col items-center justify-center group-hover:border-red-700 transition-colors">
                    <div className="w-16 h-16 mb-2">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M20 10 L80 10 L90 25 L90 90 L20 90 Z"
                          fill="none"
                          stroke="#DC2626"
                          strokeWidth="3"
                        />
                        <path
                          d="M70 30 L70 10 L90 30 Z"
                          fill="#DC2626"
                        />
                        <text x="50" y="70" fontSize="28" fill="#1F2937" fontWeight="bold" textAnchor="middle">
                          PDF
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Year Label */}
                <p className="text-center text-[#00AEEF] font-medium text-lg mb-4 Sav-text">
                  Annual Report – {report.year}
                </p>

                {/* View Button */}
                <div className="px-6 pb-6">
                  <button
                    onClick={() => openPDF(report.pdf)}
                    className="w-[60%] py-2.5 bg-[#76B646] text-white text-sm font-medium rounded-lg hover:bg-[#77b646e3] transition-colors shadow-md"
                  >
                    View PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}