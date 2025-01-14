'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed

const GalleryPage: React.FC = () => {
  // Example image data with captions
  const visualizationImages = [
    { src: '/viz1.jpg', caption: 'Moderní interiérový design' },
    { src: '/viz2.jpg', caption: 'Kuchyňská linka s minimalistickým nádechem' },
    { src: '/viz3.jpg', caption: 'Prostorný obývací pokoj' },
    { src: '/viz4.jpg', caption: 'Návrh exteriéru rodinného domu' },
    { src: '/viz5.jpg', caption: 'Elegantní kancelářský prostor' },
    { src: '/viz6.jpg', caption: 'Ložnice s výhledem na přírodu' },
    { src: '/viz7.jpg', caption: 'Detail kuchyňského ostrova' },
    { src: '/viz8.jpg', caption: 'Moderní koupelna' },
    { src: '/viz9.jpg', caption: 'Design obývacího prostoru s krbem' },
    { src: '/viz10.jpg', caption: 'Návrh terasy s pergolou' },
  ];

  const photographyImages = [
    { src: '/photo1.jpg', caption: 'Krajina při západu slunce' },
    { src: '/photo2.jpg', caption: 'Detailní záběr květiny' },
    { src: '/photo3.jpg', caption: 'Městská scenérie v noci' },
    { src: '/photo4.jpg', caption: 'Vesnická idyla na jaře' },
    { src: '/photo5.jpg', caption: 'Portrétní fotografie v přírodě' },
    { src: '/photo6.jpg', caption: 'Architektonický detail moderní budovy' },
    { src: '/photo7.jpg', caption: 'Záběr divoké přírody' },
    { src: '/photo8.jpg', caption: 'Historická ulička města' },
    { src: '/photo9.jpg', caption: 'Panorama hor' },
    { src: '/photo10.jpg', caption: 'Noční obloha plná hvězd' },
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen ">
      <Navbar /> {/* Include Navbar */}

      <main className="flex-grow bg-white py-40">
        <div className="container mx-auto px-4 md:px-8">
          {/* Visualizations Gallery */}
          <section className="mb-16">
            <h1 className="text-3xl text-gray-800 text-center mb-8 font-poppins">
              Galerie vizualizací
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
              {visualizationImages.map((item, index) => (
                <div
                  key={index}
                  className="w-full text-center" // Bez mezer mezi obrázkem a textem
                >
                  <Image 
                    src={item.src}
                    alt={`Vizualizace ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-full object-cover"
                    width={200}
                    height={200}
                  />
                  <p className="text-sm text-gray-600 mt-2">{item.caption}</p> {/* Minimální mezera */}
                </div>
              ))}
            </div>
          </section>

          {/* Photography Gallery - */}
          <section>
            <h1 className="text-3xl text-gray-800 text-center mb-8 font-poppins">
              Galerie fotografií
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
              {photographyImages.map((item, index) => (
                <div
                  key={index}
                  className="w-full text-center" // Bez mezer mezi obrázkem a textem
                >
                  <Image 
                    src={item.src}
                    alt={`Vizualizace ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-full object-cover"
                    width={200}
                    height={200}
                  />
                  <p className="text-sm text-gray-600 mt-2">{item.caption}</p> {/* Minimální mezera */}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default GalleryPage;
