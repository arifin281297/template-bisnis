import React from 'react'
import { Code2, Palette, Link } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 px-6" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mb-12">
            We provide end-to-end digital solutions for your business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* WEB DEV */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 
            border border-white/10 dark:border-white/10 backdrop-blur-md
            transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">

              <Code2 className="w-10 h-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition" />

              <h3 className="text-xl font-semibold mb-2">
                Web Development
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                Fast & scalable web apps using React, Node.js, and modern tech.
              </p>
            </div>

            

            {/* UI UX */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 
            border border-white/10 dark:border-white/10 backdrop-blur-md
            transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">

              <Palette className="w-10 h-10 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition" />

              <h3 className="text-xl font-semibold mb-2">
                UI/UX Design
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                Clean, modern, and user-friendly interface design.
              </p>
            </div>

            {/* INTEGRATION */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 
            border border-white/10 dark:border-white/10 backdrop-blur-md
            transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">

              <Link className="w-10 h-10 text-green-500 mx-auto mb-4 group-hover:scale-110 transition" />

              <h3 className="text-xl font-semibold mb-2">
                System Integration
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                API integration, backend system, and enterprise solutions.
              </p>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Services
