// dynamic blog post content-
// export default async function BlogDetails({ params }) {
//     const { slug } = await params;

//     return (
//         <div className="min-h-screen bg-black text-white pt-40 px-6 md:px-20">
//             <h1 className="text-4xl font-bold capitalize">
//                 {slug.replaceAll("-", " ")}
//             </h1>

//             {/* here i can show the content of the blog post but how i will show diffent content for different blog pst ??  */}
//         </div>
//     );
// }

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { blogDetails } from "../../../../data/blogs";

//  Content Renderer with Responsive Classes
function ContentRenderer({ content }) {
    if (!content) return null;

    return content.split("\n").map((line, i) => {
        const trimmed = line.trim();

        // 1. Headings
        // Mobile: text-xl, Desktop: text-3xl
        if (trimmed.startsWith("###")) {
            return (
                <h3 key={i} className="text-xl md:text-3xl font-serif text-[#8f7c45] mt-8 md:mt-10 mb-4 border-l-4 border-[#8f7c45] pl-4">
                    {trimmed.replace("###", "").trim()}
                </h3>
            );
        }

        // 2. Bullets
        if (trimmed.startsWith("-")) {
            return (
                <div key={i} className="flex items-start gap-3 mb-3 pl-2 md:pl-4">
                    <span className="mt-2.5 md:mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#715723] to-[#8f7c45] shrink-0"></span>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                        {trimmed.replace("-", "").replace(/\*\*(.*?)\*\*/g, '$1').trim()}
                    </p>
                </div>
            );
        }

        // 3. Tables (|) 
        // Mobile: Smaller text, tighter gap
        if (trimmed.startsWith("|")) {
            const cols = trimmed.split("|").filter((c) => c.trim() !== "");
            if (trimmed.includes("---")) return null;

            return (
                <div key={i} className="grid grid-cols-3 gap-2 md:gap-4 border-b border-[#333] py-3 text-xs md:text-base">
                    {cols.map((col, idx) => (
                        <span key={idx} className={`${idx === 0 ? "text-[#8f7c45] font-semibold" : "text-gray-400"}`}>
                            {col.trim()}
                        </span>
                    ))}
                </div>
            );
        }

        // 4. Standard Paragraph
        // Mobile: text-base (16px), Desktop: text-lg (18px)
        if (trimmed.length > 0) {
            return (
                <p key={i} className="mb-6 text-gray-300 leading-7 md:leading-8 text-base md:text-lg">
                    {line}
                </p>
            );
        }
        return <br key={i} />;
    });
}

// Main Component
export default function BlogDetails({ params }) {
    // Unwraping params
    const resolvedParams = React.use(params);
    const { slug } = resolvedParams;

    const blog = blogDetails.find((b) => b.slug === slug);

    if (!blog) {
        return notFound();
    }

    // Recommended posts (Filter out current one)
    const relatedPosts = blogDetails.filter(function (b) {
        return b.slug !== slug;
    }).slice(0, 3);


    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#8f7c45] selection:text-black mt-5">

            {/* --- HEADER / HERO SECTION --- */}
            {/* px-5 for mobile, px-20 for desktop */}
            <section className="pt-28 md:pt-32 pb-8 md:pb-12 px-5 md:px-20 max-w-7xl mx-auto">

                {/* Breadcrumb */}
                <Link href="/blogs" className="inline-flex items-center text-gray-500 hover:text-[#8f7c45] transition-colors mb-6 md:mb-8 text-xs md:text-sm uppercase tracking-widest group">
                    <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Journal
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Tags & Date */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6 text-sm">
                        <span className="px-3 py-1 md:px-4 md:py-1.5 border border-[#8f7c45]/40 bg-gradient-to-r from-[#715723]/10 to-[#8f7c45]/10 text-[#8f7c45] rounded-full tracking-wide uppercase text-[10px] md:text-xs font-bold">
                            {blog.tag}
                        </span>
                        <span className="text-gray-600">|</span>
                        <p className="text-gray-400 tracking-wide font-light text-xs md:text-sm">{blog.date}</p>
                    </div>

                    {/* Main Title - Responsive sizing */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-[1.1] mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-left md:text-center">
                        {blog.title}
                    </h1>
                </motion.div>

                {/* Hero Image - Responsive Height */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-lg overflow-hidden border-b-2 border-[#8f7c45]"
                >
                    <Image
                        src={blog.img}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </motion.div>
            </section>

            {/* --- CONTENT SECTION --- */}
            {/* px-5 on mobile ensures text doesn't hit the edges */}
            <section className="px-5 md:px-20 max-w-4xl mx-auto pb-16 md:pb-24 relative">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <ContentRenderer content={blog.content} />
                </motion.article>

                {/* Fancy Divider */}
                <div className="mt-16 md:mt-20 flex items-center gap-4 opacity-60">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#715723] to-transparent"></div>
                    <div className="text-[#8f7c45] text-lg md:text-xl font-serif">♦</div>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#715723] to-transparent"></div>
                </div>
            </section>

            {/* --- RELATED ARTICLES --- */}
            <section className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-16 md:py-24 px-5 md:px-20">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
                        <h2 className="text-2xl md:text-4xl font-serif text-white">
                            Recommended <span className="text-[#8f7c45]">Stories</span>
                        </h2>
                        <Link href="/blogs" className="text-[#8f7c45] hover:text-white transition-colors text-xs md:text-sm uppercase tracking-widest border-b border-[#8f7c45] pb-1">
                            View All
                        </Link>
                    </div>

                    {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col laptop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedPosts.map((item) => (
                            <Link href={`/blogs/${item.slug}`} key={item.id}>
                                <div className="group h-full flex flex-col bg-black border border-[#222] hover:border-[#8f7c45]/60 transition-all duration-500 rounded-lg overflow-hidden relative">

                                    {/* Card Image */}
                                    <div className="relative w-full h-56 md:h-64 overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 duration-700 opacity-90 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
                                    </div>

                                    {/* Card Text */}
                                    <div className="p-6 md:p-8 flex flex-col flex-1">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-[#8f7c45] text-[10px] md:text-xs font-bold uppercase tracking-widest">{item.tag}</span>
                                            <span className="text-gray-500 text-[10px] md:text-xs">{item.date}</span>
                                        </div>

                                        <h3 className="text-lg md:text-xl font-medium leading-snug group-hover:text-[#8f7c45] transition-colors duration-300 mb-3">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm line-clamp-2 mb-6 leading-relaxed">
                                            {item.desc}
                                        </p>

                                        <div className="mt-auto flex items-center text-xs md:text-sm text-gray-500 group-hover:text-white transition-colors">
                                            Read Full Story <span className="ml-2 text-[#8f7c45] group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}