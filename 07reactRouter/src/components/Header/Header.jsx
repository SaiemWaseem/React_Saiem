import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow-lg sticky z-50 top-0 bg-gradient-to-r from-indigo-600 to-grey-500">
            <nav className="bg-white/70 backdrop-blur-md border-gray-200 px-4 lg:px-6 py-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="src/assets/logo-transparent-png.png"
                            className="mr-3 h-12 transition-transform duration-300 transform hover:scale-110"
                            alt="Logo"
                        />
                    </Link>

                    {/* Login / Get Started Buttons */}
                    <div className="flex items-center lg:order-2 space-x-6">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-gradient-to-r from-orange-600 to-red-500 hover:bg-gradient-to-l hover:scale-105 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-3 transition-all duration-300 ease-in-out"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex lg:w-auto lg:order-1">
                        <ul className="flex space-x-10 font-medium text-lg">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 transition-colors ${isActive ? "text-orange-700" : "text-gray-800"} hover:text-orange-600 hover:bg-gray-100 rounded-md px-3 lg:px-5`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 transition-colors ${isActive ? "text-orange-700" : "text-gray-800"} hover:text-orange-600 hover:bg-gray-100 rounded-md px-3 lg:px-5`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 transition-colors ${isActive ? "text-orange-700" : "text-gray-800"} hover:text-orange-600 hover:bg-gray-100 rounded-md px-3 lg:px-5`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 transition-colors ${isActive ? "text-orange-700" : "text-gray-800"} hover:text-orange-600 hover:bg-gray-100 rounded-md px-3 lg:px-5`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
