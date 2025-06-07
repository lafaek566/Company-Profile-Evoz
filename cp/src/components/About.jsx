import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaVideo } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const roles = [
    {
      title: "Programmer Fullstack",
      description:
        "Ahli dalam pengembangan aplikasi web dan mobile dengan teknologi frontend dan backend modern.",
      details: [
        "Pembuatan website dan aplikasi responsif",
        "Pengembangan sistem informasi dan integrasi API",
        "Pengembangan frontend menggunakan React, Vue, atau framework modern lainnya",
        "Pengembangan backend menggunakan Node.js, Express, atau teknologi backend lain",
        "Pengelolaan dan integrasi database seperti MySQL, MongoDB, PostgreSQL",
        "Deployment aplikasi ke server atau cloud (AWS, Vercel, Netlify, dll)",
      ],
      color: "text-blue-400",
      icon: <FaCode className="text-4xl text-blue-400" />,
    },
    {
      title: "Designer UI/UX",
      description:
        "Spesialis dalam merancang antarmuka pengguna yang intuitif dan pengalaman pengguna yang optimal.",
      details: [
        "Desain visual profesional untuk branding, poster, dan sosial media",
        "Membuat wireframe dan prototype interaktif untuk aplikasi dan website",
        "Optimasi pengalaman pengguna (UX) agar mudah dan menyenangkan digunakan",
        "Pemilihan warna, tipografi, dan layout yang sesuai dengan identitas brand",
      ],
      color: "text-pink-400",
      icon: <FaPaintBrush className="text-4xl text-pink-400" />,
    },
    {
      title: "Videografer",
      description:
        "Membuat video berkualitas untuk berbagai kebutuhan promosi dan dokumentasi dengan teknik pengambilan gambar profesional.",
      details: [
        "Produksi video kreatif untuk promosi, edukasi, maupun konten sosial media",
        "Editing dan post-production dengan software profesional seperti Adobe Premiere, After Effects",
        "Pembuatan template digital siap pakai untuk mempercepat proses produksi video",
        "Pengambilan gambar dengan teknik sinematografi dan storytelling yang menarik",
      ],
      color: "text-orange-400",
      icon: <FaVideo className="text-4xl text-orange-400" />,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-black px-4 py-16 flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tentang Kami
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mb-6 max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Evoz Solution adalah mitra digital Anda dalam menghadirkan solusi
        lengkap dan profesional. Kami menyediakan layanan Full Stack Developer,
        pemrograman custom, desain grafis, serta jasa content creator video
        untuk memenuhi kebutuhan digital Anda dari hulu ke hilir — baik untuk
        individu, UMKM, startup, maupun perusahaan besar.
      </motion.p>

      <motion.p
        className="text-center text-gray-300 mb-10 max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Kami adalah tim kreatif yang berdedikasi untuk memberikan solusi digital
        terbaik. Dengan keahlian di bidang pemrograman, desain, dan videografi,
        kami siap membantu mewujudkan ide-ide Anda menjadi kenyataan.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`${
              role.title === "Videografer"
                ? "bg-orange-900/20 border-orange-400"
                : "bg-white/5 border-gray-700"
            } backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center border hover:shadow-2xl hover:scale-105 transition-all`}
          >
            <div className="mb-4">{role.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {role.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{role.description}</p>

            <button
              onClick={() => toggleItem(index)}
              className="flex items-center text-sm text-orange-400 hover:underline focus:outline-none"
              aria-expanded={openIndex === index}
              aria-controls={`details-${index}`}
            >
              {openIndex === index ? (
                <>
                  Tutup Detail <FiChevronUp className="ml-1" />
                </>
              ) : (
                <>
                  Lihat Detail <FiChevronDown className="ml-1" />
                </>
              )}
            </button>

            {openIndex === index && (
              <ul
                id={`details-${index}`}
                className="mt-2 text-gray-400 text-left text-sm list-disc list-inside space-y-1 max-w-xs mx-auto px-4 sm:px-6 overflow-auto max-h-48"
              >
                {role.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
