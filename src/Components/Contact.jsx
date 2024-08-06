const Contact = () => {

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-m-20 font-Outfit">
            <h4 className="text-center mb-2 text-2xl font-OVo">Contact Me</h4>
            <h2 className="text-center text-5xl font-OVo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in development.
            </p>

            <form action="" className="max-w-2xl mx-auto flex flex-col gap-4 items-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
                    />
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
                    />
                </div>
                <textarea 
                    rows="6" 
                    placeholder="Enter your message" 
                    className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
                ></textarea>
                <button className="py-3 px-8 bg-blue-500 text-white rounded-md flex justify-center gap-3 items-center">
                    SUBMIT <img src="/images/arrow-right.png" alt="" className="w-5" />
                </button>
            </form>

        </div>
    )
}

export default Contact;