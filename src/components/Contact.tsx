"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);
    // You can add form submission logic here (e.g., send the data to an API endpoint)
  };

  return (
    <div className="min-h-screen flex items-center justify-center "style={{ backgroundImage: "url(/bg.png)"}}>
      <div className=" p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-[#7F5B05]">Contact Us</h1>
        <h2 className="text-[#946F13]">if you need some help or any
        other questions, feel free to ask.</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
             
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter your name...'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder='Enter your phone number...'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            </label>
            <textarea
              id="message"
              name="message"
              placeholder='Type your message here...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-black"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-190px text-white font-medium p-2 rounded-md hover:bg-[#E7F53C] bg-[#878F23]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
