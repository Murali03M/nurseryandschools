
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
interface themeProps {
    dark: string,
    light: string
}

const Footer = ({ theme = 'dark' }) => {
  const themeClasses:themeProps = {
    dark: 'bg-gray-900 text-white',
    light: 'bg-white text-gray-900',
  };

  const borderColor = theme === 'dark' ? 'border-pink-500' : 'border-gray-900';

  return (
    <footer className={`${themeClasses[theme]} p-4 sm:p-6 lg:p-8`}>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className={`text-xl font-bold mb-4 border-b-2 ${borderColor} pb-2 inline-block`}>About Us</h2>
          <p className="mb-4 text-sm sm:text-base">Nurseriesandschools.org is an online search platform that lists nurseries, schools, nannies, tutors and companies which operate within the education sector, based across the UK.</p>
          <p className="mb-2 text-sm">Suite 402, The Atrium, 1 Harefield Rd, Uxbridge, UB8 1EX</p>
          <p className="mb-2 text-sm">01895 807 672</p>
          <p className="mb-2 text-sm">+44 7597 299398</p>
          <p className="text-sm">info@nurseriesandschools.org</p>
        </div>
        
        <div className="mt-6 sm:mt-0">
          <h2 className={`text-xl font-bold mb-4 border-b-2 ${borderColor} pb-2 inline-block`}>Our Categories</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {['Maternity', 'Nurseries', 'Schools', 'Nannies', 'Sports', 'Clubs', 'Camps', 'Tutors', 'Special Needs', 'Colleges & Universities', 'Family Day out', 'Companies'].map((category, index) => (
              <a key={index} href="#" className={`hover:text-pink-500 text-sm sm:text-base ${theme === 'light' ? 'hover:underline' : ''}`}>{category}</a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 lg:mt-0">
          <h2 className={`text-xl font-bold mb-4 border-b-2 ${borderColor} pb-2 inline-block`}>Quick Links</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {['Newsletter', 'Our Team', 'Press Lounge', 'News', 'About Us', 'Feedback', 'Privacy Policy', 'Easy Download', 'Want to write for us?', 'Recruitment', 'Contact Us', 'Upload your CV', 'Jobs', 'Groups', 'Submit a Review', 'Events Calendar'].map((link, index) => (
              <a key={index} href="#" className={`hover:text-pink-500 text-sm sm:text-base ${theme === 'light' ? 'hover:underline' : ''}`}>{link}</a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0 text-sm sm:text-base">Copyright © 2024 - All Rights Reserved By nurseriesandschools.org</p>
        <div className="flex space-x-4">
          <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;