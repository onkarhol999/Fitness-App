import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* App Info */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white">Onkar Fitness App</h2>
          <p className="flex items-center justify-center md:justify-start mt-2">
            <FaEnvelope className="mr-2 text-indigo-400" /> onkarhol555@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start mt-1">
            <FaMapMarkerAlt className="mr-2 text-green-400" /> Satara, Maharashtra
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Onkar Hol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;