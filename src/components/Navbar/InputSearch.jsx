"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = ({ visible }) => {
    const searchRef = useRef();
    const router = useRouter();

    const handleSearch = (event) => {
        const keyword = searchRef.current.value;

        if (!keyword || keyword.trim() === "") return;

        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault();
            router.push(`/search/${keyword}`);
        }
    };

    return (
        <div className={`relative flex items-center ${visible ? 'block' : 'hidden'}`}>
            <input
                id="search-input"
                placeholder="Search"
                className="w-full py-1 pl-10 pr-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button
                className="absolute top-1 right-4"
                onClick={handleSearch}
            >
                <MagnifyingGlass size={24} />
            </button>
        </div>
    );
};

export default InputSearch;
