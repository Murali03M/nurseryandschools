import  { useState, useEffect } from 'react';
import image from '../assets/mainSlider.png';
import { Search } from 'lucide-react';
import add from '../assets/mini-makers-contest-ads1.png';
import add2 from '../assets/horwichdaynursery2.png'
import add3 from '../assets/nursery-management-software-app3-nurseriesandschools.png'
import ReviewCarousel from './review';
import Footer from './footer';
import MaternityServices from './service';


const words = ['Maternity', 'Sports', 'Schools'];

const Main = () => {
  const [searchMode, setSearchMode] = useState('listing');
  const [currentWord, setCurrentWord] = useState('');
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const word = words[index];
    if (letterIndex < word.length) {
      const timeout = setTimeout(() => {
        setCurrentWord((prev) => prev + word[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const fullWordTimeout = setTimeout(() => {
        setLetterIndex(0);
        setCurrentWord('');
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1000);
      return () => clearTimeout(fullWordTimeout);
    }
  }, [letterIndex, index]);

  return (
    <main
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative container mx-auto  text-center text-white">
        <h2 className="text-5xl font-bold mb-8 relative pt-10">
          Find Nearby: <span className="animate-pulse">{currentWord}</span>
        </h2>
        <p className="text-l mb-12 max-w-3xl mx-auto mt-5">
          We Are The Only 360-Degree Online Search Platform In The UK For Your Child's Educational Needs! Find
          Everything From Maternity To Nurseries, Schools, Special Needs, Nannies, Tutors, Colleges & Universities,
          Sports, Camps, Family Day Out, Clubs, And Businesses In One Convenient Place.
        </p>

        <div className="relative bg-white text-white rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
          <div className="flex mb-4">
            <button
              className={`flex-1 py-2 rounded-l-lg ${searchMode === 'listing' ? 'bg-[#8a63b9] text-white' : 'bg-white text-[#4a2d5d]'} border-2`}
              onClick={() => setSearchMode('listing')}
            >
              Search By Listing
            </button>
            <button
              className={`flex-1 py-2 rounded-r-lg ${searchMode === 'location' ? 'bg-[#8a63b9] text-white' : 'bg-white text-[#4a2d5d]'} border `}
              onClick={() => setSearchMode('location')}
            >
              Search By Location
            </button>
          </div>

          <div className="flex">
            {searchMode === 'listing' ? (
              <>
                <select className="flex-1 p-2 border border-gray-300 rounded-l-lg text-[#4a2d5d]">
                  <option>Maternity</option>
                  <option>Sports</option>
                  <option>Schools</option>
                </select>
                <input
                  type="text"
                  placeholder="Search by name."
                  className="flex-grow p-2 border-t border-b border-gray-300 text-[#4a2d5d]"
                />
              </>
            ) : (
              <>
                <select className="flex-1 p-2 border border-gray-300 rounded-l-lg text-[#4a2d5d]">
                  <option>Postcode</option>
                  <option>Town</option>
                  <option>City</option>
                </select>
                <select className="flex-1 p-2 border border-gray-300 text-[#4a2d5d]">
                  <option>Maternity</option>
                  <option>Sports</option>
                  <option>Schools</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter location."
                  className="flex-grow p-2 border-t border-b border-l border-gray-300 rounded-l-lg text-[#4a2d5d]"
                />
              </>
            )}
            <button className="bg-[#8a63b9] text-white p-2 rounded-r-lg">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Advertisement Section */}
        <div className="mt-12 bg-white w-full h-auto flex justify-center">
          <img src={add} className="max-w-full h-auto" />
        </div>

        {/* Grid Section */}
        <div className="bg-white mt-6">
          <div className="grid grid-cols-4 p-3 gap-5">
            {Array(12).fill('Maternity').map((item, idx) => (
              <div key={idx} className="p-5 border shadow-md mt-4 text-black">
                {item}
              </div>
            ))}
          </div>
              </div>
            
        <div className="mt-12 bg-white w-full h-auto flex justify-center">
          <img src={add2} className="max-w-full h-auto" />
        </div>
        
          </div>
          <ReviewCarousel />
          
            {/* Advertisement Section */}
        <div className="mt-12 bg-white w-full h-auto flex justify-center p-6">
          <img src={add3} className="max-w-full h-auto" />
      </div>
      
      <div>
           <MaternityServices/>
      </div>
        <Footer  />
    </main>
  );
};

export default Main;
