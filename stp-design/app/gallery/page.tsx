'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed

const GalleryPage: React.FC = () => {
  // Example image data
  const visualizationImages = [
    '/viz1.jpg',
    '/viz2.jpg',
    '/viz3.jpg',
    '/viz4.jpg',
    '/viz5.jpg',
    '/viz6.jpg',
    '/viz7.jpg',
    '/viz8.jpg',
    '/viz9.jpg',
    '/viz10.jpg',
  ];

  const photographyImages = [
    '/photo1.jpg',
    '/photo2.jpg',
    '/photo3.jpg',
    '/photo4.jpg',
    '/photo5.jpg',
    '/photo6.jpg',
    '/photo7.jpg',
    '/photo8.jpg',
    '/photo9.jpg',
    '/photo10.jpg',
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {visualizationImages.map((image, index) => (
                <div key={index} className="w-full">
                  <Image 
                    src={image}
                    alt={`Vizualizace ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-full object-cover"
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Photography Gallery */}
          <section>
            <h1 className="text-3xl text-gray-800 text-center mb-8 font-poppins">
              Galerie fotografií
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photographyImages.map((image, index) => (
                <div key={index} className="w-full">
                  <Image 
                    src={image}
                    alt={`Fotografie ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-full object-cover"
                    width={200}
                    height={200}
                  />
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
