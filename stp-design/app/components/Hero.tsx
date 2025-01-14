import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-32">
      <div className="container mx-auto text-center">
        {/* Text nahoře */}
        <h1 className="text-3xl  text-gray-800 mb-4 font-poppins">CO DĚLÁME</h1>
        <p className="text-gray-600 mb-8 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nisl nec mi vehicula feugiat.
        </p>

        {/* Kulaté fotky s jmény a popisem */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="text-center">
            <img
              src="/owner1.png" // Nahraď správnou cestou k fotce
              alt="Majitelka 1"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <p className="mt-4 font-semibold text-gray-800">Pavla Horutová</p>
            <p className="text-gray-600 mt-2 text-sm">
              Specialistka na marketing a komunikaci.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/owner2.png" // Nahraď správnou cestou k fotce
              alt="Majitelka 2"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <p className="mt-4 font-semibold text-gray-800">Zuzana Horutová</p>
            <p className="text-gray-600 mt-2 text-sm">
              Expertka na design a vizuální prezentaci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
