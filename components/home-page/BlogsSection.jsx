// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// function BlogsSection(props) {
//     const blogs = props.blogs;
//     const news = props.news;

//     const [activeTab, setActiveTab] = useState("blogs");

//     // Function to switch tabs
//     function selectTab(tabName) {
//         setActiveTab(tabName);
//     }

//     // Function to render cards (blogs or news)
//     function renderCards(items) {
//         return items.map(function (item) {
//             return (
//                 <div
//                     key={item.title}
//                     className="
//                         bg-[#1a1a1a] rounded-3xl overflow-hidden border border-[#8f7c45]/30
//                         transition-transform duration-500 hover:scale-103 
//                         cursor-pointer
//                     "
//                 >
//                     <div className="relative w-full h-56">
//                         <Image
//                             src={item.image}
//                             alt={item.title}
//                             fill
//                             className="object-cover rounded-t-3xl"
//                         />
//                         <div className="absolute top-2 left-2 px-3 py-1 bg-[#fac21e] text-white font-semibold rounded-full text-sm shadow-lg">
//                             {item.category}
//                         </div>
//                     </div>

//                     <div className="p-6">
//                         <h3 className="text-2xl font-bold mt-2 text-white bg-clip-text bg-[#fac21e]">
//                             {item.title}
//                         </h3>

//                         <p className="text-gray-300 text-sm mt-3 line-clamp-3">
//                             {item.description}
//                         </p>

//                         <button className="mt-5 font-semibold text-[#fac21e] hover:underline hover:cursor-pointer">
//                             Read More →
//                         </button>
//                     </div>
//                 </div>
//             );
//         });
//     }

//     return (
//         <section className="w-full py-20 bg-linear-to-b from-[#111] to-[#1a1a1a]">
//             <div className="max-w-7xl mx-auto px-6">

//                 {/* Heading */}
//                 <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text 
//                     bg-[#fac21e]"
//                 >
//                     Blogs & News
//                 </h2>

//                 <p className="text-gray-300 text-center mt-3 max-w-2xl mx-auto">
//                     Stay updated with industry insights, premium updates & the latest trends.
//                 </p>

//                 {/* Tabs */}
//                 <div className="flex justify-center gap-6 mt-10">
//                     <button
//                         onClick={function () { selectTab("blogs"); }}
//                         className={
//                             "px-6 py-2 rounded-full font-semibold border transition-all duration-300 hover:cursor-pointer " +
//                             (activeTab === "blogs"
//                                 ? "bg-linear-to-r from-[#715723] to-[#8f7c45] text-white border-transparent"
//                                 : "bg-black text-[#fac21e] border-[#8f7c45]"
//                             )
//                         }
//                     >
//                         Blogs
//                     </button>

//                     <button
//                         onClick={function () { selectTab("news"); }}
//                         className={
//                             "px-6 py-2 rounded-full font-semibold border transition-all duration-300 hover:cursor-pointer " +
//                             (activeTab === "news"
//                                 ? "bg-linear-to-r from-[#715723] to-[#8f7c45] text-white border-transparent"
//                                 : "bg-black text-[#fac21e] border-[#8f7c45]"
//                             )
//                         }
//                     >
//                         News
//                     </button>
//                 </div>

//                 {/* Cards */}
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
//                     {renderCards(activeTab === "blogs" ? blogs : news)}
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default BlogsSection;



//! making it responsive for - mobile screens -- (laptop)
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// function BlogsSection(props) {
//     const blogs = props.blogs;
//     const news = props.news;

//     const [activeTab, setActiveTab] = useState("blogs");

//     // Function to switch tabs
//     function selectTab(tabName) {
//         setActiveTab(tabName);
//     }

//     // Function to render cards (blogs or news)
//     function renderCards(items) {
//         return items.map(function (item) {
//             return (
//                 <div
//                     key={item.title}
//                     className="
//                         bg-[#1a1a1a] rounded-3xl overflow-hidden border border-[#8f7c45]/30
//                         cursor-pointer
                        
//                         /* Animation & Hover */
//                         transition-transform duration-500 
//                         hover:scale-103 
                        
//                         /* Mobile Touch Feedback (Press effect) */
//                         active:scale-95 md:active:scale-100
//                     "
//                 >
//                     <div className="relative w-full h-56">
//                         <Image
//                             src={item.image}
//                             alt={item.title}
//                             fill
//                             className="object-cover rounded-t-3xl"
//                         />
//                         <div className="absolute top-2 left-2 px-3 py-1 bg-[#fac21e] text-white font-semibold rounded-full text-sm shadow-lg">
//                             {item.category}
//                         </div>
//                     </div>

//                     <div className="p-5 md:p-6">
//                         {/* Mobile: text-xl (fits better) | Desktop: text-2xl */}
//                         <h3 className="text-xl md:text-2xl font-bold mt-2 text-white bg-clip-text bg-[#fac21e]">
//                             {item.title}
//                         </h3>

//                         <p className="text-gray-300 text-sm mt-3 line-clamp-3">
//                             {item.description}
//                         </p>

//                         <button className="mt-5 font-semibold text-[#fac21e] hover:underline hover:cursor-pointer">
//                             Read More →
//                         </button>
//                     </div>
//                 </div>
//             );
//         });
//     }

//     return (
//         <section className="w-full py-8 md:py-20 bg-linear-to-b from-[#111] to-[#1a1a1a]">
//             {/* Mobile: px-4 (more space for cards) | Desktop: px-6 */}
//             <div className="max-w-7xl mx-auto px-4 md:px-6">

//                 {/* Heading */}
//                 {/* Mobile: text-2xl | Desktop: text-4xl */}
//                 <h2 className="text-2xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-[#fac21e]">
//                     Blogs & News
//                 </h2>

//                 <p className="text-gray-300 text-center mt-3 max-w-2xl mx-auto text-sm md:text-base">
//                     Stay updated with industry insights, premium updates & the latest trends.
//                 </p>

//                 {/* Tabs */}
//                 {/* Mobile: gap-4 | Desktop: gap-6 */}
//                 <div className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-10">
//                     <button
//                         onClick={function () { selectTab("blogs"); }}
//                         className={
//                             "px-6 py-2 rounded-full font-semibold border transition-all duration-300 hover:cursor-pointer text-sm md:text-base " +
//                             (activeTab === "blogs"
//                                 ? "bg-linear-to-r from-[#715723] to-[#8f7c45] text-white border-transparent"
//                                 : "bg-black text-[#fac21e] border-[#8f7c45]"
//                             )
//                         }
//                     >
//                         Blogs
//                     </button>

//                     <button
//                         onClick={function () { selectTab("news"); }}
//                         className={
//                             "px-6 py-2 rounded-full font-semibold border transition-all duration-300 hover:cursor-pointer text-sm md:text-base " +
//                             (activeTab === "news"
//                                 ? "bg-linear-to-r from-[#715723] to-[#8f7c45] text-white border-transparent"
//                                 : "bg-black text-[#fac21e] border-[#8f7c45]"
//                             )
//                         }
//                     >
//                         News
//                     </button>
//                 </div>

//                 {/* Cards Grid */}
//                 {/* Mobile: grid-cols-1, gap-6 (tighter vertical spacing)
//                    Desktop: grid-cols-3, gap-10 (original spacing)
//                 */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-14">
//                     {renderCards(activeTab === "blogs" ? blogs : news)}
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default BlogsSection;


//! making responsive for tablet/medium screens 

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// function BlogsSection(props) {
//     const blogs = props.blogs;
//     const news = props.news;

//     const [activeTab, setActiveTab] = useState("blogs");

//     // Function to switch tabs
//     function selectTab(tabName) {
//         setActiveTab(tabName);
//     }

//     // Function to render cards (blogs or news)
//     function renderCards(items) {
//         return items.map(function (item) {
//             return (
//                 <div
//                     key={item.title}
//                     className="
//                         bg-[#1a1a1a] rounded-3xl overflow-hidden border border-[#8f7c45]/30
//                         cursor-pointer
                        
//                         /* Animation & Hover */
//                         transition-transform duration-500 
//                         hover:scale-103 
                        
//                         /* Mobile Touch Feedback */
//                         active:scale-95 md:active:scale-100
//                     "
//                 >
//                     {/* IMAGE CONTAINER */}
//                     <div className="
//                         relative w-full 
                        
//                         /* HEIGHT LOGIC: */
//                         /* Mobile: Standard height */
//                         h-56 
                        
//                         /* Tablet (md): Taller height because cards are wider in 2-col grid */
//                         md:h-72 
                        
//                         /* Desktop (lg): Back to standard height for 3-col grid */
//                         lg:h-60
//                     ">
//                         <Image
//                             src={item.image}
//                             alt={item.title}
//                             fill
//                             className="object-cover rounded-t-3xl"
//                         />
//                         <div className="absolute top-2 left-2 px-3 py-1 bg-[#fac21e] text-white font-semibold rounded-full text-sm shadow-lg">
//                             {item.category}
//                         </div>
//                     </div>

//                     {/* CONTENT CONTAINER */}
//                     <div className="p-5 md:p-6 lg:p-7">
//                         {/* Title Sizing: Mobile xl -> Tablet 2xl -> Desktop 2xl */}
//                         <h3 className="
//                             text-xl md:text-2xl font-bold mt-2 
//                             text-white bg-clip-text bg-[#fac21e]
//                             leading-tight
//                         ">
//                             {item.title}
//                         </h3>

//                         <p className="text-gray-300 text-sm md:text-base mt-3 line-clamp-3">
//                             {item.description}
//                         </p>

//                         <button className="mt-5 font-semibold text-[#fac21e] hover:underline hover:cursor-pointer text-sm md:text-base">
//                             Read More →
//                         </button>
//                     </div>
//                 </div>
//             );
//         });
//     }

//     return (
//         <section className="w-full py-8 md:py-16 lg:py-20 bg-linear-to-b from-[#111] to-[#1a1a1a]">
//             {/* Container: px-4 Mobile, px-8 Tablet, px-6 Desktop */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-6">

//                 {/* Heading */}
//                 {/* Font Size: Mobile 2xl -> Tablet 3xl -> Desktop 4xl */}
//                 <h2 className="
//                     text-2xl md:text-3xl lg:text-4xl 
//                     font-bold text-center text-transparent bg-clip-text bg-[#fac21e]
//                 ">
//                     Blogs & News
//                 </h2>

//                 <p className="text-gray-300 text-center mt-3 max-w-2xl mx-auto text-sm md:text-base">
//                     Stay updated with industry insights, premium updates & the latest trends.
//                 </p>

//                 {/* Tabs */}
//                 <div className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-12">
//                     <button
//                         onClick={function () { selectTab("blogs"); }}
//                         className={
//                             "px-6 py-2 rounded-full font-semibold border transition-all duration-300 hover:cursor-pointer text-sm md:text-base " +
//                             (activeTab === "blogs"
//                                 ? "bg-linear-to-r from-[#715723] to-[#8f7c45] text-white border-transparent"
//                                 : "bg-black text-[#fac21e] border-[#8f7c45]"
//                             )
//                         }
//                     >
//                         Blogs
//                     </button>

//                     <button
//                         onClick={function () { selectTab("news"); }}
//                         className={
//                             "px-6 py-2 rounded-full font-semibold border transition-all duration-300 hover:cursor-pointer text-sm md:text-base " +
//                             (activeTab === "news"
//                                 ? "bg-linear-to-r from-[#715723] to-[#8f7c45] text-white border-transparent"
//                                 : "bg-black text-[#fac21e] border-[#8f7c45]"
//                             )
//                         }
//                     >
//                         News
//                     </button>
//                 </div>

//                 {/* Cards Grid */}
//                 {/* Mobile: 1 Column (gap-6)
//                    Tablet (md): 2 Columns (gap-8) - This prevents squashed cards
//                    Desktop (lg): 3 Columns (gap-10)
//                 */}
//                 <div className="
//                     grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
//                     gap-6 md:gap-8 lg:gap-10 
//                     mt-10 md:mt-14
//                 ">
//                     {renderCards(activeTab === "blogs" ? blogs : news)}
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default BlogsSection;


//! hydration issue 
"use client";

import React, { useState } from "react";
import Image from "next/image";

function BlogsSection(props) {
    const blogs = props.blogs;
    const news = props.news;

    const [activeTab, setActiveTab] = useState("blogs");

    // Function to switch tabs
    function selectTab(tabName) {
        setActiveTab(tabName);
    }

    // Function to render cards (blogs or news)
    function renderCards(items) {
        return items.map(function (item) {
            return (
                <div
                    key={item.title}
                    className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-[#8f7c45]/30 cursor-pointer transition-transform duration-500 hover:scale-103 active:scale-95 md:active:scale-100"
                >
                    {/* IMAGE CONTAINER */}
                    <div className="relative w-full h-56 md:h-72 lg:h-60">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover rounded-t-3xl"
                        />
                        <div className="absolute top-2 left-2 px-3 py-1 bg-[#fac21e] text-white font-semibold rounded-full text-sm shadow-lg">
                            {item.category}
                        </div>
                    </div>

                    {/* CONTENT CONTAINER */}
                    <div className="p-5 md:p-6 lg:p-7">
                        {/* Title Sizing: Mobile xl -> Tablet 2xl -> Desktop 2xl */}
                        <h3 className="text-xl md:text-2xl font-bold mt-2 text-white bg-clip-text bg-[#fac21e] leading-tight">
                            {item.title}
                        </h3>

                        <p className="text-gray-300 text-sm md:text-base mt-3 line-clamp-3">
                            {item.description}
                        </p>

                        <button className="mt-5 font-semibold text-[#fac21e] hover:underline hover:cursor-pointer text-sm md:text-base">
                            Read More →
                        </button>
                    </div>
                </div>
            );
        });
    }

    return (
        <section className="w-full py-8 md:py-16 lg:py-20 bg-linear-to-b from-[#111] to-[#1a1a1a]">
            {/* Container: px-4 Mobile, px-8 Tablet, px-6 Desktop */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-6">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-transparent bg-clip-text bg-[#fac21e]">
                    Blogs & News
                </h2>

                <p className="text-gray-300 text-center mt-3 max-w-2xl mx-auto text-sm md:text-base">
                    Stay updated with industry insights, premium updates & the latest trends.
                </p>

                {/* Tabs */}
                <div className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-12">
                    <button
                        onClick={function () { selectTab("blogs"); }}
                        className={
                            "px-6 py-2 rounded-full font-semibold border transition-all duration-300 hover:cursor-pointer text-sm md:text-base " +
                            (activeTab === "blogs"
                                ? "bg-linear-to-r from-[#715723] to-[#8f7c45] text-white border-transparent"
                                : "bg-black text-[#fac21e] border-[#8f7c45]"
                            )
                        }
                    >
                        Blogs
                    </button>

                    <button
                        onClick={function () { selectTab("news"); }}
                        className={
                            "px-6 py-2 rounded-full font-semibold border transition-all duration-300 hover:cursor-pointer text-sm md:text-base " +
                            (activeTab === "news"
                                ? "bg-linear-to-r from-[#715723] to-[#8f7c45] text-white border-transparent"
                                : "bg-black text-[#fac21e] border-[#8f7c45]"
                            )
                        }
                    >
                        News
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-10 md:mt-14">
                    {renderCards(activeTab === "blogs" ? blogs : news)}
                </div>

            </div>
        </section>
    );
}

export default BlogsSection;