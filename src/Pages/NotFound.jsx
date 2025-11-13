import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F9FAFB] px-6 text-center overflow-hidden">

      {/* Fade + Scale Animation */}
      <div className="animate-fadeInSlow flex flex-col items-center">

        {/* Icon Animation */}
        <AlertTriangle className="text-red-500 w-20 h-20 mb-4 animate-bounceSlow" />

        <h1 className="text-5xl font-extrabold text-gray-800 Heading-text animate-slideUp">
          404
        </h1>

        <p className="text-gray-600 text-lg mt-3 Body-text max-w-md animate-slideUp delay-100">
          Sorry, the page you’re trying to open isn’t available right now.
          It may have been moved or deleted.
        </p>

        <Link
          to="/"
          className="mt-8 px-8 py-3 bg-[#76B646] text-white rounded-lg hover:bg-[#0891c0] transition shadow-md hover:shadow-lg animate-slideUp delay-200"
        >
          Go Back to Home
        </Link>
      </div>

      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-[#e9f9ff] opacity-80"></div>
    </div>
  );
}
