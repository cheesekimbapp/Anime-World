"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

// List of image filenames (stored in the public folder)
const imageFilenames = [
  "/img/jumbotron1.jpg",
  "/img/jumbotron2.jpg",
  "/img/jumbotron3.jpg",
  "/img/jumbotron4.jpg",
  "/img/jumbotron5.jpg",
];

const Jumbotron = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [imageKey, setImageKey] = useState(0); // Key untuk mereset animasi
  const [isLoading, setIsLoading] = useState(true); // State for loading

  // UseEffect untuk mengganti gambar setiap 5 detik, mulai setelah 5 detik
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // Start changing images after 5 seconds
    }, 5000); // 5 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % imageFilenames.length;
          setNextImageIndex((nextIndex + 1) % imageFilenames.length);
          setImageKey((prevKey) => prevKey + 1); // Reset key untuk memulai animasi
          return nextIndex;
        });
      }, 5000); // Ganti gambar setiap 5000 ms (5 detik)

      return () => clearInterval(intervalId);
    }
  }, [isLoading]);

  return (
    <section className="relative w-full h-[40vw] sm:h-[350px] lg:h-[480px] overflow-hidden"> {/* Slightly reduced height */}
      {/* Gambar yang sedang keluar */}
      <Image
        key={imageKey} // Memaksa render ulang dan memulai animasi
        src={imageFilenames[currentImageIndex]} // Gambar sebelumnya
        alt={`Jumbotron Image ${currentImageIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className={`absolute inset-0 w-full h-full image-slide image-slide-out`}
      />

      {/* Gambar yang sedang masuk */}
      <Image
        key={imageKey + 1} // Key yang berbeda agar memulai animasi
        src={imageFilenames[nextImageIndex]} // Gambar berikutnya
        alt={`Jumbotron Image ${nextImageIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className={`absolute inset-0 w-full h-full image-slide image-slide-in`}
      />
    </section>
  );
};

export default Jumbotron;