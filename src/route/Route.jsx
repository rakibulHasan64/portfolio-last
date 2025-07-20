// routes.js
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import HomeAllLyout from '../pages/HomeAllLyout.jsx';
import ProtFolio from '../componet/about/ProtFolio.jsx';

export const route = createBrowserRouter([
   {
      path: '/',
      element: <App />, 
      children: [

         {
            index: true,
            element: <HomeAllLyout />
         },

         {
            path: "/protfolio",
            element: <ProtFolio />
         }
         
      ],
   },
]);
