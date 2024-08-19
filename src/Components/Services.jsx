import React, { useState } from 'react';
import { useContext } from "react";
import { Authcontext } from "../Context/ContextProvider";

const ServiceItem = ({ imgSrc, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="border border-gray-400 rounded-lg px-8 py-10 hover:shadow-[4px_4px_10px_#000] cursor-pointer  hover:-translate-y-1 duration-500">
      <img src={imgSrc} alt={title} className="w-20 mb-4 bg-slate-300 px-2 py-2 rounded-lg"/>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>
        {isExpanded ? description : `${description.substring(0, 100)}...`}
        <span 
          className="text-blue-500 cursor-pointer ml-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
      </p>
    </div>
  );
};

const Services = () => {
  let{mode} = useContext(Authcontext);
  return (
    <div id="services" className={`w-full px-[12%] py-50 lg:py-10 scroll-m-20 font-Outfit ${mode}`}>
        <h4 className="text-center mb-2 text-2xl font-OVo">What I Offer</h4>
        <h2 className="text-center text-5xl font-OVo">My Services</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
            Expert in full-stack development with the MERN stack, including frontend with React.js and Next.js, and backend with Node.js and Express.js. Proficient in building dynamic web applications, RESTful APIs, and optimizing performance.
        </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
        <ServiceItem
          imgSrc="/images/frontend.png"
          title="Frontend Development"
          description="Experienced in building dynamic web applications using React.js, Next.js, and core web technologies (HTML, CSS, JavaScript). Skilled in creating reusable UI components and optimizing performance with server-side rendering and static site generation. Strong understanding of responsive design and user experience best practices."
        />
        <ServiceItem
          imgSrc="/images/backend.png"
          title="Backend Development"
          description="Experienced in backend development using Node.js, Express.js, and MongoDB. Proficient in building RESTful APIs, managing databases, and ensuring efficient data flow and security. Strong understanding of server-side logic, authentication, and performance optimization."
        />
        <ServiceItem
          imgSrc="/images/fullstack.png"
          title="MERN Stack Development"
          description="Experienced in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Proficient in building dynamic web applications, creating RESTful APIs, and managing databases. Strong understanding of frontend-backend integration, state management, and performance optimization."
        />
      </div>
    </div>
  );
}

export default Services;
