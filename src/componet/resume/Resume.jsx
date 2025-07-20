

import React from 'react';

const PhoneIcon = (props) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = (props) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const MapPinIcon = (props) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const GlobeIcon = (props) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const BriefcaseIcon = (props) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const UserIcon = (props) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

// Main Resume Component
function Resume() {
   const skills = [
      'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Node.js',
      'Express.js', 'MongoDB', 'Mongoose', 'Firebase', 'JWT', 'React.js'
   ];

   return (
      <div className="font-sans antialiased text-gray-800 bg-gray-100 min-h-screen p-4 md:p-8">
         <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">

               {/* Left Sidebar */}
               <aside className="md:col-span-1 bg-slate-800 text-white p-8">
                  <div className="text-center md:text-left">
                     <h1 className="text-3xl font-bold text-sky-400">RAKIBUL HASAN</h1>
                     <h2 className="text-lg font-semibold text-gray-300 mt-1">MERN STACK DEVELOPER</h2>
                  </div>

                  <section className="mt-10">
                     <h3 className="text-xl font-bold text-sky-400 border-b-2 border-sky-400 pb-2">CONTACT</h3>
                     <ul className="mt-4 space-y-4">
                        <li className="flex items-center">
                           <PhoneIcon className="h-5 w-5 text-sky-400 mr-3" />
                           <span>01827059564</span>
                        </li>
                        <li className="flex items-center">
                           <MailIcon className="h-5 w-5 text-sky-400 mr-3" />
                           <span>m81162664@gmail.com</span>
                        </li>
                        <li className="flex items-center">
                           <MapPinIcon className="h-5 w-5 text-sky-400 mr-3" />
                           <span>Dhaka</span>
                        </li>
                        <li className="flex items-center">
                           <GlobeIcon className="h-5 w-5 text-sky-400 mr-3" />
                           {/* Website from PDF was malformed, using a placeholder */}
                           <span>www.rakibul.dev</span>
                        </li>
                     </ul>
                  </section>

                  <section className="mt-10">
                     <h3 className="text-xl font-bold text-sky-400 border-b-2 border-sky-400 pb-2">SKILLS</h3>
                     <div className="mt-4 flex flex-wrap gap-2">
                        {skills.map(skill => (
                           <span key={skill} className="bg-slate-700 text-sky-300 text-sm font-medium px-3 py-1 rounded-full">
                              {skill}
                           </span>
                        ))}
                     </div>
                  </section>

                  <section className="mt-10">
                     <h3 className="text-xl font-bold text-sky-400 border-b-2 border-sky-400 pb-2">EDUCATION</h3>
                     <div className="mt-4">
                        <h4 className="font-bold text-gray-100">SCIENCE</h4>
                        <p className="text-gray-400">Wardiere University</p>
                        <p className="text-gray-400 text-sm">2022 - 2025</p>
                     </div>
                  </section>
               </aside>

               {/* Main Content */}
               <main className="md:col-span-2 p-8">
                  <section>
                     <h3 className="flex items-center text-2xl font-bold text-slate-700 mb-4">
                        <UserIcon className="h-7 w-7 mr-3" />
                        PROFILE
                     </h3>
                     <p className="text-gray-600 leading-relaxed">
                        A passionate and skilled MERN Stack Developer proficient in building fully-featured web applications using modern web technologies. Creates user-friendly and performance-optimized web applications using MongoDB, Express.js, React.js, and Node.js.
                     </p>
                  </section>

                  <section className="mt-10">
                     <h3 className="flex items-center text-2xl font-bold text-slate-700 mb-4">
                        <BriefcaseIcon className="h-7 w-7 mr-3" />
                        WORK EXPERIENCE
                     </h3>
                     <div className="mt-4">
                        <div className="flex justify-between items-baseline">
                           <h4 className="text-lg font-bold text-sky-600">Frontend Application & MERN Stack Specialist</h4>
                           {/* The date from the PDF is '2030-PRESENT', which seems to be a typo. Using as is. */}
                           <p className="text-sm font-medium text-gray-500">2023 - Present</p>
                        </div>
                        <p className="text-md font-semibold text-gray-600 mb-4">1.5 years of hands-on experience</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                           <li>Built dynamic, scalable, and high-performance web applications using the MERN stack.</li>
                           <li>Specialized in designing clean and modular frontend interfaces with React and Tailwind CSS.</li>
                           <li>Developed robust backend APIs using Node.js and Express.js.</li>
                           <li>Created RESTful APIs and managed data with MongoDB and Mongoose.</li>
                           <li>Implemented Authentication and Authorization using JWT and Firebase.</li>
                           <li>Deployed full-stack applications to platforms like Vercel and Netlify.</li>
                           <li>Strong problem-solving skills, with a deep understanding of asynchronous programming and writing maintainable, secure, and production-ready code.</li>
                        </ul>
                     </div>
                  </section>

                  <section className="mt-10">
                     <h3 className="text-2xl font-bold text-slate-700 mb-4">REFERENCE</h3>
                     <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <h4 className="font-bold text-sky-600">Estelle Darcy</h4>
                        <p className="text-gray-600">CTO, Wardiere Inc.</p>
                        {/* Contact info for reference in PDF was same as applicant, using placeholders. */}
                        <p className="text-gray-500 text-sm mt-2">Contact information available upon request.</p>
                     </div>
                  </section>

               </main>
            </div>
         </div>
      </div>
   );
}

export default Resume;