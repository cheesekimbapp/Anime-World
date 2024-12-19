"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const option = {
        width: "100%",  // Menggunakan 100% untuk lebar responsif
        height: "auto", // Tinggi otomatis berdasarkan lebar
    };

    const Player = () => {
        return (
            <div className="video-container w-full flex justify-center mb-4">
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Video is broken, please try another.")}
                />
            </div>
        );
    };

    const ButtonOpenPlayer = () => {
        return (
            <button
                onClick={handleVideoPlayer}
                className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-secondary text-xl hover:bg-color-accent transition-all shadow-xl"
            >
                Watch Trailer
            </button>
        );
    };

    return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
