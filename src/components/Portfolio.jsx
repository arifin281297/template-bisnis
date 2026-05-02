import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

function PortfolioAwwards() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const projects = [
    {
        title: "AI Dashboard",
        desc: "Advanced analytics with realtime AI insights",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        tag: "Web App",
        category: "Web",
    },
    {
        title: "E-Commerce Luxury UI",
        desc: "Premium shopping experience",
        img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
        tag: "UI/UX",
        category: "UI",
    },
    {
        title: "Finance Mobile App",
        desc: "Banking & finance system UI concept",
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        tag: "Mobile",
        category: "Mobile",
    },
  ];

  const filtered =
  filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px]"></div>
      <div className="absolute -z-10 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-150px] right-[-150px]"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Selected <span className="text-blue-500">Works</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Premium digital experiences & UI systems
          </p>
        </motion.div>

        {/* <div className="flex justify-center gap-3 mb-10 flex-wrap"> */}
        <div className="relative z-20 flex justify-center gap-3 mb-10 flex-wrap">

            {["All", "Web", "UI", "Mobile"].map((cat) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((item, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={1500}
            >

              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelected(item)}
                className="cursor-pointer rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl hover:shadow-blue-500/20 transition"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.img}
                    className="h-64 w-full object-cover"
                  />

                  {/* overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                  <span className="absolute top-4 left-4 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>

              </motion.div>

            </Tilt>
          ))}

        </div>
      </div>

      {/* MODAL DETAIL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-900 max-w-2xl w-full rounded-2xl overflow-hidden"
            >

              <img
                src={selected.img}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold mb-2">
                  {selected.title}
                </h2>

                <p className="text-gray-500 dark:text-gray-400">
                  {selected.desc}
                </p>

                {/* <button
                  onClick={() => setSelected(null)}
                  className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Close
                </button> */}

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default PortfolioAwwards;