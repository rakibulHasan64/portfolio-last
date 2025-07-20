

import React from 'react';


const blogPosts = [
   {
      id: 1,
      category: 'Node.js',
      title: 'Building a Scalable RESTful API with Express.js',
      excerpt: 'Dive deep into creating robust and scalable APIs using Node.js and Express. Learn about middleware, routing, and error handling.',
      author: 'Rakibul Hasan',
      date: 'July 15, 2025',
      imageUrl: 'https://placehold.co/600x400/1E293B/94A3B8?text=API',
      authorImageUrl: 'https://placehold.co/100x100/475569/E2E8F0?text=RH',
   },
   {
      id: 2,
      category: 'React',
      title: 'Mastering State Management with React Hooks',
      excerpt: 'Unlock the full potential of React\'s built-in hooks like useState, useEffect, and useReducer for clean and efficient state management.',
      author: 'Rakibul Hasan',
      date: 'July 10, 2025',
      imageUrl: 'https://placehold.co/600x400/1E293B/94A3B8?text=React',
      authorImageUrl: 'https://placehold.co/100x100/475569/E2E8F0?text=RH',
   },
   {
      id: 3,
      category: 'Tailwind CSS',
      title: 'The Power of Utility-First CSS with Tailwind',
      excerpt: 'Discover how Tailwind CSS can speed up your development workflow and help you build beautiful, custom designs without writing custom CSS.',
      author: 'Rakibul Hasan',
      date: 'July 5, 2025',
      imageUrl: 'https://placehold.co/600x400/1E293B/94A3B8?text=Styling',
      authorImageUrl: 'https://placehold.co/100x100/475569/E2E8F0?text=RH',
   },
   {
      id: 4,
      category: 'MongoDB',
      title: 'Advanced Data Modeling with Mongoose',
      excerpt: 'Learn advanced techniques for structuring your data in MongoDB using Mongoose schemas, population, and validation.',
      author: 'Rakibul Hasan',
      date: 'June 28, 2025',
      imageUrl: 'https://placehold.co/600x400/1E293B/94A3B8?text=Database',
      authorImageUrl: 'https://placehold.co/100x100/475569/E2E8F0?text=RH',
   },
   {
      id: 5,
      category: 'Authentication',
      title: 'Secure Your MERN App with JWT and Firebase',
      excerpt: 'A comprehensive guide to implementing secure user authentication and authorization in your full-stack application.',
      author: 'Rakibul Hasan',
      date: 'June 21, 2025',
      imageUrl: 'https://placehold.co/600x400/1E293B/94A3B8?text=Security',
      authorImageUrl: 'https://placehold.co/100x100/475569/E2E8F0?text=RH',
   },
   {
      id: 6,
      category: 'Deployment',
      title: 'Deploying a Full-Stack App to Vercel',
      excerpt: 'From development to production: a step-by-step tutorial on deploying your MERN stack application to Vercel.',
      author: 'Rakibul Hasan',
      date: 'June 14, 2025',
      imageUrl: 'https://placehold.co/600x400/1E293B/94A3B8?text=Deploy',
      authorImageUrl: 'https://placehold.co/100x100/475569/E2E8F0?text=RH',
   },
];


const ArrowRightIcon = (props) => (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
   </svg>
);


// Main Blog Component
function Blog() {
   return (
      <div className="font-sans bg-slate-50 text-gray-800 min-h-screen">
         <div className="container mx-auto px-4 py-12 md:py-20">

            {/* Header Section */}
            <header className="text-center mb-12 md:mb-16">
               <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  The Developer's Chronicle
               </h1>
               <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                  Insights, tutorials, and thoughts on modern web development from the MERN stack and beyond.
               </p>
            </header>

            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {blogPosts.map((post) => (
                  <div
                     key={post.id}
                     className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col group"
                  >
                     <div className="relative">
                        <img
                           src={post.imageUrl}
                           alt={`Blog post titled: ${post.title}`}
                           className="w-full h-56 object-cover"
                           onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/ef4444/ffffff?text=Image+Error'; }}
                        />
                        <span className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                           {post.category}
                        </span>
                     </div>

                     <div className="p-6 flex-grow flex flex-col">
                        <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                           {post.title}
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-4">
                           {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                           <div className="flex items-center">
                              <img
                                 src={post.authorImageUrl}
                                 alt={`Author: ${post.author}`}
                                 className="w-10 h-10 rounded-full mr-3 object-cover"
                              />
                              <div>
                                 <p className="font-semibold text-slate-700">{post.author}</p>
                                 <p className="text-xs text-slate-500">{post.date}</p>
                              </div>
                           </div>
                           <a href="#" className="text-sky-600 hover:text-sky-700 transition-colors duration-300">
                              <ArrowRightIcon className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Blog;