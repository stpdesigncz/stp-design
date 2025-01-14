'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image'; // Import Image component from Next.js

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  files: File[];
};

const RequestFormPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
    files: [],
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...selectedFiles],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('city', formData.city);
    form.append('message', formData.message);
    formData.files.forEach((file) => form.append('files', file));

    try {
      const response = await fetch('/api/request', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setStatus('Zpráva byla úspěšně odeslána!');
        setFormData({ name: '', email: '', phone: '', city: '', message: '', files: [] });
      } else {
        setStatus('Došlo k chybě při odesílání zprávy.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Došlo k chybě při odesílání zprávy.');
    }
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto py-40 px-4 space-y-10">
        {/* Nadpis pro stránku */}
        <h1 className="text-3xl text-center">Interiéry na dálku</h1>

        {/* Text */}
        <p className="text-gray-600 text-center pb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
          <br />
          <br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sit amet massa nec arcu scelerisque auctor. Aliquam erat volutpat. Integer vel nisi vitae justo feugiat sollicitudin. Nam id magna in arcu aliquet volutpat. Quisque bibendum, nunc ut ultricies tincidunt, enim lorem dictum ante, sed malesuada turpis neque a magna.
        </p>

        {/* Fotky */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-44 -mx-8">
            <Image
              src="/photo2.jpg"
              alt="Fotka 1"
              fill // Nahrazuje "layout='fill'"
              className="rounded shadow-lg object-cover" // Nahrazuje "objectFit='cover'"
            />
          </div>
          <div className="relative h-44 -mx-8">
            <Image
              src="/photo3.jpg"
              alt="Fotka 2"
              fill
              className="rounded shadow-lg object-cover"
            />
          </div>
          <div className="relative h-44 -mx-8">
            <Image
              src="/photo4.jpg"
              alt="Fotka 3"
              fill
              className="rounded shadow-lg object-cover"
            />
          </div>
          <div className="relative h-44 -mx-8">
            <Image
              src="/photo5.jpg"
              alt="Fotka 4"
              fill
              className="rounded shadow-lg object-cover"
            />
          </div>
        </div>


        {/* Ceník */}
        <div className="space-y-4 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border p-4 rounded shadow-lg text-center">
              <h3 className="text-xl font-medium">Kuchyň</h3>
              <p className="mt-2 text-lg font-bold text-blue-500">30.000 - 60.000 Kč</p>
            </div>
            <div className="border p-4 rounded shadow-lg text-center">
              <h3 className="text-xl font-medium">Obývací pokoj / Pracovna</h3>
              <p className="mt-2 text-lg font-bold text-blue-500">20.000 - 50.000 Kč</p>
            </div>
            <div className="border p-4 rounded shadow-lg text-center">
              <h3 className="text-xl font-medium">Ložnice</h3>
              <p className="mt-2 text-lg font-bold text-blue-500">25.000 - 55.000 Kč</p>
            </div>
            <div className="border p-4 rounded shadow-lg text-center">
              <h3 className="text-xl font-medium">Dětský pokoj</h3>
              <p className="mt-2 text-lg font-bold text-blue-500">15.000 - 40.000 Kč</p>
            </div>
            <div className="border p-4 rounded shadow-lg text-center">
              <h3 className="text-xl font-medium">Chodba / Vstupní prostor</h3>
              <p className="mt-2 text-lg font-bold text-blue-500">10.000 - 35.000 Kč</p>
            </div>
            <div className="border p-4 rounded shadow-lg text-center">
              <h3 className="text-xl font-medium">Koupelna / WC</h3>
              <p className="mt-2 text-lg font-bold text-blue-500">20.000 - 45.000 Kč</p>
            </div>
          </div>
        </div>

        {/* Nadpis pro formulář */}
        <h2 className="text-2xl text-center pt-16">Formulář</h2>

        {/* Formulář */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Jméno"
              className="w-full border rounded px-4 py-2 placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full border rounded px-4 py-2 placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Telefon"
              className="w-full border rounded px-4 py-2 placeholder-gray-500"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Preference stylu, barev a speciální požadavky"
              className="w-full border rounded px-4 py-2 placeholder-gray-500"
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              id="files"
              name="files"
              multiple
              onChange={handleFileChange}
              className="w-full"
            />
            <div className="text-sm text-gray-600 mt-2">
              {formData.files.length > 0 &&
                (formData.files.length <= 3
                  ? formData.files.map((file) => file.name).join(', ')
                  : `${formData.files.slice(0, 3).map((file) => file.name).join(', ')},...`)}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Odeslat zprávu
          </button>
          {status && <p className="text-center text-sm mt-4">{status}</p>}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default RequestFormPage;
