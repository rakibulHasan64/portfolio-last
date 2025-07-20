import { BiArrowBack } from "react-icons/bi";


function Technologise() {

   const data = [
      {
         id: "1",
         name: "HTML5",
         skill: "The standard markup language for creating web pages. Semantic and SEO-friendly structure.",
         image: "/html.png",
      },
      {
         id: "2",
         name: "CSS3",
         skill: "Styles your website with layouts, animations, and responsive design. Includes Flexbox and Grid.",
         image: "/css.png",
      },
      {
         id: "3",
         name: "JavaScript",
         skill: "Client-side scripting language used to build interactive web applications. Supports ES6+.",
         image: "/js.png",
      },
      {
         id: "4",
         name: "Firebase",
         skill: "Backend-as-a-Service with authentication, Firestore database, and hosting. Great for MVPs.",
         image: "/firebase.png",
      },
      {
         id: "5",
         name: "MongoDB",
         skill: "NoSQL database designed for scalability and flexibility with JSON-like documents.",
         image: "/mongodb.png",
      },
      {
         id: "6",
         name: "GitHub",
         skill: "Code hosting platform for version control and collaboration. Built on top of Git.",
         image: "/github.png",
      },
      {
         id: "7",
         name: "Node.js",
         skill: "JavaScript runtime built on Chrome’s V8 engine. Enables server-side JS development.",
         image: "/node.png",
      },
      {
         id: "8",
         name: "Responsive",
         skill: "Popular CSS framework for responsive and mobile-first websites. Comes with prebuilt components.",
         image: "/bootstrap.png",
      },
   ];

   return (
      <>
         
         <div className="py-14 px-10 mt-14">

            <div className="flex justify-between items-center">
               <div className="">
                  <h1 className="text-7xl font-bold ">What I do</h1>
                  <p className="text-lg mt-4">I have more than 10 years experience building software for clients all over the world. Below is a <br />quick overview of my main technical skill sets and technologies I use. Want to find out more <br/> about my experience? Check out my  online resume and project portfolio .</p>
               </div>

               <button className="flex items-center gap-2 border border-[#51C185] text-[#51C185] px-6 py-3 text-xl rounded-full hover:bg-[#51C185] hover:text-white transition">
                  <BiArrowBack className="rotate-180" /> View Resume
               </button>
            </div>

            <div className="grid grid-cols-4 mt-16 gap-6">

               {

                  data.map(item => (
                     <>
                        <div key={item.id} className="border py-5 px-4 shadow-sm hover:shadow-md transition bg-white">
                           <div className="p-5">
                              <img src="/14.png" alt="Vanilla JavaScript" className="  mb-4" />

                              <h1 className="text-xl font-bold text-gray-800">{item.name}</h1>

                              <p className="text-base text-gray-600 mt-2">
                                 {item.skill}
                              </p>
                           </div>
                        </div>
                     </>
                  ))

               }



            </div>

         </div>
         
      </>
   );
}

export default Technologise;