import React from "react";
import StrongImage from "../assets/img/stong_image.webp";

const Strong = () => {
    return (
        <div className="container mx-auto px-6 py-12 md:p-20 bg-purple-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                    <img 
                        src={StrongImage} 
                        alt="Strong Password" 
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-700">
                        Why Strong Passwords Matter
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                        In today's digital world, protecting your accounts starts with strong passwords. A weak or reused password can lead to data breaches, identity theft, and compromised accounts.  
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                        Using a strong password generator ensures that each of your accounts has a unique, complex password that's nearly impossible for hackers to guess. Make password security a priority and keep your information safe.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Strong;
