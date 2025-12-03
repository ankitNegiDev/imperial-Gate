// /**
//  * so to create a faq -- first we need a array of faq right -- and then we need a state - which will tell us where user click currently -- and based on user click we will fire a onClick event which will set the tab which clicked and its ans will be displayed
//  */



// "use client"

// // importing the useState
// import { useState } from "react";
// function FAQ() {

//     // we need a array of faq where we will add the the ans and que
//     let faqs = [
//         {
//             question: "what is your name",
//             answer: "my name is xyz"
//         },
//         {
//             question: "do we get the home delivery",
//             answer: "yes we do home delivery"
//         },
//         {
//             question: "what is estimated delivery time",
//             answer: "estimated delivery time depend on your location"
//         }
//     ]

//     // now first we need a state which will keep track of which faq is clicked by user
//     const [openedFaq, setOpenedFaq] = useState(null);

//     // now we need a function that will set the which is active faq
//     function setActiveFaq(index) {
//         // setOpenedFaq(index);
//         if (openedFaq === index) {
//             setOpenedFaq(null);
//         }
//         else {
//             setOpenedFaq(index);
//         }
//     }


//     return (
//         <div>
//             {faqs.map(function (items, index) {
//                 return (
//                     <div>
//                         <p
//                             onClick={function () { setActiveFaq(index) }}
//                         >
//                             {items.question}
//                             <span
//                                 onClick={function () { setActiveFaq(index) }}
//                             >{openedFaq === index ? "-" : "+"} </span>
//                         </p>
//                         {openedFaq === index && <p>{items.answer}</p>}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }
// export default FAQ



// "use client";

// import React, { useState } from "react";

// function FAQ(props) {
//     const defaultFAQs = [
//         {
//             question: "Do you provide installation service?",
//             answer: "Yes, we offer professional installation and on-site support for selected locations across India."
//         },
//         {
//             question: "Can I order a fully customized gate or railing?",
//             answer: "Absolutely. We design and build custom metalwork based on personal requirements and architectural drawings."
//         },
//         {
//             question: "What is the expected delivery time?",
//             answer: "Typically 20-30 days depending on design complexity and location."
//         },
//         {
//             question: "Do you provide warranty?",
//             answer: "Yes, all of our products include manufacturing defect warranty & premium after-sales support."
//         }
//     ];

//     const faqs = props.faqs || defaultFAQs;
//     const [openIndex, setOpenIndex] = useState(null);

//     function toggleFAQ(index) {
//         if (openIndex === index) {
//             setOpenIndex(null);
//         } else {
//             setOpenIndex(index);
//         }
//     }

//     return (
//         <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 mb-20">
//             <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#fac21e] mb-12 tracking-wide">
//                 Frequently Asked Questions
//             </h2>

//             <div className="space-y-4">
//                 {faqs.map(function (item, index) {
//                     return (
//                         <div
//                             key={index}
//                             className="
//                                 bg-[#0b0b0b] 
//                                 rounded-2xl 
//                                 border border-[#8f7c45]/40
//                                 overflow-hidden
//                                 transition-all duration-300
//                                 hover:border-[#fac21e]/80
                                
//                             "
//                         >
//                             <button
//                                 className="
//                                     w-full flex justify-between items-center
//                                     text-left px-6 py-3 
//                                     text-lg md:text-xl font-semibold
//                                     tracking-wide text-white
//                                     hover:text-[#fac21e]
//                                     transition-colors duration-200
//                                     hover:cursor-pointer
//                                 "
//                                 onClick={function () { toggleFAQ(index); }}
//                             >
//                                 {item.question}

//                                 <span
//                                     className={`
//                                         text-3xl font-bold transition-all duration-300
//                                         ${openIndex === index ? "rotate-180 text-[#fac21e]" : "text-[#fac21e]"}
//                                     `}
//                                 >
//                                     {openIndex === index ? "−" : "+"}
//                                 </span>
//                             </button>

//                             {/* dropdown body */}
//                             <div
//                                 className={`
//                                     overflow-hidden transition-all duration-500
//                                     ${openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
//                                 `}
//                             >
//                                 <div className="px-6 pb-5 text-gray-300 text-base leading-relaxed border-t border-[#8f7c45]/30 pt-4">
//                                     {item.answer}
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }

// export default FAQ;


// making it mobile responsive (laptop)
// "use client";

// import React, { useState } from "react";

// function FAQ(props) {
//     const defaultFAQs = [
//         {
//             question: "Do you provide installation service?",
//             answer: "Yes, we offer professional installation and on-site support for selected locations across India."
//         },
//         {
//             question: "Can I order a fully customized gate or railing?",
//             answer: "Absolutely. We design and build custom metalwork based on personal requirements and architectural drawings."
//         },
//         {
//             question: "What is the expected delivery time?",
//             answer: "Typically 20-30 days depending on design complexity and location."
//         },
//         {
//             question: "Do you provide warranty?",
//             answer: "Yes, all of our products include manufacturing defect warranty & premium after-sales support."
//         }
//     ];

//     const faqs = props.faqs || defaultFAQs;
//     const [openIndex, setOpenIndex] = useState(null);

//     function toggleFAQ(index) {
//         if (openIndex === index) {
//             setOpenIndex(null);
//         } else {
//             setOpenIndex(index);
//         }
//     }

//     return (
//         // Mobile: py-12 px-4 (Compact) | Desktop: py-20 px-12 (Spacious)
//         <div className=" bg-black">
//             <section className="max-w-6xl mx-auto px-4 md:px-12 py-12 md:py-20 mb-10 md:mb-0">

//                 {/* Mobile: text-2xl | Desktop: text-4xl */}
//                 <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#fac21e] mb-8 md:mb-12 tracking-wide">
//                     Frequently Asked Questions
//                 </h2>

//                 <div className="space-y-4">
//                     {faqs.map(function (item, index) {
//                         return (
//                             <div
//                                 key={index}
//                                 className="
//                                 bg-[#0b0b0b] 
//                                 rounded-xl md:rounded-2xl 
//                                 border border-[#8f7c45]/40
//                                 overflow-hidden
//                                 transition-all duration-300
//                                 hover:border-[#fac21e]/80
                                
//                                 /* Mobile Press Effect */
//                                 active:scale-[0.99] md:active:scale-100
//                             "
//                             >
//                                 <button
//                                     className="
//                                     w-full flex justify-between items-center
//                                     text-left 
                                    
//                                     /* Mobile: px-4 py-4 | Desktop: px-6 py-3 */
//                                     px-4 py-4 md:px-6 md:py-3 
                                    
//                                     /* Mobile: text-base | Desktop: text-xl */
//                                     text-[14px] md:text-xl font-semibold
                                    
//                                     tracking-wide text-white
//                                     hover:text-[#fac21e]
//                                     transition-colors duration-200
//                                     hover:cursor-pointer
//                                 "
//                                     onClick={function () { toggleFAQ(index); }}
//                                 >
//                                     {/* Added pr-4 to prevent text hitting the icon on small screens */}
//                                     <span className="pr-4">{item.question}</span>

//                                     <span
//                                         className={`
//                                         /* Mobile: text-2xl | Desktop: text-3xl */
//                                         text-2xl md:text-3xl font-bold transition-all duration-300 shrink-0
//                                         ${openIndex === index ? "rotate-180 text-[#fac21e]" : "text-[#fac21e]"}
//                                     `}
//                                     >
//                                         {openIndex === index ? "−" : "+"}
//                                     </span>
//                                 </button>

//                                 {/* dropdown body */}
//                                 <div
//                                     className={`
//                                     overflow-hidden transition-all duration-500
//                                     ${openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
//                                 `}
//                                 >
//                                     <div className="
//                                     /* Mobile: px-4 pb-4 text-sm | Desktop: px-6 pb-5 text-base */
//                                     px-4 pb-4 md:px-6 md:pb-5 
//                                     text-sm md:text-base
                                    
//                                     text-gray-300 leading-relaxed 
//                                     border-t border-[#8f7c45]/30 pt-4
//                                 ">
//                                         {item.answer}
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default FAQ;


// making faq as fully responsive (mobile,tab,laptop)

"use client";

import React, { useState } from "react";

function FAQ(props) {
    const defaultFAQs = [
        {
            question: "Do you provide installation service?",
            answer: "Yes, we offer professional installation and on-site support for selected locations across India."
        },
        {
            question: "Can I order a fully customized gate or railing?",
            answer: "Absolutely. We design and build custom metalwork based on personal requirements and architectural drawings."
        },
        {
            question: "What is the expected delivery time?",
            answer: "Typically 20-30 days depending on design complexity and location."
        },
        {
            question: "Do you provide warranty?",
            answer: "Yes, all of our products include manufacturing defect warranty & premium after-sales support."
        }
    ];

    const faqs = props.faqs || defaultFAQs;
    const [openIndex, setOpenIndex] = useState(null);

    function toggleFAQ(index) {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    }

    return (
        <div className="bg-black">
            <section className="
                max-w-6xl mx-auto 
                mb-0 md:mb-0
                
                /* PADDING LOGIC: */
                /* Mobile: Compact (px-4 py-12) */
                px-4 py-12 
                
                /* Tablet (md): Medium spacing (px-8 py-16) */
                md:px-8 md:py-20
                
                /* Desktop (lg): Spacious (Original desktop values moved here) */
                lg:px-12 lg:py-20 
            ">

                {/* HEADING LOGIC: */
                    /* Mobile: 2xl */
                    /* Tablet: 3xl  */
                    /* Desktop: 4xl */
                }
                <h2 className="
                    text-2xl md:text-3xl lg:text-4xl 
                    font-semibold text-center text-[#fac21e] 
                    mb-8 md:mb-10 lg:mb-12 
                    tracking-wide
                ">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map(function (item, index) {
                        return (
                            <div
                                key={index}
                                className="
                                bg-[#0b0b0b] 
                                rounded-xl md:rounded-2xl 
                                border border-[#8f7c45]/40
                                overflow-hidden
                                transition-all duration-300
                                hover:border-[#fac21e]/80
                                
                                /* Mobile Press Effect */
                                active:scale-[0.99] md:active:scale-100
                            "
                            >
                                <button
                                    className="
                                    w-full flex justify-between items-center
                                    text-left 
                                    
                                    /* PADDING: Mobile -> Tablet -> Desktop */
                                    px-4 py-4 md:px-5 md:py-4 lg:px-6 lg:py-3
                                    
                                    /* FONT SIZE: Mobile(14px) -> Tablet(lg) -> Desktop(xl) */
                                    text-[14px] md:text-lg lg:text-xl 
                                    font-semibold
                                    
                                    tracking-wide text-white
                                    hover:text-[#fac21e]
                                    transition-colors duration-200
                                    hover:cursor-pointer
                                "
                                    onClick={function () { toggleFAQ(index); }}
                                >
                                    {/* Added pr-4 to prevent text hitting the icon on small screens */}
                                    <span className="pr-4">{item.question}</span>

                                    <span
                                        className={`
                                            /* ICON SIZE: Mobile(2xl) -> Tablet(2xl) -> Desktop(3xl) */
                                            text-2xl md:text-2xl lg:text-3xl 
                                            font-bold transition-all duration-300 shrink-0
                                            ${openIndex === index ? "rotate-180 text-[#fac21e]" : "text-[#fac21e]"}
                                        `}
                                    >
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                {/* dropdown body */}
                                <div
                                    className={`
                                    overflow-hidden transition-all duration-500
                                    ${openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
                                `}
                                >
                                    <div className="
                                    /* PADDING: Mobile -> Tablet -> Desktop */
                                    px-4 pb-4 md:px-5 md:pb-5 lg:px-6 lg:pb-5
                                    
                                    /* FONT: Mobile(sm) -> Tablet/Desktop(base) */
                                    text-sm md:text-base
                                    
                                    text-gray-300 leading-relaxed 
                                    border-t border-[#8f7c45]/30 pt-4
                                ">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default FAQ;