import { FaPaperPlane } from "react-icons/fa";

function ProtFolio() {
   return (
      <section className="py-16 px-4 sm:px-6 md:px-10">
         <h1 className="text-3xl sm:text-4xl font-bold text-center">A collection of my best projects</h1>
         <p className="text-base sm:text-lg md:text-xl text-center mt-6 text-gray-700">
            With many years in web development, I acquired extensive experience working on projects across multiple<br className="hidden sm:block" />
            industries and technologies. Let me show you my best creations.
         </p>

         <div className="mt-8 flex justify-center">
            <button className="flex items-center gap-2 text-lg sm:text-xl bg-[#51C185] text-white px-6 py-2 rounded-full hover:bg-[#47ad76] transition">
               <FaPaperPlane /> Hire Me
            </button>
         </div>

         {/* Projects Grid */}
         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card 1 */}
            <ProjectCard
               title="Salesforce CRM - Invoice Management"
               image="https://i.ibb.co/q3LWBs8F/ice.png"
               tags={["React Js", "Node Js", "Web Development", "Tailwind CSS", "MongoDB", "Firebase", "Express"]}
            />

            {/* Project Card 2 */}
            <ProjectCard
               title="MERN Project"
               image="/screencapture-melodious-rugelach-754db3-netlify-app-2025-07-20-10_43_40.png"
               tags={["React Js", "Node Js", "Web Development", "Tailwind CSS", "MongoDB", "Firebase", "Express"]}
            />
         </div>
      </section>
   );
}

// Reusable Card Component
const ProjectCard = ({ title, image, tags }) => (
   <div className="group  rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image */}
      <div
         className="relative w-full h-[250px] bg-top bg-cover transition-[background-position] duration-[3000ms] ease-in-out group-hover:bg-bottom cursor-pointer"
         style={{ backgroundImage: `url(${image})` }}
      >
         <div className="absolute inset-0 flex items-end justify-end p-4 z-10">
            <button className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-white/80 hover:bg-white text-gray-700 rounded-full p-3 shadow backdrop-blur">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10" />
               </svg>
            </button>
         </div>
      </div>

      {/* Text Content */}
      <div className="px-5 py-6">
         <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
               <span key={index} className="px-3 py-1 text-sm bg-gray-100 rounded-full">{tag}</span>
            ))}
         </div>
         <h2 className="text-lg md:text-xl font-bold text-gray-900">{title}</h2>
      </div>
   </div>
);

export default ProtFolio;
