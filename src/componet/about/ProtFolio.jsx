import { FaPaperPlane } from "react-icons/fa";


function ProtFolio() {
   return (
      <>
         <div className="py-16 px-10">

            <h1 className="text-4xl font-bold text-center"> A collection of my best projects</h1>
            <p className="text-xl text-center mt-7">With many years in web development, I acquired extensive experience working on projects across multiple<br /> industries and technologies. Let me show you my best creations.</p>


            <div className="mt-8 flex justify-center">
               <button className="flex items-center gap-2 text-xl bg-[#51C185] text-white px-6 py-2 rounded-full hover:bg-[#51C185] transition">
                  <FaPaperPlane /> Hire Me
               </button>
            </div>



            <div className="mt-16">
               <div className="mt-16 grid sm:grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Card 1 */}
                  <div className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                     {/* Background image as a div */}
                     <div
                        className="relative w-full h-[300px] bg-top bg-cover transition-[background-position] duration-[3000ms] ease-in-out group-hover:bg-bottom cursor-pointer"
                        style={{
                           backgroundImage: "url(https://i.ibb.co/q3LWBs8F/ice.png)",
                        }}
                     >
                        {/* Button over image */}
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

                     {/* Content */}
                     <div className="px-5 py-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">React Js</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Node Js</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Web Development</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Tilwind css</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Mongodb</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Firevase</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Expreess</span>
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900">
                           Salesforce CRM - Invoice Management
                        </h2>
                     </div>
                  </div>

                  {/* Card 2 */}
                  <div className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                     {/* Background image as a div */}
                     <div
                        className="relative w-full h-[300px] bg-top bg-cover transition-[background-position] duration-[3000ms] ease-in-out group-hover:bg-bottom cursor-pointer"
                        style={{
                           backgroundImage: "url('/screencapture-melodious-rugelach-754db3-netlify-app-2025-07-20-10_43_40.png')",
                        }}
                     >
                        {/* Button over image */}
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

                     {/* Content */}
                     <div className="px-5 py-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">React Js</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Node Js</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Web Development</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Tilwind css</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Mongodb</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Firevase</span>
                           <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Expreess</span>
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900">
                           Mern poject
                        </h2>
                     </div>
                  </div>



               </div>

               

            </div>

         </div>

      </>
   );
}

export default ProtFolio;