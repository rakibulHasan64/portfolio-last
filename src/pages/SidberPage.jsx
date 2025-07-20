import {
   FaFacebookF,
   FaInstagram,
   FaLinkedinIn,
   FaTwitter,
   FaUser,
   FaBriefcase,
   FaListUl,
   FaFileAlt,
   FaBoxOpen,
   FaBlog,
   FaEnvelope,
   FaPaperPlane,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

export default function SidberPage() {
   return (
      <div className="flex w-full">

         <aside className="w-full  min-h-screen p-6">
            
            <div className="flex flex-col items-center gap-3 ">
               <img
                  src="/profile-nEVPe_16.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full bg-[#51C185] border-4 border-[#51C185]"
               />
               <h1 className="text-xl font-semibold text-gray-800">Rakibul Hasan</h1>
               <p className="text-sm text-gray-500">Frontend Developer</p>

               {/* Social Icons */}
               <ul className="flex items-center gap-3 mt-2">
                  <li className="p-2 rounded-full border bg-gray-100 text-[#51C185] hover:text-green-600 cursor-pointer">
                     <FaFacebookF />
                  </li>
                  <li className="p-2 rounded-full border bg-gray-100 text-[#51C185] hover:text-green-600 cursor-pointer">
                     <FaInstagram />
                  </li>
                  <li className="p-2 rounded-full border bg-gray-100 text-[#51C185] hover:text-green-600 cursor-pointer">
                     <FaTwitter />
                  </li>
                  <li className="p-2 rounded-full border bg-gray-100 text-[#51C185] hover:text-green-600 cursor-pointer">
                     <FaLinkedinIn />
                  </li>
               </ul>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-[#51C185]"></div>

            {/* Navigation */}
            <nav className="space-y-4 text-xl">
               <NavItem icon={<FaUser />} text="About Us" to="/" />
               <NavItem icon={<FaBriefcase />} text="Portfolio" to="/protfolio" badge="16" />
               {/* <NavItem icon={<FaListUl />} text="Services & Pricing" to="/services" /> */}
               <NavItem icon={<FaFileAlt />} text="Resume" to="/resume" />
            
               <NavItem icon={<FaBlog />} text="Blog" to="/blog" />
               <NavItem icon={<FaEnvelope />} text="Contact" to="/contact" />
            </nav>

            {/* Hire Me Button */}
            <div className="mt-8 flex justify-center">
               <button className="flex items-center gap-2 text-xl bg-[#51C185] text-white px-6 py-2 rounded-full hover:bg-[#51C185] transition">
                  <FaPaperPlane /> Hire Me
               </button>
            </div>
         </aside>

      </div>
   );
}

function NavItem({ icon, text, to, badge }) {
   return (
      <NavLink
         to={to}
         className={({ isActive }) =>
            `flex items-center justify-between  px-4 py-2 rounded-md transition-all ${isActive
               ? "bg-[#51C185] text-white"
               : "hover:bg-[#51C185] hover:text-white"
            }`
         }
      >
         <div className="flex items-center gap-3">
            <span className="text-lg">{icon}</span>
            <span className="text-xl">{text}</span>
         </div>
         {badge && (
            <span className="text-sm font-bold bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
               {badge}
            </span>
         )}
      </NavLink>
   );
}
