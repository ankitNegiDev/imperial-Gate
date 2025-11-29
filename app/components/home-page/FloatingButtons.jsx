// whatspp icon and enquiry form 
/**
 * for enquiry form -- is simple modal -- and in modal what we can do is - we had a button when user click on it we need to record this so we will use onclick event and what kind of work we want for that we need a boolean kind of state variable so when user click on button the boolean state will be set as true which means it will open the div a kind of container and on this container we will give a cross button and when user click on this cross button we can set boolean state as false so modal will be closed 
 */

// "use client"
// const { useState } = require("react");

// function FloatingButton(){
//     // thsi is the state variable
//     const [isOpen , setIsOpen]=useState(false);

//     function toggleModal(){
//         console.log("modal is open/close")
//         setIsOpen(!isOpen);
//     }
//     return(
//         <>
//             <div className="flex justify-center"> 
//                 <button onClick={toggleModal} className="mt-10 border-2 border-red-300 px-2 py-4 ">
//                     enquiry
//                 </button>
//             </div>
//             {isOpen &&(
//                 <div className="border-2 border-red-300">hello the modal is open
//                     <br/>
//                     <button onClick={toggleModal}>cross</button>
//                 </div>
//             )}
//         </>
//     );
// }
// export default FloatingButton;


"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

function FloatingButtons() {
    const [open, setOpen] = useState(false);

    function toggleForm() {
        setOpen(!open);
    }

    return (
        <>
            <div className="fixed bottom-2 right-2 flex gap-3 z-50
                backdrop-blur-md bg-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)]
                rounded-full px-3 py-2 border border-white/20">

                {/* WhatsApp Icon */}
                <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    className="text-green-500 p-3 rounded-full transition-all
                    hover:bg-green-500 hover:text-white hover:scale-110
                    flex items-center justify-center hover:cursor-pointer"
                >
                    <FaWhatsapp size={22} />
                </a>

                {/* Divider */}
                <span className="w-px h-10 py-4 bg-white/30"></span>

                {/* Enquiry Icon */}
                <button
                    onClick={toggleForm}
                    className="text-[#d4af37] p-3 rounded-full transition-all 
                    hover:bg-[#d4af37] hover:text-black hover:scale-110
                    flex items-center justify-center cursor-pointer"
                >
                    <FaRegEnvelope size={20} />
                </button>
            </div>




            {/* Enquiry Form Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center animate-fadeIn z-9999">
                    <div className="bg-white w-[90%] max-w-lg p-8 rounded-2xl shadow-2xl relative border border-gray-300">

                        {/* Close Button */}
                        <button
                            onClick={toggleForm}
                            className="absolute top-4 right-5 text-gray-600 hover:text-black text-xl hover:cursor-pointer"
                        >
                            ✕
                        </button>

                        {/* Heading */}
                        <h2 className="text-3xl font-semibold mb-6 text-center tracking-wide text-gray-900">
                            Royal Luxury Enquiry
                        </h2>

                        {/* Form */}
                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border-[1.8px] border-gray-400 p-3.5 rounded-lg 
                                            placeholder-gray-600 text-gray-900 bg-white
                                            focus:outline-none focus:ring-2 focus:ring-black/50 transition shadow-sm"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full border-[1.8px] border-gray-400 p-3.5 rounded-lg 
                                            placeholder-gray-600 text-gray-900 bg-white
                                            focus:outline-none focus:ring-2 focus:ring-black/50 transition shadow-sm"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-[1.8px] border-gray-400 p-3.5 rounded-lg 
                                            placeholder-gray-600 text-gray-900 bg-white
                                            focus:outline-none focus:ring-2 focus:ring-black/50 transition shadow-sm"
                            />

                            <textarea
                                placeholder="Your Message"
                                className="w-full border-[1.8px] border-gray-400 p-3.5 rounded-lg h-32
                                            placeholder-gray-600 text-gray-900 bg-white
                                            focus:outline-none focus:ring-2 focus:ring-black/50 transition shadow-sm"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3.5 rounded-lg 
                                            hover:bg-gray-900 transition font-medium tracking-wide shadow-sm hover:cursor-pointer"
                            >
                                Submit Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default FloatingButtons;
