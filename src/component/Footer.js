import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-purple-100">
            <footer className="container mx-auto text-white py-6 px-6 text-center">
                {/* Company Info */}
                <h2 className="text-2xl text-gray-900 font-bold mb-2">ByteLock</h2>
                <p className="text-gray-900 mb-4">Your trusted password generator. Secure, reliable, and user-friendly.</p>
                
                {/* Social Media */}
                <div className="flex justify-center space-x-4 mb-4">
                    {[
                        { icon: faFacebookF, link: "#" },
                        { icon: faTwitter, link: "#" },
                        { icon: faInstagram, link: "#" },
                        { icon: faLinkedinIn, link: "#" }
                    ].map((social, index) => (
                        <a key={index} href={social.link} className="text-gray-900 hover:text-white transition">
                            <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-gray-700">© {new Date().getFullYear()} ByteLock. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;