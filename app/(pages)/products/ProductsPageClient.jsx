// "use client"

// // import CallForm from "./components/CallForm";
// import CallForm from "../../../components/product-page/CallForm"
// // import ImageSwiper from "./components/ImageSwiper";
// import ImageSwiper from "../../../components/product-page/ImageSwiper"
// // import MoreDoorIdeas from "./components/MoreDoorIdeas";
// import MoreDoorIdeas from "../../../components/product-page/MoreDoorIdeas"
// // import OtherProduct from "./components/OtherProduct";
// import OtherProduct from "../../../components/product-page/OtherProduct"
// // import Sidebar from "./components/Sidebar";
// import Sidebar from "../../../components/product-page/Sidebar"
// // import Tab from './components/Tab';
// import Tab from "../../../components/product-page/Tab"
// // import YouTubeEmbed from './components/YouTubeEmbed';
// import YouTubeEmbed from "../../../components/product-page/YouTubeEmbed"
// // import Footer from "./components/Footer";
// // import Footer from "../components/product-page/Footer"
// // import Footer from "../../components/home-page/Footer"

// import FloatingButtons from "../../../components/home-page/FloatingButtons";
// import FAQ from "../../../components/home-page/Faq";





// import { useSearchParams } from "next/navigation";


// function ProductsPageClient() {

//     const params = useSearchParams();
//     const category = params.get("category");


//     const images = [
//         "/product-page/internship task 1 image.jpg",
//         "/product-page/internship task 2 iamge.jpg",
//         "/product-page/internship task 3 image.jpg",
//         "/product-page/internship task 4 image.jpg"
//     ];
//     const doorImages = [
//         "/product-page/internship task 1 image.jpg",
//         "/product-page/internship task 2 iamge.jpg",
//         "/product-page/internship task 3 image.jpg",
//     ];

//     // fix is overflow-hidden sm:overflow-visible on the main product container
//     return (
//         <>
//             <div className="flex pt-34 pb-15 w-8xl gap-4 bg-black overflow-hidden sm:overflow-visible">
//                 {/* left */}
//                 <div className="w-[20rem] flex flex-col gap-0 mr-0 ml-2 mt-5">
//                     <Sidebar />
//                     <OtherProduct
//                         image={"/product-page/Bamboo.jpg"}
//                         text={"Bamboo Iron Security Door"}
//                     />
//                     <OtherProduct
//                         image={"/product-page/iron.jpg"}
//                         text={"Custom French Exclusive Iron Entry Door"}
//                     />
//                     <OtherProduct
//                         image={"/product-page/iron2.jpg"}
//                         text={"Desert Sunray Iron Entry Door"}
//                     />
//                     <OtherProduct
//                         image={"/product-page/iron3.jpg"}
//                         text={"Desert Sunray Iron Security Door"}
//                     />
//                 </div>

//                 <div className="w-full flex flex-col m-0">
//                     {/* Horizontal row: Swiper + More Ideas */}
//                     <div className="flex w-full gap-0 mb-6 p-0.5">
//                         {/* LEFT: Image Swiper */}
//                         <div className="w-3/4">
//                             <h1 className="ml-4 text-4xl font-bold text-[#fac21e]  mb-0 mt-2 tracking-wide drop-shadow-[0_0_6px_rgba(143,124,69,0.5)] text-center">
//                                 {category}
//                             </h1>
//                             <ImageSwiper images={images} />
//                         </div>

//                         {/* RIGHT: More Door Ideas */}
//                         <div className="w-[10rem] mr-5 ">
//                             <MoreDoorIdeas doorImages={doorImages} />
//                         </div>

//                         {/* right  */}
//                         <div>
//                             <CallForm />
//                         </div>
//                     </div>

//                     {/* Tab Section below */}
//                     <div className="w-full">
//                         <Tab />
//                     </div>

//                     {/* yt embedded video */}
//                     <div>
//                         <YouTubeEmbed />
//                     </div>
//                 </div>
                
//             </div>
//             <div className="">
//                 <FAQ />
//             </div>
//             <div>
//                 {/* <Footer /> */}

//                 {/* <Footer/> */}
//                 <FloatingButtons/>
//             </div>
//         </>
//     );
// }

// export default ProductsPageClient;


// responsive 


"use client"

import { useState } from "react";
import CallForm from "../../../components/product-page/CallForm"
import ImageSwiper from "../../../components/product-page/ImageSwiper"
import MoreDoorIdeas from "../../../components/product-page/MoreDoorIdeas"
import OtherProduct from "../../../components/product-page/OtherProduct"
import Sidebar from "../../../components/product-page/Sidebar"
import Tab from "../../../components/product-page/Tab"
import YouTubeEmbed from "../../../components/product-page/YouTubeEmbed"
import FloatingButtons from "../../../components/home-page/FloatingButtons";
import FAQ from "../../../components/home-page/Faq";
import { useSearchParams } from "next/navigation";

// Optional: You might want an icon for the close button, 
// if not, I used a simple "X" text in the button below.

function ProductsPageClient() {
    const params = useSearchParams();
    const category = params.get("category");
    
    // State to control the mobile popup form
    const [isFormOpen, setIsFormOpen] = useState(false);

    const images = [
        "/product-page/internship task 1 image.jpg",
        "/product-page/internship task 2 iamge.jpg",
        "/product-page/internship task 3 image.jpg",
        "/product-page/internship task 4 image.jpg"
    ];
    const doorImages = [
        "/product-page/internship task 1 image.jpg",
        "/product-page/internship task 2 iamge.jpg",
        "/product-page/internship task 3 image.jpg",
    ];

    return (
        <>
            {/* modal popup for mobile only*/}
            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsFormOpen(false)}
                            className="absolute top-2 right-2 z-10 p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-black font-bold"
                        >
                            ✕
                        </button>
                        {/* Render the Form inside the modal */}
                        <div className="max-h-[85vh] overflow-y-auto">
                            <CallForm />
                        </div>
                    </div>
                </div>
            )}

            {/* main conte*/}
            {/* Changed w-8xl to max-w-8xl and w-full to prevent horizontal scroll on mobile */}
            <div className="flex flex-col lg:flex-row pt-34 pb-15 w-full max-w-8xl mx-auto gap-4 bg-black overflow-hidden sm:overflow-visible relative">
                
                {/* left sidebar desk only */}
                {/* Added 'hidden lg:flex' to hide on mobile/tablet */}
                <div className="hidden lg:flex w-[20rem] flex-col gap-0 mr-0 ml-2 mt-5">
                    <Sidebar />
                    <OtherProduct image={"/product-page/Bamboo.jpg"} text={"Bamboo Iron Security Door"} />
                    <OtherProduct image={"/product-page/iron.jpg"} text={"Custom French Exclusive Iron Entry Door"} />
                    <OtherProduct image={"/product-page/iron2.jpg"} text={"Desert Sunray Iron Entry Door"} />
                    <OtherProduct image={"/product-page/iron3.jpg"} text={"Desert Sunray Iron Security Door"} />
                </div>


                <div className="w-full flex flex-col m-0 px-2 lg:px-0">
                    
                    {/* Horizontal row: Swiper + More Ideas + Form */}
                    {/* Changed to flex-col on mobile, flex-row on desktop */}
                    <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-0 mb-6 p-0.5">
                        
                        {/* 1. Image Swiper Section */}
                        <div className="w-full lg:w-3/4">
                            <h1 className="lg:ml-4 text-3xl lg:text-4xl font-bold text-[#fac21e] mb-4 mt-2 tracking-wide drop-shadow-[0_0_6px_rgba(143,124,69,0.5)] text-center lg:text-center">
                                {category}
                            </h1>
                            <ImageSwiper images={images} />
                        </div>

                        {/* 2. More Door Ideas */}
                        {/* On mobile, this stacks below swiper. On desktop, it sits to the right. */}
                        <div className="w-full lg:w-[10rem] flex justify-center lg:block lg:mr-5 mt-4 lg:mt-0">
                             {/* You might need to adjust MoreDoorIdeas CSS internally if it's not flexible, 
                                 but the wrapper here ensures it takes full width on mobile */}
                            <MoreDoorIdeas doorImages={doorImages} />
                        </div>

                        {/* 3. DESKTOP ONLY FORM */}
                        {/* This div is hidden on mobile, visible on lg screens */}
                        <div className="hidden lg:block">
                            <CallForm />
                        </div>
                    </div>

                    {/* Tab Section below */}
                    <div className="w-full">
                        <Tab />
                    </div>

                    {/* yt embedded video */}
                    <div className="mt-6">
                        <YouTubeEmbed />
                    </div>
                </div>
            </div>

            <div className="">
                <FAQ />
            </div>
            
            <div>
                <FloatingButtons/>
            </div>

            {/* fixed mobile button */}
            {/* This button appears only on screens smaller than 'lg' */}
            <div className="lg:hidden fixed bottom-4 left-0 right-0 z-40 px-4 flex justify-center">
                <button 
                    onClick={() => setIsFormOpen(true)}
                    className="w-full max-w-sm bg-[#fac21e] text-black font-bold py-4 rounded-full shadow-lg border-2 border-white animate-pulse"
                >
                    Enquire Now / Get Quote
                </button>
            </div>
        </>
    );
}

export default ProductsPageClient;