// "use client";

// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// function Testimonials(props) {
//     let testimonials = props.data;

//     function renderMedia(item) {
//         if (item.type === "video") {
//             return (
//                 <video
//                     src={item.media}
//                     controls
//                     className="
//                         w-full h-[420px] md:h-[540px]
//                         rounded-3xl object-cover bg-black
//                         border border-[#8f7c45]/50
//                         shadow-[0_0_50px_rgba(255,215,0,0.25)]
//                         transition-transform duration-500 hover:scale-105
//                     "
//                 />
//             );
//         }

//         return (
//             <div
//                 className="
//                     w-full h-[420px] md:h-[540px]
//                     relative rounded-3xl overflow-hidden bg-black
//                     border border-[#8f7c45]/50
//                     shadow-[0_0_50px_rgba(255,215,0,0.25)]
//                     transition-transform duration-500 hover:scale-105
//                 "
//             >
//                 <Image
//                     src={item.media}
//                     alt={item.name}
//                     fill
//                     className="object-cover"
//                 />
//             </div>
//         );
//     }

//     function renderSlide(item, index) {
//         return (
//             <SwiperSlide key={index}>
//                 <div className={`
//                     flex flex-col md:flex-row
//                     items-center justify-between
//                     gap-12 md:gap-24
//                     px-4 md:px-16 py-12
//                     w-full
//                     rounded-3xl
//                     border border-[#8f7c45]/30
//                     shadow-[0_0_60px_rgba(255,215,0,0.15)]
//                     bg-linear-to-b ${index % 2 === 0 ? 'from-[#1a1a1a] to-[#000000]/90' : 'from-[#111] to-[#1a1a1a]'}
//                 `}>
//                     {/* LEFT MEDIA */}
//                     <div className="w-full md:w-1/2 flex justify-center">
//                         {renderMedia(item)}
//                     </div>

//                     {/* RIGHT TEXT */}
//                     <div className="w-full md:w-1/2 space-y-6">
//                         <h3 className="text-3xl md:text-4xl font-bold text-[#fac21e] font-fraunces">
//                             {item.heading}
//                         </h3>

//                         <p className="text-gray-300 leading-relaxed text-lg italic">
//                             “{item.testimonial}”
//                         </p>

//                         <div className="pt-4">
//                             <h4 className="text-xl font-semibold text-white">
//                                 {item.name}
//                             </h4>
//                             <p className="text-gray-400 text-sm mt-1">
//                                 {item.designation}, {item.company}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </SwiperSlide>
//         );
//     }

//     return (
//         <section className="w-full min-h-[90vh] bg-black text-white py-28 relative overflow-visible">
//             <div className="max-w-full mx-auto px-6">
//                 {/* Section Heading */}
//                 <h2 className="
//                     text-center text-4xl md:text-5xl font-bold mb-16
//                     bg-[#fac21e]
//                     bg-clip-text text-transparent
//                     font-fraunces tracking-wide
//                 ">
//                     What Our Clients Say
//                 </h2>

//                 <Swiper
//                     modules={[Autoplay, Pagination]}
//                     autoplay={{ delay: 4500 }}
//                     speed={900}
//                     loop={true}
//                     pagination={{ clickable: true }}
//                     className="w-full"
//                 >
//                     {testimonials.map(function (item, index) {
//                         return renderSlide(item, index);
//                     })}
//                 </Swiper>
//             </div>
//         </section>
//     );
// }

// export default Testimonials;



// making it mobile responsive - (mobile+laptop)
// "use client";

// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// function Testimonials(props) {
//     let testimonials = props.data;

//     function renderMedia(item) {
//         // Shared classes for both Image and Video
//         // Mobile: h-[300px] (Shorter, easier to see text below)
//         // Desktop: md:h-[540px] (Your original tall size)
//         const mediaClasses = `
//             w-full h-[300px] md:h-[540px]
//             rounded-3xl object-cover bg-black
//             border border-[#8f7c45]/50
//             shadow-[0_0_50px_rgba(255,215,0,0.25)]
//             transition-transform duration-500 hover:scale-105
//         `;

//         if (item.type === "video") {
//             return (
//                 <video
//                     src={item.media}
//                     controls
//                     className={mediaClasses}
//                 />
//             );
//         }

//         return (
//             <div className={`relative overflow-hidden ${mediaClasses}`}>
//                 <Image
//                     src={item.media}
//                     alt={item.name}
//                     fill
//                     className="object-cover"
//                 />
//             </div>
//         );
//     }

//     function renderSlide(item, index) {
//         return (
//             <SwiperSlide key={index}>
//                 <div className={`
//                     flex flex-col md:flex-row
//                     items-center justify-between
                    
//                     /* Mobile: Tighter spacing (gap-8) & padding (p-6) */
//                     /* Desktop: Larger spacing (md:gap-24) & padding (md:px-16) */
//                     gap-8 px-6 py-8
//                     md:gap-24 md:px-16 md:py-12
                    
//                     w-full
//                     rounded-3xl
//                     border border-[#8f7c45]/30
//                     shadow-[0_0_60px_rgba(255,215,0,0.15)]
//                     bg-linear-to-b ${index % 2 === 0 ? 'from-[#1a1a1a] to-[#000000]/90' : 'from-[#111] to-[#1a1a1a]'}
//                 `}>
//                     {/* LEFT MEDIA */}
//                     <div className="w-full md:w-1/2 flex justify-center">
//                         {renderMedia(item)}
//                     </div>

//                     {/* RIGHT TEXT */}
//                     {/* Mobile: Text Center | Desktop: Text Left */}
//                     <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
//                         <h3 className="text-2xl md:text-4xl font-bold text-[#fac21e] font-fraunces">
//                             {item.heading}
//                         </h3>

//                         <p className="text-gray-300 leading-relaxed text-base md:text-lg italic">
//                             “{item.testimonial}”
//                         </p>

//                         <div className="pt-2 md:pt-4">
//                             <h4 className="text-lg md:text-xl font-semibold text-white">
//                                 {item.name}
//                             </h4>
//                             <p className="text-gray-400 text-xs md:text-sm mt-1">
//                                 {item.designation}, {item.company}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </SwiperSlide>
//         );
//     }

//     return (
//         <section className="w-full min-h-[90vh] bg-black text-white py-16 md:py-28 relative overflow-visible">
//             <div className="max-w-full mx-auto px-4 md:px-6">
//                 {/* Section Heading */}
//                 <h2 className="
//                     text-center text-3xl md:text-5xl font-bold mb-10 md:mb-16
//                     bg-[#fac21e]
//                     bg-clip-text text-transparent
//                     font-fraunces tracking-wide
//                 ">
//                     What Our Clients Say
//                 </h2>

//                 <Swiper
//                     modules={[Autoplay, Pagination]}
//                     autoplay={{ delay: 4500 }}
//                     speed={900}
//                     loop={true}
//                     pagination={{ clickable: true }}
//                     className="w-full pb-10" // Added pb-10 so pagination dots don't overlap content
//                 >
//                     {testimonials.map(function (item, index) {
//                         return renderSlide(item, index);
//                     })}
//                 </Swiper>
//             </div>
//         </section>
//     );
// }

// export default Testimonials;

//! now making it responsive for (tablet )


"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Testimonials(props) {
    let testimonials = props.data;

    function renderMedia(item) {
        // Shared classes for both Image and Video
        // LOGIC:
        // Mobile: h-[300px]
        // Tablet (md): h-[420px] (New intermediate size)
        // Desktop (lg): h-[540px] (Original desktop size moved to lg)
        const mediaClasses = `
            w-full 
            h-[300px] md:h-[420px] lg:h-[540px]
            rounded-3xl object-cover bg-black
            border border-[#8f7c45]/50
            shadow-[0_0_50px_rgba(255,215,0,0.25)]
            transition-transform duration-500 hover:scale-105
        `;

        if (item.type === "video") {
            return (
                <video
                    src={item.media}
                    controls
                    className={mediaClasses}
                />
            );
        }

        return (
            <div className={`relative overflow-hidden ${mediaClasses}`}>
                <Image
                    src={item.media}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>
        );
    }

    function renderSlide(item, index) {
        return (
            <SwiperSlide key={index}>
                <div className={`
                    flex flex-col 
                    /* CHANGED: Only switch to row on Large (lg) screens. Tablets (md) stay stacked. */
                    lg:flex-row
                    items-center justify-between
                    
                    /* SPACING LOGIC */
                    /* Mobile: */
                    gap-8 px-6 py-8
                    
                    /* Tablet (md): More padding than mobile, but kept compact */
                    md:gap-10 md:px-12 md:py-10
                    
                    /* Desktop (lg): Large spacing restored */
                    lg:gap-24 lg:px-16 lg:py-12
                    
                    w-full
                    rounded-3xl
                    border border-[#8f7c45]/30
                    shadow-[0_0_60px_rgba(255,215,0,0.15)]
                    bg-linear-to-b ${index % 2 === 0 ? 'from-[#1a1a1a] to-[#000000]/90' : 'from-[#111] to-[#1a1a1a]'}
                `}>
                    {/* LEFT MEDIA */}
                    {/* Width: Full on Tablet, Half on Desktop */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        {renderMedia(item)}
                    </div>

                    {/* RIGHT TEXT */}
                    {/* Alignment: Center on Tablet, Left on Desktop */}
                    <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fac21e] font-fraunces">
                            {item.heading}
                        </h3>

                        <p className="text-gray-300 leading-relaxed text-base md:text-lg italic">
                            “{item.testimonial}”
                        </p>

                        <div className="pt-2 md:pt-4">
                            <h4 className="text-lg md:text-xl font-semibold text-white">
                                {item.name}
                            </h4>
                            <p className="text-gray-400 text-xs md:text-sm mt-1">
                                {item.designation}, {item.company}
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        );
    }

    return (
        <section className="w-full min-h-[90vh] bg-black text-white py-16 md:py-20 lg:py-28 relative overflow-visible">
            <div className="max-w-full mx-auto px-4 md:px-8 lg:px-6">
                {/* Section Heading */}
                <h2 className="
                    text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 lg:mb-16
                    bg-[#fac21e]
                    bg-clip-text text-transparent
                    font-fraunces tracking-wide
                ">
                    What Our Clients Say
                </h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4500 }}
                    speed={900}
                    loop={true}
                    pagination={{ clickable: true }}
                    className="w-full pb-10" // Added pb-10 so pagination dots don't overlap content
                >
                    {testimonials.map(function (item, index) {
                        return renderSlide(item, index);
                    })}
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials;