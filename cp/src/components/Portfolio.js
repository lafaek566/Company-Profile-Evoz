import React from "react";
import PortfolioCard from "./Card";

export default function Portfolio() {
  const projects = [
    {
      title: "Web App Booking",
      description: "Sistem pemesanan properti dengan React & Express.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MySQL"],
      demoLink: "https://example.com/demo-booking",
      codeLink: "https://github.com/username/booking-app",
      category: "Programming",
    },
    {
      title: "Design Poster Event",
      description:
        "Poster digital untuk promosi event kampus dengan Adobe Illustrator.",
      image:
        "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=800&q=80",
      tags: ["Illustrator", "Graphic Design", "Poster"],
      demoLink: "https://example.com/poster-event",
      codeLink: null,
      category: "Design Grafis",
    },
    {
      title: "Video Promosi Produk",
      description:
        "Video pendek berdurasi 30 detik untuk promosi produk kosmetik.",
      image:
        "https://images.unsplash.com/photo-1581093588401-61c5c2c2f090?auto=format&fit=crop&w=800&q=80",
      tags: ["Adobe Premiere", "Editing", "Marketing"],
      demoLink: "https://youtube.com/example-video",
      codeLink: null,
      category: "Video Maker",
    },
  ];

  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Portfolio
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
