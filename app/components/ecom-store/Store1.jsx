"use client"
import React, { useState } from 'react';
// UI Icons
import {
    FiSearch, FiShoppingCart, FiUser, FiChevronDown,
    FiMenu, FiX, FiMail, FiSmartphone, FiHeart, FiMapPin,
    FiTruck, FiHelpCircle, FiArrowRight
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

export default function StorePage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    // --- COMPONENTS ---

    function LoginModal() {
        return (
            <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all">
                <div className="bg-white w-full max-w-md border-t-4 border-[#D4AF37] p-8 relative shadow-2xl">
                    <button onClick={function () { setShowLoginModal(false) }} className="absolute top-4 right-4 text-slate-400 hover:text-[#D4AF37] transition hover:cursor-pointer">
                        <FiX size={26} />
                    </button>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl text-slate-900 mb-2">My Account</h2>
                        <p className="text-base text-slate-500">Sign in to access your wishlist and order tracking.</p>
                    </div>

                    {/* Social Login */}
                    <div className="space-y-3 mb-6">
                        <button className="w-full border border-slate-300 p-3 flex items-center justify-center gap-3 
                                hover:bg-[#D4AF3710] hover:border-[#D4AF37] hover:text-[#D4AF37] 
                                transition duration-300 cursor-pointer">
                            <FcGoogle size={28} />
                            <span className="font-medium text-base">Continue with Google</span>
                        </button>
                        <button className="w-full border border-slate-300 p-3 pl-8 flex items-center justify-center gap-3 hover:bg-[#D4AF3710] hover:border-[#D4AF37] hover:text-[#D4AF37] transition duration-300 cursor-pointer">
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
                            <input type="tel" placeholder="Mobile Number *" className="w-full pl-10 p-3 border border-slate-300 focus:outline-none focus:border-[#D4AF37] transition rounded-none placeholder:text-slate-400 text-base" required />
                        </div>
                        <div className="relative group">
                            <FiMail className="absolute left-3 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-[#D4AF37] transition" />
                            <input type="email" placeholder="Email Address *" className="w-full pl-10 p-3 border border-slate-300 focus:outline-none focus:border-[#D4AF37] transition rounded-none placeholder:text-slate-400 text-base" required />
                        </div>

                        <div className="text-base text-slate-500 mt-2">
                            By continuing, you agree to our <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                        </div>

                        <button className="w-full bg-[#D4AF37] hover:bg-[#B59025] text-white font-bold p-4 tracking-widest transition uppercase text-base hover:cursor-pointer">
                            Secure Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-slate-800 selection:bg-[#D4AF37] selection:text-white mt-33 mb-0">

            {/* --- UTILITY BAR (Text Base) --- */}
            <div className="bg-slate-900 text-slate-300 text-base py-3 hidden md:block">
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
            </div>

            {/* --- MAIN HEADER --- */}
            <nav className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-24 items-center gap-8">

                        {/* Mobile Menu - for mobile devices in case */}
                        {/* <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-900">
                            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button> */}

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center cursor-pointer">
                            <span className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-wide">
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

                        {/* Icons - Labels removed/simplified to clean up layout with larger text */}
                        <div className="flex items-center space-x-6 lg:space-x-8">
                            <button onClick={() => setShowLoginModal(true)} className="hidden md:flex flex-col items-center gap-1 group hover:cursor-pointer">
                                <FiUser className="h-6 w-6 text-slate-700 group-hover:text-[#D4AF37] transition" />
                                <span className="text-base font-bold tracking-wider text-slate-500 group-hover:text-[#D4AF37] hidden lg:block">Sign In</span>
                            </button>
                            {/* <button className="flex flex-col items-center gap-1 group">
                                <FiHeart className="h-6 w-6 text-slate-700 group-hover:text-[#D4AF37] transition" />
                                <span className="text-base font-bold tracking-wider text-slate-500 group-hover:text-[#D4AF37] hidden lg:block">Wishlist</span>
                            </button>
                            <button className="flex flex-col items-center gap-1 group relative">
                                <div className="relative">
                                    <FiShoppingCart className="h-6 w-6 text-slate-700 group-hover:text-[#D4AF37] transition" />
                                    <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-base font-bold h-6 w-6 flex items-center justify-center rounded-full">3</span>
                                </div>
                                <span className="text-base font-bold tracking-wider text-slate-500 group-hover:text-[#D4AF37] hidden lg:block">Cart</span>
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Secondary Navigation (Categories) - Text Base */}
                <div className="hidden md:block border-t border-slate-100 py-4">
                    <div className="max-w-7xl mx-auto px-8 flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-600">
                        <span className="hover:text-[#D4AF37] cursor-pointer">Products</span>
                        <span className="hover:text-[#D4AF37] cursor-pointer">Balcony</span>
                        <span className="hover:text-[#D4AF37] cursor-pointer text-[#D4AF37]">Offers</span>
                        <span className="hover:text-[#D4AF37] cursor-pointer">New In</span>
                    </div>
                </div>
            </nav>

            {showLoginModal && <LoginModal />}

            {/* --- HERO SPLIT --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] w-full bg-[#FDFBF7]">
                <div className="flex flex-col justify-center px-12 lg:px-24 items-start">
                    <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-base mb-4">New Collection 2025</span>
                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Security Meets <br /> Sophistication.
                    </h1>
                    <p className="text-slate-600 mb-8 max-w-md text-base">
                        Discover the new Imperial Vantage series. Hand-forged aesthetics with smart-lock technology.
                    </p>
                    <button className="bg-slate-900 text-white px-8 py-4 font-bold text-base uppercase tracking-widest hover:bg-[#D4AF37] transition duration-300 hover:cursor-pointer">
                        Explore The Series
                    </button>
                </div>
                <div className="h-full w-full bg-slate-200 overflow-hidden relative">
                    <Image
                        src="/desiginer-entry-gates1.jpg"
                        alt="Hero Gate"
                        fill
                        className="object-cover w-full h-full hover:scale-105 transition duration-[2000ms]"
                        priority
                    />
                </div>
            </div>

            {/* shop by category */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Shop By Category</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map(function (category, idx) {
                        return (
                            <div key={idx} className="group cursor-pointer text-center">
                                <div className="w-full aspect-square rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-[#D4AF37] transition duration-300 relative">
                                    <Image
                                        src={category.img}
                                        alt={category.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-[1500ms]"
                                    />
                                </div>

                                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#D4AF37] transition">
                                    {category.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </section>


            {/* --- MAIN STORE CONTENT --- */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100">
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-60 flex-shrink-0">
                        <div className="sticky top-32">
                            <div className="mb-8">
                                <h3 className="font-bold text-base uppercase tracking-wider mb-4 border-b border-[#D4AF37] pb-2 inline-block">Filter By</h3>
                            </div>

                            <div className="space-y-8">
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
                            <h2 className="text-2xl font-bold">All Products</h2>
                            <button className="flex items-center gap-2 text-base font-bold hover:text-[#D4AF37]  hover:cursor-pointer">
                                Sort <FiChevronDown size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                            {products.map(function (product) {
                                return (
                                    <div key={product.id} className="group flex flex-col relative">
                                        {/* Badges */}
                                        {product.new && (
                                            <span className="absolute top-3 left-3 z-10 bg-[#D4AF37] text-white text-base font-bold px-3 py-1 uppercase tracking-widest">New</span>
                                        )}
                                        <button className="absolute top-3 right-3 z-10 bg-white p-3 rounded-full shadow-md text-slate-400 hover:text-red-500 transition opacity-0 group-hover:opacity-100 hover:cursor-pointer">
                                            <FiHeart size={20} />
                                        </button>

                                        {/* Image */}
                                        <div className="relative aspect-[3/4] bg-[#F5F5F5] mb-4 cursor-pointer overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                            />
                                            <div className="absolute inset-x-0 bottom-4 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">


                                                <button className="w-full flex items-center justify-center gap-2 bg-white/90 backdrop-blur text-slate-900 py-4 text-base font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-colors shadow-base hover:cursor-pointer">
                                                    <FiShoppingCart size={20} />
                                                    Add to Cart
                                                </button>

                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#D4AF37] transition-colors cursor-pointer">
                                                {product.name}
                                            </h3>
                                            <p className="text-base text-slate-500 mb-2 truncate">{product.desc}</p>
                                            <p className="text-xl text-slate-900">
                                                <span className="text-base align-top">₹</span>
                                                {product.price.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* --- INSPIRATION SECTION --- */}
            <section className="bg-[#F8F6F2] py-20 mb-0">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">

                    {/* HEADER */}
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-[#D4AF37] font-semibold tracking-[0.25em] uppercase text-sm">
                                Inspiration
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">
                                The Estate Look
                            </h2>
                        </div>

                        <button className="hidden md:flex items-center gap-2 border-b border-slate-900 pb-1 text-base font-semibold hover:text-[#D4AF37] hover:border-[#D4AF37] transition hover:cursor-pointer">
                            View Full Gallery <FiArrowRight size={18} />
                        </button>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[580px]">

                        {/* BIG IMAGE */}
                        <div className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer">
                            <Image
                                src="/hero-about-img.jpg"
                                alt="Modern Farmhouse Gate"
                                fill
                                className="object-cover transition duration-[1200ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="text-3xl font-bold">Modern Farmhouse</h3>
                                <p className="text-base opacity-80">See products used</p>
                            </div>

                            <button className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
                                Explore <FiArrowRight className="inline ml-2" />
                            </button>
                        </div>

                        {/* SECOND COLUMN */}
                        <div className="grid grid-rows-2 gap-6">

                            <div className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer">
                                <Image
                                    src="/store-page-inspiration.png"
                                    alt="Gold Entrance"
                                    fill
                                    className="object-cover transition duration-[1200ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                                    The Gold Entrance
                                </h3>
                            </div>

                            <div className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer">
                                <Image
                                    src="/store-page-inspiration-1.png"
                                    alt="Minimalist Steel"
                                    fill
                                    className="object-cover transition duration-[1200ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                                    Minimalist Steel
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};