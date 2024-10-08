import React, { useState, useEffect } from "react";
import { ButtonIcon } from "./Button";
import images from "../../assets/images/images";
import { Navbar } from "./Navbar";

export const Header = () => {
  const imageSrc = [images.food, images.culture];
  const [currentImage, setCurrentImage] = useState(0);
  const [opacity, setOpacity] = useState(1); // State untuk opacity

  useEffect(() => {
    const interval = setInterval(() => {
      // Mengurangi opacity sebelum mengganti gambar
      setOpacity(0);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageSrc.length);
        setOpacity(1); // Mengembalikan opacity setelah gambar berganti
      }, 300); // Durasi transisi sesuai dengan durasi setInterval
    }, 5000);

    return () => clearInterval(interval);
  }, [imageSrc.length]);

  return (
    <header>
      <Navbar />

      {/* Bagian Background dengan transisi opacity */}
      <div
        className="relative flex flex-col justify-center items-center h-[500px] gap-5 bg-cover bg-center text-basic_white"
        style={{
          backgroundImage: `url(${imageSrc[currentImage]})`,
          transition: 'opacity 0.5s ease-in-out', // Transisi opacity
          opacity: opacity, // Menetapkan opacity
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 inline-flex bg-secondary text-white px-4 py-2 rounded-lg">
          <h3 className="text-xl ">Selamat Datang di Lanafa Temani</h3>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold">
            Promosi Pariwisata Kreatif dengan Konten Berkualitas
          </h2>
        </div>

        <div className="relative z-10 w-[600px] text-center">
          <blockquote className="text-base">
            Jasa iklan dan pembuatan konten kreatif untuk pariwisata. Promosikan
            destinasi unik, budaya otentik, dan pengalaman tak terlupakan.
            Ciptakan dampak positif dan lestarikan keindahan alam.
          </blockquote>
        </div>

        <div className="relative z-10">
          <ButtonIcon
            className="inline-flex flex-row-reverse items-center bg-primary py-2 text-basic_white rounded-full px-3"
            text="Hubungi Kami"
            icon="arrow-forward"
          />
        </div>
      </div>
    </header>
  );
};
