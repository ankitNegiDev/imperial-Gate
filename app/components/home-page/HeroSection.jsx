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
            bgImage:"/task-2-bg-3.jpg"
        },
        {
            title: "Experience Modern Luxury",
            description: "Handcrafted designs made with precision and heritage.",
            image: "/royal-entry-doors.jpg",
            bgImage:"/task-2-bg-3.jpg",
        },
        {
            title: "Elegance That Speaks",
            description: "Luxury collections created for your most special moments.",
            image: "/flat-entrance.png",
            bgImage:"/task-2-bg-3.jpg"
        }
    ];

    // if we need different - bg for slides then we can use this
    // const bgImages = [
    //     "/task-2-bg-1.jpg",
    //     "/task-2-bg-2.jpg",
    //     "/task-2-bg-3.jpg"
    // ];
    // or we can use per-slide bg
    // style={{ backgroundImage: `url(${item.bgImage})` }}

    function renderSlides() {
        return slides.map(function (item, index) {
            return (
                <SwiperSlide key={index}>
                    {/* Whole slide moves — background and content together */}
                    <div className="hero-slide">

                        {/* Background for THIS slide */}
                        <div
                            className="hero-slide-bg"
                            // style={{ backgroundImage: "url('/task-2-bg-3.jpg')" }}
                            // per-slide background
                            style={{ backgroundImage: `url(${item.bgImage})` }}
                        />

                        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-12 px-8 py-20 w-full max-w-8xl mx-auto relative z-10">

                            {/* LEFT text */}
                            <div className="w-full md:w-1/2 space-y-6 hero-text-animate">
                                <h1 className="text-4xl md:text-5xl font-bold text-[#fac21e] leading-tight">
                                    {item.title}
                                </h1>

                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {item.description}
                                </p>

                                <button
                                    className="
                                        relative px-8 py-3 font-semibold text-black rounded-full
                                        bg-linear-to-r from-[#F7E9A8] via-[#E2BB55] to-[#B97B20]
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

                            {/* RIGHT IMAGE */}
                            <div className="w-full md:w-1/2 flex justify-center hero-image-animate">
                                <div className="
                                    w-full max-w-xl h-[400px] md:h-[590px]
                                    relative rounded-3xl overflow-hidden
                                    bg-black
                                    shadow-[0_0_25px_rgba(255,215,0,0.2)]
                                    border border-[#8f7c45]/40
                                    animate-fadeIn
                                ">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover rounded-3xl"
                                        loading="lazy"
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
        <section className="hero-section-outer">
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
