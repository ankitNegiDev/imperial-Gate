// // this is for image swiper -- and it will have swiper logic
// /**
//  * this imageSwiper component will expect a array of image on which the swiper logic will be written..
//  * we need a state - which will keep track of image ---like which one is the first and then which to show
//  */

// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function ImageSwiper(props) {
//     let images = props.images || [];

//     const [current, setCurrent] = useState(0);
//     const [open, setOpen] = useState(false);

//     function goNext() {
//         if (!images.length) return;
//         setCurrent(function (prev) {
//             return (prev + 1) % images.length;
//         });
//     }

//     function goPrev() {
//         if (!images.length) return;
//         setCurrent(function (prev) {
//             return (prev - 1 + images.length) % images.length;
//         });
//     }

//     function openLightbox() {
//         setOpen(true);
//     }

//     function closeLightbox() {
//         setOpen(false);
//     }

//     function renderMain() {
//         if (!images.length) {
//             return (
//                 <div className="flex items-center justify-center bg-gray-200 p-10 rounded-lg text-gray-600 font-semibold">
//                     No images found
//                 </div>
//             );
//         }

//         return (
//             <div
//                 className="relative inline-block cursor-pointer group"
//                 onClick={openLightbox}
//             >
//                 <Image
//                     src={images[current]}
//                     alt={"slide-" + current}
//                     width={800}
//                     height={600}
//                     className="rounded-lg shadow-lg object-contain transition-transform duration-300 group-hover:scale-[1.02] border-3 border-white"
//                 />

//                 <div className="absolute bottom-2 right-2 bg-black/60 text-white text-sm px-3 py-1 rounded">
//                     {current + 1}/{images.length}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <>
//             {/* Main Container (No border) */}
//             <div className="rounded-lg p-[5px] bg-black shadow-lg mt-6 w-[38rem] flex justify-center ">
//                 {renderMain()}
//             </div>

//             {/* FULLSCREEN LIGHTBOX */}
//             {open ? (
//                 <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm">

//                     <div className="relative w-[90%] h-[85%]">
//                         <Image
//                             src={images[current]}
//                             alt="full-screen-image"
//                             fill
//                             className="object-contain"
//                         />

//                         {/* Prev Button */}
//                         <button
//                             type="button"
//                             onClick={goPrev}
//                             className="
//                                 absolute left-6 top-1/2 -translate-y-1/2 
//                                 bg-white/15 backdrop-blur-md border border-white/20
//                                 hover:bg-white/30 hover:scale-110
//                                 transition p-4 rounded-full 
//                                 text-white text-3xl font-bold shadow-xl
//                             "
//                         >
//                             ‹
//                         </button>

//                         {/* Next Button */}
//                         <button
//                             type="button"
//                             onClick={goNext}
//                             className="
//                                 absolute right-6 top-1/2 -translate-y-1/2 
//                                 bg-white/15 backdrop-blur-md border border-white/20
//                                 hover:bg-white/30 hover:scale-110
//                                 transition p-4 rounded-full 
//                                 text-white text-3xl font-bold shadow-xl
//                             "
//                         >
//                             ›
//                         </button>

//                         {/* Close Button */}
//                         <button
//                             type="button"
//                             onClick={closeLightbox}
//                             className="
//                                 absolute top-6 right-6 
//                                 bg-white/20 backdrop-blur-md border border-white/30
//                                 hover:bg-white/40 hover:scale-110
//                                 transition p-3 rounded-full 
//                                 text-white text-2xl font-bold shadow-lg
//                                 hover:cursor-pointer
//                             "
//                         >
//                             ✕
//                         </button>
//                     </div>
//                 </div>
//             ) : null}
//         </>
//     );
// }


// responsive 


// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function ImageSwiper(props) {
//     let images = props.images || [];

//     const [current, setCurrent] = useState(0);
//     const [open, setOpen] = useState(false);

//     function goNext() {
//         if (!images.length) return;
//         setCurrent(function (prev) {
//             return (prev + 1) % images.length;
//         });
//     }

//     function goPrev() {
//         if (!images.length) return;
//         setCurrent(function (prev) {
//             return (prev - 1 + images.length) % images.length;
//         });
//     }

//     function openLightbox() {
//         setOpen(true);
//     }

//     function closeLightbox() {
//         setOpen(false);
//     }

//     function renderMain() {
//         if (!images.length) {
//             return (
//                 <div className="flex items-center justify-center bg-gray-200 p-10 rounded-lg text-gray-600 font-semibold">
//                     No images found
//                 </div>
//             );
//         }

//         return (
//             <div
//                 className="relative inline-block cursor-pointer group w-full"
//                 onClick={openLightbox}
//             >
//                 {/* Made Image responsive: w-full h-auto */}
//                 <Image
//                     src={images[current]}
//                     alt={"slide-" + current}
//                     width={800}
//                     height={600}
//                     className="w-full h-auto rounded-lg shadow-lg object-contain transition-transform duration-300 group-hover:scale-[1.02] border-3 border-white"
//                 />

//                 <div className="absolute bottom-2 right-2 bg-black/60 text-white text-sm px-3 py-1 rounded">
//                     {current + 1}/{images.length}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <>
//             {/* Main Container: Changed fixed width to responsive max-width */}
//             <div className="rounded-lg p-[5px] bg-black shadow-lg mt-6 w-full max-w-[38rem] flex justify-center mx-auto">
//                 {renderMain()}
//             </div>

//             {/* FULLSCREEN LIGHTBOX */}
//             {open ? (
//                 <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[110] backdrop-blur-sm">
//                     <div className="relative w-[95%] h-[85%] md:w-[90%]">
//                         <Image
//                             src={images[current]}
//                             alt="full-screen-image"
//                             fill
//                             className="object-contain"
//                         />

//                         {/* Prev Button */}
//                         <button
//                             type="button"
//                             onClick={goPrev}
//                             className="
//                                 absolute left-2 md:left-6 top-1/2 -translate-y-1/2 
//                                 bg-white/15 backdrop-blur-md border border-white/20
//                                 active:scale-95 md:hover:bg-white/30 md:hover:scale-110
//                                 transition p-3 md:p-4 rounded-full 
//                                 text-white text-xl md:text-3xl font-bold shadow-xl
//                             "
//                         >
//                             ‹
//                         </button>

//                         {/* Next Button */}
//                         <button
//                             type="button"
//                             onClick={goNext}
//                             className="
//                                 absolute right-2 md:right-6 top-1/2 -translate-y-1/2 
//                                 bg-white/15 backdrop-blur-md border border-white/20
//                                 active:scale-95 md:hover:bg-white/30 md:hover:scale-110
//                                 transition p-3 md:p-4 rounded-full 
//                                 text-white text-xl md:text-3xl font-bold shadow-xl
//                             "
//                         >
//                             ›
//                         </button>

//                         {/* Close Button */}
//                         <button
//                             type="button"
//                             onClick={closeLightbox}
//                             className="
//                                 absolute top-4 right-4 md:top-6 md:right-6 
//                                 bg-white/20 backdrop-blur-md border border-white/30
//                                 active:scale-95 md:hover:bg-white/40 md:hover:scale-110
//                                 transition p-2 md:p-3 rounded-full 
//                                 text-white text-lg md:text-2xl font-bold shadow-lg
//                                 hover:cursor-pointer
//                             "
//                         >
//                             ✕
//                         </button>
//                     </div>
//                 </div>
//             ) : null}
//         </>
//     );
// }


//! new 

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageSwiper(props) {
    let images = props.images || [];

    const [current, setCurrent] = useState(0);
    const [open, setOpen] = useState(false);

    // --- NEW: Reset to first image when the list changes ---
    useEffect(() => {
        setCurrent(0);
    }, [images]);

    function goNext() {
        if (!images.length) return;
        setCurrent(function (prev) {
            return (prev + 1) % images.length;
        });
    }

    function goPrev() {
        if (!images.length) return;
        setCurrent(function (prev) {
            return (prev - 1 + images.length) % images.length;
        });
    }

    function openLightbox() {
        setOpen(true);
    }

    function closeLightbox() {
        setOpen(false);
    }

    function renderMain() {
        if (!images.length) {
            return (
                <div className="flex items-center justify-center bg-gray-200 p-10 rounded-lg text-gray-600 font-semibold">
                    No images found
                </div>
            );
        }

        return (
            <div
                className="relative inline-block cursor-pointer group w-full"
                onClick={openLightbox}
            >
                {/* Made Image responsive: w-full h-auto */}
                <Image
                    src={images[current]}
                    alt={"slide-" + current}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-lg object-contain transition-transform duration-300 group-hover:scale-[1.02] border-3 border-white"
                />

                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-sm px-3 py-1 rounded">
                    {current + 1}/{images.length}
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Main Container */}
            <div className="rounded-lg p-[5px] bg-black shadow-lg mt-6 w-full max-w-[38rem] flex justify-center mx-auto">
                {renderMain()}
            </div>

            {/* FULLSCREEN LIGHTBOX */}
            {open ? (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[110] backdrop-blur-sm">
                    <div className="relative w-[95%] h-[85%] md:w-[90%]">
                        <Image
                            src={images[current]}
                            alt="full-screen-image"
                            fill
                            className="object-contain"
                        />

                        {/* Prev Button */}
                        <button
                            type="button"
                            onClick={goPrev}
                            className="
                                absolute left-2 md:left-6 top-1/2 -translate-y-1/2 
                                bg-white/15 backdrop-blur-md border border-white/20
                                active:scale-95 md:hover:bg-white/30 md:hover:scale-110
                                transition p-3 md:p-4 rounded-full 
                                text-white text-xl md:text-3xl font-bold shadow-xl
                            "
                        >
                            ‹
                        </button>

                        {/* Next Button */}
                        <button
                            type="button"
                            onClick={goNext}
                            className="
                                absolute right-2 md:right-6 top-1/2 -translate-y-1/2 
                                bg-white/15 backdrop-blur-md border border-white/20
                                active:scale-95 md:hover:bg-white/30 md:hover:scale-110
                                transition p-3 md:p-4 rounded-full 
                                text-white text-xl md:text-3xl font-bold shadow-xl
                            "
                        >
                            ›
                        </button>

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={closeLightbox}
                            className="
                                absolute top-4 right-4 md:top-6 md:right-6 
                                bg-white/20 backdrop-blur-md border border-white/30
                                active:scale-95 md:hover:bg-white/40 md:hover:scale-110
                                transition p-2 md:p-3 rounded-full 
                                text-white text-lg md:text-2xl font-bold shadow-lg
                                hover:cursor-pointer
                            "
                        >
                            ✕
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
}