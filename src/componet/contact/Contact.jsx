

import React, { useState } from 'react';
const MailIcon = (props) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
   >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
   </svg>
);

const PhoneIcon = (props) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
   >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
   </svg>
);

const MapPinIcon = (props) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
   >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
   </svg>
);


function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
   });

   const [status, setStatus] = useState('');

   const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [id]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log('Form submitted:', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000); 
   };

   return (
      <div className="font-sans bg-gray-50/90 min-h-screen flex items-center justify-center p-4">
         <div className="w-full max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-300/40 overflow-hidden">
               <div className="grid grid-cols-1 md:grid-cols-2">

                  {/* Contact Information Section */}
                  <div className="p-8 md:p-12 bg-[#51C185] text-white">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                     <p className="text-gray-100 mb-8">
                        We'd love to hear from you. Fill out the form, or use our contact details below.
                     </p>
                     <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                           <MapPinIcon className="h-6 w-6 mt-1 flex-shrink-0" />
                           <div>
                              <h3 className="font-semibold">Our Office</h3>
                              <p className="text-gray-200">123 Creative Lane, Innovation City, 54321</p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-4">
                           <MailIcon className="h-6 w-6 mt-1 flex-shrink-0" />
                           <div>
                              <h3 className="font-semibold">Email Us</h3>
                              <p className="text-gray-200">contact@yourcompany.com</p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-4">
                           <PhoneIcon className="h-6 w-6 mt-1 flex-shrink-0" />
                           <div>
                              <h3 className="font-semibold">Call Us</h3>
                              <p className="text-gray-200">+1 (555) 123-4567</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Contact Form Section */}
                  <div className="p-8 md:p-12">
                     <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Send a Message</h2>
                     <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                           <label htmlFor="name" className="font-medium text-gray-700 block mb-2">Full Name</label>
                           <input
                              type="text"
                              id="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#51C185] transition duration-200"
                              placeholder="John Doe"
                              required
                           />
                        </div>
                        <div>
                           <label htmlFor="email" className="font-medium text-gray-700 block mb-2">Email Address</label>
                           <input
                              type="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#51C185] transition duration-200"
                              placeholder="you@example.com"
                              required
                           />
                        </div>
                        <div>
                           <label htmlFor="subject" className="font-medium text-gray-700 block mb-2">Subject</label>
                           <input
                              type="text"
                              id="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#51C185] transition duration-200"
                              placeholder="Question about your services"
                              required
                           />
                        </div>
                        <div>
                           <label htmlFor="message" className="font-medium text-gray-700 block mb-2">Message</label>
                           <textarea
                              id="message"
                              rows="5"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#51C185] transition duration-200"
                              placeholder="Your message here..."
                              required
                           ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                           {status && <p className="text-sm text-green-600">{status}</p>}
                           <button
                              type="submit"
                              className="ml-auto px-6 py-3 bg-[#51C185] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#51C185] transition-transform transform hover:scale-105"
                           >
                              Send Message
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Contact;