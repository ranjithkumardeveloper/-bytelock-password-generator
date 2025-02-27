import React from "react";

const HeroSection = () => {
    return (
        <section className="p-6 sm:p-12 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-extrabold text-3xl sm:text-4xl md:text-4xl leading-tight">
                    Strong & Random Password Generator
                </h2>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-[#6B5B95]">
                    Generate strong passwords using <span className="font-semibold">ByteLock</span> and secure your online accounts from potential threats.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
