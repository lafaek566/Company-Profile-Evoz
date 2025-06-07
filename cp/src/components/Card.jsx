import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Paintbrush2, Clapperboard } from "lucide-react";

// Images import
import dbImage from "../assets/db.jpg";
import cpHomeImage from "../assets/cp home.jpg";
import homeImage from "../assets/home.jpg";
import homecb from "../assets/cb.jpg";
import db1 from "../assets/1.png";
import db2 from "../assets/2.png";
import db3 from "../assets/3.png";
import db4 from "../assets/4.png";
import v1 from "../assets/v1.jpg";
import v2 from "../assets/v2.jpg";
import v3 from "../assets/v3.jpg";
import v4 from "../assets/v4.jpg";

// Category Icon component with animation
const getCategoryIcon = (category, isActive) => {
  const baseClasses = "w-6 h-6 transition-colors duration-300";
  switch (category) {
    case "Programming":
      return (
        <Code2
          className={`${baseClasses} ${
            isActive ? "text-blue-600" : "text-blue-400"
          }`}
        />
      );
    case "Design Grafis":
      return (
        <Paintbrush2
          className={`${baseClasses} ${
            isActive ? "text-pink-600" : "text-pink-400"
          }`}
        />
      );
    case "Video Maker":
      return (
        <Clapperboard
          className={`${baseClasses} ${
            isActive ? "text-yellow-600" : "text-yellow-400"
          }`}
        />
      );
    default:
      return null;
  }
};

// Detail Card component with hover zoom effect
const DetailCard = ({ detail }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow p-3 text-xs text-gray-800 dark:text-white flex flex-col items-center cursor-pointer"
    onClick={() =>
      detail.detailLink && window.open(detail.detailLink, "_blank")
    }
    title="Klik untuk lihat detail proyek"
  >
    <img
      src={detail.image}
      alt="detail"
      className="w-full aspect-[4/3] object-cover rounded mb-2"
      loading="lazy"
    />
    <p className="text-center">{detail.description}</p>
  </motion.div>
);

// Portfolio card with interactive hover, shadow, and scale
const PortfolioCard = ({
  title,
  description,
  image,
  tags = [],
  demoLink,
  codeLink,
  category,
  details = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto cursor-pointer"
    >
      <div className="w-full aspect-[4/3] overflow-hidden rounded-t-xl">
        {image.includes("youtu") ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${image.split("/").pop()}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        )}
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: isExpanded ? 360 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {getCategoryIcon(category, isExpanded)}
          </motion.div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100 text-xs px-3 py-1 rounded-full cursor-default select-none"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3 mt-4 flex-wrap">
          {demoLink && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-xs text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow"
            >
              Demo
            </motion.a>
          )}
          {codeLink && (
            <motion.a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-xs text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg shadow"
            >
              Code
            </motion.a>
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-xs font-semibold text-blue-500 hover:underline focus:outline-none"
          aria-expanded={isExpanded}
          aria-controls="details-section"
        >
          {isExpanded ? "Sembunyikan Detail" : "Lihat Detail"}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              id="details-section"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {details.map((detail, idx) => (
                <DetailCard key={idx} detail={detail} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Main Portfolio component
export default function Portfolio() {
  const projects = [
    {
      title: "Full Stack Developer",
      description: "Sistem pemesanan Sesuai Keinginanmu.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: [
        "JavaScript",
        "Java",
        "React",
        "Node.js",
        "Express.js",
        "PHP",
        "Python",
        "MySQL",
        "PostgreSQL",
        "SQL Server",
      ],
      demoLink: null,
      codeLink: "https://github.com/lafaek566",
      category: "Programming",
      details: [
        {
          image: homecb,
          description: "Halaman detail dan sistem booking properti",
          detailLink: "https://cinemaindo.cam/",
        },
        {
          image: dbImage,
          description: "Halaman login & register user yang responsif",
          detailLink: "https://github.com/lafaek566/fullstack-BarberShop",
        },
        {
          image: cpHomeImage,
          description: "Integrasi MySQL dengan backend Express.js",
          detailLink: "https://github.com/lafaek566/e-commerce",
        },
        {
          image: homeImage,
          description: "Fitur pencarian dan filter properti real-time",
          detailLink: "https://github.com/lafaek566/Car",
        },
      ],
    },
    {
      title: "Designer",
      description: "Poster digital Project",
      image:
        "https://i.pinimg.com/736x/4b/b7/f8/4bb7f81def271b7e9cefafdc81687728.jpg",
      tags: [
        "Illustrator",
        "Graphic Design",
        "Poster",
        "UX",
        "Canva",
        "Adobe Photoshop",
        "Corel Draw",
        "Blender",
      ],
      demoLink: null,
      codeLink: null,
      category: "Design Grafis",
      details: [
        {
          image: db1,
          description: "Menggunakan Adobe Illustrator",
          detailLink: db1,
        },
        {
          image: db2,
          description: "Pemilihan warna yang menarik perhatian",
          detailLink: db2,
        },
        {
          image: db3,
          description: "Desain tipografi yang kuat dan konsisten",
          detailLink: db3,
        },
        {
          image: db4,
          description: "Komposisi poster yang seimbang & profesional",
          detailLink: db4,
        },
      ],
    },
    {
      title: "Video Promosi Produk",
      description:
        "Video pendek 30 detik untuk promosi produk di TikTok, Instagram, YouTube, dan Facebook",
      image:
        "https://i.pinimg.com/736x/d9/5b/69/d95b69ff6e716b718d68759b0c4c82a1.jpg",
      tags: ["Adobe Premiere", "After Effects", "Canva", "Filmora"],
      demoLink: null,
      codeLink: null,
      category: "Video Maker",
      details: [
        {
          image: v1,
          description: "Editing video dengan transisi halus",
          detailLink:
            "https://www.tiktok.com/@suarasoares/video/7505358372309437714",
        },
        {
          image: v2,
          description: "Fokus produk kosmetik & pencahayaan",
          detailLink:
            "https://www.tiktok.com/@suarasoares/video/7501663490139049224",
        },
        {
          image: v3,
          description: "Durasi efektif untuk kampanye sosial media",
          detailLink:
            "https://www.tiktok.com/@suarasoares/video/7461220448685100306",
        },
        {
          image: v4,
          description: "Musik latar yang mendukung visual promosi",
          detailLink:
            "https://www.tiktok.com/@suarasoares/video/7455885733253991698",
        },
      ],
    },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Layanan Kami
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
