'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Zpráva byla úspěšně odeslána!');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      } else {
        setStatusMessage('Došlo k chybě při odesílání zprávy.');
      }
    } catch (error) {
      console.error(error);
      setStatusMessage('Došlo k chybě při odesílání zprávy.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Navbar /> {/* Add Navbar component */}

      {/* Section with owner contacts and map */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
            {/* Owner Contacts */}
            <div className="text-center lg:w-1/2">
            <p className="text-gray-600 mb-8 text-center font-semibold">
            Pro jakékoli dotazy nás neváhejte kontaktovat
             </p>
              <div className="mb-8">
                <Image 
                  src="/owner1.png" // Replace with correct image path
                  alt="Majitel 1"
                  className="w-32 h-32 rounded-full mx-auto"
                  width={200}
                  height={200}
                />
                <p className="mt-4 font-semibold text-gray-800">Pavla Horutová</p>
                <p className="text-gray-600">Email: pavla@example.com</p>
                <p className="text-gray-600">Telefon: +420 123 456 789</p>
              </div>
              <div>
                <Image 
                  src="/owner2.png" // Replace with correct image path
                  alt="Majitel 2"
                  className="w-32 h-32 rounded-full mx-auto"
                  width={200}
                  height={200}
                />
                <p className="mt-4 font-semibold text-gray-800">Zuzana Horutová</p>
                <p className="text-gray-600">Email: zuzanahorutova@gmail.com</p>
                <p className="text-gray-600">Telefon: +420 792 323 127</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="lg:w-1/2 px-4 lg:px-8 flex justify-center">
              <div
                className="shadow-lg rounded-lg overflow-hidden"
                style={{
                  width: '100%',
                  maxWidth: '500px', // Maximální šířka mapy
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.494206637786!2d18.171941076256105!3d49.84419527939544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713eec4ad34b3d7%3A0x6d4505d5674b85ff!2sN%C3%A1m%C4%9Bst%C3%AD%20V%C3%A1clava%20Vacka%2013%2C%20708%2000%20Ostrava-Poruba!5e0!3m2!1sen!2scz!4v1672509562450!5m2!1sen!2scz"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Google Map - Náměstí Václava Vacka 13"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto py-8 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl mb-6 text-center">Kontaktujte nás</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Jméno a Příjmení"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="E-mail"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Telefonní číslo"
                  />
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Vaše zpráva"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                {isSubmitting ? 'Odesílání...' : 'Odeslat zprávu'}
              </button>
            </form>

            {statusMessage && (
              <div className="mt-6 text-center text-sm">
                <p>{statusMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default Contact;
