import React, { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <div className="pt-32 bg-gray-50 py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#a43f97] to-[#f36f28] bg-clip-text text-transparent mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          We'd love to hear from you. Please fill out the form and we’ll get back to you shortly.
        </p>

        {/* Flex container for two equal-height columns */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch min-h-[600px]">
          {/* Contact Form */}
          <div className="flex-1 flex flex-col bg-white p-10 rounded-xl shadow-lg h-full">
            <form onSubmit={handleSubmit} className="space-y-8 flex-grow">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name*</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject*</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message*</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Info + Map */}
          <div className="flex-1 flex flex-col justify-between gap-6 h-full">
            {/* Info Card */}
            <div className="bg-white p-8 rounded-xl  shadow-lg flex-grow">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#a43f97] to-[#f36f28] bg-clip-text text-transparent mb-4">Contact Information</h2>
              <div className='space-y-4'>
                <div>
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-[#a43f97] to-[#f36f28] bg-clip-text text-transparent">Our Office</h2>
                  <p className="text-gray-600">
                    Corpaia<br />
                    Near Zilmoney,<br />
                    Manjeri, Kerala, India
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium bg-gradient-to-r from-[#a43f97] to-[#f36f28] bg-clip-text text-transparent">Phone</h3>
                  <p className="text-gray-600">+91 80-75342505</p>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-medium bg-gradient-to-r from-[#a43f97] to-[#f36f28] bg-clip-text text-transparent">Email</h3>
                  <p className="text-gray-600">corpaiagents@gmail.com</p>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-medium bg-gradient-to-r from-[#a43f97] to-[#f36f28] bg-clip-text text-transparent">Working Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 10 AM – 6 PM</p>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Us</h2>
              <iframe
                src="https://www.google.com/maps?q=Corpaia+Manjeri&output=embed"
                width="100%"
                height="300"
                className="rounded-lg border-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
