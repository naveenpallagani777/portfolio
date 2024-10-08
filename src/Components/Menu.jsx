import './style.css'
import { useContext, useState } from "react";
import { Authcontext } from '../Context/ContextProvider';


const Menu = () => {
    
    let[state,setState] = useState('-right-60');
    let {mode, setMode} = useContext(Authcontext);

    const handleModes = () => {
        if (mode === "text-black bg-white-700") setMode("text-white bg-gray-700");
        else setMode("text-black bg-white-700");
    }

    return (
        <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex
            items-center justify-between z-50 bg-slate-200 font-Outfit" >
            <p className="cursor-pointer text-3xl font-extrabold">Naveen</p>

            <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-OVo">
                <li> <a href="#top" > Home </a> </li>
                <li> <a href="#about"> About me</a> </li>
                <li> <a href="#education"> Education </a> </li>
                <li> <a href="#services"> My Services</a> </li>
                <li> <a href="#contact"> Contact me </a> </li>
            </ul>

            <div className='flex gap-4 items-center'>

                <label className="switch" >
                    <input type="checkbox" onClick={handleModes}/>
                    <span className="slider"></span>
                </label>

                <a href="#contact" className="hidden lg:flex items-center gap-3 px-4 py-2 border border-gray-500 rounded-md ml-4">
                    Contact me 
                    <img  src="/images/top-right.png" alt="" className="w-7" />
                </a>
                
                <button className='block md:hidden ml-3' onClick={() => setState('right-0')} >
                    <img src="/images/menu.png" alt="" className='w-7'/>
                </button>
            </div>

            <ul id="sideMenu" className={`flex md:hidden flex-col gap-2 py-20 px-10 fixed ${state} top-0 bottom-0 w-60 z-50 h-screen  transition duration-500 font-OVo bg-slate-200`}>

                <div className="md: cursor-pointer" onClick={() => setState('-right-60')}>
                    <img src="/images/close.png" alt="noimg" className="w-6 absolute top-6 right-6"/>
                </div>

                <li onClick={() => setState('-right-60')}> <a href="#top" className='text-xl font-bold'> Home </a> </li>
                <li onClick={() => setState('-right-60')}> <a href="#about" className='text-xl font-bold'> About me</a> </li>
                <li onClick={() => setState('-right-60')}> <a href="#education" className='text-xl font-bold'> Education </a> </li>
                <li onClick={() => setState('-right-60')}> <a href="#services" className='text-xl font-bold'> Services </a> </li>
                <li onClick={() => setState('-right-60')}> <a href="#contact" className='text-xl font-bold'> Contact me </a> </li>
            </ul>
        </nav>
    )
};

export default Menu;