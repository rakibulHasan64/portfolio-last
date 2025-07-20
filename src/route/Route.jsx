// routes.js
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import HomeAllLyout from '../pages/HomeAllLyout.jsx';
import ProtFolio from '../componet/about/ProtFolio.jsx';
import Contact from '../componet/contact/Contact.jsx';
import Resume from '../componet/resume/Resume.jsx';
import Blog from '../componet/blog/Blog.jsx';

export const route = createBrowserRouter([
   {
      path: '/',
      element: <App />, 
      children: [

         {
            path: "/",
            index: true,
            element: <HomeAllLyout />
         },

         {
            path: "/protfolio",
            element: <ProtFolio />
         },
         {
            path: "/contact",
            element: <Contact />

         },
         {
            path: "/resume",
            element: <Resume />
         },
         {
            path: "/blog",
            element: <Blog />
         }
         
      ],
   },
]);
