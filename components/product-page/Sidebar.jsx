// "use client";

// import React from "react";

// function Sidebar() {
//     const list = [
//         "All Products",
//         "Courtyard Gates",
//         "HomeGuard Security Screen",
//         "Iron Artwork",
//         "Iron Doors – Iron Entry Doors – Entry Doors – Wrought Iron Entry Doors",
//         "Iron Enclosures",
//         "Iron Gates – Wrought Iron Gates – Driveway Gates – Garden Gates – Wood Gates",
//         "Iron Railings",
//         "Iron Security Doors",
//         "Iron Spiral Staircases",
//         "Iron Trellises",
//         "Iron Window Guards",
//         "Other Products",
//         "Sunscreens",
//     ];

//     return (
//         <div
//             className="
//                 w-full 
//                 bg-[#0a0a0a] 
//                 rounded-2xl 
//                 shadow-[0_0_25px_rgba(0,0,0,0.5)] 
//                 p-4 
//                 border border-white

//             "
//         >
//             <ul>
//                 {list.map(function (item, index) {
//                     return (
//                         <li key={index} className="py-3">
//                             <button
//                                 className="
//                                     w-full
//                                     text-left
//                                     text-white
//                                     font-semibold
//                                     text-lg
//                                     tracking-wide
//                                     hover:text-[#8f7c45]
//                                     transition-colors
//                                     duration-200
//                                 "
//                             >
//                                 {item}
//                             </button>

//                             {/* Gradient Divider */}
//                             <div
//                                 className="
//                                     mt-3 
//                                     h-px 
//                                     w-full 
//                                     bg-linear-to-r 
//                                     from-[#715723] 
//                                     to-[#8f7c45]
//                                     opacity-60
//                                 "
//                             />
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }

// export default Sidebar;

// updting the sidebar - dec 3 updated 


"use client";

import Image from "next/image";
// import Link from "next/link";

function Sidebar() {
    const categories = [
        { title: "All Products", img: "/product-image.jpg" },
        { title: "Courtyard Gates", img: "/product-image.jpg" },
        { title: "HomeGuard Security Screen", img: "/product-image.jpg" },
        { title: "Iron Artwork", img: "/product-image.jpg" },
        { title: "Iron Doors Entry & Wrought Iron", img: "/product-image.jpg" },
        { title: "Iron Enclosures", img: "/product-image.jpg" },
        { title: "Iron Gates Driveway & Garden", img: "/product-image.jpg" },
        { title: "Iron Railings", img: "/product-image.jpg" },
        { title: "Iron Security Doors", img: "/product-image.jpg" },
        { title: "Iron Spiral Staircases", img: "/product-image.jpg" },
        { title: "Iron Trellises", img: "/product-image.jpg" },
        { title: "Iron Window Guards", img: "/product-image.jpg" },
        { title: "Other Products", img: "/product-image.jpg" },
        { title: "Sunscreens", img: "/product-image.jpg" },
    ];


    return (
        // Reduced gap between cards from gap-5 to gap-3
        <div className="w-[17rem] flex flex-col gap-3 p-2">
            {categories.map(function (item, index) {
                return (
                    // <Link href={`/products/${item.title.toLowerCase().replace(/ /g, "-")}`} key={index}>
                        <div
                            className="
                                group 
                                relative 
                                flex 
                                items-center 
                                gap-4 
                                p-2       
                                bg-[#050505] 
                                border 
                                border-white/80 
                                rounded-xl 
                                overflow-hidden 
                                cursor-pointer 
                                transition-all 
                                duration-300 
                                hover:border-[#8f7c45] 
                                hover:shadow-[0_0_15px_rgba(143,124,69,0.2)]
                            "
                        >
                            {/* Image Container: Reduced size to w-16 h-20 (approx 64px x 80px) */}
                            <div className="relative w-16 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-800 border border-white/10">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            {/* Text Content: Reduced size and spacing */}
                            <div className="flex-1 pr-2">
                                <h3
                                    className="
                                        text-white 
                                        font-serif 
                                        text-sm 
                                        md:text-base
                                        font-semibold 
                                        leading-tight 
                                        group-hover:text-[#8f7c45] 
                                        transition-colors 
                                        duration-300
                                        line-clamp-2
                                    "
                                >
                                    {item.title}
                                </h3>
                            </div>

                            {/* Optional: Arrow appears on hover */}
                            <div className="hidden sm:block absolute right-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#8f7c45] text-sm">
                                →
                            </div>
                        </div>
                    // </Link>
                );
            })}
        </div>
    );
}

export default Sidebar;