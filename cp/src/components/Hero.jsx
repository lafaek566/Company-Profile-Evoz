import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import Model3D from "./Model3D";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const handleClick = () => {
    setShowText(true);
    setTimeout(() => setShowText(false), 3000);
  };

  return (
    <div
      id="hero"
      className="relative w-full min-h-[80vh] bg-black overflow-hidden text-white flex items-center justify-center px-6"
    >
      <div
        className="z-10 grid md:grid-cols-2 gap-10 items-center max-w-7xl w-full"
        style={{ minHeight: "600px" }}
      >
        {/* Deskripsi */}
        <div
          className="space-y-6 mt-20 max-w-lg mx-auto md:mx-0"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
            Selamat Datang di{" "}
            <span className="text-blue-500">Evoz Solution</span>
          </h1>
          <p className="text-lg text-gray-300">
            Kami menghadirkan solusi teknologi digital yang inovatif untuk
            kebutuhan bisnis dan brand Anda.
          </p>
          <p className="text-md text-gray-400">
            Mulai dari pengembangan aplikasi, website interaktif, design UX,
            video editing hingga animasi 3D profesional.
          </p>
          <Link
            to="card"
            smooth={true}
            duration={500}
            className="inline-block mt-3"
          >
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium text-white shadow-lg">
              Hubungi Kami
            </button>
          </Link>
        </div>

        {/* Model 3D dengan Klik */}
        <div
          className="w-full h-[250px] sm:h-[300px] md:h-[500px] lg:h-[600px] relative cursor-pointer"
          data-aos="fade-left"
          onClick={handleClick}
        >
          <Model3D />
          {showText && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg shadow-lg text-lg font-semibold animate-fade-in">
              Hi.. apa yang bisa dibantu?
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
