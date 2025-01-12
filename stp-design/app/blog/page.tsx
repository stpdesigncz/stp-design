'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed

const blogTopics = [
  {
    title: 'Základy navrhování interiérů',
    content: `Navrhování interiérů je proces, který kombinuje estetiku a funkčnost prostoru. Začněte tím, že určíte hlavní účel místnosti a vyberete základní barevnou paletu.\n\nPři plánování zvažte umístění nábytku, světelných zdrojů a dekorací, které budou odpovídat zamýšlené atmosféře.`,
  },
  {
    title: 'Jak pracovat s barvami a materiály',
    content: `Barvy a materiály mají zásadní vliv na atmosféru prostoru. Světlé barvy prostor opticky zvětšují, zatímco tmavé barvy vytvářejí útulnější prostředí.\n\nMateriály, jako jsou dřevo, kov a sklo, mohou přidat texturu a vizuální zajímavost. Kombinace různých povrchů vytváří dynamiku a hloubku.`,
  },
  {
    title: 'Využití osvětlení v interiérech',
    content: `Osvětlení je klíčovým prvkem při vytváření atmosféry. Kombinujte přímé a nepřímé osvětlení pro dosažení různých efektů.\n\nPoužívejte stmívatelné světelné zdroje pro flexibilitu a zvažte přirozené osvětlení při plánování umístění oken a zrcadel.`,
  },
  {
    title: 'Navrhování multifunkčních prostor',
    content: `Moderní interiéry často vyžadují flexibilní prostory. Například obývací pokoje mohou být navrženy tak, aby sloužily také jako pracovní nebo relaxační zóny.\n\nPoužívejte modulární nábytek a důmyslné úložné prostory pro maximální využití prostoru.`,
  },
  {
    title: 'Ergonomie v interiérovém designu',
    content: `Ergonomie je důležitá pro zajištění pohodlí a efektivity. Zvažte výšku nábytku, umístění zásuvek a rozmístění pracovních zón.\n\nDbejte na snadný pohyb v prostoru a přístupnost, aby interiér vyhovoval potřebám všech uživatelů.`,
  },
];

const BlogPage = () => {
  const [activeTopic, setActiveTopic] = useState<number | null>(0); // First topic opened by default

  const handleTopicClick = (index: number) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto py-40 px-4">
        {activeTopic !== null && (
          <div className="relative border rounded-lg shadow-lg p-6 mb-6">
            <button
              onClick={() => setActiveTopic(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-400 text-2xl font-semibold"
              aria-label="Zavřít"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">{blogTopics[activeTopic].title}</h2>
            {blogTopics[activeTopic].content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        <div className="space-y-4">
          {blogTopics.map((topic, index) => (
            activeTopic !== index && (
              <button
                key={index}
                onClick={() => handleTopicClick(index)}
                className="block w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
              >
                {topic.title}
              </button>
            )
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
