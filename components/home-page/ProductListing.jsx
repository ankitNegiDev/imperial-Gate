// "use client";
// import React from "react";
// import Image from "next/image";

// function ProductListing() {

//     // product list array
//     let categories = [
//         { name: "Main Gates", image: "/product-image.jpg" },
//         { name: "Designer Entry Gates", image: "/product-image.jpg" },
//         { name: "Modern Steel Doors", image: "/product-image.jpg" },
//         { name: "Premium Balcony Railings", image: "/product-image.jpg" },
//         { name: "Security Doors", image: "/product-image.jpg" },
//         { name: "Laser Cut Panels", image: "/product-image.jpg" },
//         { name: "Boundary Wall Designs", image: "/product-image.jpg" }
//     ];

//     function renderItems() {
//         return categories.map(function (item, index) {
//             return (
//                 <div
//                     key={index}
//                     // Added 'active:scale-95' for a tactile "click" feel on mobile
//                     className="flex flex-col items-center w-full transition-transform active:scale-95 md:active:scale-100"
//                 >
//                     {/* IMAGE CARD */}
//                     <div className="
//                         relative
//                         w-full aspect-square
//                         md:w-56 md:h-56
//                         rounded-2xl overflow-hidden 
//                         border border-[#8f7c45]/70 
//                         shadow-[0_0_15px_rgba(143,124,69,0.15)] 
                        
//                         /* Hover effects (Desktop mostly) */
//                         hover:shadow-[0_0_35px_rgba(143,124,69,0.25)] 
//                         hover:scale-105 
//                         transition-all duration-300 
                        
//                         bg-black hover:cursor-pointer group
//                     ">
//                         <Image
//                             src={item.image}
//                             alt={item.name}
//                             fill
//                             sizes="(max-width: 768px) 50vw, 300px"
//                             loading="lazy"
//                             className="object-cover mix-blend-lighten transition-transform duration-500 group-hover:scale-110"
//                         />
//                     </div>

//                     {/* TITLE */}
//                     <p className="
//                         mt-3 md:mt-4 
//                         text-sm md:text-lg 
//                         font-semibold tracking-wide text-[#fac21e] uppercase text-center 
//                         leading-tight px-1
//                     ">
//                         {item.name}
//                     </p>
//                 </div>
//             );
//         });
//     }

//     return (
//         <section className="w-full py-10 md:py-20 px-4 md:px-6 bg-[#0d0d0d] text-white">

//             {/* TITLE */}
//             <div className="text-center mb-8 md:mb-14">
//                 <h2 className="text-2xl md:text-4xl font-bold text-[#fac21e] tracking-wide">
//                     Our Premium Categories
//                 </h2>
//                 <p className="text-gray-300 mt-2 text-sm md:text-base">
//                     Explore Luxury Designs Tailored for Modern Homes
//                 </p>
//             </div>

//             {/* GRID */}
//             <div className="
//                 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                
//                 /* Mobile: Tighter gaps (gap-3) for larger images */
//                 /* Desktop: Standard gaps (md:gap-14) preserved */
//                 gap-x-3 gap-y-6 
//                 md:gap-x-4 md:gap-y-14 
                
//                 justify-items-center
//                 max-w-7xl mx-auto
//             ">

//                 {renderItems()}

//                 {/* VIEW ALL BOX */}
//                 <div className="
//                     flex flex-col items-center justify-center 
//                     w-full aspect-square
//                     md:w-56 md:h-56 
//                     rounded-2xl border border-[#8f7c45]
//                     bg-gradient-to-br from-black/60 to-black/20
//                     backdrop-blur-xl shadow-lg hover:cursor-pointer
                    
//                     /* Mobile Touch Feedback */
//                     transition-all duration-300 
//                     active:scale-95 md:active:scale-100
//                     md:hover:scale-105
//                 ">
//                     <p className="text-2xl md:text-3xl font-bold text-[#fac21e]">10+</p>
//                     <p className="text-gray-300 text-xs md:text-sm">Categories</p>
//                     <p className="text-gray-300 text-xs md:text-sm">Available</p>

//                     <button className="
//                         mt-3 px-4 py-1.5 md:px-4 md:py-1 
//                         border border-[#8f7c45] rounded-md 
//                         text-[#fac21e] text-[11px] md:text-xs 
//                         hover:bg-[#8f7c45] hover:text-black
//                         transition-all duration-300 hover:cursor-pointer
//                     ">
//                         VIEW ALL
//                     </button>
//                 </div>

//             </div>

//         </section>
//     );
// }

// export default ProductListing;

// making it tablet responsive 


"use client";
import React from "react";
import Image from "next/image";

function ProductListing() {

    // product list array
    let categories = [
        { name: "Main Gates", image: "/product-image.jpg" },
        { name: "Designer Entry Gates", image: "/product-image.jpg" },
        { name: "Modern Steel Doors", image: "/product-image.jpg" },
        { name: "Premium Balcony Railings", image: "/product-image.jpg" },
        { name: "Security Doors", image: "/product-image.jpg" },
        { name: "Laser Cut Panels", image: "/product-image.jpg" },
        { name: "Boundary Wall Designs", image: "/product-image.jpg" }
    ];

    function renderItems() {
        return categories.map(function (item, index) {
            return (
                <div
                    key={index}
                    // Added 'active:scale-95' for a tactile "click" feel on mobile
                    className="flex flex-col items-center w-full transition-transform active:scale-95 md:active:scale-100"
                >
                    {/* IMAGE CARD */}
                    <div className="
                        relative
                        /* SIZING LOGIC: */
                        /* Mobile: Fluid width (aspect square) */
                        w-full aspect-square
                        
                        /* Tablet (md): Keep Fluid width! (This fills the 3-col grid nicely) */
                        md:w-full md:aspect-square
                        
                        /* Desktop (lg): Switch to fixed size */
                        lg:w-56 lg:h-56
                        
                        rounded-2xl overflow-hidden 
                        border border-[#8f7c45]/70 
                        shadow-[0_0_15px_rgba(143,124,69,0.15)] 
                        
                        /* Hover effects (Desktop mostly) */
                        hover:shadow-[0_0_35px_rgba(143,124,69,0.25)] 
                        hover:scale-105 
                        transition-all duration-300 
                        
                        bg-black hover:cursor-pointer group
                    ">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            // Updated sizes for better performance on Tablet
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                            loading="lazy"
                            className="object-cover mix-blend-lighten transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* TITLE */}
                    <p className="
                        mt-3 md:mt-4 
                        /* Text Size: Mobile: sm, Tablet: base, Desktop: lg */
                        text-sm md:text-base lg:text-lg 
                        font-semibold tracking-wide text-[#fac21e] uppercase text-center 
                        leading-tight px-1
                    ">
                        {item.name}
                    </p>
                </div>
            );
        });
    }

    return (
        <section className="w-full py-10 md:py-16 lg:py-20 px-4 md:px-8 bg-[#0d0d0d] text-white">

            {/* TITLE */}
            <div className="text-center mb-8 md:mb-12 lg:mb-14">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fac21e] tracking-wide">
                    Our Premium Categories
                </h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                    Explore Luxury Designs Tailored for Modern Homes
                </p>
            </div>

            {/* GRID */}
            <div className="
                grid 
                /* COLUMNS: Mobile 2, Tablet 3, Desktop 4 */
                grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                
                /* GAPS: */
                /* Mobile: Tight (gap-3) */
                gap-x-3 gap-y-6 
                
                /* Tablet: Medium Spacing */
                md:gap-x-6 md:gap-y-10
                
                /* Desktop: Large Spacing */
                lg:gap-x-6 lg:gap-y-14 
                
                justify-items-center
                max-w-7xl mx-auto
            ">

                {renderItems()}

                {/* VIEW ALL BOX */}
                <div className="
                    flex flex-col items-center justify-center 
                    
                    /* Match Image Card Sizing Logic exactly */
                    w-full aspect-square
                    md:w-full md:aspect-square
                    lg:w-56 lg:h-56 
                    
                    rounded-2xl border border-[#8f7c45]
                    bg-gradient-to-br from-black/60 to-black/20
                    backdrop-blur-xl shadow-lg hover:cursor-pointer
                    
                    /* Mobile Touch Feedback */
                    transition-all duration-300 
                    active:scale-95 md:active:scale-100
                    md:hover:scale-105
                ">
                    <p className="text-2xl md:text-2xl lg:text-3xl font-bold text-[#fac21e]">10+</p>
                    <p className="text-gray-300 text-xs md:text-sm">Categories</p>
                    <p className="text-gray-300 text-xs md:text-sm">Available</p>

                    <button className="
                        mt-3 px-4 py-1.5 md:px-4 md:py-1 
                        border border-[#8f7c45] rounded-md 
                        text-[#fac21e] text-[11px] md:text-xs 
                        hover:bg-[#8f7c45] hover:text-black
                        transition-all duration-300 hover:cursor-pointer
                    ">
                        VIEW ALL
                    </button>
                </div>

            </div>

        </section>
    );
}

export default ProductListing;