"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StorePage() {

    const products = [
        { id: 1, title: "Premium Gate Design", description: "Handcrafted luxury gate design for modern entrances.", price: "29,999", image: "/product-image.jpg" },
        { id: 2, title: "Royal Wall Art Panel", description: "Metal wall art built with precision and elegance.", price: "14,499", image: "/desiginer-entry-gates1.jpg" },
        { id: 3, title: "Classic Balcony Railing", description: "Custom railing crafted with architectural excellence.", price: "22,199", image: "/boundry-wall-gates.jpg" },
        { id: 4, title: "Decorative Metal Partition", description: "Perfect for luxury interior space division.", price: "18,999", image: "/hero-about-img.jpg" },
        { id: 5, title: "Laser Cut Panel", description: "Premium metal cutting artwork for modern walls.", price: "16,249", image: "/modern-steel-doors.png" },
        { id: 6, title: "Custom Designer Name Plate", description: "Luxury handcrafted name plate in premium finish.", price: "8,999", image: "/product-image.jpg" },
    ];

    return (
        <section className="min-h-screen w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-16 mt-20">

            {/* HERO */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="max-w-6xl mx-auto text-center space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fac21e] via-[#d6a11a] to-[#8f7c45] tracking-wide drop-shadow-lg">
                    Premium Metal Art Collection
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Discover handcrafted luxury metal artwork created with precision and passion.
                    Designed to elevate modern architectural spaces with elegance.
                </p>

                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "18rem", opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="mx-auto h-[3px] rounded-full bg-linear-to-r from-transparent via-[#fac21e] to-transparent"
                />
            </motion.div>

            {/* CATEGORY FILTER BUTTONS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 mt-12"
            >
                {["All", "Main Gates", "Wall Art", "Railings", "Custom Designs"].map((label, index) => (
                    <button
                        key={index}
                        className="px-6 py-2 rounded-full border border-[#fac21e]/50 text-[#fac21e]
                        hover:bg-[#fac21e] hover:text-black transition duration-300"
                    >
                        {label}
                    </button>
                ))}
            </motion.div>

            {/* PRODUCT GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-20">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="relative group rounded-2xl overflow-hidden bg-[#111]/70 backdrop-blur-sm
                        hover:-translate-y-2 transition-all duration-500"
                    >
                        <div className="relative w-full h-64 overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                        </div>

                        <div className="p-6 space-y-3">
                            <h3 className="text-xl font-semibold text-[#fac21e] tracking-wide">
                                {product.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>

                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xl font-bold text-[#fac21e] drop-shadow-md">₹ {product.price}</span>
                                <Link
                                    href="/product-details"
                                    className="px-5 py-2 rounded-full text-sm font-medium 
                                    border border-[#fac21e] text-[#fac21e]
                                    hover:bg-[#fac21e] hover:text-black transition-all"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Banner */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1 }}
                className="max-w-5xl mx-auto text-center mt-24 bg-[#111]/70 backdrop-blur-md 
                p-12 rounded-2xl border border-[#fac21e]/30"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#fac21e] tracking-wide">
                    Custom Luxury Designs For Unique Spaces
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Want something truly one-of-a-kind? We transform your concepts into real metal masterpieces.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-8 px-10 py-3 rounded-full bg-[#fac21e] text-black font-semibold
                    hover:bg-[#e0ae1b] transition duration-300"
                >
                    Request Custom Quote
                </Link>
            </motion.div>

            {/* FOOTER CTA */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="text-center mt-28"
            >
                <h3 className="text-lg text-[#fac21e] tracking-widest uppercase">Premium Craftsmanship</h3>
                <p className="text-gray-500 text-sm mt-2">Handmade by Artisans. Built for Generations.</p>
            </motion.div>

        </section>
    );
}
