import React from 'react';
import { useContext } from "react";
import { Authcontext } from "../Context/ContextProvider";

const Education = () => {
    let {mode} = useContext(Authcontext);
  return (
    <div id="education" className={`w-full px-[12%] py-10 scroll-m-20 font-Outfit ${mode}`}>
        <h2 className="text-center text-5xl font-OVo">Education</h2>
        <div className="flex w-full flex-wrap-reverse lg:flex-row items-center gap-20 my-20">
            <div className="max-w-2xl mx-auto p-3 text-white">
                <div className="relative before:absolute before:content-[''] before:w-1 before:h-full before:bg-green-500 before:left-8 before:top-0">
                    
                    <div className={`mb-8 ml-12 relative hover:-translate-y-2 duration-500 ${mode}`}>
                        <div className="absolute left-[-21.8px]  bg-green-500 w-4 h-4 rounded-full"></div>
                        <h3 className="relative -top-1.5 text-xl font-bold text-green-500">Bachelor of Technology, Electronics and Communications Engineering</h3>
                        <span className="block text-gray-500">2021 - 2024</span>
                        <p className="font-extrabold">Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam</p>
                        <p className="italic ">I have completed my BTech Degree</p>
                        <p className="italic ">Grade: 8.5 CGPA</p>
                    </div>

                    <div className={`mb-8 ml-12 relative hover:-translate-y-2 duration-500 ${mode}`}>
                        <div className="absolute left-[-21.8px] top-1 bg-green-500 w-4 h-4 rounded-full"></div>
                        <h3 className="relative -top-1 text-xl font-bold text-green-500">Diploma , Electronics and Communications Engineering</h3>
                        <span className="block text-gray-500">2018 - 2021</span>
                        <p className=" font-extrabold">AANM & VVRSR Polytechnic, Gudlavalleru</p>
                        <p className="italic ">I have completed my Diploma from SBTET board with overall 89.9%.</p>
                        <p className="italic ">Percentage: 89.9%</p>
                    </div>

                    <div className={`mb-8 ml-12 relative hover:-translate-y-2 duration-500 ${mode}`}>
                        <div className="absolute left-[-21.8px] top-1 bg-green-500 w-4 h-4 rounded-full"></div>
                        <h3 className="relative -top-1 text-xl font-bold text-green-500">Secondary Education (10th), SSC</h3>
                        <span className="block text-gray-500">2017 - 2018</span>
                        <p className="font-extrabold">Zilla Parishad High Schools, Agiripalli - 521211</p>
                        <p className="italic ">I have completed my 10th from SCC board.</p>
                        <p className="italic ">Grade: 9.2 GPA</p>
                    </div>
                </div>
            </div>

            <div className="max-w-max mx-auto relative">
                <img
                    src="./images/education.png"
                    alt="Profile picture of P Naveen Kumar"
                    className="w-64 sm:w-80 rounded-3xl max-w-none"
                />
            </div>

        </div>
</div>
    
  );
};

export default Education;
