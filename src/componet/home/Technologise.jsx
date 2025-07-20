import React from 'react';

// Using an inline SVG for the arrow icon makes the component self-contained.
const ArrowRightIcon = (props) => (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
   </svg>
);

function Technologies() {
   // Data updated with more relevant MERN stack tech and placeholder images for a complete look.
   const data = [
      {
         id: "1",
         name: "React",
         skill: "A JavaScript library for building dynamic user interfaces and single-page applications.",
         image: "https://placehold.co/128x128/61DAFB/000000?text=React&font=raleway",
      },
      {
         id: "2",
         name: "Node.js",
         skill: "A JavaScript runtime built on Chrome’s V8 engine for creating fast, scalable server-side applications.",
         image: "https://placehold.co/128x128/339933/ffffff?text=Node&font=raleway",
      },
      {
         id: "3",
         name: "Express.js",
         skill: "A minimal and flexible Node.js web application framework for building robust APIs and web apps.",
         image: "https://placehold.co/128x128/444444/ffffff?text=Express&font=raleway",
      },
      {
         id: "4",
         name: "MongoDB",
         skill: "A NoSQL database that offers high performance, scalability, and flexibility with its document-based model.",
         image: "https://placehold.co/128x128/47A248/ffffff?text=MongoDB&font=raleway",
      },
      {
         id: "5",
         name: "Tailwind CSS",
         skill: "A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML.",
         image: "https://placehold.co/128x128/06B6D4/ffffff?text=Tailwind&font=raleway",
      },
      {
         id: "6",
         name: "JavaScript (ES6+)",
         skill: "The core language of the web, used to build interactive and dynamic client-side applications.",
         image: "https://placehold.co/128x128/F7DF1E/000000?text=JS&font=raleway",
      },
      {
         id: "7",
         name: "Firebase",
         skill: "A Backend-as-a-Service platform for building web and mobile apps with auth, database, and hosting.",
         image: "https://placehold.co/128x128/FFCA28/000000?text=Firebase&font=raleway",
      },
      {
         id: "8",
         name: "GitHub",
         skill: "A code hosting platform for version control and collaboration, essential for modern development workflows.",
         image: "https://placehold.co/128x128/181717/ffffff?text=GitHub&font=raleway",
      },
   ];

   return (
      <div className="bg-gray-50 font-sans">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

            {/* --- Header Section --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 text-center md:text-left">
               <div className="md:w-3/4 mb-8 md:mb-0">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
                     Technologies I Work With
                  </h1>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto md:mx-0">
                     With 1.5 years of hands-on experience, I've built robust software for clients worldwide. Here’s a look at the key technologies in my toolkit. Curious to learn more?
                  </p>
               </div>

               <a href="#resume" className="flex-shrink-0 group">
                  <button className="flex items-center gap-2 bg-white border-2 border-[#51C185] text-[#51C185] px-6 py-3 font-bold text-lg rounded-lg hover:bg-[#51C185] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg">
                     View Resume <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
               </a>
            </div>

            {/* --- Technology Grid --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {data.map(item => (
                  // The key is now correctly placed on the outermost element of the map.
                  <div
                     key={item.id}
                     className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-8 text-center flex flex-col items-center"
                  >
                     <div className="w-32 h-32 mb-6 flex items-center justify-center">
                        {/* The image source is now correctly using item.image */}
                        <img
                           src={item.image}
                           alt={`${item.name} logo`}
                           className="rounded-full object-cover w-full h-full shadow-lg"
                           onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/128x128/ef4444/ffffff?text=Error'; }}
                        />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-800 mb-2">{item.name}</h3>
                     <p className="text-base text-slate-600 leading-relaxed">
                        {item.skill}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Technologies;