import React from 'react'

const CTASection = () => {
  return (
    <section className="py-20 px-6 text-center relative" data-aos="fade-up" data-aos-delay="300">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"></div>

            <div className="relative z-10">

                <h2 className="text-3xl font-bold mb-4">
                Ready to start your project?
                </h2>

                <p className="text-gray-500 dark:text-gray-400 mb-6">
                Let’s build something amazing together.
                </p>

                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition">
                Contact Us
                </button>

            </div>

    </section>
  )
}

export default CTASection
