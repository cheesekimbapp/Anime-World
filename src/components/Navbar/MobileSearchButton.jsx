"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";

const MobileSearchButton = () => {
    const toggleSearch = () => {
        const searchBar = document.getElementById("mobile-search-bar");
        searchBar.classList.toggle("hidden"); // Toggle visibility of the search bar
    };

    return (
        <button
            className="text-color-primary mr-2"
            onClick={toggleSearch}
        >
            <MagnifyingGlass size={24} />
        </button>
    );
};

export default MobileSearchButton;