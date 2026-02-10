// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import { FaArrowRight, FaChevronDown, FaHome, FaBars } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";
// import { AiOutlineClose } from "react-icons/ai";

// // playfair font
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//     subsets: ["latin"],
//     weight: ["600", "700"],
// });

// export default function Navbar() {

//     const router = useRouter();

//     // states
//     // active menu is used to track the active menu
//     const [activeMenu, setActiveMenu] = useState("");

//     // mobile menu open is used to track the mobile menu open state
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
//     // mobile products open is used to track the mobile products open state 
//     const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

//     // Scroll hide/show behavior
//     const [lastScroll, setLastScroll] = useState(0);
//     const [hideNav, setHideNav] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     // Mouse tracking for Desktop Mega Menu
//     const [lastY, setLastY] = useState(0);

//     // helper function to track the mouse movement based on this we are closing or opening the product dropdown 

//     function handleMouseMove(e) {
//         setLastY(e.clientY);
//     }

//     function handleMouseLeave(e) {
//         if (e.clientY < lastY) {
//             setActiveMenu("");
//         }
//     }

//     // Navigation Helpers
//     function goToCategory(category) {
//         router.push("/products?category=" + category);
//         setActiveMenu("");
//         setMobileMenuOpen(false);
//     }

//     function goToContactUsPage() {
//         router.push("/contact-us");
//         setActiveMenu("");
//         setMobileMenuOpen(false);
//     }

//     function goToAboutUsPage() {
//         router.push("/about-us");
//         setActiveMenu("");
//         setMobileMenuOpen(false);
//     }

//     function goToHomePage() {
//         router.push("/");
//         setActiveMenu("");
//         setMobileMenuOpen(false);
//     }

//     function goToBlogsPage() {
//         router.push("/blogs");
//         setActiveMenu("");
//         setMobileMenuOpen(false);
//     }

//     function goToEcomStore() {
//         router.push("/store");
//         setActiveMenu("");
//         setMobileMenuOpen(false);
//     }

//     // got to projects page
//     function goToProjectsPage() {
//         router.push("/projects");
//         setActiveMenu("");
//         setMobileMenuOpen(false);
//     }

//     // scroll logic
//     useEffect(function () {
//         function handleScroll() {
//             // If dropdown is open - keep navbar visible
//             if (activeMenu === "products") {
//                 setHideNav(false);
//                 return;
//             }

//             let currentScroll = window.pageYOffset;

//             // Hide/Show logic of navbar
//             if (currentScroll > lastScroll && currentScroll > 70 && !mobileMenuOpen) {
//                 setHideNav(true);
//             } else {
//                 setHideNav(false);
//             }

//             // Scrolled styling logic based on scroll is true or fasle like if scroll is up then false and if scroll is down then true
//             if (currentScroll > 50) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }

//             setLastScroll(currentScroll);
//         }

//         window.addEventListener("scroll", handleScroll);
//         return function () {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [lastScroll, activeMenu, mobileMenuOpen]);

//     // Disable body scroll when mobile menu is open
//     useEffect(function () {
//         if (mobileMenuOpen) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "unset";
//         }
//     }, [mobileMenuOpen]);

//     // mobile categories data
//     const mobileCategories = [
//         { name: "Boundary Wall", img: "/product-image.jpg", cat: "Royal Entrance" },
//         { name: "Brass Railings", img: "/product-image.jpg", cat: "Single Door" },
//         { name: "Staircase", img: "/product-image.jpg", cat: "Double Door" },
//         { name: "Flat Entrance", img: "/product-image.jpg", cat: "Modern" },
//         { name: "Entry Doors", img: "/product-image.jpg", cat: "Wrought iron" },
//         { name: "Balcony", img: "/product-image.jpg", cat: "Flat design" },
//         { name: "Planters", img: "/product-image.jpg", cat: "Gold coated" },
//     ];

//     return (
//         <div onMouseLeave={function () { setActiveMenu("") }} className="relative">

//             {/* --- NAVBAR MAIN --- */}
//             <nav
//                 className={
//                     `fixed top-0 left-0 w-full z-50 px-0 pt-1.5 pb-1 transition-all duration-50
//                     ${hideNav ? "-translate-y-full" : "translate-y-0"}
//                     ${scrolled || mobileMenuOpen
//                         // Scrolled or Mobile Menu Open: Always show border
//                         ? "bg-black backdrop-blur-lg text-[#d4b469] border-b-2 border-[#b08812]/90"
//                         // Top state: Border ONLY on Desktop (md:), transparent/no-border on Mobile
//                         : "bg-black text-white md:border-b-2 md:border-[#b08812]"
//                     }`
//                 }
//             >
//                 <div className="flex items-center justify-between max-w-8xl px-4 md:px-0 mx-auto">

//                     {/* --- MOBILE: HAMBURGER LEFT (MD:HIDDEN) --- */}
//                     <div className="md:hidden flex items-center">
//                         <button onClick={function () { setMobileMenuOpen(true); }} className="text-[#d4b469] focus:outline-none p-1">
//                             <FaBars size={24} />
//                         </button>
//                     </div>

//                     {/* --- LOGO (CENTERED ON MOBILE VIA FLEX JUSTIFY, LEFT ON DESKTOP) --- */}
//                     <div className="text-xl font-bold cursor-pointer relative z-60">
//                         <Image
//                             src="/Dwars-Logo-new.png"
//                             alt="Website Logo"
//                             width={120}
//                             height={50}
//                             priority
//                             className="w-[100px] md:w-[120px] h-auto"
//                             onClick={function () { goToHomePage(); }}
//                         />
//                     </div>

//                     {/* --- DESKTOP NAV LINKS (HIDDEN ON MOBILE) --- */}
//                     <div
//                         onMouseMove={handleMouseMove}
//                         onMouseLeave={handleMouseLeave}
//                         className="hidden md:flex items-center gap-6 text-xl mr-10"
//                     >
//                         <div onClick={function () { goToHomePage() }} className="flex items-center gap-1 cursor-pointer hover:text-amber-300">
//                             <FaHome size={26} />
//                         </div>

//                         <div onMouseEnter={function () { setActiveMenu("about"); }} onClick={function () { goToAboutUsPage(); }} className="relative group cursor-pointer hover:text-amber-300">
//                             About Us
//                             <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-gradient-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
//                         </div>

//                         <div onMouseEnter={function () { setActiveMenu("products"); }} className="relative group cursor-pointer hover:text-amber-300 flex items-center gap-2">
//                             Products
//                             <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-gradient-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
//                             <FaChevronDown className={"transition-transform duration-300 " + (activeMenu === "products" ? "rotate-180" : "rotate-0")} size={13} />
//                         </div>

//                         <div onClick={function () { goToProjectsPage(); }} className="relative group cursor-pointer hover:text-amber-300">
//                             Projects
//                             <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-gradient-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
//                         </div>

//                         <div onMouseEnter={function () { setActiveMenu("blogs"); }} onClick={function () { goToBlogsPage(); }} className="relative group cursor-pointer hover:text-amber-300">
//                             Blogs
//                             <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-gradient-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
//                         </div>

//                         <div onMouseEnter={function () { setActiveMenu("contact"); }} onClick={function () { goToContactUsPage(); }} className="relative group cursor-pointer hover:text-amber-300">
//                             Contact Us
//                             <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-gradient-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
//                         </div>

//                         {/* --- NEW DESKTOP CART LINK (SIMPLE STYLE) --- */}
//                         <div onClick={function () { goToEcomStore(); }} className="relative group cursor-pointer hover:text-amber-300 flex items-center gap-2">
//                             <div className="relative">
//                                 <FiShoppingCart size={22} />
//                                 <span className="absolute -top-2 -right-2 bg-[#b08812] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border border-black/20">3</span>
//                             </div>
//                             <span>Cart</span>
//                             <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-gradient-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
//                         </div>
//                     </div>

//                     {/* --- MOBILE: CART RIGHT (MD:HIDDEN) --- */}
//                     <div className="md:hidden flex items-center">
//                         <div onClick={function () { goToEcomStore() }} className="relative text-[#d4b469] p-1">
//                             <FiShoppingCart size={24} />
//                             <span className="absolute -top-2 -right-2 bg-[#b08812] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-black">3</span>
//                         </div>
//                     </div>

//                 </div>
//             </nav>

//             {/* --- MOBILE MENU DRAWER --- */}
//             <div
//                 className={`
//                     fixed inset-0 z-[100] bg-[#050505] transition-transform duration-500 ease-in-out md:hidden flex flex-col
//                     ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
//                 `}
//             >
//                 {/* Mobile Header */}
//                 <div className="flex items-center justify-between px-6 py-5 border-b border-[#b08812]/20">
//                     <span className={`${playfair.className} text-2xl text-[#d4b469] font-bold tracking-wide`}>Menu</span>
//                     <button
//                         onClick={function () { setMobileMenuOpen(false); }}
//                         className="text-[#d4b469] p-2 hover:bg-white/5 rounded-full transition-colors"
//                     >
//                         <AiOutlineClose size={28} />
//                     </button>
//                 </div>

//                 {/* Mobile Scrollable Content */}
//                 <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2 text-white text-lg scrollbar-hide">

//                     <div onClick={function () { goToHomePage(); }} className={`flex items-center gap-4 py-4 border-b border-white/5 cursor-pointer hover:text-[#d4b469] transition-colors ${playfair.className}`}>
//                         <FaHome size={20} className="text-[#d4b469]" />
//                     </div>


//                     <div onClick={function () { goToAboutUsPage(); }} className={`py-4 border-b border-white/5 cursor-pointer hover:text-[#d4b469] transition-colors ${playfair.className} text-xl`}>About Us</div>

//                     {/* Mobile Products Accordion */}
//                     <div className="border-b border-white/5 py-2">
//                         <div
//                             onClick={function () { setMobileProductsOpen(!mobileProductsOpen); }}
//                             className="flex items-center justify-between py-3 cursor-pointer group"
//                         >
//                             <span className={`${playfair.className} text-xl group-hover:text-[#d4b469] transition-colors`}>Our Products</span>
//                             <div className={`p-2 rounded-full transition-colors ${mobileProductsOpen ? 'bg-[#d4b469]/20' : ''}`}>
//                                 <FaChevronDown className={`text-[#d4b469] transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} size={14} />
//                             </div>
//                         </div>

//                         {/* on mobile screen especially on product page - the product dropdown img are overflowing the viewport fix it  */}
//                         {/* Visual Grid for Mobile Products */}
//                         <div className={`grid grid-cols-2 gap-3 mt-2 overflow-hidden transition-all duration-500 ease-in-out ${mobileProductsOpen ? "max-h-[1200px] opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
//                             {mobileCategories.map(function (item, idx) {
//                                 return (
//                                     <div
//                                         key={idx}
//                                         onClick={function () { goToCategory(item.cat); }}
//                                         className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer border border-white/10 shadow-lg"
//                                     >
//                                         <Image
//                                             src={item.img}
//                                             alt={item.name}
//                                             fill
//                                             className="object-cover transition-transform duration-700 group-hover:scale-110"
//                                         />
//                                         {/* Overlay with Text */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-3">
//                                             <p className="text-[#d4b469] text-xs font-bold uppercase tracking-wider text-center">{item.name}</p>
//                                         </div>
//                                     </div>
//                                 );
//                             })}

//                             {/* View All Button */}
//                             <div onClick={function () { goToCategory("all"); }} className="col-span-2 bg-[#d4b469]/10 border border-[#d4b469]/30 rounded-lg flex items-center justify-center py-3 mt-2 cursor-pointer active:scale-95 transition-transform">
//                                 <span className="text-sm font-bold text-[#d4b469] flex items-center gap-2">View All Categories <FaArrowRight /></span>
//                             </div>
//                         </div>
//                     </div>



//                     {/* */}
//                     <div onClick={function () { goToProjectsPage(); }} className={`py-4 border-b border-white/5 cursor-pointer hover:text-[#d4b469] transition-colors ${playfair.className} text-xl`}>Projects</div>

//                     <div onClick={function () { goToBlogsPage(); }} className={`py-4 border-b border-white/5 cursor-pointer hover:text-[#d4b469] transition-colors ${playfair.className} text-xl`}>Blogs</div>
//                     <div onClick={function () { goToContactUsPage(); }} className={`py-4 border-b border-white/5 cursor-pointer hover:text-[#d4b469] transition-colors ${playfair.className} text-xl`}>Contact Us</div>

//                 </div>

//                 {/* Mobile Bottom Action */}
//                 <div className="p-6 bg-[#0a0a0a] border-t border-[#b08812]/20 pb-10">
//                     <button
//                         onClick={function () { goToEcomStore(); }}
//                         className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#F2E5C4] via-[#D5B67A] to-[#A8833F] text-[#111111] font-bold shadow-[0_4px_20px_rgba(176,136,18,0.3)] active:scale-95 transition-transform"
//                     >
//                         <FiShoppingCart size={22} />
//                         <span className={`${playfair.className} text-lg tracking-wide font-bold`}>Shop Online</span>
//                     </button>
//                 </div>
//             </div>


//             {/* --- MEGA SECTION CONTAINER (DESKTOP) --- */}
//             {activeMenu === "products" && !mobileMenuOpen && (
//                 <div
//                     className="
//                         fixed left-0 top-[132px] w-full
//                         bg-[rgba(10,10,10,0.65)]
//                         backdrop-blur-md
//                         text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)]
//                         border-t border-[#8f7c45]/40
//                         z-[9999] animate-slideDown
//                         h-[80vh] hidden md:block
//                     "
//                 >
//                     <div className="max-w-6xl mx-auto p-2 relative">

//                         <button
//                             onClick={function () { setActiveMenu("") }}
//                             className="
//                                 absolute top-3 right-[-100px]
//                                 text-[#D4AF37]
//                                 font-[900]
//                                 text-2xl
//                                 flex items-center justify-center
//                                 transition-all duration-200
//                                 hover:cursor-pointer
//                             "
//                         >
//                             <AiOutlineClose size={32} />
//                         </button>

//                         {/* GRID */}
//                         <div className="grid grid-cols-4 gap-x-10 gap-y-10 mt-6">

//                             {/* 1. Boundary Wall Doors */}
//                             <div>
//                                 <h3 className="font-bold mb-3 text-[#fac21e] uppercase tracking-wide">
//                                     Boundary Wall Doors
//                                 </h3>
//                                 <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
//                                     <Image
//                                         src="/product-image.jpg"
//                                         alt=""
//                                         width={130}
//                                         height={110}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <ul className=" text-base">
//                                     <li onClick={function () { goToCategory("Royal Entrance"); }} className="cursor-pointer hover:text-[#8f7c45]">Wrought Iron Boundarywall Doors</li>
//                                     <li onClick={function () { goToCategory("Modern doors"); }} className="cursor-pointer hover:text-[#8f7c45]">Modern Boundrwall Doors</li>
//                                     <li onClick={function () { goToCategory("Modern doors"); }} className="cursor-pointer hover:text-[#8f7c45]">Aluminium Boundarywall Door</li>
//                                     <li onClick={function () { goToCategory("Modern doors"); }} className="cursor-pointer hover:text-[#8f7c45]">Lasercut  Boundarywall Doors</li>
//                                 </ul>
//                             </div>

//                             {/* 2. Brass Railings */}
//                             <div>
//                                 <h3 className="font-bold mb-3 text-[#fac21e] uppercase tracking-wide">
//                                     Brass Railings
//                                 </h3>
//                                 <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
//                                     <Image
//                                         src="/product-image.jpg"
//                                         alt=""
//                                         width={130}
//                                         height={110}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <ul className="space-y-1 text-base">
//                                     <li onClick={function () { goToCategory("Single Door"); }} className="cursor-pointer hover:text-[#8f7c45]">Single Door</li>
//                                     <li onClick={function () { goToCategory("Double Door"); }} className="cursor-pointer hover:text-[#8f7c45]">Double Door</li>
//                                 </ul>
//                             </div>

//                             {/* 3. Staircase Railings */}
//                             <div>
//                                 <h3 className="font-bold mb-3 text-[#fac21e] uppercase tracking-wide">
//                                     Staircase Railings
//                                 </h3>
//                                 <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
//                                     <Image
//                                         src="/product-image.jpg"
//                                         alt=""
//                                         width={130}
//                                         height={110}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <ul className="space-y-1 text-base">
//                                     <li onClick={function () { goToCategory("Single Door"); }} className="cursor-pointer hover:text-[#8f7c45]">Wrought Iron Staircase Railing</li>
//                                     <li onClick={function () { goToCategory("Double Door"); }} className="cursor-pointer hover:text-[#8f7c45]">Brass Staircase Railings</li>
//                                     <li onClick={function () { goToCategory("Double Door"); }} className="cursor-pointer hover:text-[#8f7c45]">Casted (Alloy) Railing</li>
//                                     <li onClick={function () { goToCategory("Double Door"); }} className="cursor-pointer hover:text-[#8f7c45]">Modern Staircase Railing</li>
//                                 </ul>
//                             </div>
                            

//                             {/* 4. Flat Entrance Doors */}
//                             <div>
//                                 <h3 className="font-bold mb-3 text-[#fac21e] uppercase tracking-wide">
//                                     Flat Entrance Doors
//                                 </h3>
//                                 <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
//                                     <Image
//                                         src="/product-image.jpg"
//                                         alt=""
//                                         width={130}
//                                         height={110}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <ul className="space-y-1 text-base">
//                                     <li onClick={function () { goToCategory("Modern"); }} className="cursor-pointer hover:text-[#8f7c45]">Modern</li>
//                                     <li onClick={function () { goToCategory("Wrough iron"); }} className="cursor-pointer hover:text-[#8f7c45]">Wrought Iron</li>
//                                     <li onClick={function () { goToCategory("Ornamental"); }} className="cursor-pointer hover:text-[#8f7c45]">Ornamental</li>
//                                 </ul>
//                             </div>

//                             {/* 5. Entry Doors */}
//                             <div>
//                                 <h3 className="font-bold mb-3 text-[#fac21e] uppercase tracking-wide">
//                                     Entry Doors
//                                 </h3>
//                                 <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
//                                     <Image
//                                         src="/product-image.jpg"
//                                         alt=""
//                                         width={130}
//                                         height={110}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <ul className="space-y-1 text-base">
//                                     <li onClick={function () { goToCategory("Modern"); }} className="cursor-pointer hover:text-[#8f7c45]">Modern</li>
//                                     <li onClick={function () { goToCategory("Wrough iron"); }} className="cursor-pointer hover:text-[#8f7c45]">Wrought Iron</li>
//                                     <li onClick={function () { goToCategory("Ornamental"); }} className="cursor-pointer hover:text-[#8f7c45]">Ornamental</li>
//                                 </ul>
//                             </div>

//                             {/* 6. Balcony Railings */}
//                             <div>
//                                 <h3 className="font-bold mb-3 text-[#fac21e] uppercase tracking-wide">
//                                     Balcony Railings
//                                 </h3>
//                                 <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
//                                     <Image
//                                         src="/product-image.jpg"
//                                         alt=""
//                                         width={130}
//                                         height={110}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <ul className="space-y-1 text-base">
//                                     <li onClick={function () { goToCategory("Flat design"); }} className="cursor-pointer hover:text-[#8f7c45]">Wrought Iron Balcony Railing</li>
//                                     <li onClick={function () { goToCategory("Textured design"); }} className="cursor-pointer hover:text-[#8f7c45]">Brass Balcony Railing</li>
//                                     <li onClick={function () { goToCategory("Textured design"); }} className="cursor-pointer hover:text-[#8f7c45]"> Casted (Alloy) Balcony Railing</li>
//                                 </ul>
//                             </div>

//                             {/* 7. Planters */}
//                             <div>
//                                 <h3 className="font-bold mb-3 text-[#fac21e] uppercase tracking-wide">
//                                     Planters
//                                 </h3>
//                                 <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
//                                     <Image
//                                         src="/product-image.jpg"
//                                         alt=""
//                                         width={130}
//                                         height={110}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <ul className="space-y-1 text-base">
//                                     <li onClick={function () { goToCategory("Gold coated"); }} className="cursor-pointer hover:text-[#8f7c45]">Gold Coated</li>
//                                     <li onClick={function () { goToCategory("Laser designed"); }} className="cursor-pointer hover:text-[#8f7c45]">Laser Designed</li>
//                                 </ul>
//                             </div>

//                             {/* 8. Others */}
//                             <div className="flex items-center justify-start mt-10">
//                                 <h3 className="text-lg md:text-xl font-bold uppercase text-[#fac21e] tracking-wider flex items-center gap-2 cursor-pointer hover:text-white transition">
//                                     Others <FaArrowRight size={18} />
//                                 </h3>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }


//! new 
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaChevronDown, FaHome, FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

// playfair font
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["600", "700"],
});

// --- DATA CONFIGURATION ---

const productMenuItems = [
    {
        title: "Boundary Wall Doors",
        image: "/navbar-product-img/1-WIBD-(1).jpg",
        defaultLink: "Boundary Wall Doors",
        items: [
            { label: "Wrought Iron Boundary wall Doors", query: "Wrought Iron Boundary wall Doors" },
            { label: "Modern Boundry wall Doors", query: "Modern Boundry wall Doors" },
            { label: "Aluminium Boundary wall Doors", query: "Aluminium Boundary wall Doors" },
            { label: "Lasercut Boundary wall Doors", query: "Lasercut Boundary wall Doors" },
        ]
    },
    {
        title: "Brass Railings",
        image: "/product-image.jpg",
        defaultLink: "Brass Railings",
        items: [
            { label: "Single Door", query: "Single Door" },
            { label: "Double Door", query: "Double Door" },
        ]
    },
    {
        title: "Staircase Railings",
        image: "/navbar-product-img/1-WISR-(1).jpg",
        defaultLink: "Staircase Railings",
        items: [
            { label: "Wrought Iron Staircase Railings", query: "Wrought Iron Staircase Railings" },
            { label: "Brass Staircase Railings", query: "Brass Staircase Railings" },
            { label: "Casted (Alloy) Railings", query: "Casted (Alloy) Railings" },
            { label: "Modern Staircase Railings", query: "Modern Staircase Railings" },
        ]
    },
    {
        title: "Flat Entrance Doors",
        image: "/navbar-product-img/FED-(98).jpg",
        defaultLink: "Flat Entrance Doors",
        items: [
            { label: "Modern", query: "Modern Flat Entrance Doors" },
            { label: "Wrought Iron", query: "Wrought Iron Flat Entrance Doors" },
            { label: "Ornamental", query: "Ornamental Flat Entrance Doors" },
        ]
    },
    {
        title: "Wrought Iron Doors",
        image: "/navbar-product-img/DD-(91).jpg",
        defaultLink: "Wrought Iron Doors",
        items: [
            { label: "Single Door", query: "Single Door" },
            { label: "Double Door", query: "Double Door" },
        ]
    },
    {
        title: "Balcony Railings",
        image: "/navbar-product-img/1-WIBR-(1).jpg",
        defaultLink: "Balcony Railings",
        items: [
            { label: "Wrought Iron Balcony Railings", query: "Wrought Iron Balcony Railings" },
            { label: "Brass Balcony Railings", query: "Brass Balcony Railings" },
            { label: "Casted (Alloy) Balcony Railings", query: "Casted (Alloy) Balcony Railings" },
        ]
    },
    {
        title: "Planters",
        image: "/product-image.jpg",
        defaultLink: "Planters",
        items: [
            { label: "Gold Coated", query: "Gold Coated Planters" },
            { label: "Laser Designed", query: "Laser Designed Planters" },
        ]
    }
];

export default function Navbar() {

    const router = useRouter();

    // states
    const [activeMenu, setActiveMenu] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

    // Scroll hide/show behavior
    const [lastScroll, setLastScroll] = useState(0);
    const [hideNav, setHideNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Mouse tracking for Desktop Mega Menu
    const [lastY, setLastY] = useState(0);

    function handleMouseMove(e) {
        setLastY(e.clientY);
    }

    function handleMouseLeave(e) {
        if (e.clientY < lastY) {
            setActiveMenu("");
        }
    }

    // Navigation Helpers
    function goToCategory(category) {
        router.push("/products?category=" + category);
        setActiveMenu("");
        setMobileMenuOpen(false);
    }

    function goToContactUsPage() {
        router.push("/contact-us");
        setActiveMenu("");
        setMobileMenuOpen(false);
    }

    function goToAboutUsPage() {
        router.push("/about-us");
        setActiveMenu("");
        setMobileMenuOpen(false);
    }

    function goToHomePage() {
        router.push("/");
        setActiveMenu("");
        setMobileMenuOpen(false);
    }

    function goToBlogsPage() {
        router.push("/blogs");
        setActiveMenu("");
        setMobileMenuOpen(false);
    }

    function goToEcomStore() {
        router.push("/store");
        setActiveMenu("");
        setMobileMenuOpen(false);
    }

    function goToProjectsPage() {
        router.push("/projects");
        setActiveMenu("");
        setMobileMenuOpen(false);
    }

    // scroll logic
    useEffect(function () {
        function handleScroll() {
            if (activeMenu === "products") {
                setHideNav(false);
                return;
            }

            let currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 70 && !mobileMenuOpen) {
                setHideNav(true);
            } else {
                setHideNav(false);
            }

            if (currentScroll > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            setLastScroll(currentScroll);
        }

        window.addEventListener("scroll", handleScroll);
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll, activeMenu, mobileMenuOpen]);

    useEffect(function () {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);


    return (
        <div onMouseLeave={function () { setActiveMenu("") }} className="relative">

            {/* --- NAVBAR MAIN --- */}
            <nav
                className={
                    `fixed top-0 left-0 w-full z-50 px-0 pt-1.5 pb-1 transition-all duration-50
                    ${hideNav ? "-translate-y-full" : "translate-y-0"}
                    ${scrolled || mobileMenuOpen
                        ? "bg-black backdrop-blur-lg text-[#d4b469] border-b-2 border-[#b08812]/90"
                        : "bg-black text-white md:border-b-2 md:border-[#b08812]"
                    }`
                }
            >
                <div className="flex items-center justify-between max-w-8xl px-4 md:px-0 mx-auto">

                    {/* --- MOBILE: HAMBURGER LEFT --- */}
                    <div className="md:hidden flex items-center">
                        <button onClick={function () { setMobileMenuOpen(true); }} className="text-[#d4b469] focus:outline-none p-1">
                            <FaBars size={24} />
                        </button>
                    </div>

                    {/* --- LOGO --- */}
                    <div className="text-xl font-bold cursor-pointer relative z-60">
                        <Image
                            src="/Dwars-Logo-new.png"
                            alt="Website Logo"
                            width={120}
                            height={50}
                            priority
                            className="w-[100px] md:w-[120px] h-auto"
                            onClick={function () { goToHomePage(); }}
                        />
                    </div>

                    {/* --- DESKTOP NAV LINKS --- */}
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="hidden md:flex items-center gap-6 text-xl mr-10"
                    >
                        <div onClick={function () { goToHomePage() }} className="flex items-center gap-1 cursor-pointer hover:text-amber-300">
                            <FaHome size={26} />
                        </div>

                        <div onMouseEnter={function () { setActiveMenu("about"); }} onClick={function () { goToAboutUsPage(); }} className="relative group cursor-pointer hover:text-amber-300">
                            About Us
                            <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                        </div>

                        <div onMouseEnter={function () { setActiveMenu("products"); }} className="relative group cursor-pointer hover:text-amber-300 flex items-center gap-2">
                            Products
                            <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                            <FaChevronDown className={"transition-transform duration-300 " + (activeMenu === "products" ? "rotate-180" : "rotate-0")} size={13} />
                        </div>

                        <div onClick={function () { goToProjectsPage(); }} className="relative group cursor-pointer hover:text-amber-300">
                            Projects
                            <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                        </div>

                        <div onMouseEnter={function () { setActiveMenu("blogs"); }} onClick={function () { goToBlogsPage(); }} className="relative group cursor-pointer hover:text-amber-300">
                            Blogs
                            <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                        </div>

                        <div onMouseEnter={function () { setActiveMenu("contact"); }} onClick={function () { goToContactUsPage(); }} className="relative group cursor-pointer hover:text-amber-300">
                            Contact Us
                            <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                        </div>

                        {/* DESKTOP CART */}
                        <div onClick={function () { goToEcomStore(); }} className="relative group cursor-pointer hover:text-amber-300 flex items-center gap-2">
                            <div className="relative">
                                <FiShoppingCart size={22} />
                                <span className="absolute -top-2 -right-2 bg-[#b08812] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border border-black/20">3</span>
                            </div>
                            <span>Cart</span>
                            <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                        </div>
                    </div>

                    {/* --- MOBILE: CART RIGHT --- */}
                    <div className="md:hidden flex items-center">
                        <div onClick={function () { goToEcomStore() }} className="relative text-[#d4b469] p-1">
                            <FiShoppingCart size={24} />
                            <span className="absolute -top-2 -right-2 bg-[#b08812] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-black">3</span>
                        </div>
                    </div>

                </div>
            </nav>

            {/* --- MOBILE MENU DRAWER --- */}
            <div
                className={`
                    fixed inset-0 z-100 bg-[#050505] transition-transform duration-500 ease-in-out md:hidden flex flex-col
                    ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#b08812]/20">
                    <span className={`${playfair.className} text-2xl text-[#d4b469] font-bold tracking-wide`}>Menu</span>
                    <button
                        onClick={function () { setMobileMenuOpen(false); }}
                        className="text-[#d4b469] p-2 hover:bg-white/5 rounded-full transition-colors"
                    >
                        <AiOutlineClose size={28} />
                    </button>
                </div>

                {/* Mobile Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2 text-white text-lg scrollbar-hide">

                    <div onClick={function () { goToHomePage(); }} className={`flex items-center gap-4 py-4 border-b border-white/5 cursor-pointer hover:text-[#d4b469] transition-colors ${playfair.className}`}>
                        <FaHome size={20} className="text-[#d4b469]" />
                    </div>

                    <div onClick={function () { goToAboutUsPage(); }} className={`py-4 border-b border-white/5 cursor-pointer hover:text-[#d4b469] transition-colors ${playfair.className} text-xl`}>About Us</div>

                    {/* Mobile Products Accordion */}
                    <div className="border-b border-white/5 py-2">
                        <div
                            onClick={function () { setMobileProductsOpen(!mobileProductsOpen); }}
                            className="flex items-center justify-between py-3 cursor-pointer group"
                        >
                            <span className={`${playfair.className} text-xl group-hover:text-[#d4b469] transition-colors`}>Our Products</span>
                            <div className={`p-2 rounded-full transition-colors ${mobileProductsOpen ? 'bg-[#d4b469]/20' : ''}`}>
                                <FaChevronDown className={`text-[#d4b469] transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} size={14} />
                            </div>
                        </div>

                        {/* Visual Grid for Mobile Products */}
                        <div className={`grid grid-cols-2 gap-3 mt-2 overflow-hidden transition-all duration-500 ease-in-out ${mobileProductsOpen ? "max-h-[1200px] opacity-100 pb-4" : "max-h-0 opacity-0"}`}>

                            {/* MAP OVER DATA FOR MOBILE */}
                            {productMenuItems.map(function (item, idx) {
                                return (
                                    <div
                                        key={idx}
                                        onClick={function () { goToCategory(item.defaultLink); }}
                                        className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer border border-white/10 shadow-lg"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Overlay with Text */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-3">
                                            <p className="text-[#d4b469] text-xs font-bold uppercase tracking-wider text-center">{item.title}</p>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* View All Button */}
                            <div onClick={function () { goToCategory("all"); }} className="col-span-2 bg-[#d4b469]/10 border border-[#d4b469]/30 rounded-lg flex items-center justify-center py-3 mt-2 cursor-pointer active:scale-95 transition-transform">
                                <span className="text-sm font-bold text-[#d4b469] flex items-center gap-2">View All Categories <FaArrowRight /></span>
                            </div>
                        </div>
                    </div>


                    <div onClick={function () { goToProjectsPage(); }} className={`py-4 border-b border-white/5 cursor-pointer hover:text-[#d4b469] transition-colors ${playfair.className} text-xl`}>Projects</div>

                    <div onClick={function () { goToBlogsPage(); }} className={`py-4 border-b border-white/5 cursor-pointer hover:text-[#d4b469] transition-colors ${playfair.className} text-xl`}>Blogs</div>
                    <div onClick={function () { goToContactUsPage(); }} className={`py-4 border-b border-white/5 cursor-pointer hover:text-[#d4b469] transition-colors ${playfair.className} text-xl`}>Contact Us</div>

                </div>

                {/* Mobile Bottom Action */}
                <div className="p-6 bg-[#0a0a0a] border-t border-[#b08812]/20 pb-10">
                    <button
                        onClick={function () { goToEcomStore(); }}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-linear-to-r from-[#F2E5C4] via-[#D5B67A] to-[#A8833F] text-[#111111] font-bold shadow-[0_4px_20px_rgba(176,136,18,0.3)] active:scale-95 transition-transform"
                    >
                        <FiShoppingCart size={22} />
                        <span className={`${playfair.className} text-lg tracking-wide font-bold`}>Shop Online</span>
                    </button>
                </div>
            </div>


            {/* --- MEGA SECTION CONTAINER (DESKTOP) --- */}
            {activeMenu === "products" && !mobileMenuOpen && (
                <div
                    className="
                        fixed left-0 top-[132px] w-full
                        bg-[rgba(10,10,10,0.65)]
                        backdrop-blur-md
                        text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)]
                        border-t border-[#8f7c45]/40
                        z-9999 animate-slideDown
                        h-[80vh] hidden md:block
                        overflow-y-auto pb-10
                    "
                >
                    <div className="max-w-6xl mx-auto p-2 relative">

                        <button
                            onClick={function () { setActiveMenu("") }}
                            className="
                                absolute top-3 right-[-100px]
                                text-[#D4AF37]
                                font-black
                                text-2xl
                                flex items-center justify-center
                                transition-all duration-200
                                hover:cursor-pointer
                            "
                        >
                            <AiOutlineClose size={32} />
                        </button>

                        {/* GRID */}
                        <div className="grid grid-cols-4 gap-x-10 gap-y-10 mt-6">

                            {/* DYNAMIC MAP OF CATEGORIES */}
                            {productMenuItems.map((category, index) => (
                                <div key={index}>
                                    <h3 className="font-bold mb-3 text-[#fac21e] uppercase tracking-wide">
                                        {category.title}
                                    </h3>
                                    {/* Reduced height from 140px to 110px to save vertical space */}
                                    <div className="w-[140px] h-[130px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            width={130}
                                            height={110}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <ul className="text-base space-y-1">
                                        {category.items.map((subItem, subIndex) => (
                                            <li
                                                key={subIndex}
                                                onClick={() => goToCategory(subItem.query)}
                                                className="cursor-pointer hover:text-[#8f7c45] whitespace-nowrap"
                                            >
                                                {subItem.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* 8. Others (Static link at the end) */}
                            <div className="flex items-center justify-start mt-10">
                                <h3 className="text-lg md:text-xl font-bold uppercase text-[#fac21e] tracking-wider flex items-center gap-2 cursor-pointer hover:text-white transition">
                                    Others <FaArrowRight size={18} />
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}