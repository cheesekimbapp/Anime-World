import Link from "next/link";
import HamburgerMenu from "./hamburger"; // Import komponen HamburgerMenu
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";
import MobileSearchButton from "./MobileSearchButton"; // Import the new component

const Navbar = () => {
    return (
        <header className="bg-color-dark sticky top-0 z-50">
            <div className="flex justify-between items-center p-4 gap-2">
                {/* Logo and Anime World Link */}
                <div className="flex items-center gap-4 px-6">
                    <Link href="/" className="font-bold text-2xl text-color-primary">
                        Anime World
                    </Link>
                </div>

                {/* Mobile search button next to the hamburger menu */}
                <div className="md:hidden flex items-center gap-2">
                    <MobileSearchButton /> {/* Click handler is handled in this component */}
                    <HamburgerMenu /> {/* Hamburger menu is rendered here */}
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-5 flex-grow justify-start">
                    <Link href="#Foryou" className="text-lg text-color-primary hover:text-color-accent">For You</Link>
                    <Link href="#Trending" className="text-lg text-color-primary hover:text-color-accent">Trending</Link>
                    <Link href="#Hot" className="text-lg text-color-primary hover:text-color-accent">Hot</Link>
                    <Link href="#Most Search" className="text-lg text-color-primary hover:text-color-accent">Most Search</Link>
                </div>

                {/* Desktop search and user action buttons */}
                <div className="flex gap-4 items-center px-6 ml-auto hidden md:flex">
                    <InputSearch visible={true} />
                    <UserActionButton />
                </div>
            </div>

            {/* Search bar that appears below the navbar with adjusted spacing */}
            <div id="mobile-search-bar" className="md:hidden hidden w-full px-2 mt-1 mb-4">
                <InputSearch visible={true} /> {/* Adjust this as needed */}
            </div>
        </header>
    );
};

export default Navbar;