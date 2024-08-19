import { useContext } from "react";
import { Authcontext } from "../Context/ContextProvider";

const Header = () => {
    let {mode} = useContext(Authcontext);
    
    return(<div className={`w-full  text-center mx-auto  h-screen flex flex-col
        items-center justify-center py-2 gap-4 font-Outfit ${mode}`}>
        <img src="/images/profile.jpeg" alt="" className="w-32 rounded-full" />
        <h3 className="text-2xl md:text-2xl font-semibold">hi! I'm P Naveen Kumar</h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-extrabold font-OVo">Full-stack developer</h1>
        <p className="max-w-4xl mx-auto font-OVo">Hi, I'm Naveen, an aspiring web developer with a keen interest in building dynamic and responsive websites. I specialize in front-end development using React and have a strong in MERN STACK. My goal is to create user-friendly and visually appealing web experiences.</p>

        <div className="flex gap-4">
            <a href="#contact" className="font-bold px-5 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 font-Ovo">
                Contact Me <img src="/images/arrow-right.png" alt="" className="w-5" />
            </a>
            <a href="/files/naveen_resume.pdf" download className="font-bold px-5 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2">
                My Resume <img src="/images/download.png" alt="" className="w-5" />
            </a>
        </div>
    </div>)
}

export default Header;