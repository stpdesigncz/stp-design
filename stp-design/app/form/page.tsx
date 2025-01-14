'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

  const formatFileName = (fileName: string) => {
    return fileName.replace(/\.jfif$/i, '.jpg');
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto py-40 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Poptávkový formulář</h1>
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
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Město"
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
              placeholder="Zpráva"
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
                  ? formData.files.map((file) => formatFileName(file.name)).join(', ')
                  : `${formData.files.slice(0, 3).map((file) => formatFileName(file.name)).join(', ')},...`)}
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
