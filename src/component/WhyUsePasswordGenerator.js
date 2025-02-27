import React from "react";
import WhyUsePasswordGeneratorImage from "../assets/img/why_use_password_generator.webp";

const WhyUsePasswordGenerator = () => {
    return (
        <div className="container mx-auto px-6 py-10 bg-purple-100">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-700">
                        Why use a password generator?
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        In a world where cyber threats are on the rise, a password generator is your best ally for creating secure, unique passwords. Weak or reused passwords are a common entry point for hackers, putting your personal and professional data at risk.
                    </p>
                    <p className="text-lg leading-relaxed">
                        A password generator creates long, random, and complex passwords that are nearly impossible to crack. By using one, you can ensure each of your accounts is protected with a unique password, reducing the risk of unauthorized access and data breaches.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src={WhyUsePasswordGeneratorImage}
                        alt="Why Use a Password Generator"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyUsePasswordGenerator;
