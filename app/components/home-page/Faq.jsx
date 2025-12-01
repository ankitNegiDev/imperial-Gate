/**
 * so to create a faq -- first we need a array of faq right -- and then we need a state - which will tell us where user click currently -- and based on user click we will fire a onClick event which will set the tab which clicked and its ans will be displayed
 */

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
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#fac21e] mb-12 tracking-wide">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map(function (item, index) {
                    return (
                        <div
                            key={index}
                            className="
                                bg-[#0b0b0b] 
                                rounded-2xl 
                                border border-[#8f7c45]/40
                                overflow-hidden
                                transition-all duration-300
                                hover:border-[#fac21e]/80
                                
                            "
                        >
                            <button
                                className="
                                    w-full flex justify-between items-center
                                    text-left px-6 py-3 
                                    text-lg md:text-xl font-semibold
                                    tracking-wide text-white
                                    hover:text-[#fac21e]
                                    transition-colors duration-200
                                    hover:cursor-pointer
                                "
                                onClick={function () { toggleFAQ(index); }}
                            >
                                {item.question}

                                <span
                                    className={`
                                        text-3xl font-bold transition-all duration-300
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
                                <div className="px-6 pb-5 text-gray-300 text-base leading-relaxed border-t border-[#8f7c45]/30 pt-4">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default FAQ;
