"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';

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
    <div className="p-10" id="contact" style={{ backgroundImage: "url(/bg.png)" }}>
      <div className="grid sm:grid-cols-2 items-center text-center gap-16 p-8 mx-auto max-w-5xl rounded-lg text-[#333] font-[sans-serif] bg-gradient-to-br from-[#b68e42] via-[#ffffff37] to-transparent bg-opacity-100 shadow-lg border border-black">
        <div className="flex flex-col justify-center">
          <h1 className="text-[3rem] text-[#7F5B05] font-extrabold text-center sm:text-left">CONTACT US</h1>
          <h2 className="text-[#946F13] text-left max-w-[400px] ml-5">if you need some help or any
          other questions, feel free to ask.</h2>
          <form onSubmit={handleSubmit} className="space-y-4  rounded-md p-6">
            <input
              type='text'
              name="name"
              placeholder='Enter your name...'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md py-2.5 px-4 bg-white border text-sm outline-[#007bff]"
              required
            />
            <input
              type='tel'
              name='phoneNumber'
              placeholder='Enter your phone number...'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full rounded-md py-2.5 px-4 bg-white border text-sm outline-[#007bff]"
              required
            />
            <textarea
              placeholder='Type your message here...'
              rows="6"
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md px-4 border bg-white text-sm pt-2.5 outline-[#007bff]"
              required
            />
            <button
              type='submit'
              className="text-white bg-[#8f6d23] hover:bg-black font-semibold rounded-md text-sm px-4 py-2.5 w-full sm:w-auto max-w-[190px] mx-auto shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <h1 className="text-3xl text-[#7F5B05] font-extrabold">COME VISIT US</h1>
          <p className="text-sm text-[#946F13] font-extrabold mt-3">
            Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
          </p>
          <div className="mt-12">
            <h2 className="text-lg text-[#7F5B05] font-extrabold">COME VISIT US</h2>
            <p className="text-sm text-[#946F13]  font-extrabold mt-3">
              10700 Academy Rd NE, Albuquerque, New York, UNITED STATES (505) 299-5051
            </p>
            <p className="text-sm text-[#946F13]  font-extrabold mt-3">
              1481 Front, Windsor Ontario, CANADA (519) 734-6500
            </p>
            <h2 className="text-lg text-[#7F5B05] font-extrabold mt-12">FOLLOW OUR SOCIALS</h2>
            <div className="flex items-center justify-center mt-3">
              <a href="#" className="text-[#946F13] hover:text-[#878F23] mx-2">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="text-[#946F13] hover:text-[#878F23] mx-2">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-[#946F13] hover:text-[#878F23] mx-2">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
