import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceProps {
  logo: string;
  name: string;
  isActive: boolean;
}

const Service: React.FC<ServiceProps> = ({ logo, name, isActive }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="overflow-hidden mx-auto mb-4">
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-32 h-32 object-cover mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
    </div>
    <h3 className="text-lg font-semibold text-center mb-2">{name}</h3>
    <div className="flex items-center justify-center">
      <span className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-red-500'} mr-2`}></span>
      <span className="text-sm text-gray-600">{isActive ? 'Active' : 'Inactive'}</span>
    </div>
  </div>
);




const MaternityServices: React.FC = () => {
  const services = [
    { logo: "https://www.nurseriesandschools.org/img/listing_images/30079/Logopng", name: "Marvel Birth", isActive: true },
    { logo: "https://www.nurseriesandschools.org/img/listing_images/30078/Logojpg", name: "Birthing Sanctuary", isActive: true },
    { logo: "https://www.nurseriesandschools.org/img/listing_images/30077/Logopng", name: "Motters Independent Midwifery", isActive: true },
  ];

  return (
    <div className="bg-purple-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-800">MATERNITY</h2>
        <button className="text-purple-600 flex items-center">
          See all <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default MaternityServices;