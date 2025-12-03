// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import "../../styles/hero-swiper.css";
// import Image from "next/image";

// function HeroSection() {
//     var slides = [
//         {
//             title: "Premium Craftsmanship",
//             description: "Discover premium craftsmanship with royal golden elegance.",
//             image: "/desiginer-entry-gates1.jpg",
//             bgImage: "/task-2-bg-3.jpg"
//         },
//         {
//             title: "Experience Modern Luxury",
//             description: "Handcrafted designs made with precision and heritage.",
//             image: "/royal-entry-doors.jpg",
//             bgImage: "/task-2-bg-3.jpg",
//         },
//         {
//             title: "Elegance That Speaks",
//             description: "Luxury collections created for your most special moments.",
//             image: "/flat-entrance.png",
//             bgImage: "/task-2-bg-3.jpg"
//         }
//     ];

//     function renderSlides() {
//         return slides.map(function (item, index) {
//             return (
//                 <SwiperSlide key={index}>
//                     {/* Whole slide moves — background and content together */}
//                     <div className="hero-slide relative min-h-[85vh] md:min-h-screen flex items-center md:mt-20">

//                         {/* Background for THIS slide */}
//                         <div
//                             className="hero-slide-bg absolute inset-0 bg-cover bg-center z-0"
//                             style={{ backgroundImage: `url(${item.bgImage})` }}
//                         />

//                         {/* Overlay (Optional: makes text pop on mobile backgrounds) */}
//                         <div className="absolute inset-0 bg-black/40 z-0"></div>

//                         {/* Content Container */}
//                         <div className="relative z-10 w-full max-w-8xl mx-auto px-6 py-12 md:px-8 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mt-[60px] md:mt-0">

//                             {/* LEFT text */}
//                             <div className="w-full md:w-1/2 space-y-4 md:space-y-6 hero-text-animate text-center md:text-left">
//                                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fac21e] leading-tight drop-shadow-md">
//                                     {item.title}
//                                 </h1>

//                                 <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
//                                     {item.description}
//                                 </p>

//                                 <div className="flex justify-center md:justify-start pt-2">
//                                     <button
//                                         className="
//                                             relative px-8 py-3 font-semibold text-black rounded-full
//                                             bg-gradient-to-r from-[#F7E9A8] via-[#E2BB55] to-[#B97B20]
//                                             hover:from-[#FFF3C9] hover:via-[#EAC46A] hover:to-[#C88A28]
//                                             shadow-[0_3px_15px_rgba(255,214,94,0.25)]
//                                             hover:shadow-[0_0_18px_4px_rgba(255,215,90,0.35)]
//                                             transition-all duration-300 ease-out hover:scale-[1.04]
//                                             border border-[#f4d98e]/40
//                                             tracking-wide hover:cursor-pointer
//                                         "
//                                     >
//                                         Explore Collection
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* RIGHT IMAGE */}
//                             <div className="w-full md:w-1/2 flex justify-center hero-image-animate mt-4 md:mt-0">
//                                 <div className="
//                                     w-full max-w-sm md:max-w-xl 
//                                     h-[320px] sm:h-[400px] md:h-[590px]
//                                     relative rounded-2xl md:rounded-3xl overflow-hidden
//                                     bg-black
//                                     shadow-[0_0_25px_rgba(255,215,0,0.2)]
//                                     border border-[#8f7c45]/40
//                                     animate-fadeIn
//                                 ">
//                                     <Image
//                                         src={item.image}
//                                         alt={item.title}
//                                         fill
//                                         className="object-cover rounded-2xl md:rounded-3xl hover:scale-105 transition-transform duration-700"
//                                         priority={index === 0} // Load first image faster
//                                     />
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </SwiperSlide>
//             );
//         });
//     }

//     return (
//         <section className="hero-section-outer border-none">
//             <Swiper
//                 modules={[Autoplay, Pagination]}
//                 loop={true}
//                 autoplay={{ delay: 4500 }}
//                 speed={900}
//                 pagination={{ clickable: true }}
//                 className="hero-swiper"
//             >
//                 {renderSlides()}
//             </Swiper>
//         </section>
//     );
// }

// export default HeroSection;


// making it now responsive for tablet screens

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "../../styles/hero-swiper.css";
import Image from "next/image";

function HeroSection() {
    var slides = [
        {
            title: "Premium Craftsmanship",
            description: "Discover premium craftsmanship with royal golden elegance.",
            image: "/desiginer-entry-gates1.jpg",
            bgImage: "/task-2-bg-3.jpg"
        },
        {
            title: "Experience Modern Luxury",
            description: "Handcrafted designs made with precision and heritage.",
            image: "/royal-entry-doors.jpg",
            bgImage: "/task-2-bg-3.jpg",
        },
        {
            title: "Elegance That Speaks",
            description: "Luxury collections created for your most special moments.",
            image: "/flat-entrance.png",
            bgImage: "/task-2-bg-3.jpg"
        }
    ];

    function renderSlides() {
        return slides.map(function (item, index) {
            return (
                <SwiperSlide key={index}>
                    {/* Whole slide moves — background and content together */}
                    <div className="hero-slide relative min-h-[85vh] lg:min-h-screen flex items-center md:mt-10 lg:mt-20">

                        {/* Background for THIS slide */}
                        <div
                            className="hero-slide-bg absolute inset-0 bg-cover bg-center z-0"
                            style={{ backgroundImage: `url(${item.bgImage})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 z-0"></div>

                        {/* Content Container */}
                        {/* CHANGED: flex-col by default, only switches to flex-row at lg (Large Desktop) */}
                        <div className="relative z-10 w-full max-w-8xl mx-auto px-6 py-12 md:px-12 md:py-16 lg:px-8 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12 mt-[60px] lg:mt-0">

                            {/* LEFT text */}
                            {/* CHANGED: Text stays centered on Tablet (md), goes left on Desktop (lg) */}
                            {/* CHANGED: Width is full on Tablet, half on Desktop */}
                            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 hero-text-animate text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#fac21e] leading-tight drop-shadow-md">
                                    {item.title}
                                </h1>

                                <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg md:max-w-2xl mx-auto lg:mx-0">
                                    {item.description}
                                </p>

                                {/* Button Alignment */}
                                <div className="flex justify-center lg:justify-start pt-2">
                                    <button
                                        className="
                                            relative px-8 py-3 font-semibold text-black rounded-full
                                            bg-gradient-to-r from-[#F7E9A8] via-[#E2BB55] to-[#B97B20]
                                            hover:from-[#FFF3C9] hover:via-[#EAC46A] hover:to-[#C88A28]
                                            shadow-[0_3px_15px_rgba(255,214,94,0.25)]
                                            hover:shadow-[0_0_18px_4px_rgba(255,215,90,0.35)]
                                            transition-all duration-300 ease-out hover:scale-[1.04]
                                            border border-[#f4d98e]/40
                                            tracking-wide hover:cursor-pointer
                                        "
                                    >
                                        Explore Collection
                                    </button>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            {/* CHANGED: Width full on tablet, half on desktop */}
                            <div className="w-full lg:w-1/2 flex justify-center hero-image-animate mt-4 lg:mt-0">
                                <div className="
                                    w-full max-w-sm md:max-w-md lg:max-w-xl 
                                    h-[320px] sm:h-[400px] md:h-[480px] lg:h-[590px]
                                    relative rounded-2xl md:rounded-3xl overflow-hidden
                                    bg-black
                                    shadow-[0_0_25px_rgba(255,215,0,0.2)]
                                    border border-[#8f7c45]/40
                                    animate-fadeIn
                                ">
                                    {/* Image Height Logic:
                                        Mobile: 320px
                                        Small Mobile: 400px
                                        Tablet (md): 480px (New adjustment for tablet)
                                        Desktop (lg): 590px (Original desktop size)
                                    */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover rounded-2xl md:rounded-3xl hover:scale-105 transition-transform duration-700"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            );
        });
    }

    return (
        <section className="hero-section-outer border-none">
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{ delay: 4500 }}
                speed={900}
                pagination={{ clickable: true }}
                className="hero-swiper"
            >
                {renderSlides()}
            </Swiper>
        </section>
    );
}

export default HeroSection;