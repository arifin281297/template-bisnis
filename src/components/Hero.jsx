import React from 'react'
import Counter from './Counter'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">

        {/* BACKGROUND GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/30 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left">

            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
              Welcome to Our Company
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              We Build Modern Digital
              <span className="text-blue-500"> Solutions</span>
            </h1>

            <p className="mt-6 text-gray-600 dark:text-gray-300 text-base md:text-lg">
              We are a technology company focused on building scalable web applications,
              modern UI/UX design, and high-performance digital products.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap">

              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition">
                Get Started
              </button>

              <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Learn More
              </button>

            </div>

            {/* SMALL FLOAT CARDS */}
            <div className="mt-10 grid grid-cols-3 gap-3">
                <Counter end={5} label="Years" color="blue" />
                <Counter end={100} label="Projects" color="purple" />
                <Counter end={50} label="Clients" color="pink" />
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="hero"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />

            {/* floating card */}
            <div className="absolute bottom-3 left-3 md:-bottom-6 md:-left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500">Live Project</p>
              <p className="font-bold">Modern Dashboard UI</p>
            </div>

            {/* glow badge */}
            <div className="absolute top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-xs shadow-lg animate-pulse">
              🚀 Active
            </div>

          </div>

        </div>

      </section>
  )
}

export default Hero
