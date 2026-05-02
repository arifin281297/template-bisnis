import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

const data = [
  {
    name: "Ahmad Zainul",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    github: "#",
    linkedin: "#",
    category: "Developer",
  },
  {
    name: "Esti Pertiwi",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    github: "#",
    linkedin: "#",
    category: "Designer",
  },
  {
    name: "Keifano Arifin",
    role: "Backend Engineer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    github: "#",
    linkedin: "#",
    category: "Developer",
  },
  {
    name: "Meria",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    github: "#",
    linkedin: "#",
    category: "Manager",
  },
];

const categories = ["All", "Developer", "Designer", "Manager"];

export default function TeamPremium() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? data
      : data.filter((d) => d.category === filter);

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white dark:bg-gray-900 z-10">

      {/* 🌈 Animated Background */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute -z-10 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-150px] right-[-150px] animate-pulse"></div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Our <span className="text-blue-500">Team</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Creative people behind the product
          </p>
        </div>

        {/* FILTER */}
        <div className="flex z-20 justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm transition border
              ${
                filter === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/30"
                  : "text-gray-500 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {filtered.map((item, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={1500}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-[320px] rounded-2xl overflow-hidden shadow-xl"
              >

                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden transition duration-500 group-hover:rotate-y-180">

                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm opacity-80">{item.role}</p>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-gray-900 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">

                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{item.role}</p>

                  <div className="flex gap-4">

                    <a
                      href={item.github}
                      className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
                    >
                      <FaGithub size={18} />
                    </a>

                    <a
                      href={item.linkedin}
                      className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
                    >
                      <FaLinkedin size={18} />
                    </a>

                  </div>

                </div>

              </motion.div>
            </Tilt>
          ))}

        </div>
      </div>
    </section>
  );
}