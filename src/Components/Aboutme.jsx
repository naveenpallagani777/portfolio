const AboutMe = () => {

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-m-20 font-Outfit">
            <h4 className="text-center mb-2 text-2xl font-OVo">Introduction</h4>
            <h2 className="text-center text-5xl font-OVo">About Me</h2>
            
            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">

                {/* profile image */}
                <div className="max-w-max mx-auto relative">
                    <img
                        src="./images/profile_full.jpeg"
                        alt="Profile picture of P Naveen Kumar"
                        className="w-64 sm:w-80 rounded-3xl max-w-none"
                    />
                </div>
                
                {/* Languages projects and Certification */}
                <div className="flex flex-col gap-5">
                <p className="max-w-1xl text-center m-auto">
                        Hi, I'm P Naveen Kumar, an aspiring web developer with a passion for creating dynamic and responsive websites. I recently graduated with a degree in ECE and have completed several online courses in web development and design.
                </p>
                    <ul className="grid gap-6 max-w-2xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <li className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_10px_#000]">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/images/coding.png"
                                        alt="Coding icon"
                                        className="w-10 bg-slate-300 px-1 py-1 rounded-lg"
                                    />
                                    <h3 className="my-4 font-semibold text-gray-700">Languages</h3>
                                </div>
                                
                                <p className="text-gray-600">
                                    Java, Python, JavaScript, MERN Stack, React JS, Next JS, HTML, CSS, Tailwind CSS.
                                </p>
                            </li>
                            <li className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_10px_#000]">
                                
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/images/project.png"
                                        alt="Projects icon"
                                        className="w-10 bg-slate-300 px-1 py-1 rounded-lg"
                                    />
                                    <h3 className="my-4 font-semibold text-gray-700">Projects</h3>
                                </div>
                                
                                
                                <p className="text-gray-600">
                                    Two projects using MERN Stack and one Mini Search System using Information Retrieval.
                                </p>
                            </li>
                        </div>
                        <div className="grid grid-cols-1">
                            <li className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_10px_#000]">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/images/certification.png"
                                        alt="Projects icon"
                                        className="w-10 bg-slate-300 px-1 py-1 rounded-lg"
                                    />
                                    <h3 className="my-4 font-semibold text-gray-700">Certification</h3>
                                </div>
                                
                                <p className="text-gray-600">
                                    Python Data Structures Certification <br /> &nbsp;&nbsp;  - authorized by University of Michigan and offered through Coursera.
                                </p>
                                <p className="text-gray-600">
                                Programming fundamentals using Python <br /> &nbsp;&nbsp;   - programming fundamentals using python by Infosys Springboard. 
                                </p>
                            
                            </li>
                        </div>
                    </ul>


                    {/* Tools used */}

                    <h4 className="font-bold text-base">Tools I Use:</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        <li className="flex gap-1 items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                            <img
                                src="/images/vs-code.png"
                                alt="Visual Studio Code icon"
                            />
                        </li>
                        <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                            <img
                                src="/images/mongodb.png"
                                alt="MongoDB icon"
                                className="w-8 sm:w-9"
                            />
                        </li>
                        <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                            <img
                                src="/images/jira.png"
                                alt="Jira icon"
                                className="w-8 sm:w-9"
                            />
                        </li>
                        <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                            <img
                                src="/images/git.png"
                                alt="Git icon"
                                className="w-8 sm:w-9"
                            />
                        </li>
                        <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                            <img
                                src="/images/chat-gpt.png"
                                alt="ChatGPT icon"
                                className="w-8 sm:w-9"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
