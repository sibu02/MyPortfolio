import { li } from "framer-motion/client";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { title: "Home", navigate: "home" },
        { title: "About", navigate: "about" },
        { title: "Projects", navigate: "projects" },
        { title: "Contact", navigate: "contact" },
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full bg-gray-900 text-white shadow z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-blue-500">
                        Sibu's
                    </a>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none text-white"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Links */}
                <ul
                    className={`md:flex space-x-8 md:space-x-6 items-center md:static absolute bg-gray-900 w-full left-0 transition-all duration-300 ease-in-out ${isOpen ? "top-16" : "top-[-200px]"
                        }`}
                >
                    {links.map((link,idx) => {
                        return <li key={idx}>
                            <Link
                                onClick={toggleMenu}
                                to={link.navigate}
                                smooth={true}
                                duration={500}
                                className="block py-2 px-4 hover:text-blue-500 cursor-pointer"
                            >
                                {link.title}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
