import { useState } from "react";

function Navbar({ selectedType, setSelectedType }) {
  const [isOpen, setIsOpen] = useState(false);

  // Button styles
  const linkClass = (type) =>
    `px-3 py-1 rounded-full font-semibold transition duration-200 ${
      selectedType === type
        ? "bg-indigo-500 text-white"
        : "hover:bg-indigo-400 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => setSelectedType("calisthenics")}>
          Onkar Fitness Hub
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <button className={linkClass("calisthenics")} onClick={() => setSelectedType("calisthenics")}>
              Calisthenics
            </button>
          </li>
          <li>
            <button className={linkClass("gym")} onClick={() => setSelectedType("gym")}>
              Gym
            </button>
          </li>
          <li>
            <button className={linkClass("yoga")} onClick={() => setSelectedType("yoga")}>
              Yoga
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-2 md:hidden">
          <li>
            <button className={linkClass("calisthenics")} onClick={() => setSelectedType("calisthenics")}>
              Calisthenics
            </button>
          </li>
          <li>
            <button className={linkClass("gym")} onClick={() => setSelectedType("gym")}>
              Gym
            </button>
          </li>
          <li>
            <button className={linkClass("yoga")} onClick={() => setSelectedType("yoga")}>
              Yoga
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;