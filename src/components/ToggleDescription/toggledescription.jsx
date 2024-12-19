"use client";

import { useState } from "react";

const ToggleDescriptionButton = ({ shortDescription, fullDescription }) => {
    // State untuk mengontrol apakah deskripsi anime penuh atau tidak
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription((prevState) => !prevState);
    };

    return (
        <>
            <p className="text-justify text-xl pt-4 w-full max-w-full sm:max-w-[70%] lg:max-w-[60%] px-0">
                {/* Menampilkan deskripsi pendek atau penuh */}
                {showFullDescription ? fullDescription : shortDescription}
            </p>
            <button
                onClick={toggleDescription}
                className="text-color-primary mt-2 underline"
            >
                {showFullDescription ? "Show Less" : "Show Full"}
            </button>
        </>
    );
};

export default ToggleDescriptionButton;
