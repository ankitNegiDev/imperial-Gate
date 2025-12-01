"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutUs() {

    const timelineData = [
        { year: "2017", text: "Started in a small garage crafting security screen doors." },
        { year: "2019", text: "Expanded into designer wrought-iron gates & railings." },
        { year: "2022", text: "Built full-scale manufacturing unit & skilled artisan team." },
        { year: "2024", text: "Serving architects, luxury homeowners & premium builders PAN-India." }
    ];

    const capabilities = [
        "Custom Luxury Gates",
        "Designer Wrought-Iron Doors",
        "Balcony & Staircase Railings",
        "Laser-Cut Metal Panels & Facades",
        "Bulk Commercial / Apartment Projects",
        "On-site Measurement, Delivery & Installation",
    ];

    const processSteps = [
        { step: "01", title: "Concept & Consultation" },
        { step: "02", title: "Design & Engineering" },
        { step: "03", title: "Fabrication & Finishing" },
        { step: "04", title: "Delivery & Installation" },
    ];

    const qualityList = [
        "Premium grade metals & corrosion-resistant coatings",
        "Precision hand welding & advanced finishing standards",
        "Multi-stage inspection & structural safety validation",
        "Warranty coverage & premium installation support"
    ];
    const testimonials = [
        {
            image: "/testimonial-img-1.png",
            text: "Exceptional craftsmanship and premium finishing. The gate completely transformed our home exterior."
        },
        {
            image: "/testimonial-img-2.png",
            text: "The Dwars team's attention to detail is unmatched. Installation was smooth and professional."
        },
        {
            image: "/testimonial-img-3.png",
            text: "We recommend them to every architect we work with — true experts in artistic ironwork."
        }
    ];


    return (
        <div className="bg-[#050505] text-white pt-0 mt-13 pb-28">

            {/* HERO SECTION */}
            <section className="relative w-full h-screen mb-24 overflow-hidden">

                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/about-us-finial.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Foreground Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        The Dwars
                        <span className="block mt-2 bg-[#fac21e] bg-clip-text text-transparent">
                            Crafting Metal. Creating Legacy.
                        </span>
                    </h1>

                    <p className="text-lg text-gray-300 leading-relaxed mt-8 max-w-3xl mx-auto">
                        Since 2017, The Dwars has transformed the world of premium architectural metalwork —
                        shaping bespoke wrought-iron gates, designer doors, railings & metal structures
                        built for luxury homes and signature architectural spaces across India.
                    </p>

                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "12rem", opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="mx-auto mt-12 h-[3px] rounded-full bg-linear-to-r from-[#8B621A] via-[#EED9A1] to-[#C79A45]"
                    />
                </motion.div>
            </section>

            {/* TIMELINE */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-12">Our Journey</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {timelineData.map(function (item, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="bg-[#0c0c0c] border border-[#8f7c45]/30 p-8 rounded-2xl text-center"
                            >
                                <h3 className="text-4xl font-bold text-[#fac21e] ">{item.year}</h3>
                                <p className="mt-3 text-gray-300 text-base">{item.text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* CAPABILITIES */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-10">Manufacturing Capabilities</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map(function (text, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#0c0c0c] p-8 border border-[#8f7c45]/30 rounded-2xl"
                            >
                                <h3 className="text-2xl text-[#fac21e]  font-medium">{text}</h3>
                                <p className="text-gray-300 text-base mt-3 leading-relaxed">
                                    Engineered with precision and handcrafted finishing for long-lasting performance.
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* PROCESS */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
                    Our Premium <span className="text-[#fac21e] ">Fabrication Process</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {processSteps.map(function (step, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-2xl p-10 text-center"
                            >
                                <h3 className="text-4xl font-bold text-[#fac21e] ">{step.step}</h3>
                                <p className="text-base mt-3 font-medium">{step.title}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* QUALITY */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24 bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-3xl p-12"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#fac21e]  mb-12">
                    Quality. Precision. Reliability.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {qualityList.map(function (text, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#111] p-6 rounded-2xl border border-[#8f7c45]/20"
                            >
                                <p className="text-gray-300 text-base leading-relaxed">{text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* GALLERY */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[#fac21e]">Our Work & Installations</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["/wrought-iron-doors.png", "/stair-case-railings.png", "/flat-entrance.png"].map(function (img, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-56 overflow-hidden rounded-2xl border border-[#8f7c45]/30"
                            >
                                <Image
                                    src={img}
                                    alt="gallery"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* TESTIMONIALS */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-28"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center text-[#fac21e] tracking-wide">
                    What Our Clients Say
                </h2>

                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "16rem", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="mx-auto h-[3px] rounded-full bg-linear-to-r from-transparent via-[#fac21e] to-transparent mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map(function (testimonial, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.12 }}
                                viewport={{ once: true }}
                                className="
                                    group bg-[#0c0c0c]/70 backdrop-blur-md rounded-2xl p-10 text-center 
                                    hover:-translate-y-2 transition-all duration-500 
                                    border border-[#8f7c45]/30 relative overflow-hidden
                                "
                            >
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-[3px] border-[#fac21e] 
                    shadow-[0_0_25px_#fac21e40] group-hover:shadow-[0_0_35px_#fac21e80] transition-all duration-700">
                                    <Image
                                        src={testimonial.image}
                                        width={100}
                                        height={100}
                                        className="object-cover"
                                        alt="client"
                                    />
                                </div>

                                <p className="text-gray-300 text-sm mt-6">⭐ ⭐ ⭐ ⭐ ⭐</p>

                                <p className="mt-4 text-gray-300 text-[15px] leading-relaxed italic">
                                    {testimonial.text}
                                </p>

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "6rem" }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    className="mx-auto mt-6 h-[2px] bg-gradient-to-r from-transparent via-[#fac21e] to-transparent rounded-full"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>


            {/* CTA */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 text-center mt-16"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-semibold mb-6">Let's Build Something Legendary</h2>
                <p className="text-gray-300 mb-8 text-sm">
                    Ready to begin designing your premium architectural metalwork project?
                </p>
                <button className="px-12 py-4 rounded-full bg-linear-to-r from-[#715723] to-[#8f7c45] text-black font-semibold uppercase tracking-wide hover:brightness-110 transition hover:cursor-pointer">
                    Start Your Project
                </button>
            </motion.section>

        </div>
    );
}

export default AboutUs;
