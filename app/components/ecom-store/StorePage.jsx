"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion
// UI Icons
import {
    FiSearch, FiShoppingCart, FiUser, FiChevronDown,
    FiMenu, FiX, FiMail, FiSmartphone, FiHeart, FiMapPin,
    FiTruck, FiHelpCircle, FiArrowRight, FiFilter
} from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';

// --- DATA ---
const products = [
    { id: 1, name: 'IMPERIAL VANTAGE', category: 'Main Gates', price: 125000, image: '/boundry-wall-gates.jpg', desc: 'Hand-forged wrought iron with gold leaf accents.', new: true },
    { id: 2, name: 'ROYAL GUARD', category: 'Security Doors', price: 45000, image: '/desiginer-entry-gates1.jpg', desc: 'Reinforced steel with classic aesthetic.', new: false },
    { id: 3, name: 'MODERN LINE', category: 'Railings', price: 15000, image: '/modern-steel-doors.png', desc: 'Minimalist balcony railing design.', new: false },
    { id: 4, name: 'GOLDEN ARCH', category: 'Entry Gates', price: 180000, image: '/product-image.jpg', desc: 'Double swing gate with automated systems.', new: true },
    { id: 5, name: 'ESTATE SHIELD', category: 'Main Gates', price: 210000, image: '/hero-about-img.jpg', desc: 'Heavy-duty privacy gate for large estates.', new: false },
    { id: 6, name: 'LUXE PANEL', category: 'Laser Cut', price: 32000, image: '/royal-entry-doors.jpg', desc: 'Decorative laser cut steel panel.', new: false },
];

const categories = [
    { name: "Main Gates", img: "/desiginer-entry-gates1.jpg" },
    { name: "Railings", img: "/boundry-wall-gates.jpg" },
    { name: "Automations", img: "/product-image.jpg" },
    { name: "Security", img: "/modern-steel-doors.png" }
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
};

export default function StorePage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen || showLoginModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen, showLoginModal]);

    // --- COMPONENTS ---

    function LoginModal() {
        return (
            <AnimatePresence>
                <div className="fixed inset-0 bg-slate-900/60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm transition-all">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white w-full max-w-md border-t-4 border-[#D4AF37] p-8 relative shadow-2xl rounded-lg md:rounded-none"
                    >
                        <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-[#D4AF37] transition hover:cursor-pointer">
                            <FiX size={26} />
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="text-3xl text-slate-900 mb-2 font-bold">My Account</h2>
                            <p className="text-base text-slate-500">Sign in to access your wishlist and order tracking.</p>
                        </div>

                        {/* Social Login */}
                        <div className="space-y-3 mb-6">
                            <button className="w-full border border-slate-300 p-3 flex items-center justify-center gap-3 
                                    hover:bg-[#D4AF3710] hover:border-[#D4AF37] hover:text-[#D4AF37] 
                                    transition duration-300 cursor-pointer rounded-lg md:rounded-none">
                                <FcGoogle size={28} />
                                <span className="font-medium text-base">Continue with Google</span>
                            </button>
                            <button className="w-full border border-slate-300 p-3 pl-8 flex items-center justify-center gap-3 hover:bg-[#D4AF3710] hover:border-[#D4AF37] hover:text-[#D4AF37] transition duration-300 cursor-pointer rounded-lg md:rounded-none">
                                <FaFacebook size={28} className="text-[#1877F2]" />
                                <span className="font-medium text-base">Continue with Facebook</span>
                            </button>
                        </div>

                        <div className="relative flex py-2 items-center mb-6">
                            <div className="flex-grow border-t border-slate-200"></div>
                            <span className="flex-shrink-0 mx-4 text-slate-400 text-base tracking-widest uppercase">Or</span>
                            <div className="flex-grow border-t border-slate-200"></div>
                        </div>

                        {/* Form */}
                        <form className="space-y-5">
                            <div className="relative group">
                                <FiSmartphone className="absolute left-3 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-[#D4AF37] transition" />
                                <input type="tel" placeholder="Mobile Number *" className="w-full pl-10 p-3 border border-slate-300 focus:outline-none focus:border-[#D4AF37] transition rounded-lg md:rounded-none placeholder:text-slate-400 text-base" required />
                            </div>
                            <div className="relative group">
                                <FiMail className="absolute left-3 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-[#D4AF37] transition" />
                                <input type="email" placeholder="Email Address *" className="w-full pl-10 p-3 border border-slate-300 focus:outline-none focus:border-[#D4AF37] transition rounded-lg md:rounded-none placeholder:text-slate-400 text-base" required />
                            </div>

                            <div className="text-base text-slate-500 mt-2">
                                By continuing, you agree to our <span className="underline cursor-pointer">Terms</span>.
                            </div>

                            <button className="w-full bg-[#D4AF37] hover:bg-[#B59025] text-white font-bold p-4 tracking-widest transition uppercase text-base hover:cursor-pointer rounded-lg md:rounded-none shadow-lg">
                                Secure Login
                            </button>
                        </form>
                    </motion.div>
                </div>
            </AnimatePresence>
        );
    }

    return (
        <div className="min-h-screen bg-white text-slate-800 selection:bg-[#D4AF37] selection:text-white mt-0 md:mt-33 mt-33">

            {/* --- UTILITY BAR (Desktop Only) --- */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900 text-slate-300 text-base py-3 hidden md:block"
            >
                <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2 hover:text-white cursor-pointer"><FiTruck /> Delivery to: <span className="underline">110001</span></span>
                        <span className="flex items-center gap-2 hover:text-white cursor-pointer"><FiMapPin /> Find a Showroom</span>
                    </div>
                    <div className="flex gap-6">
                        <span className="hover:text-white cursor-pointer">Track Order</span>
                        <span className="flex items-center gap-2 hover:text-white cursor-pointer"><FiHelpCircle /> Help & Support</span>
                    </div>
                </div>
            </motion.div>

            {/* --- MAIN HEADER --- */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 md:h-24 items-center gap-4 md:gap-8">

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-slate-900 p-2 -ml-2">
                            <FiMenu size={28} />
                        </button>

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center cursor-pointer">
                            <span className="text-xl md:text-3xl font-bold text-slate-900 tracking-wide truncate">
                                THE<span className="text-[#D4AF37]"> </span>DWARS
                            </span>
                        </div>

                        {/* Desktop Search */}
                        <div className="hidden md:flex flex-1 max-w-2xl">
                            <div className="relative w-full group">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="w-full bg-[#F5F5F5] hover:bg-[#EAEAEA] focus:bg-white border border-transparent focus:border-[#D4AF37] py-3 px-6 pl-12 focus:outline-none transition-all rounded-full text-base"
                                />
                                <FiSearch className="absolute left-4 top-3.5 text-slate-500 h-5 w-5" />
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-4 lg:space-x-8">
                            <button className="md:hidden text-slate-900">
                                <FiSearch size={24} />
                            </button>
                            <button onClick={() => setShowLoginModal(true)} className="hidden md:flex flex-col items-center gap-1 group hover:cursor-pointer">
                                <FiUser className="h-6 w-6 text-slate-700 group-hover:text-[#D4AF37] transition" />
                                <span className="text-base font-bold tracking-wider text-slate-500 group-hover:text-[#D4AF37] hidden lg:block">Sign In</span>
                            </button>
                            <button className="flex relative hover:cursor-pointer">
                                <FiShoppingCart className="h-6 w-6 text-slate-900 md:text-slate-700 hover:text-[#D4AF37] transition" />
                                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">3</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Secondary Navigation */}
                <div className="hidden md:block border-t border-slate-100 py-4">
                    <div className="max-w-7xl mx-auto px-8 flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-600">
                        <span className="hover:text-[#D4AF37] cursor-pointer">Products</span>
                        <span className="hover:text-[#D4AF37] cursor-pointer">Balcony</span>
                        <span className="hover:text-[#D4AF37] cursor-pointer text-[#D4AF37]">Offers</span>
                        <span className="hover:text-[#D4AF37] cursor-pointer">New In</span>
                    </div>
                </div>
            </motion.nav>

            {/* --- MOBILE MENU OVERLAY --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute top-0 left-0 w-[80%] max-w-[300px] h-full bg-white shadow-2xl flex flex-col"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                <span className="text-xl font-bold">Menu</span>
                                <button onClick={() => setIsMobileMenuOpen(false)}><FiX size={24} /></button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                <div className="space-y-4 text-lg font-medium text-slate-800">
                                    <div className="pb-2 border-b border-slate-100">Products</div>
                                    <div className="pb-2 border-b border-slate-100">Balcony</div>
                                    <div className="pb-2 border-b border-slate-100 text-[#D4AF37]">Offers</div>
                                    <div className="pb-2 border-b border-slate-100">New In</div>
                                </div>
                                <div className="pt-6">
                                    <button onClick={() => { setIsMobileMenuOpen(false); setShowLoginModal(true); }} className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold">Sign In / Join</button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {showLoginModal && <LoginModal />}

            {/* --- HERO SPLIT --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[500px] w-full bg-[#FDFBF7]">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }}
                    className="h-[300px] md:h-full w-full bg-slate-200 overflow-hidden relative order-1 md:order-2"
                >
                    <Image
                        src="/desiginer-entry-gates1.jpg"
                        alt="Hero Gate"
                        fill
                        className="object-cover w-full h-full hover:scale-105 transition duration-[2000ms]"
                        priority
                    />
                </motion.div>

                <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-24 items-start order-2 md:order-1 overflow-hidden">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeInUp} className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm md:text-base mb-3 md:mb-4 block">
                            New Collection 2025
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                            Security Meets <br /> Sophistication.
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-slate-600 mb-6 md:mb-8 max-w-md text-sm md:text-base">
                            Discover the new Imperial Vantage series. Hand-forged aesthetics with smart-lock technology.
                        </motion.p>
                        <motion.button variants={fadeInUp} className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#D4AF37] transition duration-300 hover:cursor-pointer">
                            Explore The Series
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* --- SHOP BY CATEGORY --- */}
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-slate-900 mb-6 md:mb-8 text-center md:text-left"
                >
                    Shop By Category
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x"
                >
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInScale}
                            className="group cursor-pointer text-center min-w-[140px] snap-center"
                        >
                            <div className="w-full aspect-square rounded-full overflow-hidden mb-3 md:mb-4 border-4 border-transparent group-hover:border-[#D4AF37] transition duration-300 relative">
                                <Image
                                    src={category.img}
                                    alt={category.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-[1500ms]"
                                />
                            </div>
                            <h3 className="font-bold text-sm md:text-base text-slate-900 group-hover:text-[#D4AF37] transition">
                                {category.name}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* --- MAIN STORE CONTENT --- */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 border-t border-slate-100">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">

                    {/* Mobile Filter Toggle */}
                    <button
                        className="md:hidden flex items-center justify-between w-full border border-slate-300 p-3 rounded font-bold"
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                    >
                        <span>Filter Products</span>
                        <FiFilter />
                    </button>

                    {/* Sidebar Filters */}
                    <aside className={`w-full md:w-60 flex-shrink-0 transition-all duration-300 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
                        <div className="sticky top-32">
                            <div className="mb-6 md:mb-8">
                                <h3 className="font-bold text-base uppercase tracking-wider mb-4 border-b border-[#D4AF37] pb-2 inline-block">Filter By</h3>
                            </div>

                            <div className="space-y-6 md:space-y-8">
                                <div>
                                    <h4 className="font-medium text-base mb-3">Material</h4>
                                    <div className="space-y-3 text-base text-slate-600">
                                        <label className="flex items-center gap-3 cursor-pointer hover:text-[#D4AF37]"><input type="checkbox" className="w-5 h-5 accent-[#D4AF37]" /> Wrought Iron</label>
                                        <label className="flex items-center gap-3 cursor-pointer hover:text-[#D4AF37]"><input type="checkbox" className="w-5 h-5 accent-[#D4AF37]" /> Steel</label>
                                        <label className="flex items-center gap-3 cursor-pointer hover:text-[#D4AF37]"><input type="checkbox" className="w-5 h-5 accent-[#D4AF37]" /> Wood Composite</label>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-medium text-base mb-3">Price</h4>
                                    <input type="range" min="10000" max="500000" className="w-full accent-[#D4AF37] h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                                    <div className="flex justify-between text-base text-slate-500 mt-2">
                                        <span>₹10k</span>
                                        <span>₹5L</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl md:text-2xl font-bold">All Products</h2>
                            <button className="flex items-center gap-2 text-sm md:text-base font-bold hover:text-[#D4AF37] hover:cursor-pointer">
                                Sort <FiChevronDown size={20} />
                            </button>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-12"
                        >
                            {products.map((product) => (
                                <motion.div
                                    key={product.id}
                                    variants={fadeInUp}
                                    className="group flex flex-col relative"
                                >
                                    {/* Badges */}
                                    {product.new && (
                                        <span className="absolute top-3 left-3 z-10 bg-[#D4AF37] text-white text-xs md:text-base font-bold px-3 py-1 uppercase tracking-widest">New</span>
                                    )}
                                    <button className="absolute top-3 right-3 z-10 bg-white p-2 md:p-3 rounded-full shadow-md text-slate-400 hover:text-red-500 transition hover:cursor-pointer">
                                        <FiHeart size={20} />
                                    </button>

                                    {/* Image */}
                                    <div className="relative aspect-[3/4] bg-[#F5F5F5] mb-4 cursor-pointer overflow-hidden rounded-md md:rounded-none">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 md:bottom-4 px-0 md:px-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="w-full flex items-center justify-center gap-2 bg-white/90 md:backdrop-blur text-slate-900 py-3 md:py-4 text-sm md:text-base font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-colors shadow-base hover:cursor-pointer">
                                                <FiShoppingCart size={18} />
                                                Add <span className="hidden md:inline">to Cart</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-base md:text-lg mb-1 md:mb-2 group-hover:text-[#D4AF37] transition-colors cursor-pointer">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm md:text-base text-slate-500 mb-2 truncate">{product.desc}</p>
                                        <p className="text-lg md:text-xl text-slate-900 font-semibold">
                                            <span className="text-sm md:text-base align-top">₹</span>
                                            {product.price.toLocaleString()}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* --- INSPIRATION SECTION --- */}
            <section className="bg-[#F8F6F2] py-12 md:py-20 mb-0">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">

                    {/* HEADER */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#D4AF37] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm">
                                Inspiration
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
                                The Estate Look
                            </h2>
                        </motion.div>

                        <button className="flex items-center gap-2 border-b border-slate-900 pb-1 text-sm md:text-base font-semibold hover:text-[#D4AF37] hover:border-[#D4AF37] transition hover:cursor-pointer">
                            View Full Gallery <FiArrowRight size={18} />
                        </button>
                    </div>

                    {/* GRID */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[580px]"
                    >

                        {/* BIG IMAGE */}
                        <motion.div variants={fadeInScale} className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer h-[300px] md:h-auto">
                            <Image
                                src="/hero-about-img.jpg"
                                alt="Modern Farmhouse Gate"
                                fill
                                className="object-cover transition duration-[1200ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                                <h3 className="text-2xl md:text-3xl font-bold">Modern Farmhouse</h3>
                                <p className="text-sm md:text-base opacity-80">See products used</p>
                            </div>
                        </motion.div>

                        {/* SECOND COLUMN */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-6">

                            <motion.div variants={fadeInScale} className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer h-[200px] md:h-auto">
                                <Image
                                    src="/store-page-inspiration.png"
                                    alt="Gold Entrance"
                                    fill
                                    className="object-cover transition duration-[1200ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                                <h3 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white text-xl md:text-2xl font-bold">
                                    The Gold Entrance
                                </h3>
                            </motion.div>

                            <motion.div variants={fadeInScale} className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer h-[200px] md:h-auto">
                                <Image
                                    src="/store-page-inspiration-1.png"
                                    alt="Minimalist Steel"
                                    fill
                                    className="object-cover transition duration-[1200ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                                <h3 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white text-xl md:text-2xl font-bold">
                                    Minimalist Steel
                                </h3>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};