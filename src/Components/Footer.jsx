const Footer = () => {
    return(<div className="mt-20">

        <div className="text-center">
            <p className="cursor-pointer text-3xl font-extrabold">Naveen</p>
            <div className="w-max flex items-center gap-2 mx-auto">
                <img src="/images/mail.png" alt="" className="w-6"/>
                naveenpallagani777@gmail.com
            </div>
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] my-12 py-6">
            <p> &copy; 2024 naveen pallagani. All rights reserved.</p>
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                <li> <a href="https://github.com/naveenpallagani777/" target="blank"> Git Hub </a> </li>
                <li> <a href="https://www.linkedin.com/in/naveen-pallagani-b23845259/" target="blank"> LinkedIn </a> </li>
                <li> <a href="https://www.instagram.com/naveenpallagani/" target="blank"> Instagram </a> </li>
            </ul>
        </div>
    </div>)
}

export default Footer;