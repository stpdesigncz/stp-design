'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed


const ProjectPage: React.FC = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar /> {/* Include Navbar */}

      {/* Section Wrapper */}
      <section className="flex-grow bg-white py-40">
        <div className="container mx-auto px-4 md:px-8 space-y-16">
          {/* Project Sections */}
          {[
            {
              image: '/rekonstrukce-bytu.jpg',
              title: 'Rekonstrukce bytů',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nisl nec mi vehicula feugiat. Curabitur nec ligula fermentum, porttitor arcu vel, bibendum neque. Ut vitae nisi ut nulla auctor pharetra. Sed nec quam sit amet tortor vehicula ultrices.',
            },
            {
              image: '/rekonstrukce-domu.jpg',
              title: 'Rekonstrukce rodinných domů',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nisl nec mi vehicula feugiat. Curabitur nec ligula fermentum, porttitor arcu vel, bibendum neque. Ut vitae nisi ut nulla auctor pharetra. Sed nec quam sit amet tortor vehicula ultrices.',
            },
            {
              image: '/rekonstrukce-office.jpg',
              title: 'Rekonstrukce kancelářských prostor',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nisl nec mi vehicula feugiat. Curabitur nec ligula fermentum, porttitor arcu vel, bibendum neque. Ut vitae nisi ut nulla auctor pharetra. Sed nec quam sit amet tortor vehicula ultrices.',
            },
            {
              image: '/rekonstrukce-hospital.jpg',
              title: 'Rekonstrukce veřejných prostor a lékařských zařízení',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nisl nec mi vehicula feugiat. Curabitur nec ligula fermentum, porttitor arcu vel, bibendum neque. Ut vitae nisi ut nulla auctor pharetra. Sed nec quam sit amet tortor vehicula ultrices.',
            },
          ].map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-md w-full"
                  width={200}
                  height={200}
                />
              </div>
              {/* Text Section */}
              <div className="w-full md:w-1/2">
                <h1 className="text-3xl text-gray-800 mb-4 font-poppins md:text-center">
                  {project.title}
                </h1>
                <p className="text-gray-600 font-poppins md:text-center">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default ProjectPage;
