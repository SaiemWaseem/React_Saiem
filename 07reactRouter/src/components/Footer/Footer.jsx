import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="border-t border-gray-200">
            <div className="max-w-screen-xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                <div className="md:flex md:justify-between">
                    {/* Logo Section - Bigger */}
                    <div className="mb-8 md:mb-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <img
                                src="src/assets/logo-transparent-png.png"
                                className="h-20 transition-transform duration-300 hover:scale-105"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Link Sections */}
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 text-sm">
                        {/* Resources */}
                        <div>
                            <h2 className="mb-4 font-semibold text-gray-800 uppercase tracking-wide">Resources</h2>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <Link to="/" className="hover:text-black transition-colors duration-300">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-black transition-colors duration-300">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h2 className="mb-4 font-semibold text-gray-800 uppercase tracking-wide">Follow us</h2>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a
                                        href="https://github.com/SaiemWaseem"
                                        className="hover:text-black transition-colors duration-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-black transition-colors duration-300">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h2 className="mb-4 font-semibold text-gray-800 uppercase tracking-wide">Legal</h2>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <Link to="#" className="hover:text-black transition-colors duration-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-black transition-colors duration-300">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-300" />

                {/* Footer Bottom - Icons Only */}
                <div className="flex justify-center sm:justify-end items-center text-gray-500 text-sm">
                    <div className="flex space-x-4">
                        {["Facebook", "Discord", "Twitter", "GitHub", "Dribbble"].map((platform, i) => (
                            <Link
                                key={i}
                                to="#"
                                className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
                                aria-label={platform}
                            >
                                <span className="sr-only">{platform}</span>
                                <i className={`fab fa-${platform.toLowerCase()}`}></i>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
