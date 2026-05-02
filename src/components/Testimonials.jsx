import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    name: "Andi Pratama",
    role: "CEO Startup Tech",
    img: "https://i.pravatar.cc/100?img=12",
    message:
      "Website sangat cepat dan modern. Hasilnya benar-benar sesuai ekspektasi bisnis kami.",
  },
  {
    name: "Siti Rahma",
    role: "Business Owner",
    img: "https://i.pravatar.cc/100?img=32",
    message:
      "UI/UX clean banget, tim sangat responsif dan profesional.",
  },
  {
    name: "Michael Tan",
    role: "Product Manager",
    img: "https://i.pravatar.cc/100?img=56",
    message:
      "Backend stabil, scalable, dan sangat rapi. Sangat direkomendasikan.",
  },
  {
    name: "Siti Rahma",
    role: "Business Owner",
    img: "https://i.pravatar.cc/100?img=32",
    message:
      "UI/UX clean banget, tim sangat responsif dan profesional.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + data.length) % data.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % data.length);
  };

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-red-800/20 blur-[120px] rounded-full top-[-150px] left-[-150px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-yellow-500/20 blur-[120px] rounded-full bottom-[-150px] right-[-150px]"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Client <span className="text-blue-500">Testimonials</span>
        </h2>

        {/* SLIDER CARD */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-xl"
            >

              {/* AVATAR */}
              <img
                src={data[index].img}
                className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-blue-500"
              />

              {/* MESSAGE */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{data[index].message}"
              </p>

              {/* STAR */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* NAME */}
              <h3 className="font-bold">{data[index].name}</h3>
              <p className="text-sm text-gray-500">{data[index].role}</p>

            </motion.div>
          </AnimatePresence>

          {/* NAV BUTTONS */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronRight />
          </button>

        </div>

        {/* DOT INDICATOR */}
        <div className="flex justify-center gap-2 mt-6">
          {data.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition ${
                i === index ? "bg-blue-500 w-6" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}