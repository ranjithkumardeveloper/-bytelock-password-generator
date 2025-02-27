import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "What is a password generator?", answer: "A password generator is a tool that creates random and complex passwords for online accounts, helping to enhance security and protect personal information." },
        { question: "Why should I use a password generator?", answer: "Using a password generator can help protect your online accounts from hacking and security breaches. Strong passwords are an important part of online security, and a password generator can create complex passwords that are difficult to crack." },
        { question: "How does a password generator work?", answer: "A password generator uses algorithms to create random strings of characters, numbers, and symbols, ensuring strong and unique passwords that are difficult to guess or crack." },
        { question: "Are randomly generated passwords secure?", answer: "Yes, randomly generated passwords are highly secure as they are complex, contain a mix of different character types, and do not follow common patterns that hackers might guess." },
        { question: "Can I customize the password length and characters?", answer: "Yes, most password generators allow customization, letting you specify the length and whether to include uppercase letters, numbers, and special symbols." },
        { question: "Should I use different passwords for each account?", answer: "Yes, using unique passwords for each account reduces the risk of multiple accounts being compromised if one password is exposed." },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-indigo-700">FAQs</h2>
                <p className="text-gray-600">Got questions? We've got answers!</p>
            </div>

            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <button
                            className="w-full text-left px-6 py-4 font-medium flex justify-between items-center hover:bg-gray-100 transition-all"
                            onClick={() => toggleAccordion(index)}
                        >
                            {faq.question}
                            <span className="text-xl">
                                {openIndex === index ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                            </span>
                        </button>
                        <div 
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                openIndex === index ? 'max-h-[200px] opacity-100 px-6 py-3' : 'max-h-0 opacity-0 px-6 py-0'
                            }`}
                        >
                            <p className="text-gray-700 bg-gray-50 p-3 rounded-md">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
