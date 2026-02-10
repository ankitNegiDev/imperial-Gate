// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// function AboutUs() {

//     const timelineData = [
//         { year: "2017", text: "Started in a small garage crafting security screen doors." },
//         { year: "2019", text: "Expanded into designer wrought-iron gates & railings." },
//         { year: "2022", text: "Built full-scale manufacturing unit & skilled artisan team." },
//         { year: "2024", text: "Serving architects, luxury homeowners & premium builders PAN-India." }
//     ];

//     const capabilities = [
//         "Custom Luxury Gates",
//         "Designer Wrought-Iron Doors",
//         "Balcony & Staircase Railings",
//         "Laser-Cut Metal Panels & Facades",
//         "Bulk Commercial / Apartment Projects",
//         "On-site Measurement, Delivery & Installation",
//     ];

//     const processSteps = [
//         { step: "01", title: "Concept & Consultation" },
//         { step: "02", title: "Design & Engineering" },
//         { step: "03", title: "Fabrication & Finishing" },
//         { step: "04", title: "Delivery & Installation" },
//     ];

//     const qualityList = [
//         "Premium grade metals & corrosion-resistant coatings",
//         "Precision hand welding & advanced finishing standards",
//         "Multi-stage inspection & structural safety validation",
//         "Warranty coverage & premium installation support"
//     ];
//     const testimonials = [
//         {
//             image: "/testimonial-img-1.png",
//             text: "Exceptional craftsmanship and premium finishing. The gate completely transformed our home exterior."
//         },
//         {
//             image: "/testimonial-img-2.png",
//             text: "The Dwars team's attention to detail is unmatched. Installation was smooth and professional."
//         },
//         {
//             image: "/testimonial-img-3.png",
//             text: "We recommend them to every architect we work with — true experts in artistic ironwork."
//         }
//     ];


//     return (
//         <div className="bg-[#050505] text-white pt-0 mt-13 pb-28">

//             {/* HERO SECTION */}
//             <section className="relative w-full h-screen mb-24 overflow-hidden">

//                 {/* Background Video */}
//                 <video
//                     className="absolute inset-0 w-full h-full object-cover"
//                     src="/about-us-finial.mp4"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                 />

//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-black/60"></div>

//                 {/* Foreground Content */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 1.2, ease: "easeOut" }}
//                     className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 text-center max-w-4xl mx-auto"
//                 >
//                     <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
//                         The Dwars
//                         <span className="block mt-2 bg-[#fac21e] bg-clip-text text-transparent">
//                             Crafting Metal. Creating Legacy.
//                         </span>
//                     </h1>

//                     <p className="text-lg text-gray-300 leading-relaxed mt-8 max-w-3xl mx-auto">
//                         Since 2017, The Dwars has transformed the world of premium architectural metalwork —
//                         shaping bespoke wrought-iron gates, designer doors, railings & metal structures
//                         built for luxury homes and signature architectural spaces across India.
//                     </p>

//                     <div className="mt-14 flex justify-center">
//                         <motion.div
//                             initial={{ width: 0, opacity: 0 }}
//                             animate={{ width: "20rem", opacity: 1 }} // 10rem = w-40
//                             transition={{ duration: 1.2, ease: "easeInOut" }}
//                             className="
//                                 h-0.5 rounded-full
//                                 bg-linear-to-r from-transparent via-[#fac21e] to-transparent
//                             "
//                         />
//                     </div>
//                 </motion.div>
//             </section>

//             {/* TIMELINE */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-3xl md:text-4xl font-semibold mb-12">Our Journey</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                     {timelineData.map(function (item, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.7, delay: index * 0.15 }}
//                                 viewport={{ once: true }}
//                                 className="bg-[#0c0c0c] border border-[#8f7c45]/30 p-8 rounded-2xl text-center"
//                             >
//                                 <h3 className="text-4xl font-bold text-[#fac21e] ">{item.year}</h3>
//                                 <p className="mt-3 text-gray-300 text-base">{item.text}</p>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>

//             {/* CAPABILITIES */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-3xl md:text-4xl font-semibold mb-10">Manufacturing Capabilities</h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {capabilities.map(function (text, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                                 viewport={{ once: true }}
//                                 className="bg-[#0c0c0c] p-8 border border-[#8f7c45]/30 rounded-2xl"
//                             >
//                                 <h3 className="text-2xl text-[#fac21e]  font-medium">{text}</h3>
//                                 <p className="text-gray-300 text-base mt-3 leading-relaxed">
//                                     Engineered with precision and handcrafted finishing for long-lasting performance.
//                                 </p>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>

//             {/* PROCESS */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
//                     Our Premium <span className="text-[#fac21e] ">Fabrication Process</span>
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                     {processSteps.map(function (step, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.15 }}
//                                 viewport={{ once: true }}
//                                 className="bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-2xl p-10 text-center"
//                             >
//                                 <h3 className="text-4xl font-bold text-[#fac21e] ">{step.step}</h3>
//                                 <p className="text-base mt-3 font-medium">{step.title}</p>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>

//             {/* QUALITY */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-6 md:px-12 mb-24 bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-3xl p-12"
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#fac21e]  mb-12">
//                     Quality. Precision. Reliability.
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
//                     {qualityList.map(function (text, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                                 viewport={{ once: true }}
//                                 className="bg-[#111] p-6 rounded-2xl border border-[#8f7c45]/20"
//                             >
//                                 <p className="text-gray-300 text-base leading-relaxed">{text}</p>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>

//             {/* GALLERY */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[#fac21e]">Our Work & Installations</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {["/wrought-iron-doors.png", "/stair-case-railings.png", "/flat-entrance.png"].map(function (img, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.7, delay: index * 0.1 }}
//                                 viewport={{ once: true }}
//                                 className="h-56 overflow-hidden rounded-2xl border border-[#8f7c45]/30"
//                             >
//                                 <Image
//                                     src={img}
//                                     alt="gallery"
//                                     width={400}
//                                     height={300}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>

//             {/* TESTIMONIALS */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-6 md:px-12 mb-28"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center text-[#fac21e] tracking-wide">
//                     What Our Clients Say
//                 </h2>

//                 {/* <motion.div
//                     initial={{ width: 0, opacity: 0 }}
//                     whileInView={{ width: "16rem", opacity: 1 }}
//                     transition={{ duration: 1.2 }}
//                     className="mx-auto h-[3px] rounded-full bg-linear-to-r from-transparent via-[#fac21e] to-transparent mb-16"
//                 /> */}

//                 <div className="mt-0 flex justify-center mb-10">
//                     <motion.div
//                         initial={{ width: 0, opacity: 0 }}
//                         animate={{ width: "20rem", opacity: 1 }} // 10rem = w-40
//                         transition={{ duration: 1.2, ease: "easeInOut" }}
//                         className="
//                                 h-0.5 rounded-full
//                                 bg-linear-to-r from-transparent via-[#fac21e] to-transparent
//                             "
//                     />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
//                     {testimonials.map(function (testimonial, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: index * 0.12 }}
//                                 viewport={{ once: true }}
//                                 className="
//                                     group bg-[#0c0c0c]/70 backdrop-blur-md rounded-2xl p-10 text-center 
//                                     hover:-translate-y-2 transition-all duration-500 
//                                     border border-[#8f7c45]/30 relative overflow-hidden
//                                 "
//                             >
//                                 <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-[3px] border-[#fac21e] 
//                     shadow-[0_0_25px_#fac21e40] group-hover:shadow-[0_0_35px_#fac21e80] transition-all duration-700">
//                                     <Image
//                                         src={testimonial.image}
//                                         width={100}
//                                         height={100}
//                                         className="object-cover"
//                                         alt="client"
//                                     />
//                                 </div>

//                                 <p className="text-gray-300 text-sm mt-6">⭐ ⭐ ⭐ ⭐ ⭐</p>

//                                 <p className="mt-4 text-gray-300 text-[15px] leading-relaxed italic">
//                                     {testimonial.text}
//                                 </p>

//                                 <motion.div
//                                     initial={{ width: 0 }}
//                                     whileInView={{ width: "6rem" }}
//                                     transition={{ duration: 1, delay: 0.6 }}
//                                     className="mx-auto mt-6 h-[2px] bg-gradient-to-r from-transparent via-[#fac21e] to-transparent rounded-full"
//                                 />
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>


//             {/* CTA */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-6 md:px-12 text-center mt-16"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.9 }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-4xl font-semibold mb-6">Let's Build Something Legendary</h2>
//                 <p className="text-gray-300 mb-8 text-sm">
//                     Ready to begin designing your premium architectural metalwork project?
//                 </p>
//                 <button className="px-12 py-4 rounded-full bg-linear-to-r from-[#715723] to-[#8f7c45] text-black font-semibold uppercase tracking-wide hover:brightness-110 transition hover:cursor-pointer">
//                     Start Your Project
//                 </button>
//             </motion.section>

//         </div>
//     );
// }

// export default AboutUs;



//! responsive about us 


// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// function AboutUs() {
//     const timelineData = [
//         { year: "2017", text: "Started in a small garage crafting security screen doors." },
//         { year: "2019", text: "Expanded into designer wrought-iron gates & railings." },
//         { year: "2022", text: "Built full-scale manufacturing unit & skilled artisan team." },
//         { year: "2024", text: "Serving architects, luxury homeowners & premium builders PAN-India." }
//     ];

//     const capabilities = [
//         "Custom Luxury Gates",
//         "Designer Wrought-Iron Doors",
//         "Balcony & Staircase Railings",
//         "Laser-Cut Metal Panels & Facades",
//         "Bulk Commercial / Apartment Projects",
//         "On-site Measurement, Delivery & Installation",
//     ];

//     const processSteps = [
//         { step: "01", title: "Concept & Consultation" },
//         { step: "02", title: "Design & Engineering" },
//         { step: "03", title: "Fabrication & Finishing" },
//         { step: "04", title: "Delivery & Installation" },
//     ];

//     const qualityList = [
//         "Premium grade metals & corrosion-resistant coatings",
//         "Precision hand welding & advanced finishing standards",
//         "Multi-stage inspection & structural safety validation",
//         "Warranty coverage & premium installation support"
//     ];

//     const testimonials = [
//         {
//             image: "/testimonial-img-1.png",
//             text: "Exceptional craftsmanship and premium finishing. The gate completely transformed our home exterior."
//         },
//         {
//             image: "/testimonial-img-2.png",
//             text: "The Dwars team's attention to detail is unmatched. Installation was smooth and professional."
//         },
//         {
//             image: "/testimonial-img-3.png",
//             text: "We recommend them to every architect we work with — true experts in artistic ironwork."
//         }
//     ];

//     return (
//         <div className="bg-[#050505] text-white pt-0 mt-12 md:mt-13 pb-16 md:pb-28">

//             {/* HERO SECTION */}
//             {/* Changed: Flex-col for mobile (stacking), Block for desktop (overlay) */}
//             <section className="relative w-full mb-16 md:h-screen md:mb-24 overflow-hidden flex flex-col md:block">

//                 {/* Video Container */}
//                 {/* Mobile: Relative + Aspect Video (No cropping). Desktop: Absolute + Full Height */}
//                 <div className="relative w-full aspect-video md:absolute md:inset-0 md:aspect-auto md:h-full">
//                     <video
//                         className="w-full h-full object-contain md:object-cover"
//                         src="/about-us-finial.mp4"
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                     />
//                     {/* Dark overlay ONLY for desktop (since mobile text is below video) */}
//                     <div className="hidden md:block absolute inset-0 bg-black/60"></div>
//                 </div>

//                 {/* Foreground Content */}
//                 {/* Mobile: Relative (sits below video). Desktop: Absolute (sits on top of video) */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 1.2, ease: "easeOut" }}
//                     className="
//                         relative md:absolute md:inset-0 md:z-10 
//                         flex flex-col items-center justify-center 
//                         h-auto md:h-full 
//                         px-4 py-12 md:py-0 sm:px-6 md:px-12 
//                         text-center max-w-5xl mx-auto
//                     "
//                 >
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
//                         The Dwars
//                         <span className="block mt-2 bg-gradient-to-r from-[#fac21e] to-[#d4a017] bg-clip-text text-transparent">
//                             Crafting Metal. Creating Legacy.
//                         </span>
//                     </h1>

//                     <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-6 md:mt-8 max-w-3xl mx-auto px-2">
//                         Since 2017, The Dwars has transformed the world of premium architectural metalwork —
//                         shaping bespoke wrought-iron gates, designer doors, railings & metal structures
//                         built for luxury homes and signature architectural spaces across India.
//                     </p>

//                     <div className="mt-10 md:mt-14 flex justify-center w-full">
//                         <motion.div
//                             initial={{ width: 0, opacity: 0 }}
//                             animate={{ width: "100%", opacity: 1 }}
//                             transition={{ duration: 1.2, ease: "easeInOut" }}
//                             className="
//                                 h-0.5 rounded-full max-w-[12rem] md:max-w-[20rem]
//                                 bg-gradient-to-r from-transparent via-[#fac21e] to-transparent
//                             "
//                         />
//                     </div>
//                 </motion.div>
//             </section>

//             {/* TIMELINE */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24"
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12 text-center md:text-left">Our Journey</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//                     {timelineData.map(function (item, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.7, delay: index * 0.15 }}
//                                 viewport={{ once: true }}
//                                 className="bg-[#0c0c0c] border border-[#8f7c45]/30 p-6 md:p-8 rounded-2xl text-center h-full flex flex-col justify-center"
//                             >
//                                 <h3 className="text-3xl md:text-4xl font-bold text-[#fac21e]">{item.year}</h3>
//                                 <p className="mt-3 text-gray-300 text-sm md:text-base">{item.text}</p>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>

//             {/* CAPABILITIES */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24"
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-10 text-center md:text-left">Manufacturing Capabilities</h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                     {capabilities.map(function (text, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                                 viewport={{ once: true }}
//                                 className="bg-[#0c0c0c] p-6 md:p-8 border border-[#8f7c45]/30 rounded-2xl"
//                             >
//                                 <h3 className="text-xl md:text-2xl text-[#fac21e] font-medium">{text}</h3>
//                                 <p className="text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
//                                     Engineered with precision and handcrafted finishing for long-lasting performance.
//                                 </p>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>

//             {/* PROCESS */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24"
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-14 px-2">
//                     Our Premium <span className="text-[#fac21e] block sm:inline">Fabrication Process</span>
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//                     {processSteps.map(function (step, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.15 }}
//                                 viewport={{ once: true }}
//                                 className="bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-2xl p-6 md:p-10 text-center"
//                             >
//                                 <h3 className="text-3xl md:text-4xl font-bold text-[#fac21e] ">{step.step}</h3>
//                                 <p className="text-sm md:text-base mt-3 font-medium">{step.title}</p>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>

//             {/* QUALITY */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24"
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//             >
//                 <div className="bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-3xl p-6 md:p-12">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#fac21e] mb-8 md:mb-12">
//                         Quality. Precision. Reliability.
//                     </h2>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
//                         {qualityList.map(function (text, index) {
//                             return (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 40 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                     className="bg-[#111] p-5 md:p-6 rounded-2xl border border-[#8f7c45]/20"
//                                 >
//                                     <p className="text-gray-300 text-sm md:text-base leading-relaxed">{text}</p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </motion.section>

//             {/* GALLERY */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-10 text-[#fac21e] text-center md:text-left">Our Work & Installations</h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {["/wrought-iron-doors.png", "/stair-case-railings.png", "/flat-entrance.png"].map(function (img, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.7, delay: index * 0.1 }}
//                                 viewport={{ once: true }}
//                                 className="h-48 sm:h-56 overflow-hidden rounded-2xl border border-[#8f7c45]/30"
//                             >
//                                 <Image
//                                     src={img}
//                                     alt="gallery"
//                                     width={400}
//                                     height={300}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>

//             {/* TESTIMONIALS */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-28"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 md:mb-16 text-center text-[#fac21e] tracking-wide px-2">
//                     What Our Clients Say
//                 </h2>

//                 <div className="mt-0 flex justify-center mb-8 md:mb-10 w-full">
//                     <motion.div
//                         initial={{ width: 0, opacity: 0 }}
//                         animate={{ width: "100%", opacity: 1 }}
//                         transition={{ duration: 1.2, ease: "easeInOut" }}
//                         className="
//                             h-0.5 rounded-full max-w-[12rem] md:max-w-[20rem]
//                             bg-gradient-to-r from-transparent via-[#fac21e] to-transparent
//                         "
//                     />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//                     {testimonials.map(function (testimonial, index) {
//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: index * 0.12 }}
//                                 viewport={{ once: true }}
//                                 className="
//                                     group bg-[#0c0c0c]/70 backdrop-blur-md rounded-2xl p-6 md:p-10 text-center 
//                                     hover:-translate-y-2 transition-all duration-500 
//                                     border border-[#8f7c45]/30 relative overflow-hidden flex flex-col items-center
//                                 "
//                             >
//                                 <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden border-[3px] border-[#fac21e] 
//                                     shadow-[0_0_25px_#fac21e40] group-hover:shadow-[0_0_35px_#fac21e80] transition-all duration-700">
//                                     <Image
//                                         src={testimonial.image}
//                                         width={100}
//                                         height={100}
//                                         className="object-cover w-full h-full"
//                                         alt="client"
//                                     />
//                                 </div>

//                                 <p className="text-gray-300 text-sm mt-5 md:mt-6">⭐ ⭐ ⭐ ⭐ ⭐</p>

//                                 <p className="mt-4 text-gray-300 text-sm md:text-[15px] leading-relaxed italic">
//                                     {testimonial.text}
//                                 </p>

//                                 <motion.div
//                                     initial={{ width: 0 }}
//                                     whileInView={{ width: "6rem" }}
//                                     transition={{ duration: 1, delay: 0.6 }}
//                                     className="mx-auto mt-6 h-[2px] bg-gradient-to-r from-transparent via-[#fac21e] to-transparent rounded-full"
//                                 />
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </motion.section>

//             {/* CTA */}
//             <motion.section
//                 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center mt-12 md:mt-16"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.9 }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">Let's Build Something Legendary</h2>
//                 <p className="text-gray-300 mb-6 md:mb-8 text-sm sm:text-base px-2">
//                     Ready to begin designing your premium architectural metalwork project?
//                 </p>
//                 <button className="px-10 py-3 md:px-12 md:py-4 rounded-full bg-gradient-to-r from-[#715723] to-[#8f7c45] text-black font-semibold uppercase tracking-wide hover:brightness-110 transition hover:cursor-pointer text-sm md:text-base">
//                     Start Your Project
//                 </button>
//             </motion.section>

//         </div>
//     );
// }

// export default AboutUs;


//! - adding gallery image array - hydration issue -- 

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


    const galleryImages = [
        //! (1) flat entrace doors
        "/products-page-img/1-Modern-Flat-Entrance-Doors/FED-(98).jpg",

        //! (2) single doors
        "/products-page-img/1-Single-Door/SD-(1).jpg",
        "/products-page-img/1-Single-Door/SD-(2).jpg",

        //! (3) wrought iron balcony railings
        "/products-page-img/1-Wrought-Iron-Balcony-Railing/1-WIBR-(1).jpg",

        //! (4) wrought iron boundary wall door
        "/products-page-img/1-Wrought-Iron-Boundarywall-Door/1-WIBD-(1).jpg",
        
        //! (5) wrought iron staircase railings
        "/products-page-img/1-Wrought-Iron-Staircase-Railing/1-WISR-(1).jpg",

        //! (6) Brass balcony railing
        "/products-page-img/2-Brass-Balcony-Railing/2-BBR-(1).jpg",

        //! (7) brass staircase railings
        "/products-page-img/2-Brass-Staircase-Railings/2-BSR-(2).jpg",

        //! (8) double door
        "/products-page-img/2-Double-Door/DD-(91).jpg",

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
        <div className="bg-[#050505] text-white pt-0 mt-12 md:mt-13 pb-16 md:pb-28">

            {/* HERO SECTION */}
            <section className="relative w-full mb-16 md:h-screen md:mb-24 overflow-hidden flex flex-col md:block">
                {/* Video Container */}
                <div className="relative w-full aspect-video md:absolute md:inset-0 md:aspect-auto md:h-full">
                    <video
                        className="w-full h-full object-contain md:object-cover"
                        src="/about-us-finial.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="hidden md:block absolute inset-0 bg-black/60"></div>
                </div>

                {/* Foreground Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative md:absolute md:inset-0 md:z-10 flex flex-col items-center justify-center h-auto md:h-full px-4 py-12 md:py-0 sm:px-6 md:px-12 text-center max-w-5xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
                        The Dwars
                        <span className="block mt-2 bg-gradient-to-r from-[#fac21e] to-[#d4a017] bg-clip-text text-transparent">
                            Crafting Metal. Creating Legacy.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-6 md:mt-8 max-w-3xl mx-auto px-2">
                        Since 2017, The Dwars has transformed the world of premium architectural metalwork —
                        shaping bespoke wrought-iron gates, designer doors, railings & metal structures
                        built for luxury homes and signature architectural spaces across India.
                    </p>

                    <div className="mt-10 md:mt-14 flex justify-center w-full">
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="h-0.5 rounded-full max-w-[12rem] md:max-w-[20rem] bg-gradient-to-r from-transparent via-[#fac21e] to-transparent"
                        />
                    </div>
                </motion.div>
            </section>

            {/* TIMELINE */}
            <motion.section
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12 text-center md:text-left">Our Journey</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {timelineData.map(function (item, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="bg-[#0c0c0c] border border-[#8f7c45]/30 p-6 md:p-8 rounded-2xl text-center h-full flex flex-col justify-center"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-[#fac21e]">{item.year}</h3>
                                <p className="mt-3 text-gray-300 text-sm md:text-base">{item.text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* CAPABILITIES */}
            <motion.section
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-10 text-center md:text-left">Manufacturing Capabilities</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {capabilities.map(function (text, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#0c0c0c] p-6 md:p-8 border border-[#8f7c45]/30 rounded-2xl"
                            >
                                <h3 className="text-xl md:text-2xl text-[#fac21e] font-medium">{text}</h3>
                                <p className="text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
                                    Engineered with precision and handcrafted finishing for long-lasting performance.
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* PROCESS */}
            <motion.section
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-14 px-2">
                    Our Premium <span className="text-[#fac21e] block sm:inline">Fabrication Process</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {processSteps.map(function (step, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-2xl p-6 md:p-10 text-center"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-[#fac21e] ">{step.step}</h3>
                                <p className="text-sm md:text-base mt-3 font-medium">{step.title}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* QUALITY */}
            <motion.section
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-3xl p-6 md:p-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#fac21e] mb-8 md:mb-12">
                        Quality. Precision. Reliability.
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                        {qualityList.map(function (text, index) {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-[#111] p-5 md:p-6 rounded-2xl border border-[#8f7c45]/20"
                                >
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* GALLERY - REFACTORED TO USE ARRAY */}
            <motion.section
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-10 text-[#fac21e] text-center md:text-left">Our Work & Installations</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Updated to use galleryImages array */}
                    {galleryImages.map(function (img, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-48 sm:h-56 overflow-hidden rounded-2xl border border-[#8f7c45]/30"
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
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-28"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 md:mb-16 text-center text-[#fac21e] tracking-wide px-2">
                    What Our Clients Say
                </h2>

                <div className="mt-0 flex justify-center mb-8 md:mb-10 w-full">
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="h-0.5 rounded-full max-w-[12rem] md:max-w-[20rem] bg-gradient-to-r from-transparent via-[#fac21e] to-transparent"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {testimonials.map(function (testimonial, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.12 }}
                                viewport={{ once: true }}
                                className="group bg-[#0c0c0c]/70 backdrop-blur-md rounded-2xl p-6 md:p-10 text-center hover:-translate-y-2 transition-all duration-500 border border-[#8f7c45]/30 relative overflow-hidden flex flex-col items-center"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden border-[3px] border-[#fac21e] shadow-[0_0_25px_#fac21e40] group-hover:shadow-[0_0_35px_#fac21e80] transition-all duration-700">
                                    <Image
                                        src={testimonial.image}
                                        width={100}
                                        height={100}
                                        className="object-cover w-full h-full"
                                        alt="client"
                                    />
                                </div>

                                <p className="text-gray-300 text-sm mt-5 md:mt-6">⭐ ⭐ ⭐ ⭐ ⭐</p>

                                <p className="mt-4 text-gray-300 text-sm md:text-[15px] leading-relaxed italic">
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
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center mt-12 md:mt-16"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">Let's Build Something Legendary</h2>
                <p className="text-gray-300 mb-6 md:mb-8 text-sm sm:text-base px-2">
                    Ready to begin designing your premium architectural metalwork project?
                </p>
                <button className="px-10 py-3 md:px-12 md:py-4 rounded-full bg-gradient-to-r from-[#715723] to-[#8f7c45] text-black font-semibold uppercase tracking-wide hover:brightness-110 transition hover:cursor-pointer text-sm md:text-base">
                    Start Your Project
                </button>
            </motion.section>

        </div>
    );
}

export default AboutUs;