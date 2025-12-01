"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaChevronDown, FaHome } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
// import { RxCross2 } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";


// playfir font
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["600"], 
});



export default function Navbar() {

    const router = useRouter();

    // which dropdown is active
    const [activeMenu, setActiveMenu] = useState("");

    // Scroll hide/show behavior
    const [lastScroll, setLastScroll] = useState(0);
    const [hideNav, setHideNav] = useState(false);


    // special mouse tracking - when the user move cursor to top of the product it should close the product drop down - but curently if we just add onmouseleave it will also close when user move below the product
    const [lastY, setLastY] = useState(0);

    function handleMouseMove(e) {
        setLastY(e.clientY);
    }

    function handleMouseLeave(e) {
        if (e.clientY < lastY) {
            // user moved UP
            setActiveMenu("");
        }
    }

    useEffect(function () {
        function handleScroll() {
            var currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 70) {
                setHideNav(true);
            } else {
                setHideNav(false);
            }

            setLastScroll(currentScroll);
        }

        window.addEventListener("scroll", handleScroll);

        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll]);

    // Routing helper for product category to product page
    function goToCategory(category) {
        router.push("/products?category=" + category);
        setActiveMenu("");
    }

    // move from navbar to  contact us page
    function goToContactUsPage() {
        router.push("/contact-us");
        setActiveMenu("");
    }

    // redirect user from navbar to about us page.
    function goToAboutUsPage() {
        router.push("/about-us");
        setActiveMenu("");
    }

    // redirect to user when user click the logo & redirect user to home page when user click home icon 
    function goToHomePage() {
        router.push("/");
        setActiveMenu("");
    }



    // redirect user to blog page when user click blogs
    function goToBlogsPage() {
        router.push("/blogs");
        setActiveMenu("");
    }

    // ecom store
    function goToEcomStore(){
        router.push("/store");
        setActiveMenu("");
    }


    // for scrolled behaviour of navbar
    const [scrolled, setScrolled] = useState(false);

    useEffect(function () {
        function handleScroll() {

            // If dropdown is open- keep navbar visible and stop hiding logic
            if (activeMenu === "products") {
                setHideNav(false);
                return;
            }

            var currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 70) {
                setHideNav(true);
            } else {
                setHideNav(false);
            }

            setLastScroll(currentScroll);
        }

        window.addEventListener("scroll", handleScroll);
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll, activeMenu]);


    return (

        // close mega on leaving
        <div
            onMouseLeave={function () { setActiveMenu("") }}
            className="relative">

            {/* NAVBAR MAIN */}
            {/* <nav
                className={
                    "fixed top-0 left-0 w-full z-50 text-white px-0 pt-1.5 pb-1 transition-transform duration-300 " +
                    (hideNav ? "-translate-y-full" : "translate-y-0") +
                    " bg-[rgba(10,10,10,0.7)] backdrop-blur-md border-b-2 border-[rgba(143,124,69,0.5)]"
                }
            > */}

            {/* new navbar -- on scroll down behaviour */}
            <nav
                className={
                    `fixed top-0 left-0 w-full z-50 px-0 pt-1.5 pb-1 transition-all duration-500
                    ${hideNav ? "-translate-y-full" : "translate-y-0"}
                    ${scrolled
                        ? "bg-white/10 backdrop-blur-lg text-[#d4b469] border-b-2 border-[#b08812]/90"
                        : "bg-black/90 text-white border-b-2  border-[#b08812] "
                    }`
                }
            >
                <div className="flex items-center justify-between max-w-8xl">

                    {/* LOGO */}
                    <div className="text-xl font-bold cursor-pointer">
                        {/* added dwars logo */}

                        {/* error was smallcase l instead of upper case L */}
                        <Image
                            src="/Dwars-Logo-new.png"
                            alt="Website Logo"
                            width={120}
                            height={50}
                            priority
                            onClick={function (){goToHomePage();}}
                        />
                    </div>

                    {/* NAV LINKS */}
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="flex items-center gap-6 text-xl mr-10">

                        <div
                            onClick={function () { goToHomePage() }}
                            className="flex items-center gap-1 cursor-pointer hover:text-amber-300">
                            <FaHome size={26} />
                        </div>

                        <div
                            onMouseEnter={function () { setActiveMenu("about"); }}
                            onClick={function () { goToAboutUsPage(); }}
                            className="relative group cursor-pointer hover:text-amber-300"
                        >
                            About Us
                            {/* <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 group-hover:w-full"></span> */}

                            <span
                                className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"
                            ></span>
                        </div>

                        <div
                            onMouseEnter={function () { setActiveMenu("products"); }}
                            className="relative group cursor-pointer hover:text-amber-300 flex items-center gap-2"
                        >
                            Products
                            {/* <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 group-hover:w-full"></span> */}

                            <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>

                            {/* Dropdown arrow rotates when open */}
                            <FaChevronDown
                                className={
                                    "transition-transform duration-300 " +
                                    (activeMenu==="products" ? "rotate-180" : "rotate-0")
                                }
                                size={13}
                            />
                        </div>

                        {/* <div
                            onMouseEnter={function () { setActiveMenu("signature"); }}
                            className="relative group cursor-pointer hover:text-amber-300"
                        >
                            Signature Series

                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 group-hover:w-full"></span>

                        </div> */}

                        <div
                            onMouseEnter={function () { setActiveMenu("blogs"); }}
                            onClick={function callback() { goToBlogsPage(); }}
                            className="relative group cursor-pointer hover:text-amber-300"
                        >
                            Blogs

                            {/* <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 group-hover:w-full"></span> */}
                            <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>

                        </div>

                        <div
                            onMouseEnter={function () { setActiveMenu("contact"); }}
                            onClick={function () { goToContactUsPage(); }}
                            className="relative group cursor-pointer hover:text-amber-300"
                        >
                            Contact Us
                            {/* <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 group-hover:w-full"></span> */}
                            <span className="absolute left-1/2 -bottom-0.5 h-[0.9px] w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>

                        </div>

                        {/* <div
                            onClick={function () { console.log("go to cart"); }}
                            className="relative cursor-pointer hover:text-amber-300"
                        >
                            <FiShoppingCart size={26} />

                            <span className="absolute -top-1 -right-2 bg-[#fac21e]  text-black text-xs font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full">
                                3
                            </span>
                        </div> */}

                        {/* {bg - gradient - to - b from-[#A67C43] via-[#FDF3B3] to-[#A67C43]} */}
                        {/* // bg-linear-to-r from-[#d4b469] via-[#e6c979] to-[#c9a65a] */}


                        {/* new Cart with shop online button */}
                        <div
                            onClick={function (){goToEcomStore();}}
                            className="
                                group relative flex items-center gap-3 cursor-pointer select-none
                                px-8 py-3 rounded-full
                                bg-linear-to-b from-[#F2E5C4] via-[#D5B67A] to-[#A8833F]
                                border-2 border-[#F7E7C6]
                                shadow-[inset_0_0_1px_1px_#6A532A,0_0_18px_rgba(213,182,122,0.35)]
                                transition-all duration-300
                                hover:brightness-110 hover:-translate-y-px
                                overflow-hidden
                            "
                        >

                            {/* Shine Effect */}
                            <span
                                className="
                                    absolute inset-0 rounded-full pointer-events-none
                                    bg-linear-to-r from-transparent via-white/30 to-transparent
                                    opacity-0 group-hover:opacity-100
                                    animate-shine
                                "
                            />

                            {/* Cart Icon + Badge */}
                            <span className="relative flex items-center">
                                <FiShoppingCart
                                    size={26}
                                    strokeWidth={1.5}
                                    className="
                                    text-[#A8833F]
                                    transition-all duration-300
                                    group-hover:drop-shadow-[0_0_8px_#A8833F]
                                "
                                />

                                <span
                                    className="
                                    absolute -top-2 -right-2
                                    bg-black text-white text-[10px] font-bold
                                    w-5 h-5 flex items-center justify-center rounded-full
                                    shadow-[0_0_6px_rgba(0,0,0,0.7)]
                                    "
                                >
                                    3
                                </span>
                            </span>

                            {/* Text */}
                            <span
                                className={`${playfair.className} tracking-wide text-[20px] text-[#111111] font-semibold`}
                            >
                                Shop Online
                            </span>
                        </div>


                    </div>
                </div>
            </nav>

            {/* MEGA SECTION CONTAINER */}
            {activeMenu === "products" && (
                // we can change blurr container height -- if asked
                <>
                    {/* <div className="mt-33 mb-50 border-2 border-blue-800 w-full h-[5vh]"></div> */}
                    <div
                        className="
                            fixed left-0 top-[132px] w-full
                            bg-[rgba(10,10,10,0.65)]
                            backdrop-blur-md
                            text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)]
                            border-t border-[#8f7c45]/40
                            z-[9999] animate-slideDown
                            h-[77vh]
                    "
                    >
                        <div className="max-w-7xl mx-auto p-0">

                            {/* ABOUT US SECTION */}
                            {/* {activeMenu === "about" && (
                            <div className="text-center max-w-6xl mx-auto py-12 h-[85vh]">
                                <h2 className="text-3xl text-[#fac21e]  font-semibold">
                                    About The Dwars
                                </h2>
                                <p className="text-gray-300 mt-4 text-base leading-relaxed">
                                    Since 2017, crafting luxury designer metal architecture — wrought iron doors,
                                    artistic railings & precision structural elements for premium spaces.
                                </p>

                            </div>
                        )} */}

                            {/* PRODUCTS SECTION */}
                            {activeMenu === "products" && (
                                <div className="max-w-6xl mx-auto p-2 relative">

                                    {/* Close Button */}
                                    {/* <button
                                        onClick={() => setActiveMenu("")}
                                        className="
                                            absolute top-3 right-[-100] 
                                            bg-[#d4b469]/10 
                                            hover:bg-[#d4b469]/40 
                                            backdrop-blur-sm 
                                            text-[#d4b469] 
                                            hover:text-white
                                            w-10 h-10 
                                            flex items-center justify-center 
                                            rounded-full 
                                            transition-all duration-300 
                                            shadow-[0_0_12px_rgba(212,180,105,0.5)]
                                            hover:cursor-pointer
                                        "
                                    >
                                        ✕
                                    </button> */}

                                    <button
                                        onClick={() => setActiveMenu("")}
                                        className="
                                            absolute top-3 right-[-100]
                                            text-[#D4AF37]
                                            font-[900]
                                            text-2xl
                                            flex items-center justify-center
                                            transition-all duration-200
                                            hover:cursor-pointer
                                        "
                                    >
                                        {/* <RxCross2 size={32} /> */}
                                        <AiOutlineClose size={32} />
                                    </button>




                                    {/* GRID */}
                                    <div className="grid grid-cols-4 gap-x-10 gap-y-10">


                                        {/* 1. Boundary Wall Doors */}
                                        <div>
                                            <h3 className="font-bold mb-3 text-[#fac21e]  uppercase tracking-wide">
                                                Boundary Wall Doors
                                            </h3>
                                            <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                                <Image
                                                    src="/product-image.jpg"
                                                    alt=""
                                                    width={130}
                                                    height={110}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <ul className=" text-base">
                                                <li
                                                    onClick={function () { goToCategory("Royal Entrance"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Royal Entrance
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Modern doors"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Modern Doors
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Modern doors"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Ornamental Iron
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Modern doors"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Laser Cut
                                                </li>
                                            </ul>
                                        </div>

                                        {/* 2. Brass Railings */}
                                        <div>
                                            <h3 className="font-bold mb-3 text-[#fac21e]  uppercase tracking-wide">
                                                Brass Railings
                                            </h3>
                                            <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                                <Image
                                                    // src="/wrought-iron-doors.png"
                                                    src="/product-image.jpg"
                                                    alt=""
                                                    width={130}
                                                    height={110}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <ul className="space-y-1 text-base">
                                                <li
                                                    onClick={function () { goToCategory("Single Door"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Single Door
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Double Door"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Double Door
                                                </li>
                                            </ul>
                                        </div>

                                        {/* 3. Staircase Railings */}
                                        <div>
                                            <h3 className="font-bold mb-3 text-[#fac21e]  uppercase tracking-wide">
                                                Staircase Railings
                                            </h3>
                                            <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                                <Image
                                                    // src="/stair-case-railings.png"
                                                    src="/product-image.jpg"
                                                    alt=""
                                                    width={130}
                                                    height={110}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <ul className="space-y-1 text-base">
                                                <li
                                                    onClick={function () { goToCategory("Single Door"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Single Door
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Double Door"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Double Door
                                                </li>
                                            </ul>
                                        </div>

                                        {/* 4. Flat Entrance Doors */}
                                        <div>
                                            <h3 className="font-bold mb-3 text-[#fac21e]  uppercase tracking-wide">
                                                Flat Entrance Doors
                                            </h3>
                                            <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                                <Image
                                                    // src="/flat-entrance.png"
                                                    src="/product-image.jpg"
                                                    alt=""
                                                    width={130}
                                                    height={110}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <ul className="space-y-1 text-base">
                                                <li
                                                    onClick={function () { goToCategory("Modern"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Modern
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Wrough iron"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Wrought Iron
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Ornamental"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Ornamental
                                                </li>
                                            </ul>
                                        </div>

                                        {/* 5. Entry Doors */}
                                        <div>
                                            <h3 className="font-bold mb-3 text-[#fac21e]  uppercase tracking-wide">
                                                Entry Doors
                                            </h3>
                                            <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                                <Image
                                                    // src="/royal-entry-doors.jpg"
                                                    src="/product-image.jpg"
                                                    alt=""
                                                    width={130}
                                                    height={110}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <ul className="space-y-1 text-base">
                                                <li
                                                    onClick={function () { goToCategory("Modern"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Modern
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Wrought iron"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Wrought Iron
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Ornamental"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Ornamental
                                                </li>
                                            </ul>
                                        </div>

                                        {/* 6. Balcony Railings */}
                                        <div>
                                            <h3 className="font-bold mb-3 text-[#fac21e]  uppercase tracking-wide">
                                                Balcony Railings
                                            </h3>
                                            <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                                <Image
                                                    // src="/Balcony-railings.png"
                                                    src="/product-image.jpg"
                                                    alt=""
                                                    width={130}
                                                    height={110}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <ul className="space-y-1 text-base">
                                                <li
                                                    onClick={function () { goToCategory("Flat design"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Flat Design
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Textured design"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Textured Design
                                                </li>
                                            </ul>
                                        </div>

                                        {/* 7. Planters */}
                                        <div>
                                            <h3 className="font-bold mb-3 text-[#fac21e]  uppercase tracking-wide">
                                                Planters
                                            </h3>
                                            <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                                <Image
                                                    // src="/desiginer-entry-gates1.jpg"
                                                    src="/product-image.jpg"
                                                    alt=""
                                                    width={130}
                                                    height={110}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <ul className="space-y-1 text-base">
                                                <li
                                                    onClick={function () { goToCategory("Gold coated"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Gold Coated
                                                </li>
                                                <li
                                                    onClick={function () { goToCategory("Laser designed"); }}
                                                    className="cursor-pointer hover:text-[#8f7c45]"
                                                >
                                                    Laser Designed
                                                </li>
                                            </ul>
                                        </div>

                                        {/* 8. Others */}
                                        <div className="flex items-center justify-start mt-10">
                                            <h3 className="text-lg md:text-xl font-bold uppercase text-[#fac21e]  tracking-wider flex items-center gap-2 cursor-pointer hover:text-white transition">
                                                Others <FaArrowRight size={18} />
                                            </h3>
                                        </div>

                                    </div>
                                </div>
                                // </div>
                            )}

                            {/* SIGNATURE SECTION */}
                            {/* {activeMenu === "signature" && (
                            <div className="text-center max-w-3xl mx-auto py-12">
                                <h2 className="text-3xl text-[#fac21e]  font-semibold">Signature Collection</h2>
                                <p className="text-gray-300 mt-4 text-base">Exclusive handcrafted masterpieces for elite luxury projects.</p>
                            </div>
                        )} */}

                            {/* BLOG SECTION */}
                            {/* {activeMenu === "blogs" && (
                            <div className="text-center max-w-3xl mx-auto py-12">
                                <h2 className="text-3xl text-[#fac21e]  font-semibold">Insights & Inspiration</h2>
                                <p className="text-gray-300 mt-4 text-base">Design trends, fabrication science & architectural innovation.</p>
                            </div>
                        )} */}

                            {/* CONTACT SECTION */}
                            {/* {activeMenu === "contact" && (
                            <div className="text-center max-w-3xl mx-auto py-12">
                                <h2 className="text-3xl text-[#fac21e]  font-semibold">Let’s Build Together</h2>
                                <p className="text-gray-300 mt-4 text-base">Call / WhatsApp: +91 98765 43210 | support@thedwars.com</p>
                            </div>
                        )} */}

                        </div>
                    </div>
                </>

            )}

        </div>
    );
}



