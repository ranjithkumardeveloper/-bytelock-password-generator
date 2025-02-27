import React from 'react';
import StrongPasswordHackedImage from "../assets/img/strong_password_hacked.png";

const StrongPasswordHacked = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            <div className="bg-white rounded-lg p-8 md:flex md:items-center md:gap-10">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">
                        Is Your Strong Password Really Safe?
                    </h2>
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        Even the strongest passwords can be vulnerable. No matter how complex your password is, there’s always a risk of it being exposed through data breaches, phishing, or other cyberattacks.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        To enhance your security, consider using a combination of long, unique, and randomly generated passwords. Additionally, enabling two-factor authentication (2FA) can add an extra layer of protection to your accounts.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <img
                        src={StrongPasswordHackedImage}
                        alt="Secure Password Practices"
                        className="w-full rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default StrongPasswordHacked;