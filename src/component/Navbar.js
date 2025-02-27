import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-purple-100 shadow-md">
            <nav className="container mx-auto flex justify-between items-center p-6">
                <a href="#" className="font-bold text-indigo-700 text-3xl">ByteLock</a>
                
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
                
                <ul className={`md:flex md:items-center md:space-x-6 absolute md:static w-full md:w-auto left-0 top-16 p-4 md:p-0 md:flex-row transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                    <li>
                        <button className="bg-white text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 w-full md:w-auto">
                            Login
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
