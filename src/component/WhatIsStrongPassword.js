import React from "react";
import WhyStrongPassword from "../assets/img/why_strong_password1.jpeg";

const WhatIsStrongPassword = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            <div className="bg-white rounded-lg p-8 md:flex md:items-center md:gap-10">
                <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-6">
                        What Makes a Password Strong?
                    </h2>
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        A strong password is one that is difficult for others to guess or crack. It should be at least 12 characters long and include a mix of uppercase and lowercase letters, numbers, and special symbols.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Beyond complexity, a strong password should also be unique and not reused across multiple accounts. Regularly updating your passwords and checking if they’ve been exposed in data breaches are also key to maintaining strong security.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <img
                        src={WhyStrongPassword}
                        alt="What Makes a Password Strong"
                        className="w-full rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhatIsStrongPassword;
