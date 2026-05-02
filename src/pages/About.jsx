import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Counter from "../components/Counter";
import { div } from "framer-motion/client";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="relative py-24 px-6 bg-white dark:bg-gray-900 overflow-hidden">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-150px] right-[-150px]"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div data-aos="fade-right" className="relative">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="about"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />

          {/* floating card */}
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500">Since</p>
            <p className="text-lg font-bold">2022</p>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">

          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
            About Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            We Build Digital Products
            <span className="text-blue-500"> That Matter</span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            We are a creative digital studio focused on building modern websites,
            scalable applications, and high-performance UI/UX experiences.
            Our goal is to turn ideas into powerful digital products.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mt-8">

            <Counter end={5} label="Years" color="blue" />
            <Counter end={120} label="Projects" color="purple" />
            <Counter end={80} label="Clients" color="pink" />

          </div>

          {/* SKILLS */}
          <div className="mt-10 space-y-4">

            <Skill label="Frontend (React)" value={90} />
            <Skill label="Backend (Node/Golang)" value={85} />
            <Skill label="UI/UX Design" value={80} />

          </div>

        </div>

      </div>
      </section>
      <CTASection />
      <Footer />
    </div>

    // CTA
  );
}

function Skill({ label, value, color = "blue" }) {
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;

          let start = 0;
          const duration = 1200;
          const startTime = performance.now();

          const animate = (time) => {
            const elapsed = time - startTime;
            const percent = Math.min((elapsed / duration) * value, value);

            setProgress(percent);
            setCount(Math.floor(percent));

            if (elapsed < duration) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value]);

  const colorMap = {
    blue: "from-blue-500 to-cyan-400 shadow-blue-500/40",
    purple: "from-purple-500 to-pink-500 shadow-purple-500/40",
    green: "from-green-500 to-emerald-400 shadow-green-500/40",
  };

  return (
    <div ref={ref} className="mb-6">

      {/* LABEL */}
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-200">
          {label}
        </span>

        <span className="font-bold text-gray-900 dark:text-white">
          {count}%
        </span>
      </div>

      {/* BAR BACKGROUND */}
      <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">

        {/* GLOW LAYER */}
        <div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorMap[color]} blur-sm opacity-40`}
          style={{ width: `${progress}%` }}
        />

        {/* MAIN BAR */}
        <div
          className={`h-full bg-gradient-to-r ${colorMap[color]} rounded-full transition-all duration-300 shadow-lg`}
          style={{ width: `${progress}%` }}
        />

        {/* LIGHT SHINE EFFECT */}
        <div className="absolute top-0 left-0 h-full w-20 bg-white/20 skew-x-[-20deg] animate-pulse" />

      </div>
    </div>
  );
}

export default About;