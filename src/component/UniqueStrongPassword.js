import React from "react";
import UniqueStrongPasswordImage from "../assets/img/create_strong_password.jpeg";

const UniqueStrongPassword = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            <div className="bg-white rounded-lg p-8 md:flex md:items-center md:gap-10">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <img
                        src={UniqueStrongPasswordImage}
                        alt="Create a Strong Password"
                        className="w-full rounded-xl shadow-lg"
                    />
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">
                        Building a Strong and Secure Password
                    </h2>
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        A strong password is your first line of defense against cyber threats. Aim for at least 12 characters, combining uppercase and lowercase letters, numbers, and special symbols to maximize complexity.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Never reuse passwords across multiple accounts. If one account is compromised, reused passwords can lead to a domino effect, putting all your accounts at risk. Regularly update your passwords and consider using a password manager to keep track of them securely.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UniqueStrongPassword;