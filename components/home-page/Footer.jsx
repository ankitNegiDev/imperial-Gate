// "use client";

// import Image from "next/image";
// import React, { useRef, useState } from "react";
// // import Image from "next/image";

// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// function Footer() {

//     let videoRef = useRef(null);

//     // a state variable that keep tracks when to show image or not ...
//     const [showImage, setShowImage] = useState(false);

//     // creating a function that will handle 5s delay
//     function handleVideoDelay() {
//         setShowImage(true);

//         setTimeout(function callback() {
//             setShowImage(false);
//             if (videoRef.current) {
//                 videoRef.current.play();
//             }
//         }, 5000);
//     }
//     return (
//         <footer className="w-full pt-0 pb-10" style={{ backgroundColor: "#0a0a0a" }}>
//             <div
//                 className="
//                 w-full h-0.5 mb-12 rounded-full
//                 bg-linear-to-r
//                 from-[#4F3812]
//                 via-[#EED9A1]
//                 to-[#C79A45]
//                 "
//             ></div>


//             <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-white">
//                 {/* LOGO + ABOUT */}
//                 <div className="flex flex-col items-start w-full">
//                     <div className="w-[15.4vw] md:h-[15.4vh] rounded-xl overflow-hidden relative transition-all duration-1000">
//                         {showImage ? (
//                             <Image
//                                 src="/Dwars-Logo-new.png" 
//                                 alt="Logo"
//                                 fill
//                                 className="object-contain bg-black"
//                             />
//                         ) : (
//                             <video ref={videoRef} src="/temp-video.mp4" autoPlay muted playsInline onEnded={handleVideoDelay} className=" block w-full h-[15.4vh] object-cover rounded-xl overflow-hidden scale-[1.9] origin-center transition-all duration-500 " />
                            
//                         )}
//                     </div>

//                     <p className="text-gray-400 leading-relaxed mt-2 text-sm">
//                         We deliver premium craftsmanship, innovative solutions, and luxury
//                         digital experiences for global brands.
//                     </p>
//                 </div>



//                 {/* QUICK LINKS */}
//                 <div>
//                     <h3 className="text-xl font-semibold mb-4 text-[#fac21e] ">
//                         Quick Links
//                     </h3>

//                     <ul className="space-y-2 text-gray-400">
//                         <li className="hover:text-white cursor-pointer">Home</li>
//                         <li className="hover:text-white cursor-pointer">About</li>
//                         <li className="hover:text-white cursor-pointer">Services</li>
//                         <li className="hover:text-white cursor-pointer">Projects</li>
//                         <li className="hover:text-white cursor-pointer">Contact</li>
//                     </ul>
//                 </div>

//                 {/* SERVICES */}
//                 <div>
//                     <h3 className="text-xl font-semibold mb-4 text-[#fac21e] ">
//                         Projects
//                     </h3>

//                     <ul className="space-y-2 text-gray-400">
//                         <li className="hover:text-white cursor-pointer">UI/UX Design</li>
//                         <li className="hover:text-white cursor-pointer">Web Development</li>
//                         <li className="hover:text-white cursor-pointer">Brand Strategy</li>
//                         <li className="hover:text-white cursor-pointer">Maintenance</li>
//                         <li className="hover:text-white cursor-pointer">Digital Marketing</li>
//                     </ul>
//                 </div>

//                 {/* CONTACT */}
//                 <div>
//                     <h3 className="text-xl font-semibold mb-4 text-[#fac21e]">
//                         Contact
//                     </h3>

//                     <p className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
//                         <FaPhone /> +91 98765 43210
//                     </p>
//                     <p className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
//                         <FaEnvelope /> info@company.com
//                     </p>
//                     <p className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
//                         <FaMapMarkerAlt /> Mumbai, India
//                     </p>

//                     <div className="flex gap-4 mt-5">
//                         <div
//                             className="w-10 h-10 flex items-center justify-center rounded-full 
//                                 border border-[#fac21e]  text-[#fac21e] 
//                                 hover:bg-[#8f7c45] hover:text-black cursor-pointer transition
//                                 hover:shadow-[0_0_12px_#8f7c45]"
//                         >
//                             <FaFacebookF size={18} />
//                         </div>

//                         <div
//                             className="w-10 h-10 flex items-center justify-center rounded-full 
//                                 border border-[#fac21e]  text-[#fac21e] 
//                                 hover:bg-[#8f7c45] hover:text-black cursor-pointer transition
//                                 hover:shadow-[0_0_12px_#8f7c45]"
//                         >
//                             <FaInstagram size={18} />
//                         </div>

//                         <div
//                             className="w-10 h-10 flex items-center justify-center rounded-full 
//                                 border border-[#fac21e]  text-[#fac21e] 
//                                 hover:bg-[#8f7c45] hover:text-black cursor-pointer transition
//                                 hover:shadow-[0_0_12px_#8f7c45]"
//                         >
//                             <FaLinkedinIn size={18} />
//                         </div>
//                     </div>


//                 </div>

//             </div>

//             {/* BOTTOM COPYRIGHT */}
//             <div className="text-center text-gray-500 text-sm mt-16 pt-6 border-t border-[#8f7c45]/30">
//                 © {new Date().getFullYear()} All Rights Reserved | Designed & Developed by Mavenox Prime Pvt. Ltd..
//             </div>
//         </footer>
//     );
// }

// export default Footer;



// fixed - layout for footer - wed-dec-3 task
"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
    const videoRef = useRef(null);
    const [showImage, setShowImage] = useState(false);

    function handleVideoDelay() {
        setShowImage(true);
        setTimeout(() => {
            setShowImage(false);
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 5000);
    }

    return (
        <footer className="w-full pt-0 pb-10 bg-black">
            {/* THIN SEPARATOR */}
            <div className="w-full h-[1px] opacity-40 mb-10 bg-gradient-to-r from-[#4F3812] via-[#EED9A1] to-[#C79A45]" />

            {/* CENTERED TEXT */}
            {/* Made padding-left 0 on mobile, 10 on desktop. Adjusted width for mobile readability */}
            <p className="text-gray-400 text-center text-base w-[90vw] lg:max-w-[35vw] mx-auto mb-12 pl-0 lg:pl-10">
                We deliver premium craftsmanship, innovative solutions, and luxury
                digital experiences for global brands.
            </p>

            {/* MAIN GRID */}
            {/* Mobile: 1 col | Tablet: 2 cols | Laptop/Desktop: 4 cols */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white text-center lg:text-left">

                {/* VIDEO / LOGO */}
                {/* Centered on mobile/tablet, left aligned on desktop */}
                <div className="flex flex-col items-center lg:items-start w-full mt-1">
                    <div className="w-[80vw] h-[25vh] sm:w-[60vw] md:w-full lg:w-[20.5vw] md:h-[25vh] rounded-xl overflow-hidden relative transition-all duration-1000">
                        {showImage ? (
                            <Image
                                src="/Dwars-Logo-new.png"
                                alt="Logo"
                                fill
                                className="object-contain bg-black scale-[1.2]"
                            />
                        ) : (
                            <video
                                ref={videoRef}
                                src="/temp-video.mp4"
                                autoPlay
                                muted
                                playsInline
                                onEnded={handleVideoDelay}
                                className="block w-full h-full object-cover rounded-xl scale-[2.3] transition-all duration-500"
                            />
                        )}
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div className="flex flex-col items-center lg:items-start">
                    <h3 className="text-xl font-semibold mb-4 text-[#fac21e]">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Projects</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* PRODUCTS */}
                <div className="flex flex-col items-center lg:items-start">
                    <h3 className="text-xl font-semibold mb-4 text-[#fac21e]">Products</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Main Gates</li>
                        <li className="hover:text-white cursor-pointer">Wall Art</li>
                        <li className="hover:text-white cursor-pointer">Railings</li>
                        <li className="hover:text-white cursor-pointer">Staircase</li>
                        <li className="hover:text-white cursor-pointer">Balcony</li>
                    </ul>
                </div>

                {/* CONTACT */}
                {/* OUTER DIV: Matches 'Quick Links' exactly (Centered on Mobile, Left on Desktop) */}
                <div className="flex flex-col items-center lg:items-start">

                    {/* HEADER: Direct child of Outer Div, so it stays centered on mobile */}
                    <h3 className="text-xl font-semibold mb-4 text-[#fac21e]">Contact</h3>

                    {/* INNER DIV: Wraps content to keep icons aligned left, but the whole block sits in center */}
                    <div className="flex flex-col items-start gap-3">

                        <p className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                            <FaPhone className="shrink-0" />
                            <span>+91 98765 43210</span>
                        </p>

                        <p className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                            <FaEnvelope className="shrink-0" />
                            <span>info@company.com</span>
                        </p>

                        <p className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                            <FaMapMarkerAlt className="shrink-0" />
                            <span>Mumbai, India</span>
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-2">
                            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#fac21e] text-[#fac21e]
                    hover:bg-[#8f7c45] hover:text-black transition hover:shadow-[0_0_12px_#8f7c45] hover:cursor-pointer"
                                >
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="text-center text-gray-500 text-sm mt-10 lg:mt-16 pt-6 border-t border-[#8f7c45]/30 px-4">
                © {new Date().getFullYear()} All Rights Reserved | Designed & Developed by Mavenox Prime Pvt. Ltd.
            </div>
        </footer>
    );
}

export default Footer;