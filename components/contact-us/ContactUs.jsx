// "use client"
// import { motion } from "framer-motion";

// function ContactUs() {

//     var fadeUp = {
//         initial: { opacity: 0, y: 60 },
//         whileInView: { opacity: 1, y: 0 },
//         viewport: { once: true }
//     };

//     var fade = {
//         initial: { opacity: 0 },
//         animate: { opacity: 1 },
//         transition: { duration: 1.2, ease: "easeOut" }
//     };

//     return (
//         <>
//             <div className="min-h-screen w-full bg-[#050505] text-white pt-36 pb-24 px-6 md:px-10">

//                 {/* HERO */}
//                 <motion.section
//                     initial={{ opacity: 0, scale: 0.96 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     className="max-w-6xl mx-auto text-center mb-24"
//                 >
//                     <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
//                         Crafting Metal,
//                         <span className="block mt-2 bg-[#fac21e] bg-clip-text text-transparent">
//                             Creating Timeless Legacy.
//                         </span>
//                     </h1>

//                     <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-base leading-relaxed">
//                         Since 2017, The Dwars has shaped luxury architectural metal craftsmanship — blending
//                         heritage skill with modern engineering to deliver custom-crafted wrought iron doors,
//                         railings & artistic metal installations for premium spaces.
//                     </p>
//                     {/* 
//                     <motion.div
//                         initial={{ width: 0 }}
//                         animate={{ width: "10rem" }}
//                         transition={{ duration: 1.4, ease: "easeOut" }}
//                         className="h-0.5 bg-[#fac21e] mx-auto mt-10"
//                     /> */}

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
//                 </motion.section>


//                 {/* MAIN CONTENT GRID */}
//                 <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

//                     {/* LEFT SIDE INFO */}
//                     <motion.div
//                         initial={fadeUp.initial}
//                         whileInView={fadeUp.whileInView}
//                         viewport={fadeUp.viewport}
//                         transition={{ duration: 0.7, ease: "easeOut" }}
//                         className="space-y-10"
//                     >
//                         <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
//                             Start Your <span className="text-[#fac21e] ">Custom Project</span>
//                         </h2>

//                         <p className="text-gray-400 text-base leading-relaxed">
//                             Share your idea with our design team — from concept drafting to
//                             premium-grade fabrication & installation, we transform vision into
//                             artistic architectural reality.
//                         </p>

//                         <div className="space-y-4 text-base">
//                             <div>
//                                 <p className="text-gray-400 uppercase tracking-widest text-xs">Call / WhatsApp</p>
//                                 <p className="text-[#fac21e]  text-lg font-medium">+91 98765 43210</p>
//                             </div>
//                             <div>
//                                 <p className="text-gray-400 uppercase tracking-widest text-xs">Email</p>
//                                 <p className="text-[#fac21e]  text-lg font-medium">support@thedwars.com</p>
//                             </div>
//                             <div>
//                                 <p className="text-gray-400 uppercase tracking-widest text-xs">Office Hours</p>
//                                 <p className="text-[#fac21e]  mt-1">Mon–Sat • 10 AM – 7 PM</p>
//                             </div>
//                         </div>

//                         <div className="pt-6 border-t border-[#8f7c45]/30">
//                             <h3 className="text-lg font-semibold mb-4 text-[#fac21e] ">Why Choose Us</h3>
//                             <ul className="text-base text-gray-300 space-y-2">
//                                 <li>• Heritage craftsmanship</li>
//                                 <li>• Bespoke artistic fabrication</li>
//                                 <li>• Premium material finishing</li>
//                                 <li>• End-to-end execution</li>
//                             </ul>
//                         </div>
//                     </motion.div>

//                     {/* CONTACT FORM */}
//                     <motion.div
//                         initial={fadeUp.initial}
//                         whileInView={fadeUp.whileInView}
//                         viewport={fadeUp.viewport}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                         className="md:col-span-2 bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-3xl p-10 shadow-xl"
//                     >
//                         <form className="space-y-6 text-base">

//                             <motion.div
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: 0.3 }}
//                                 className="grid grid-cols-1 sm:grid-cols-2 gap-6"
//                             >
//                                 <input className="bg-black/20 border-2 border-white/10 rounded-xl p-4 w-full outline-none focus:border-[#8f7c45] transition" placeholder="Full Name*" required />
//                                 <input className="bg-black/20 border-2 border-white/10 rounded-xl p-4 w-full outline-none focus:border-[#8f7c45] transition" placeholder="Phone Number*" required />
//                             </motion.div>

//                             <input className="bg-black/20 border-2 border-white/10 rounded-xl p-4 w-full outline-none focus:border-[#8f7c45] transition" placeholder="Email (optional)" />

//                             <input className="bg-black/20 border-2 border-white/10 rounded-xl p-4 w-full outline-none focus:border-[#8f7c45] transition" placeholder="City / Location*" required />

//                             <select className="bg-[#0b0b0b] border-2 border-[#8f7c45]/40 rounded-xl p-4 w-full text-gray-400">
//                                 <option>Select Project Type</option>
//                                 <option>Luxury Villa</option>
//                                 <option>Apartment</option>
//                                 <option>Commercial Space</option>
//                                 <option>Custom Architectural Work</option>
//                             </select>

//                             <textarea className="bg-black/20 border-2 border-white/10 rounded-xl p-4 w-full h-44 outline-none focus:border-[#8f7c45] transition resize-none" placeholder="Describe your requirement..." required></textarea>

//                             <button
//                                 type="submit"
//                                 className="uppercase px-12 py-4 rounded-full tracking-[0.25em] text-black text-sm font-semibold bg-linear-to-r from-[#715723] to-[#8f7c45] hover:brightness-110 transition"
//                             >
//                                 Submit Enquiry
//                             </button>
//                         </form>
//                     </motion.div>
//                 </section>

//                 {/* TRUST MESSAGE */}
//                 <motion.section
//                     initial={fadeUp.initial}
//                     whileInView={fadeUp.whileInView}
//                     viewport={fadeUp.viewport}
//                     transition={{ duration: 0.7 }}
//                     className="max-w-5xl mx-auto text-center mt-24"
//                 >
//                     <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
//                         Trusted by architects, luxury homeowners, and professional designers nationwide.
//                         Our work reflects strength, beauty, and timeless craftsmanship.
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
//                 </motion.section>

//             </div>
//         </>
//     );
// }

// export default ContactUs;


// responsive contact us --- 

"use client";
import { motion } from "framer-motion";

function ContactUs() {

    var fadeUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    };

    return (
        <>
            {/* Adjusted padding: pt-24 for mobile, pt-36 for desktop */}
            <div className="min-h-screen w-full bg-[#050505] text-white pt-24 md:pt-36 pb-12 md:pb-24 px-4 sm:px-6 md:px-10">

                {/* HERO */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-6xl mx-auto text-center mb-16 md:mb-24"
                >
                    {/* Responsive text sizing */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
                        Crafting Metal,
                        <span className="block mt-2 bg-gradient-to-r from-[#fac21e] to-[#d4a017] bg-clip-text text-transparent">
                            Creating Timeless Legacy.
                        </span>
                    </h1>

                    <p className="text-gray-300 mt-6 md:mt-8 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed px-2">
                        Since 2017, The Dwars has shaped luxury architectural metal craftsmanship — blending
                        heritage skill with modern engineering to deliver custom-crafted wrought iron doors,
                        railings & artistic metal installations for premium spaces.
                    </p>

                    <div className="mt-10 md:mt-14 flex justify-center w-full">
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="
                                h-0.5 rounded-full max-w-[15rem] md:max-w-[20rem]
                                bg-gradient-to-r from-transparent via-[#fac21e] to-transparent
                            "
                        />
                    </div>
                </motion.section>


                {/* MAIN CONTENT GRID */}
                {/* Gap reduced on mobile (gap-10) vs desktop (gap-14) */}
                <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">

                    {/* LEFT SIDE INFO */}
                    <motion.div
                        initial={fadeUp.initial}
                        whileInView={fadeUp.whileInView}
                        viewport={fadeUp.viewport}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="space-y-8 md:space-y-10 text-center md:text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
                            Start Your <span className="text-[#fac21e]">Custom Project</span>
                        </h2>

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Share your idea with our design team — from concept drafting to
                            premium-grade fabrication & installation, we transform vision into
                            artistic architectural reality.
                        </p>

                        <div className="space-y-6 md:space-y-4 text-base">
                            <div className="bg-[#111] md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border border-white/5 md:border-none">
                                <p className="text-gray-400 uppercase tracking-widest text-xs">Call / WhatsApp</p>
                                <p className="text-[#fac21e] text-lg font-medium mt-1">+91 98765 43210</p>
                            </div>
                            <div className="bg-[#111] md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border border-white/5 md:border-none">
                                <p className="text-gray-400 uppercase tracking-widest text-xs">Email</p>
                                <p className="text-[#fac21e] text-lg font-medium mt-1">support@thedwars.com</p>
                            </div>
                            <div className="bg-[#111] md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border border-white/5 md:border-none">
                                <p className="text-gray-400 uppercase tracking-widest text-xs">Office Hours</p>
                                <p className="text-[#fac21e] mt-1">Mon–Sat • 10 AM – 7 PM</p>
                            </div>
                        </div>

                        <div className="hidden md:block pt-6 border-t border-[#8f7c45]/30">
                            <h3 className="text-lg font-semibold mb-4 text-[#fac21e]">Why Choose Us</h3>
                            <ul className="text-base text-gray-300 space-y-2">
                                <li>• Heritage craftsmanship</li>
                                <li>• Bespoke artistic fabrication</li>
                                <li>• Premium material finishing</li>
                                <li>• End-to-end execution</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* CONTACT FORM */}
                    <motion.div
                        initial={fadeUp.initial}
                        whileInView={fadeUp.whileInView}
                        viewport={fadeUp.viewport}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        // Responsive padding: p-6 on mobile, p-10 on desktop
                        className="md:col-span-2 bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-3xl p-6 md:p-10 shadow-xl"
                    >
                        <form className="space-y-5 md:space-y-6 text-sm md:text-base">

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
                            >
                                <input
                                    className="bg-black/20 border-2 border-white/10 rounded-xl p-3 md:p-4 w-full outline-none focus:border-[#8f7c45] transition placeholder:text-gray-500"
                                    placeholder="Full Name*"
                                    required
                                />
                                <input
                                    className="bg-black/20 border-2 border-white/10 rounded-xl p-3 md:p-4 w-full outline-none focus:border-[#8f7c45] transition placeholder:text-gray-500"
                                    placeholder="Phone Number*"
                                    required
                                />
                            </motion.div>

                            <input
                                className="bg-black/20 border-2 border-white/10 rounded-xl p-3 md:p-4 w-full outline-none focus:border-[#8f7c45] transition placeholder:text-gray-500"
                                placeholder="Email (optional)"
                            />

                            <input
                                className="bg-black/20 border-2 border-white/10 rounded-xl p-3 md:p-4 w-full outline-none focus:border-[#8f7c45] transition placeholder:text-gray-500"
                                placeholder="City / Location*"
                                required
                            />

                            <select className="bg-[#0b0b0b] border-2 border-[#8f7c45]/40 rounded-xl p-3 md:p-4 w-full text-gray-400 outline-none focus:border-[#8f7c45]">
                                <option>Select Project Type</option>
                                <option>Luxury Villa</option>
                                <option>Apartment</option>
                                <option>Commercial Space</option>
                                <option>Custom Architectural Work</option>
                            </select>

                            <textarea
                                className="bg-black/20 border-2 border-white/10 rounded-xl p-3 md:p-4 w-full h-36 md:h-44 outline-none focus:border-[#8f7c45] transition resize-none placeholder:text-gray-500"
                                placeholder="Describe your requirement..."
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="
                                    w-full md:w-auto
                                    uppercase px-8 md:px-12 py-3 md:py-4 
                                    rounded-full tracking-[0.2em] md:tracking-[0.25em] 
                                    text-black text-sm font-bold 
                                    bg-gradient-to-r from-[#715723] to-[#8f7c45] 
                                    hover:brightness-110 transition hover:cursor-pointer
                                "
                            >
                                Submit Enquiry
                            </button>
                        </form>
                    </motion.div>
                </section>

                {/* TRUST MESSAGE */}
                <motion.section
                    initial={fadeUp.initial}
                    whileInView={fadeUp.whileInView}
                    viewport={fadeUp.viewport}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto text-center mt-16 md:mt-24"
                >
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto px-4">
                        Trusted by architects, luxury homeowners, and professional designers nationwide.
                        Our work reflects strength, beauty, and timeless craftsmanship.
                    </p>

                    <div className="mt-10 md:mt-14 flex justify-center w-full">
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="
                                h-0.5 rounded-full max-w-[15rem] md:max-w-[20rem]
                                bg-gradient-to-r from-transparent via-[#fac21e] to-transparent
                            "
                        />
                    </div>
                </motion.section>

            </div>
        </>
    );
}

export default ContactUs;