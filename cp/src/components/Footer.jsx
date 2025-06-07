import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-6 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
        {/* About Section */}
        <div className="max-w-full md:max-w-sm text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold mb-1 text-white">
            About Us
          </h2>
          <p className="text-gray-400 leading-relaxed text-xs md:text-sm max-w-xs mx-auto md:mx-0">
            Evoz Solution delivers top-tier tech solutions with quality,
            innovation, and client satisfaction at heart.
          </p>
        </div>

        {/* Address Section */}
        <div className="max-w-full md:max-w-sm text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold mb-1 text-white">
            Our Address
          </h2>
          <address className="not-italic text-gray-400 text-xs md:text-sm max-w-xs mx-auto md:mx-0 leading-snug">
            Sarijadi, Kota Bandung 11530
            <br />
            indonesia
            <br />
          </address>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-xs select-none">
        &copy; {new Date().getFullYear()} Evoz Solution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
