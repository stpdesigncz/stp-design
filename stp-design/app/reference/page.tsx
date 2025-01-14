'use client';

import Navbar from '../components/Navbar'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed

const references = [
  {
    title: 'Návrh moderního sídla firmy',
    location: 'Praha',
    description: 'Kompletní realizace včetně návrhu interiéru a exteriéru. ',
  },
  {
    title: 'Rekonstrukce rodinného domu',
    location: 'Brno',
    description: 'Prováděli jsme rozsáhlou renovaci a modernizaci interiéru.',
  },
  {
    title: 'Výstavba sportovní haly',
    location: 'Ostrava',
    description: 'Kompletní realizace sportovního objektu včetně zázemí.',
  },
  {
    title: 'Realizace firemního showroomu',
    location: 'Plzeň',
    description: 'Vytvoření moderního showroomu s nejnovějšími technologiemi.',
  },
  {
    title: 'Návrh a realizace zahrady',
    location: 'Liberec',
    description: 'Kompletní úprava zahrady včetně zavlažovacího systému.',
  },
];


const ReferenceCard = ({ title, location, description }: { title: string; location: string; description: string }) => (
  <div className="border rounded-lg shadow-lg p-6 mb-6">
    <h2 className="text-xl mb-2">{title}</h2>
    <p className="text-gray-600 mb-2"><strong>Místo realizace:</strong> {location}</p>
    <p>{description}</p>
  </div>
);

const ReferencesPage = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar /> 
      <main className="max-w-6xl mx-auto py-32 px-4">
        {references.map((ref, index) => (
          <ReferenceCard
            key={index}
            title={ref.title}
            location={ref.location}
            description={ref.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default ReferencesPage;
