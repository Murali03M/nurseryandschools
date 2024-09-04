import  { useState } from 'react';
import { LATEST_ANNOUCEMENT } from '../config';
import '../App.css'; // Ensure this file contains the necessary styles

const Topbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark', !isDarkTheme);
  };

  return (
    <div className={`bg-gradient-to-r ${isDarkTheme ? 'from-[#4a2d5d] to-[#5d3a7a]' : 'from-[#ffffff] to-[#f0f0f0]'} shadow-md`}>
      <header className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="flex ml-11 items-center">
            <span className={`text-${isDarkTheme ? 'white' : 'black'} bg-red-500 p-3`}>
              Latest Announcements
            </span>
            <div className={`w-96 p-3 ${isDarkTheme ? 'bg-white' : 'bg-black'} marquee-wrapper`}>
              <div className="marquee-content">
                {LATEST_ANNOUCEMENT}
              </div>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <button className={`border px-5 py-2 rounded-md font-semibold transition-all ${isDarkTheme ? 'bg-transparent border-[#b69fd3] text-[#e0d5f0] hover:bg-[#614281] hover:border-[#e0d5f0]' : 'bg-transparent border-[#000000] text-[#000000] hover:bg-[#e0e0e0] hover:border-[#000000]'}`}>
              Register
            </button>
            <button className={`border px-5 py-2 rounded-md font-semibold transition-all ${isDarkTheme ? 'bg-[#8a63b9] border-[#8a63b9] text-white hover:bg-[#9d7ac7] hover:border-[#9d7ac7]' : 'bg-[#000000] border-[#000000] text-white hover:bg-[#333333] hover:border-[#333333]'}`}>
              Sign In
            </button>
            <button
              onClick={toggleTheme}
              className={`ml-4 px-4 py-2 rounded-md font-semibold transition-all ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
            >
              {isDarkTheme ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Topbar;



function Moon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  );
}

function Sun() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  );
}
