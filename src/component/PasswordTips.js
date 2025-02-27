import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PasswordTips = () => {
    const tips = [
        "Create passwords that are at least 16 characters long.",
        "Include a mix of uppercase, lowercase, numbers, and symbols.",
        "Avoid using common words, names, or easily guessable information.",
        "Never reuse passwords across multiple accounts.",
        "Enable two-factor authentication (2FA) for extra security.",
        "Change your passwords periodically to prevent unauthorized access."
    ];

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">Password Tips</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3 text-gray-700">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-lg mt-1" />
                        <p>{tip}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordTips;
