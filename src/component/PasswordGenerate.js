import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faRotateRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import CopySuccessImage from "../assets/img/password_copied.png";
import PasswordTips from "./PasswordTips";

const PasswordGenerate = () => {
    const [randomPasswordLength, setRandomPasswordLength] = useState(15);
    const [password, setPassword] = useState('');
    const [mixedCase, setMixedCase] = useState(true);
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setPassword(generatePassword(randomPasswordLength));
    }, [randomPasswordLength, mixedCase, uppercase, lowercase, numbers, symbols]);

    const generatePassword = (length) => {
        let charset = "";
        if (mixedCase) charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (numbers) charset += "0123456789";
        if (symbols) charset += "!@#$%^&*()";
        if (!charset) charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };

    const handleSliderChange = (event) => {
        setRandomPasswordLength(parseInt(event.target.value, 10));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(password)
            .then(() => {
                setShowModal(true);
                setTimeout(() => setShowModal(false), 3000);
            })
            .catch((err) => console.error("Failed to copy:", err));
    };

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        switch (id) {
            case 'mixedCase': setMixedCase(checked); break;
            case 'uppercase': setUppercase(checked); break;
            case 'lowercase': setLowercase(checked); break;
            case 'numbers': setNumbers(checked); break;
            case 'symbols': setSymbols(checked); break;
            default: break;
        }
    };

    return (
        <div className="flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-10 w-full max-w-2xl">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-6">
                    Password Generator
                </h1>

                <div className="mb-6">
                    <p className="text-lg font-medium mb-2">
                        Password Length: <span>{randomPasswordLength}</span>
                    </p>
                    <input
                        type="range"
                        min="4"
                        max="100"
                        value={randomPasswordLength}
                        onChange={handleSliderChange}
                        className="w-full cursor-pointer accent-blue-600"
                    />
                </div>

                <div className="mb-6">
                    <p className="text-lg font-medium mb-2">Generated Password:</p>
                    <div className="flex items-center border rounded-lg p-2 bg-gray-100">
                        <input
                            type="text"
                            value={password}
                            readOnly
                            className="flex-grow bg-transparent outline-none"
                        />
                        <div className="flex items-center gap-1">
                            <button onClick={handleCopy} className="text-blue-600 hover:text-blue-800">
                                <FontAwesomeIcon icon={faCopy} className="sm:text-xl" />
                            </button>
                            <button onClick={() => setPassword(generatePassword(randomPasswordLength))} className="text-blue-600 hover:text-blue-800">
                                <FontAwesomeIcon icon={faRotateRight} className="sm:text-xl" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                        { id: 'mixedCase', label: 'Mixed Case', state: mixedCase },
                        { id: 'uppercase', label: 'Uppercase', state: uppercase },
                        { id: 'lowercase', label: 'Lowercase', state: lowercase },
                        { id: 'numbers', label: 'Numbers', state: numbers },
                        { id: 'symbols', label: 'Symbols', state: symbols }
                    ].map(option => (
                        <div key={option.id} className="flex items-center">
                            <input
                                id={option.id}
                                type="checkbox"
                                checked={option.state}
                                onChange={handleCheckboxChange}
                                className="accent-blue-600"
                            />
                            <label htmlFor={option.id} className="ml-2 text-gray-700">{option.label}</label>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
                        onClick={() => setPassword(generatePassword(randomPasswordLength))}
                    >
                        Generate Password
                    </button>
                    <button
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition w-full sm:w-auto"
                        onClick={handleCopy}
                    >
                        Copy Password
                    </button>
                </div>

                {/* Password Tips */}
                <PasswordTips />

                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl flex flex-col sm:flex-row items-center relative max-w-lg w-full">
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                                onClick={() => setShowModal(false)}
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-xl" />
                            </button>

                            <img
                                src={CopySuccessImage}
                                alt="Success"
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full sm:mr-8 mb-4 sm:mb-0"
                            />

                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
                                    Password Copied!
                                </h2>
                                <p className="text-lg text-gray-600 text-center sm:text-left">
                                    Your password has been copied to the clipboard. Use it securely and store it safely.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PasswordGenerate;
