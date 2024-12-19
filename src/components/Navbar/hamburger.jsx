"use client";

import { List, XCircle } from "@phosphor-icons/react"; // Import both List (hamburger) and XCircle (close) icons
import { useState } from "react"; // Import useState for state management
import Link from "next/link"; // Import Link for navigation
import ProfileButton from "./Profile"; // Import ProfileButton
import UserActionButton from "./UserActionButton"; // Import UserActionButton

const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Toggle the menu on or off
    };

    return (
        <div className="md:hidden flex items-center relative">
            {/* Hamburger button */}
            <button className="text-white" onClick={toggleMenu}>
                {!isMenuOpen ? <List size={32} color="#FFFFFF" /> : <XCircle size={32} color="#FFFFFF" />}
            </button>

            {/* Menu that appears when hamburger is clicked */}
            <div className={`fixed top-0 left-0 bg-color-dark w-full h-full p-8 flex flex-col items-center z-50 transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Close button */}
                <button className="absolute top-4 right-4" onClick={toggleMenu}>
                    <XCircle size={32} className="text-color-primary" />
                </button>

                {/* Menu links */}
                <Link href="/" className="text-lg text-color-primary py-4 px-6 w-full text-center hover:bg-gray-700 rounded">For You</Link>
                <Link href="/" className="text-lg text-color-primary py-4 px-6 w-full text-center hover:bg-gray-700 rounded">Trending</Link>
                <Link href="/" className="text-lg text-color-primary py-4 px-6 w-full text-center hover:bg-gray-700 rounded">Genre</Link>
                <Link href="/" className="text-lg text-color-primary py-4 px-6 w-full text-center hover:bg-gray-700 rounded">Movies</Link>

                {/* User action buttons based on login status */}
                {isLoggedIn ? (
                    <>
                        {/* Profile button appears when logged in */}
                        <ProfileButton />
                        <Link href="/api/auth/signout" className="text-lg text-color-primary py-4 px-6 w-full text-center hover:bg-gray-700 rounded">
                            Sign Out
                        </Link>
                    </>
                ) : (
                    <Link href="/api/auth/signin" className="text-lg text-color-primary py-4 px-6 w-full text-center hover:bg-gray-700 rounded">Sign In</Link>
                )}
            </div>
        </div>
    );
};

export default HamburgerMenu;