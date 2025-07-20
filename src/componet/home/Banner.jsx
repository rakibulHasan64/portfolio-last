import React from "react";
import { BiArrowBack } from "react-icons/bi";

function Banner() {
   return (
      <section className="py-14 px-10">
         <div className="flex flex-col md:flex-row justify-around items-center gap-10">
            {/* Text Content */}
            <div className="md:w-1/2 space-y-6">
               <h4 className="text-gray-500 text-xl uppercase">Hi, I'm a Freelancer</h4>
               <h1 className="text-5xl md:text-6xl font-bold text-[#51C185]">Developer</h1>
               <p className="text-gray-700 leading-relaxed">
                  I'm a software engineer specializing in scalable web apps.<br />
                  Explore my blog, project portfolio, and online resume.
               </p>

               <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                  <button className="flex items-center gap-2 bg-[#51C185] text-white px-6 py-3 text-xl rounded-full hover:bg-[#47ad76] transition">
                     <BiArrowBack className="rotate-180" /> View Portfolio
                  </button>
                  <button className="flex items-center gap-2 border border-[#51C185] text-[#51C185] px-6 py-3 text-xl rounded-full hover:bg-[#51C185] hover:text-white transition">
                     <BiArrowBack className="rotate-180" /> View Resume
                  </button>
               </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
               <img
                  src="https://portfolify-vue.netlify.app/assets/user-BsHA60hl.jpg"
                  alt="Profile"
                  className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
               />
            </div>
         </div>

         <div className="flex flex-col md:flex-row items-center gap-6  mt-8">
            <div className="flex items-center gap-3">
               <h1 className="text-6xl font-bold text-[#51C185] border-r-2 px-3">5</h1>
               <p>Years of<br /> Experience</p>
            </div>

      
            <div className="flex items-center gap-3">
               <h1 className="text-6xl font-bold text-[#51C185] px-3 border-r-2">110</h1>
               <p>Projects<br />Completed</p>
            </div>


            <div className="flex items-center gap-3">
               <h1 className="text-6xl font-bold text-[#51C185] px-3  border-r-2">5</h1>
               <p>Clients<br /> Worldwide</p>
            </div>
         </div>
      </section>
   );
}

export default Banner;
