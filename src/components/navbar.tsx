import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nurseriesandschools-logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white h-16 text-purple-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-12" />
            </Link>
            {/* Menu button for small/medium screens */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-purple-800 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Home</Link>
            <Link to="/job-board" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Job Board</Link>
            <Link to="/e-resources" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">E-Resources</Link>
            <Link to="/submit-review" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Submit A Review</Link>
            <Link to="/forum" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Forum</Link>
            <Link to="/blogs" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Blogs</Link>
            <Link to="/pages" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Pages</Link>

            {/* Dropdown */}
            <div className="relative group z-10">
              <button
                id="dropdownDelayButton"
                data-dropdown-toggle="dropdownDelay"
                data-dropdown-delay="500"
                data-dropdown-trigger="hover"
                className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded flex items-center"
                aria-expanded="false"
              >
                Our Categories
                <DownArrow />
              </button>
              <div
                id="dropdownDelay"
                className="absolute hidden group-hover:block bg-white text-purple-800 divide-y divide-gray-100 rounded-lg shadow mt-2 w-44"
              >
                <ul className="py-2 text-sm" aria-labelledby="dropdownDelayButton">
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-[#8a63b9] hover:text-slate-50 rounded"
                    >
                      Maternity
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-[#8a63b9] hover:text-slate-50 rounded"
                    >
                      Nurseries
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-[#8a63b9] hover:text-slate-50 rounded"
                    >
                      Schools
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-[#8a63b9] hover:text-slate-50 rounded"
                    >
                      Sports
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="/whats-on" className="relative inline-block p-1.5 rounded border border-[#8a63b9]">
              What's On
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#8a63b9] rounded-full animate-ping"></span>
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#8a63b9] rounded-full"></span>
            </Link>
          </div>

          {/* Advertise buttons for larger screens */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded">Advertise with us</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded">Free Listing</button>
          </div>
        </div>
      </nav>

      {/* Sidebar menu for small/medium screens */}
      <div className={`fixed inset-y-0 left-0 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 w-64`}>
        <div className="p-4">
          <button onClick={toggleMenu} className="text-purple-800 focus:outline-none mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Home</Link>
            <Link to="/job-board" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Job Board</Link>
            <Link to="/e-resources" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">E-Resources</Link>
            <Link to="/submit-review" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Submit A Review</Link>
            <Link to="/forum" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Forum</Link>
            <Link to="/blogs" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Blogs</Link>
            <Link to="/pages" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">Pages</Link>
            <Link to="/whats-on" className="hover:bg-[#8a63b9] hover:text-slate-50 p-1.5 rounded">What's On</Link>
            <button className="bg-red-600 text-white px-4 py-2 rounded">Advertise with us</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded">Free Listing</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

function DownArrow() {
  return (
    <svg className="w-2.5 h-2.5 ml-1 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
    </svg>
  );
}
